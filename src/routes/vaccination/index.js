import { Grid, Button } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import Banner from '../../components/banner';
import Header from '../../components/header';
import './styles.css';

const columns = [
    { field: 'vaccine', headerName: 'Vaccine', flex: 1 },
    {
        field: 'center', headerName: 'Vaccine Center', flex: 2, renderCell: (params) => (
            <div>
                {params.value ?
                    params.value : <Button
                        variant="contained"
                        size="small"
                    >
                        Schedule
                    </Button>}
            </div>
        ),
    },
    { field: 'date', headerName: 'Date', flex: 2 },
    { field: 'status', headerName: 'Status', flex: 1 },
    {
        field: 'certificate', headerName: 'Certificate', flex: 1, renderCell: (params) => (
            <div>
                {params.value ?
                    (params.value === 'expired' ? 'Expired' : <a href={params.value} download="certificate">
                        <Button
                            variant="contained"
                            size="small"
                        >
                            Download
                        </Button>
                    </a>) : 'N/A'}
            </div>
        ),
    },
];

const rows = [
    { id: 1, vaccine: 'V1', center: 'Nawala', date: '2020-05-02', status: 'Taken', certificate: 'expired' },
    { id: 2, vaccine: 'V2', center: 'Kosgama', date: '2021-05-05', status: 'Appointment Confirmed', certificate: 'http://www.africau.edu/images/default/sample.pdf' },
    { id: 3, vaccine: 'V3', center: null, date: '2021-11-02', status: 'Pending', certificate: null },
];

const Vaccination = () => {
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
                    <Grid container spacing={2} className='centered'>
                        <Grid item xs={3}>
                            <Banner title='Total Vaccines Taken' value='5' />
                        </Grid>
                        <Grid item xs={1}>
                        </Grid>
                        <Grid item xs={3}>
                            <Banner title='Total Vaccines Pending' value='5' />
                        </Grid>
                        <Grid item xs={1}>
                        </Grid>
                        <Grid item xs={3}>
                            <Banner title='Appointments Pending' value='2' />
                        </Grid>
                    </Grid>
                </div>
                <h4>Vaccination Summary</h4>
            </div>
            <div className='content-section content-wrapper'>
                <DataGrid
                    rows={rows}
                    columns={columns}
                    pageSize={5}
                    rowsPerPageOptions={[5]}
                />
            </div>
        </div>
    </div>
}

export default Vaccination;