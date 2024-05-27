import { Grid, Button } from '@mui/material';
import { useState } from 'react';
import ChangePasswordForm from './changePassword';

const Beneficiary = () => {
    const [pwOpen, setPwOpen] = useState(false);
    const beneficiary = JSON.parse(localStorage.getItem('dhis_user'));
    return <>
        <h5>Beneficiary's Details</h5>
        <div style={{ display: 'flex' }}>
            <div style={{ flex: 1 }}></div>
            <div style={{ flex: 1 }}>
                <Grid container spacing={2} className='detail-row'>
                    <Grid item xs={4}>
                        <label style={{ fontSize: '0.8em' }}>First Name:</label>
                    </Grid>
                    <Grid item xs={8}>
                        <label style={{ fontSize: '0.9em', fontWeight: 'bold', color: '#344966' }}>{beneficiary.firstName}</label>
                    </Grid>
                </Grid>
                <Grid container spacing={2} className='detail-row'>
                    <Grid item xs={4}>
                        <label style={{ fontSize: '0.8em' }}>Last Name</label>
                    </Grid>
                    <Grid item xs={8}>
                        <label style={{ fontSize: '0.9em', fontWeight: 'bold', color: '#344966' }}>{beneficiary.lastName}</label>
                    </Grid>
                </Grid>
                <Grid container spacing={2} className='detail-row'>
                    <Grid item xs={4}>
                        <label style={{ fontSize: '0.8em' }}>Email</label>
                    </Grid>
                    <Grid item xs={8}>
                        <label style={{ fontSize: '0.9em', fontWeight: 'bold', color: '#344966' }}>{beneficiary.email}</label>
                    </Grid>
                </Grid>
                <Grid container spacing={2} className='detail-row'>
                    <Grid item xs={4}>
                        <label style={{ fontSize: '0.8em' }}>Password</label>
                    </Grid>
                    <Grid item xs={8}>
                        <Button variant='outlined' size='small' style={{ color: '#FE6D73', borderColor: '#FE6D73', fontSize: '0.6em' }} onClick={() => setPwOpen(true)}>Change Password</Button>
                    </Grid>
                </Grid>
                <ChangePasswordForm open={pwOpen} setOpen={setPwOpen} />
                <Button onClick={() => {
                    document.cookie = `dhis_token=;`;
                    localStorage.removeItem('dhis_user');
                    window.location.reload();
                }}>Logout</Button>
            </div>
            <div style={{ flex: 1 }}></div>
        </div>
    </>
}

export default Beneficiary;