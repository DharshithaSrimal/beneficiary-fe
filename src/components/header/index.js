import './styles.css'
import { HiMenuAlt1 } from 'react-icons/hi';
import { Button, Box, Drawer, List, ListItem, ListItemButton, ListItemText, Avatar, Divider } from '@mui/material';
import { useState } from 'react';
import profile from '../../assets/profile.png'
import DashboardTwoToneIcon from '@mui/icons-material/DashboardTwoTone';
import BookOnlineTwoToneIcon from '@mui/icons-material/BookOnlineTwoTone';
import QueryStatsIcon from '@mui/icons-material/QueryStats';
import AppRegistrationIcon from '@mui/icons-material/AppRegistration';
import VaccinesIcon from '@mui/icons-material/Vaccines';
import AccountCircleTwoToneIcon from '@mui/icons-material/AccountCircleTwoTone';
import BeenhereTwoToneIcon from '@mui/icons-material/BeenhereTwoTone';
import DoorBackTwoToneIcon from '@mui/icons-material/DoorBackTwoTone';
import Beneficiary from './beneficiary';

const Header = () => {
    const [expanded, setExpanded] = useState(false);
    const [expandedProfile, setExpandedProfile] = useState(false);
    const stored = JSON.parse(localStorage.getItem('dhis_user'));
    const user = {
        url: null,
        name: stored.firstName + ' ' + stored.lastName,
        email: stored.email
    }

    const toggleDrawer = (action) => {
        setExpanded(action);
    }

    const SideBar = () => (<Box sx={{ width: 300, height: '100%', display: 'flex', flexDirection: 'column', background: '#344966', justifyContent: 'space-between' }}>
        <div style={{ display: 'flex', alignItems: 'center', margin: 5, justifyContent: 'center' }}>
            {/* <img src='/logo512_white.png' alt='logo white' style={{ height: '3em' }} /> */}
            {/* <h4 style={{ color: 'white', paddingLeft: '1em' }}>Electronic Immunization Registry Beneficiary Portal</h4> */}
        </div>
        <div className='list-container'>
            <List className='list'>
                <ListItem className={window.location.pathname === '/' ? 'list-item-selected' : 'list-item'}>
                    <ListItemButton onClick={() => window.location.href = '/'} style={{ borderRadius: '2em' }}>
                        <DashboardTwoToneIcon />
                        <ListItemText primary='Home' style={{ textAlign: 'left', paddingLeft: '1em' }} />
                    </ListItemButton>
                </ListItem>
                <ListItem className={window.location.pathname === '/profile' ? 'list-item-selected' : 'list-item'}>
                    <ListItemButton onClick={() => window.location.href = '/profile'} style={{ borderRadius: '2em' }}>
                        <AccountCircleTwoToneIcon />
                        <ListItemText primary='Profile' style={{ textAlign: 'left', paddingLeft: '1em' }} />
                    </ListItemButton>
                </ListItem>
                {
                    window.sessionStorage.getItem('role') === 'admin' ?
                        <ListItem className={window.location.pathname === '/adminAppointments' ? 'list-item-selected' : 'list-item'}>
                            <ListItemButton onClick={() => window.location.href = '/adminAppointments'} style={{ borderRadius: '2em' }}>
                                <BeenhereTwoToneIcon />
                                <ListItemText primary='Admin Appointments' style={{ textAlign: 'left', paddingLeft: '1em' }} />
                            </ListItemButton>
                        </ListItem>
                        : null
                }
                <ListItem className={'list-item'}>
                    <ListItemButton onClick={() => {
                        document.cookie = `dhis_token=;`;
                        window.localStorage.removeItem('dhis_user');
                        window.location.href = '/login';
                    }} style={{ borderRadius: '2em' }}>
                        <DoorBackTwoToneIcon />
                        <ListItemText primary='Logout' style={{ textAlign: 'left', paddingLeft: '1em' }} />
                    </ListItemButton>
                </ListItem>
            </List>
        </div>

        <div className='avatar-container'>
            <Avatar children={user.url ? null : user.name[0]} sx={{ bgcolor: '#F8DBA3', color: '#344966', width: 50, height: 50, fontSize: 30 }} src={user.url} />
            <div style={{ color: '#B4CDED', paddingLeft: '1em' }}>
                <h4 style={{ padding: 0, margin: 0 }}>{user.name}</h4>
                <p style={{ padding: 0, margin: 0, fontSize: '0.7em' }}><i>{user.email}</i></p>
            </div>
        </div>
    </Box>);

    return <>
        <div className='header desktop'>
            <Button onClick={() => toggleDrawer(true)}><HiMenuAlt1 size={30} color='#B4CDED' /></Button>
            <img src='/logo512_white.png' alt='logo white' style={{ height: '3em', background: 'white' }} />
            <h3 style={{ padding: 0 }}>Beneficiary Portal</h3>
            <div style={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }} onClick={() => setExpandedProfile(true)}>
                {/* <label style={{ paddingRight: '1em' }}>{new Date().toLocaleDateString()}</label> */}
                <img src={profile} alt='profile' style={{ width: '3em', height: '3em', paddingRight: '1em' }} />
            </div>
            <Drawer
                anchor='left'
                open={expanded}
                onClose={() => toggleDrawer(false)}
            >
                <SideBar />
            </Drawer>
        </div>
        <div className='mobile'>
            {/* <Button onClick={() => toggleDrawer(true)}><HiMenuAlt1 size={30} color='#B4CDED' /></Button> */}
            <div className='header'>
                <h3 style={{ padding: 5, fontSize: '1em', textAlign: 'center' }}>Beneficiary Portal</h3>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }} onClick={() => setExpandedProfile(true)}>
                <img src={profile} alt='profile' style={{ width: '2em', height: '2em', paddingRight: '1em' }} />
            </div>
            <Drawer
                anchor='left'
                open={expanded}
                onClose={() => toggleDrawer(false)}
            >
                <SideBar />
            </Drawer>
        </div>
        <Drawer
            anchor='bottom'
            open={expandedProfile}
            onClose={() => setExpandedProfile(!expandedProfile)}
        >
            <div style={{ minHeight: '75vh', textAlign: 'center' }}>
                <Beneficiary/>
            </div>
        </Drawer>
    </>
}

export default Header;