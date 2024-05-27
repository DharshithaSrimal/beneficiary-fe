import { Autocomplete, Button, Grid, TextField } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import { useEffect, useState } from 'react';
import Header from '../../components/header';
import Map from '../../components/map';
import './styles.css';

const columns = [
    { field: 'vaccine', headerName: 'Vaccine', flex: 1 },
    { field: 'center', headerName: 'Vaccine Center', flex: 3 },
    { field: 'date', headerName: 'Date', flex: 2 },
    { field: 'status', headerName: 'Status', flex: 1 }
];

const Appointments = () => {
    const [appointments, setAppointmenrs] = useState([]);
    const [vaccines, setVaccines] = useState([]);
    const [vaccineCenters, setVaccineCenters] = useState([]);
    const [latLng, setLatLng] = useState([6.9271,79.94670]);

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(function (position) {
            setLatLng([position.coords.latitude,position.coords.longitude]);
        });
        setAppointmenrs([{ id: 1, vaccine: 'V1', center: 'Nawala', date: '2020-05-02', status: 'Taken' },
        { id: 2, vaccine: 'V2', center: 'Kosgama', date: '2021-05-05', status: 'Taken' }]);
        setVaccines([{ title: 'V1' }, { title: 'V2' }, { title: 'V3' }]);
        setVaccineCenters([{ title: 'Colombo' }, { title: 'Gampaha' }, { title: 'Kithulgala' }]);
    }, []);

    return <div className='dashboard-container'>
        <div className='dashboard-wrapper'>
            <Header />
            <div className='content-wrapper'>
                <div className='common-head'>
                    <div className='detail-row'>
                        <div className='detail'>
                            <h4>Patient Name : </h4>
                            <label>Name of the patient</label>
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
                <h4>Add New Appointment</h4>
                <div className='new-appointment'>
                    <Grid container spacing={2} className='appointment-container'>
                        <Grid item xs={3}>
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
                            <label>Vaccine Centers</label>
                            <Autocomplete
                                id="vaccine_centers"
                                size="small"
                                options={vaccineCenters}
                                getOptionLabel={(option) => option.title}
                                defaultValue={vaccineCenters.length > 0 ? vaccineCenters[0] : null}
                                renderInput={(params) => (
                                    <TextField {...params} label="" placeholder="Vaccine" />
                                )}
                            />
                        </Grid>
                        <Grid item xs={3}>
                            <label>Date</label>
                            <TextField
                                id="date"
                                label=""
                                type="date"
                                size='small'
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                style={{ width: '100%' }}
                            />
                            <label>&nbsp;</label>
                            <Button variant="outlined" color='primary' style={{ width: '100%' }}>Find Closest</Button>
                        </Grid>
                        <Grid item xs={4}>
                            <Map position={latLng} />
                        </Grid>
                        <Grid item xs={2} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <Button variant="contained" color='primary' style={{ width: '100%' }}>Check Availability</Button>
                        </Grid>
                    </Grid>
                </div>
            </div>
        </div>
    </div>
}

export default Appointments;