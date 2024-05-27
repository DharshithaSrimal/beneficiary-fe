import { Button, Grid, TextField } from '@mui/material';
import * as React from 'react';
import Header from '../../components/header';
import './styles.css';

const Settings = () => {
    return <div className='dashboard-container'>
        <div className='dashboard-wrapper'>
            <Header />
            <div className='content-wrapper'>
                <h2 className='setting-title'>Settings</h2>
                <Grid container spacing={2} className='centered'>
                    <Grid item xs={6}>
                        <div className='centered setting-column'>
                            <h4>Change Password</h4>
                            <label className='left-text'>Current password</label>
                            <TextField size='small' type='password' />
                            <label className='left-text'>New password</label>
                            <TextField size='small' type='password' />
                            <label className='left-text'>Re-type new password</label>
                            <TextField size='small' type='password' />
                            <Button>Reset Password</Button>
                        </div>
                    </Grid>
                    <Grid item xs={6}>
                        <div className='centered'>
                            <Button>Refresh Data</Button>
                        </div>
                    </Grid>
                </Grid>
            </div>
        </div>
    </div>
}

export default Settings;