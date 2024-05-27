import { IconButton, SwipeableDrawer, Grid, Avatar } from '@mui/material';
import ReactToPrint from 'react-to-print';
import PrintTwoTone from '@mui/icons-material/PrintTwoTone';
import CancelTwoTone from '@mui/icons-material/CancelTwoTone';
import { deepPurple } from '@mui/material/colors';
import QRCode from "react-qr-code";
import ExpandCircleDownTwoToneIcon from '@mui/icons-material/ExpandCircleDownTwoTone';
import { useEffect, useRef, useState } from 'react';

export const ProfileDetails = ({ profileOpen, setProfileOpen, user }) => {
    const profileRef = useRef();
    useEffect(()=>{
        console.log("RES USER",user);
    },[]);
    const DetailSection = ({ title = '', fields = [] }) => {
        const [expanded, setExpanded] = useState(true);
        const headerStyle = {
            cursor: 'pointer',
            transform: expanded ? 'rotate(180deg)' : '',
            transition: 'transform 150ms ease',
        }
        return <div style={{ marginBottom: '1em' }}>
            <div style={{ paddingBottom: 3, borderBottom: '1px solid #d7d7d7', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <h5 style={{ margin: 0, width: 'fit-content' }}>{title}</h5>
                <div onClick={() => setExpanded(!expanded)}><ExpandCircleDownTwoToneIcon color='primary' style={headerStyle} /></div>
            </div>
            {expanded ? <div>
                <Grid container spacing={2} style={{ marginTop: '1em' }}>
                    {fields.map((field) => <Grid item xs={12} md={6}><DetailRow title={field.title} prop={field.value} /></Grid>)}
                </Grid>
            </div> : null}
        </div>
    }

    const DetailRow = ({ title, prop }) => {
        return <div style={{ textAlign: 'start', display: 'flex', justifyContent: 'space-between', margin: '5px 0px 5px 0' }}>
            <p style={{ margin: 0, fontSize: '0.7em', padding: 0 }}>{title}</p>
            <h5 style={{ margin: 0 }}>{user ? user[prop] : ''}</h5>
        </div>
    }

    return <SwipeableDrawer
        anchor='right'
        open={profileOpen}
        onClose={() => setProfileOpen(false)}
        onOpen={() => setProfileOpen(true)}
    >
        <div style={{ minWidth: '50vw' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', margin: '1% 5% 0 2%' }}>
                <IconButton style={{ width: 'fit-content' }} onClick={() => setProfileOpen(false)}>
                    <CancelTwoTone color='error' />
                </IconButton>
                {/* <>
                    <ReactToPrint
                        trigger={() => <IconButton style={{ width: 'fit-content' }}>
                            <PrintTwoTone color='primary' />
                        </IconButton>}
                        content={() => profileRef.current}
                    />
                </> */}
            </div>

            <div style={{ margin: 'auto', width: '75%' }}>
                {/* <Grid container spacing={1} className='centered' style={{ marginTop: '1em' }}>
                    <Grid item xs={3} className='no-padding' style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <QRCode value={`${window.location.origin}/publicProfile/${user.qr}`} size={80} />
                    </Grid>
                    <Grid item xs={6} className='no-padding'>
                        <DetailRow title="Vaccination No." prop="epi" />
                        <DetailRow title="Beneficiary No." prop="nic" />
                        <DetailRow title="Foolhuma No." prop="foolhuma" />
                    </Grid>
                    <Grid item xs={3} className='no-padding' style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <Avatar children={user.url ? null : (user.name ? user.name[0] : '')} sx={{ bgcolor: deepPurple[300], width: 70, height: 70, fontSize: 30 }} src={user.url} />
                    </Grid>
                </Grid> */}
                <h4 style={{ textAlign: 'center' }}>{user.name}</h4>
                <DetailSection
                    title='Personal Information'
                    fields={[
                        { title: 'Vaccination No. :', value: 'epi' },
                        { title: 'Fullname :', value: 'name' },
                        { title: 'Foolhuma No. :', value: 'foolhuma' },
                        { title: 'Beneficiary National ID :', value: 'nic' },
                        { title: 'Date of Birth :', value: 'dob' },
                        { title: 'Gender :', value: 'sex' },
                        { title: 'Island of Residence :', value: 'residential_island' },
                        { title: "Mother's Name :", value: 'mother_name' },
                        { title: "Mother's National ID :", value: 'mother_nic' },
                        { title: "Mother's Contact No :", value: 'mother_contact' },
                        { title: "Care Giver's Name", value: 'careGiver_name' },
                        { title: "Care Giver's ID", value: 'careGiver_nic' },
                        { title: "Other Contact No.", value: 'careGiver_contact' },
                    ]}
                />
                {/* <DetailSection
                    title='Residential Information'
                    fields={[
                        { title: 'Residence No :', value: 'residential_no' },
                    ]}
                />
                <DetailSection
                    title="Mother's Information"
                    fields={[
                        { title: "Mother's Last Name", value: 'mother_lastname' },
                    ]}
                />
                {!user ? <DetailSection
                    title="Care Giver's Information"
                    fields={[
                        { title: "Care Giver's First Name", value: 'careGiver_firstname' },
                        { title: "Care Giver's Last Name", value: 'careGiver_lastname' },
                        { title: "Care Giver's NIC", value: 'careGiver_nic' },
                        { title: "Care Giver's Contact No.", value: 'careGiver_contact' },
                    ]}
                /> : null} */}
            </div>
        </div>
    </SwipeableDrawer>
}