import { Alert, Autocomplete, CircularProgress, Grid, IconButton, Snackbar, Tooltip } from '@mui/material';
import { MobileDatePicker } from '@mui/x-date-pickers/MobileDatePicker';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { useEffect, useState } from 'react';
import Header from '../../components/header';
import { API_URL, getCookie, parsePatient } from '../../constants';
import './styles.css';
import MyLocationTwoToneIcon from '@mui/icons-material/MyLocationTwoTone';
import Map from '../../components/map';
import { PreviousAppointments } from './previous';
import OTPScreen from './otp';

const Appointments = () => {
    const [appointments, setAppointments] = useState([]);
    const [vaccines, setVaccines] = useState([]);
    const [vaccine, setVaccine] = useState(null);
    const [vaccineCenters, setVaccineCenters] = useState([]);
    const [vaccineCenter, setVaccineCenter] = useState(null);
    const [appointmentDate, setAppointmentDate] = useState(null);
    const [latLng, setLatLng] = useState([6.9271, 79.94670]);
    const [userRows, setUserRows] = useState([]);
    const [selectedUser, setSelectedUser] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [message,setMessage] = useState(null);
    const [otp,setOtp] = useState(null);
    const [appointmentId,setAppointmentId] = useState(null);

    const fetchUsers = async () => {
        fetch(await API_URL() + 'api/getPatients', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'x-token': getCookie()
            },
        })
            .then(res => res.json())
            .then(out => {
                if (out.data.patients && out.data.patients.length > 0) {
                    const patients = out.data.patients.map((data) => {
                        return parsePatient(JSON.parse(data.data))
                    });
                    setUserRows(patients);
                }
            })
            .catch(err => console.log("Error Catch", err))
    }

    const fetchMeta = async () => {
        fetch(await API_URL() + 'api/getAppointmentMeta', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'x-token': getCookie()
            },
        })
            .then(res => res.json())
            .then(out => {
                setVaccineCenters(out.data.vaccinationCenters.map((vc) => { return { value: vc.id, label: vc.name } }));
                setVaccines(out.data.vaccines.map((v) => { return { value: v.id, label: v.formName } }));
            })
            .catch(err => console.log("Error Catch", err))
    }

    const fetchAppointments = async () => {
        fetch(await API_URL() + `api/getAppointments?epi=${userRows[selectedUser].epi}&nic=${userRows[selectedUser].nic}&foolhuma=${userRows[selectedUser].foolhuma}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'x-token': getCookie()
            },
        })
            .then(res => res.json())
            .then(out => {
                setAppointments(out.data.appointments);
            })
            .catch(err => console.log("Error Catch", err))
    }

    const createAppointment = async () => {
        fetch(await API_URL() + 'api/addAppointment', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-token': getCookie()
            },
            body: JSON.stringify({
                epi: userRows[selectedUser].epi,
                nic: userRows[selectedUser].nic,
                foolhuma: userRows[selectedUser].foolhuma,
                date: appointmentDate ? appointmentDate.toDateString() : new Date().toDateString(),
                vaccine: vaccine,
                center: vaccineCenter
            })
        })
            .then(res => res.json())
            .then(out => {
                console.log("Appointment OUT", out);
                setIsLoading(false);
                setOtp(out.data.otp);
                setAppointmentId(out.data.out.id);
            })
            .catch(err => {
                console.log("Error Catch", err);
                setIsLoading(false);
                setMessage({status: 400, text: 'Appointment creation unsuccessful'})
            })
    }

    useEffect(() => {
        fetchMeta();
        fetchUsers();
    }, []);

    useEffect(() => {
        if (selectedUser !== null) {
            fetchAppointments();
        }
    }, [selectedUser]);

    const Row = ({ user, index }) => {
        return <div className={selectedUser === index ? 'appointment-row-selected' : 'appointment-row'}
            onClick={() => { if (selectedUser === index) { setSelectedUser(null) } else { setSelectedUser(index) } }}>
            <p className='light-font'>{user.nic} - {user.epi}</p>
            <p className='bold-font'>{user.name}</p>
        </div>
    }

    const Dropdown = ({ options, onChange = (e) => e, val = "", solo = false, text = "Add" }) => {
        return <Autocomplete
            options={options}
            getOptionLabel={(option) => option.label}
            id="disable-clearable"
            disableClearable
            freeSolo={solo}
            onChange={onChange}
            size='small'
            renderInput={(params) => (
                <div ref={params.InputProps.ref}>
                    <input type="text" {...params.inputProps}
                        style={{ width: '98%', margin: '1%', padding: '10px 5px', border: '1px solid #e5e7eb', borderRadius: 5 }}
                        placeholder={`⊕ ${text}`}
                        value={val}
                    />
                </div>
            )}
        />
    }

    const renderMap = () => <Map position={latLng} />

    return <div className='dashboard-container'>
        <div className='dashboard-wrapper'>
            <Header />
            <div className='appointment-body'>
                <Grid container spacing={2} style={{ justifyContent: 'center' }}>
                    <Grid item xs={12} md={5}>
                        <h5 className='appointment-header'>Enrollments</h5>
                        <div className='appointment-rows'>
                            {userRows.map((user, index) => <Row user={user} index={index} />)}
                        </div>
                    </Grid>

                    <Grid item xs={12} md={6}>
                        {selectedUser !== null ? <>
                            <h5 className='appointment-header'>Appointments</h5>
                            <Grid container spacing={2}>
                                <Grid item xs={6} md={6}>
                                    <label className='light-font'>Vaccine</label>
                                    <Dropdown options={vaccines} text='vaccine' val={vaccine} onChange={(e) => setVaccine(e.target.textContent)} />
                                </Grid>
                                <Grid item xs={6} md={6}>
                                    <label className='light-font'>Appointment Date</label>
                                    <LocalizationProvider dateAdapter={AdapterDateFns}>
                                        <MobileDatePicker
                                            label={false}
                                            size='small'
                                            onChange={setAppointmentDate}
                                            value={appointmentDate}
                                            minDate={new Date()}
                                            inputFormat="MM/dd/yyyy"
                                            renderInput={(params) => (
                                                <div ref={params.InputProps.ref}>
                                                    <input type="text" {...params.inputProps}
                                                        style={{ width: '98%', margin: '1%', padding: '10px 5px', border: '1px solid #e5e7eb', borderRadius: 5 }}
                                                        placeholder={`⊕ Appointment date`}
                                                    />
                                                </div>
                                            )} />
                                    </LocalizationProvider>
                                </Grid>
                                <Grid item xs={6} md={6}>
                                    {renderMap()}
                                </Grid>
                                <Grid item xs={6} md={6}>
                                    <label className='light-font'>Vaccination center</label>
                                    <div style={{ display: 'flex', width: '100%' }}>
                                        <div style={{ flex: 1 }}><Dropdown options={vaccineCenters} text='vaccination center' val={vaccineCenter} onChange={(e) => setVaccineCenter(e.target.textContent)} /></div>
                                        <Tooltip arrow title="Find nearest vaccination center">
                                            <IconButton style={{ marginLeft: 10 }} onClick={() => {
                                                navigator.geolocation.getCurrentPosition(function (position) {
                                                    setLatLng([position.coords.latitude, position.coords.longitude]);
                                                });
                                            }}>
                                                <MyLocationTwoToneIcon />
                                            </IconButton>
                                        </Tooltip>
                                    </div>
                                    <button size='small' className='btn' onClick={() => {
                                        setIsLoading(true);
                                        createAppointment();
                                    }}>
                                        {isLoading ? <CircularProgress size={20} /> : <p style={{ margin: 0, padding: 0 }}>Create appointment</p>}
                                    </button>
                                </Grid>
                            </Grid>
                            <PreviousAppointments rows={appointments} />
                        </>
                            : null}
                    </Grid>
                </Grid>
            </div>
        </div>
        <Snackbar open={message} autoHideDuration={3000} onClose={() => setMessage(null)}>
            <Alert onClose={() => setMessage(null)} severity={message && message.status === 200 ? "success" : "error"} sx={{ width: '100%' }}>
                {message ? message.text : ''}
            </Alert>
        </Snackbar>
        <OTPScreen open={otp} setOpen={setOtp} id={appointmentId} refresh={fetchAppointments} />
    </div>
}

export default Appointments;