import { IconButton, Backdrop, CircularProgress, Button } from '@mui/material';
import * as React from 'react';
import Header from '../../components/header';
import Marquee from "react-fast-marquee";
import './styles.css';
import MarqueeText from '../../components/marquee';
import { useEffect, useState } from 'react';
import { API_URL, getCookie, parsePatient } from '../../constants';
import InfoTwoToneIcon from '@mui/icons-material/InfoTwoTone';
import PrintTwoTone from '@mui/icons-material/PrintTwoTone';
import PersonRemoveTwoToneIcon from '@mui/icons-material/PersonRemoveTwoTone';
import CardTravelTwoToneIcon from '@mui/icons-material/CardTravelTwoTone';

import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';


import male0 from '../../assets/avatar/male0.png'
import male1 from '../../assets/avatar/male1.png'
import male2 from '../../assets/avatar/male2.png'
import female0 from '../../assets/avatar/female0.png'
import female1 from '../../assets/avatar/female1.png'
import female2 from '../../assets/avatar/female2.png'
import infant from '../../assets/avatar/infant.png'
import { ProfileDetails } from './profileDetails';
import Enrollment from './enrollment';
import { VaccineCard } from './vaccineCard';
import Milestones from '../developmentMilestones';
import GrowthMonitoring from '../growthMonitoring';
import ADeworming from '../vitaminADeworming';
import PublicHealthRegistry from '../publicHealthRegistry';

const srcList = [male0, female0, male1, female1, male2, female2];

const columns = [
    { field: 'vaccine', headerName: 'Vaccine', flex: 1, headerClassName: 'table-header' },
    { field: 'center', headerName: 'Vaccine Center', flex: 3, headerClassName: 'table-header' },
    { field: 'date', headerName: 'Date', flex: 2, headerClassName: 'table-header' },
    { field: 'status', headerName: 'Status', flex: 1, headerClassName: 'table-header' }
];

const rows = [
];

var items = [
    "/banner1.jpg",
    "/banner2.png"
]

const Dashboard = () => {
    const [openBackdrop, setOpenBackdrop] = useState(false);
    const handleCloseBackdrop = () => {
        setOpenBackdrop(false);
    };
    const handleOpenBackdrop = () => {
        setOpenBackdrop(true);
    };

    const [children, setChildren] = useState([]);
    const [childPos, setChildPos] = useState(null);
    const [profileOpen, setProfileOpen] = useState(false);
    const [enrollOpen, setEnrollOpen] = useState(false);
    const [child, setChild] = useState(null);
    const [fullEvents, setFullEvents] = useState([]);
    const [phcEvents, setPhcEvents] = useState([]);
    const [growthEvents, setGrowthEvents] = useState([]);
    const [vacList, setVacList] = useState([]);

    const fetchUsers = async () => {
        fetch(await API_URL() + 'api/getEnrollments', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-token': getCookie()
            },
        })
            .then(res => res.json())
            .then(out => {
                setChildren(out.data.children);
            })
            .catch(err => console.log("Error Catch", err))
    }

    const fetchUser = async () => {
        setFullEvents([]);
        setPhcEvents([]);
        setGrowthEvents([]);
        if (children[childPos]) {
            handleOpenBackdrop();
            fetch(await API_URL() + 'api/getEnrollmentDetails', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'x-token': getCookie()
                },
                body: JSON.stringify({
                    epi: children[childPos].epi,
                    phcId: children[childPos].phcId

                })
            })
                .then(res => res.json())
                .then(out => {
                    if (out.data && out.data.child) {
                        setChild(out.data.child);
                        // console.log("FETCH USER", out.data.child);
                    }
                })
                .catch(err => console.log("Error Catch", err))
        }
    }

    const fetchVaccineCard = async () => {
        if (childPos !== null) {
            fetch(await API_URL() + `api/getEventLog`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'x-token': getCookie()
                },
                body: JSON.stringify({
                    epi: child.epi,
                    entity_id: child.entity_instance
                })
            })
                .then(res => res.json())
                .then(out => {
                    // console.log("PVAC", out.data);
                    handleCloseBackdrop();
                    if (out.data.events) {
                        setVacList(out.data);
                        setFullEvents(out.data.events);
                        // console.log("Full events", out.data.events)
                    }
                })
                .catch(err => console.log("Error Catch", err))
        }
    }

    const fetchPhcData = async () => {
        if (childPos !== null) {
            fetch(await API_URL() + `api/getPhcData`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'x-token': getCookie()
                },
                body: JSON.stringify({
                    phcId: child.phcId,
                    entity_id: child.entity_instance
                })
            })
                .then(res => res.json())
                .then(out => {
                    if (out.events) {
                        setPhcEvents(out.events);
                        // console.log("DATA", out.events)
                    }
                })
                .catch(err => console.log("Error Catch", err))
        }
    }

    const fetchChildGrowthData = async () => {
        if (childPos !== null) {
            fetch(await API_URL() + `api/getGrowthMonitoring`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'x-token': getCookie()
                },
                body: JSON.stringify({
                    epi: child.epi
                })
            })
                .then(res => res.json())
                .then(out => {
                    // console.log("PVAC", out.events);
                    handleCloseBackdrop();
                    if (out.events) {
                        setGrowthEvents(out.events);
                        // console.log("Full events", out.data.events)
                    }
                })
                .catch(err => console.log("Error Catch", err))
        }
    }

    const openPublic = async () => {
        fetch(await API_URL() + `api/generatePublicQR`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-token': getCookie()
            },
            body: JSON.stringify({
                epi: child.epi,
                entity_instance: child.entity_instance
            })
        })
            .then(res => res.json())
            .then(out => {
                console.log("Received QR", out);
                window.open(`/public/${out.data.qr}`, '_blank');
            })
            .catch(err => console.log("Error Catch", err))
    }

    const openTraveller = async () => {
        fetch(await API_URL() + `api/generatePublicQR`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-token': getCookie()
            },
            body: JSON.stringify({
                epi: child.epi,
                entity_instance: child.entity_instance
            })
        })
            .then(res => res.json())
            .then(out => {
                console.log("Received QR", out);
                window.open(`/traveller/${out.data.qr}`, '_blank');
            })
            .catch(err => console.log("Error Catch", err))
    }

    useEffect(() => { fetchUsers(); }, []);
    useEffect(() => { fetchUser(); }, [childPos]);
    useEffect(() => { if (child) { fetchVaccineCard(); } }, [child]);
    useEffect(() => { if (child) { fetchPhcData(); } }, [child]);
    useEffect(() => { if (child) { fetchChildGrowthData(); } }, [child]);


    // console.log("FULL EVENTS from Dashboard", fullEvents)
    const [value, setValue] = React.useState('1');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return <div className='dashboard-container'>

    <div>
        <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={openBackdrop}
        onClick={handleCloseBackdrop}
        >
        <CircularProgress color="inherit" />
        </Backdrop>
    </div>

        <Header />
        <div className='dashboard-wrapper'>
            <div className='content-wrapper'>
                <Marquee gradientColor={[247, 253, 255]}>
                    <MarqueeText text="Vaccines reduce risks of getting a disease by working with your body’s natural defences to build protection." />
                    {/* <MarqueeText text="News Two" />
                    <MarqueeText text="News Three" /> */}
                </Marquee>
                <h5>Enrollments</h5>
                <div style={{ display: 'flex', overflowX: 'auto' }}>
                    <div style={{ padding: '1em', display: 'flex', alignItems: 'center', cursor: 'pointer' }} onClick={() => {
                        setChildPos(null);
                        setEnrollOpen(true);
                        // console.log("clicked");
                    }}>
                        <img src="/new.png" alt='child' style={{ width: '3em' }} />
                    </div>
                    {
                        children.map((child, index) => {
                            let src = srcList[0];
                            const age = child.dob ? (new Date().getFullYear() - new Date(child.dob).getFullYear()) : null;
                            if(age < 5) {
                                var months = child.dob ? (new Date().getMonth() - new Date(child.dob).getMonth()) : null;
                                var months = months + " M";
                            } else {
                                var months = '';
                            }
                            if (child.sex === "M") {
                                if (age && age < 2) {
                                    src = infant;
                                } else if (age && age < 8) {
                                    src = male2;
                                } else if (age && age < 18) {
                                    src = male1;
                                } else {
                                    src = male0;
                                }
                            } else {
                                if (age && age < 2) {
                                    src = infant;
                                } else if (age && age < 8) {
                                    src = female0;
                                } else if (age && age < 18) {
                                    src = female1;
                                } else {
                                    src = female2;
                                }
                            }
                            return <div 
                                    style={{ padding: '1em', background: index !== childPos ? '' : 'rgb(248, 219, 163)', 
                                    cursor: 'pointer', display: 'flex', flexDirection: 'column', alignItems: 'center', width: '8em' }} 
                                    onClick={() => setChildPos(childPos === index ? null : index)}>
                                <h6 style={{ margin: 0, textAlign: 'center', padding: '5px 0' }}>{child.name}</h6>
                                <img src={src} alt='child' style={{ width: '5em' }} />
                                <p style={{ fontSize: '0.6em', padding: 0 }}>({`${age} Y ${months}`})</p>
                            </div>
                        })
                    }
                </div>
                <Enrollment open={enrollOpen} setOpen={setEnrollOpen} refresh={fetchUsers} />
                
                {
                    childPos !== null ?
                        <>
                            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                <h4>{children[childPos].name}</h4>
                            </div>
                            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                <IconButton onClick={() => setProfileOpen(true)}><InfoTwoToneIcon color='primary' /></IconButton>
                                {value === '1' && <PrintTwoTone color='primary' style={{ marginRight: '.5em', cursor: 'pointer' }} onClick={openPublic} />}
                        {value === '1' && <CardTravelTwoToneIcon color='primary' style={{ marginRight: '.5em', cursor: 'pointer' }} onClick={openTraveller} />}
                                <IconButton onClick={async () => {
                                    if (window.confirm(`Do you want to remove ${children[childPos].name} from your enrollments?`)) {
                                        try {
                                            fetch(await API_URL() + 'api/removeEnrollment', {
                                                method: 'POST',
                                                headers: {
                                                    'Content-Type': 'application/json',
                                                    'x-token': getCookie()
                                                },
                                                body: JSON.stringify({ epi: children[childPos].epi })
                                            })
                                                .then(res => res.json())
                                                .then(out => {
                                                    setChildPos(null);
                                                    alert("Enrollment removed");
                                                    fetchUsers();
                                                })
                                                .catch(e => {
                                                    console.log("Error", e);
                                                })
                                        } catch (err) {
                                            console.log("Catch Error", err);
                                        }
                                    }
                                }}><PersonRemoveTwoToneIcon color='error' /></IconButton>
                            </div>
                            
                            <Box sx={{ width: '100%', typography: 'body1' }} className='spread'>
                                <TabContext value={value}>
                                    <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                                        <TabList onChange={handleChange} aria-label="lab API tabs example">
                                        {
                                            fullEvents.length > 0 ?   
                                                <Tab label="Immunization" value="1" />                                                
                                            : null
                                        }
                                        {
                                            fullEvents.length > 0 ?     
                                                <Tab label="Growth Monitoring" value="2" />
                                            : null
                                        }
                                        {
                                            fullEvents.length > 0 ?
                                                <Tab label="Development Milestones" value="3" />
                                            : null
                                        }
                                        {
                                            fullEvents.length > 0 ?
                                                <Tab label="Vitamin A & Deworming" value="4" />
                                            : null
                                        }
                                        {
                                            phcEvents.length > 0 ?   
                                                <Tab label="Noncommunicable Diseases" value="5" />
                                            : null
                                        }
                                        </TabList>
                                    </Box>
                                    {
                                        fullEvents.length > 0 ?                                          
                                            <TabPanel value="1" className='overflow full-height'><VaccineCard full={fullEvents} vacs={vacList} /></TabPanel>                                            
                                        : null
                                    }
                                    {
                                        fullEvents.length > 0 ?
                                            <TabPanel value="2" className='overflow full-height'>{<GrowthMonitoring childData={child} allChildEvents={growthEvents}/>}</TabPanel>
                                        : null
                                    }
                                    {
                                        fullEvents.length > 0 ?
                                            <TabPanel value="3" className='overflow full-height'>{<Milestones/>}</TabPanel>
                                        : null
                                    }
                                    {
                                        fullEvents.length > 0 ?
                                            <TabPanel value="4" className='overflow full-height'>{<ADeworming/>}</TabPanel>
                                        : null
                                    }
                                    {
                                        phcEvents.length > 0 ?     
                                            <TabPanel value="5" className='overflow full-height'><PublicHealthRegistry phcEvents={phcEvents}/></TabPanel>
                                        : null
                                    }
                                </TabContext>
                            </Box>

                            <ProfileDetails profileOpen={profileOpen} setProfileOpen={setProfileOpen} user={child ?? children[childPos]} />
                        </>
                        : null
                }
            </div>
        </div>
    </div>
}

export default Dashboard;