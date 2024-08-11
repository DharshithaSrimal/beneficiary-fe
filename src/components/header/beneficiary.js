import { Grid, Button, Stack, Typography, Chip, Divider } from '@mui/material';
import { useState } from 'react';
import ChangePasswordForm from './changePassword';
import CancelIcon from '@mui/icons-material/Cancel';
import ModalClose from '@mui/joy/ModalClose';


const Beneficiary = () => {
    const [pwOpen, setPwOpen] = useState(false);
    const beneficiary = JSON.parse(localStorage.getItem('dhis_user'));

    const [expanded, setExpanded] = useState(false);
    const [expandedProfile, setExpandedProfile] = useState(false);

    const toggleDrawer = (action) => {
        setExpanded(action);
    }
    return <>
        <Stack
            direction="row"
            // divider={<Divider orientation="vertical" flexItem />}
            spacing={2}
            alignContent="center"
            alignItems="center"
            justifyContent="center"
            sx={{mt: 3, mb: 1}}
        >
            <Typography variant='h6' component='h1' style={{fontWeight: 600}} sx={{mt: 2}}> 
                Beneficiary's Details
            </Typography>
            <ModalClose />
            {/* <Chip icon={<ModalClose />} color='error' size='small' variant="outlined" label="Close" /> */}
        </Stack>
        <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="center"
        >
        <div>
            <Stack direction="column" alignItems="flex-start" sx={{mt: 2}} spacing={2}>
                <div>
                    <table style={{border: 'none'}}>
                        <tr >
                            <td style={{border: 'none', fontWeight: 600, textAlign: 'right'}}>First Name:</td>
                            <td style={{border: 'none', textAlign: 'left', paddingLeft: '20px'}}>{beneficiary.firstName}</td>
                        </tr>
                        <tr >
                            <td style={{border: 'none', fontWeight: 600, textAlign: 'right'}}>Last Name:</td>
                            <td style={{border: 'none', textAlign: 'left', paddingLeft: '20px'}}>{beneficiary.lastName}</td>
                        </tr>
                        <tr >
                            <td style={{border: 'none', fontWeight: 600, textAlign: 'right'}}>Email Address:</td>
                            <td style={{border: 'none', textAlign: 'left', paddingLeft: '20px'}}>{beneficiary.email}</td>
                        </tr>
                    </table>
                </div>
            </Stack>
            <Stack direction="column" alignItems="center" sx={{mt: 2}} spacing={2}>
                <div>
                    <Button variant='outlined' size='small' style={{ fontSize: '0.6em' }} onClick={() => setPwOpen(true)}>Change Password</Button>
                </div>
                <div>
                    <ChangePasswordForm open={pwOpen} setOpen={setPwOpen} />
                    <Button variant='contained' color='error' onClick={() => {
                        document.cookie = `dhis_token=;`;
                        localStorage.removeItem('dhis_user');
                        window.location.reload();
                    }}>Logout</Button>
                </div>
            </Stack>
        </div>
        </Grid>
    </>
}

export default Beneficiary;