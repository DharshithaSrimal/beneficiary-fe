import { Autocomplete, Button, Grid, TextField } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import { useEffect, useState } from 'react';
import Header from '../../components/header';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { StaticDatePicker } from '@mui/x-date-pickers';
import './styles.css';

const columns = [
    { field: 'vaccine', headerName: 'Vaccine', flex: 1 },
    { field: 'center', headerName: 'Vaccine Center', flex: 3 },
    { field: 'date', headerName: 'Date', flex: 2 },
    { field: 'status', headerName: 'Status', flex: 1 }
];

const AdminAppointments = () => {
    const [appointments, setAppointments] = useState([]);
    const [todayAppointments, setTodayAppointments] = useState([]);
    const [vaccines, setVaccines] = useState([]);
    const [EPINumbers, setEPINumbers] = useState([]);
    const [date, setDate] = useState(new Date());

    useEffect(() => {
        setAppointments([{ id: 1, vaccine: 'V1', center: 'Nawala', date: '2020-05-02', status: 'Taken' },
        { id: 2, vaccine: 'V2', center: 'Kosgama', date: '2021-05-05', status: 'Taken' }]);
        setTodayAppointments([{ id: 1, vaccine: 'VA', center: 'Nawala', date: '2020-05-02', status: 'Taken' },
        { id: 2, vaccine: 'VB', center: 'Kosgama', date: '2021-05-05', status: 'Taken' }]);
        setVaccines([{ title: 'V1' }, { title: 'V2' }, { title: 'V3' }]);
        setEPINumbers([{ title: '23434' }, { title: '234324234' }, { title: '2352535x' }]);
    }, []);

    return <div className='dashboard-container'>
        <Header />
        <div className='dashboard-wrapper'>
            <div className='content-wrapper'>
                <div className='common-head'>
                    <div className='detail-row'>
                        <div className='detail'>
                            <h4>Vaccine Center : </h4>
                            <Autocomplete
                                style={{ minWidth: '20vw' }}
                                id="vaccines"
                                size="small"
                                options={vaccines}
                                getOptionLabel={(option) => option.title}
                                defaultValue={vaccines.length > 0 ? vaccines[0] : null}
                                renderInput={(params) => (
                                    <TextField {...params} label="" placeholder="Vaccine Center" />
                                )}
                            />
                        </div>
                        <div className='detail right-aligned'>
                            <h4>Patient DOB : </h4>
                            <label>2021 December 08</label>
                        </div>
                    </div>
                </div>
            </div>
            <div className='content-section content-wrapper'>
                <h4>Pending Appointments</h4>
                <DataGrid
                    rows={appointments}
                    columns={columns}
                    autoHeight={true}
                />
                <h4>Today's Appointments</h4>
                <DataGrid
                    rows={todayAppointments}
                    columns={columns}
                    autoHeight={true}
                />
                <h4>Schedule an Appointment</h4>
                <div className='new-appointment'>
                    <Grid container spacing={2} className='appointment-container'>
                        <Grid item xs={6}>
                            <label>EPI Number</label>
                            <Autocomplete
                                id="epi_number"
                                size="small"
                                options={EPINumbers}
                                getOptionLabel={(option) => option.title}
                                defaultValue={EPINumbers.length > 0 ? EPINumbers[0] : null}
                                renderInput={(params) => (
                                    <TextField {...params} label="" placeholder="EPI Number" />
                                )}
                            />
                            <label>Vaccine</label>
                            <Autocomplete
                                id="vaccines"
                                size="small"
                                options={vaccines}
                                getOptionLabel={(option) => option.title}
                                defaultValue={vaccines.length > 0 ? vaccines[0] : null}
                                renderInput={(params) => (
                                    <TextField {...params} label="" placeholder="Vaccine" />
                                )}
                            />
                            <Button variant="contained" color='primary' style={{ width: '100%', marginTop: 20 }}>Schedule Appointment</Button>
                        </Grid>
                        <Grid item xs={6} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <LocalizationProvider dateAdapter={AdapterDateFns}>
                                <StaticDatePicker
                                    displayStaticWrapperAs="desktop"
                                    openTo="year"
                                    value={date}
                                    onChange={(newValue) => {
                                        setDate(newValue);
                                    }}
                                    renderInput={(params) => <TextField {...params} />}
                                />
                            </LocalizationProvider>
                        </Grid>
                    </Grid>
                </div>
            </div>
        </div>
    </div>
}

export default AdminAppointments;