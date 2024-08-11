import { IconButton, Backdrop, CircularProgress, Stack, Chip, Button, Tabs, Alert, Typography, Avatar, Menu, MenuItem } from '@mui/material';
import { Divider, ListItemIcon, Tooltip, AppBar, Toolbar } from '@mui/material';
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
import VaccinesIcon from '@mui/icons-material/Vaccines';
import PersonAddAlt1Icon from '@mui/icons-material/PersonAddAlt1';
import PersonOffIcon from '@mui/icons-material/PersonOff';
import PersonSearchIcon from '@mui/icons-material/PersonSearch';

import PersonAdd from '@mui/icons-material/PersonAdd';
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';

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

import { growthDataElements, vaccineArray } from '../../constants';

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
    const [developmentEvents, setDevelopmentEvents] = useState([]);
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
        setDevelopmentEvents([]);
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
                    epi: child.epi,
                    entity_id: child.entity_instance
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

    const fetchChildDevelopmentData = async () => {
        if (childPos !== null) {
            fetch(await API_URL() + `api/getDevelopmentMilestones`, {
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
                    // console.log("PVAC", out.events);
                    handleCloseBackdrop();
                    if (out.events) {
                        setDevelopmentEvents(out.events);
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
                // console.log("Received QR", out);
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
    useEffect(() => { if (child) { fetchChildDevelopmentData(); } }, [child]);


    // console.log("FULL EVENTS from Dashboard", fullEvents)

    // check whether data exists for the following
    // Growth Monitoring
    var isGrowthDataAvailable = null;
    var isImmunizationDataAvailable = null;
    var isDevelopmentMilestonesDataAvailable = null;

    const deWeightId = growthDataElements.DATA_ELEMENT_WEIGHT;
    const deLengthHeightId = growthDataElements.DATA_ELEMENT_LENGTH_HEIGHT;
    const deHeadCircumference = growthDataElements.DATA_ELEMENT_HEAD_CIRCUMFERENCE;
    const deAgeAtReportInMonths = growthDataElements.AGE_AT_THE_TIME_OF_REPORTING_MONTHS;

    if (fullEvents.find(o => o.dataElement === deWeightId) 
        || fullEvents.find(o => o.dataElement === deLengthHeightId)
        || fullEvents.find(o => o.dataElement === deHeadCircumference)
        || fullEvents.find(o => o.dataElement === deAgeAtReportInMonths)) {
        
        isGrowthDataAvailable = true;
    } 

    vaccineArray.map((vaccineDE) => {
        if (fullEvents.find(o => o.dataElement === vaccineDE)) {
            
            isImmunizationDataAvailable = true;
        } 
    })

    if (fullEvents.find(o => o.dataElement === 'v6P3nKGeHLL')) {
        
        isDevelopmentMilestonesDataAvailable = true;
    } 


    

    

    const [value, setValue] = React.useState('1');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    function monthDiff(dob) {
        var months;
        months = (new Date().getFullYear() - dob.getFullYear()) * 12;
        months -= dob.getMonth();
        months += new Date().getMonth();
        return months <= 0 ? 0 : months;
    }

    function getChildAge(childDob, ageInMonths) {

        childDob = childDob.split("-")
        var childDobYear = childDob[0]
        var childDobMonth = childDob[1]
        var childDobDate = childDob[2]

        var now = new Date();
        var today = new Date(now.getYear(),now.getMonth(),now.getDate());

        var yearNow = now.getYear();
        var monthNow = now.getMonth();
        var dateNow = now.getDate();

        var dob = new Date(childDobYear, childDobMonth, childDobDate);

        var yearDob = dob.getYear();
        var monthDob = dob.getMonth();
        var dateDob = dob.getDate();
        var age = {};
        var ageString = "";
        var yearString = "";
        var monthString = "";
        var dayString = "";
        var yearAge = "";


        yearAge = yearNow - yearDob;

        if (monthNow >= monthDob)
            var monthAge = monthNow - monthDob;
        else {
            yearAge--;
            var monthAge = 12 + monthNow -monthDob;
        }

        age = {
            years: yearAge,
            months: monthAge,
            // days: dateAge
            };

        if ( age.years > 1 ) yearString = " years"; else yearString = " year";
        if ( age.months> 1 ) monthString = " months"; else monthString = " month";
        // if ( age.days > 1 ) dayString = " days"; else dayString = " day";


        if(ageInMonths && ageInMonths < 60) {

            if ( (age.years > 0) && (age.months > 0) ) ageString = age.years + yearString + " and " + age.months + 1 + monthString;
            else if ( (age.years == 0) && (age.months == 0) ) ageString = age.days + dayString;        
            else if ( (age.years == 0) && (age.months > 0) ) ageString = age.months + 1 + monthString;
            else ageString = "Oops! Could not calculate age!";

            return ageString;
            

        } else {
            // show year only

            if ( (age.years > 0) && (age.months > 0) ) ageString = age.years + yearString;

            return ageString;

        }

    }

    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    console.log("CHILD DATA", children[childPos]) 

    function childPicture(sex, ageInMonths) {

        let src = srcList[0];
                                        
        if (child.sex === "Male") {
            if (ageInMonths && ageInMonths < 1) {
                return src = infant;
            } else if (ageInMonths && ageInMonths < 6) {
                return src = male2;
            } else if (ageInMonths && ageInMonths < 18) {
                return src = male1;
            } else {
                return src = male0;
            }
        } else {
            if (ageInMonths && ageInMonths < 1) {
                return src = infant;
            } else if (ageInMonths && ageInMonths < 6) {
                return src = female0;
            } else if (ageInMonths && ageInMonths < 18) {
                return src = female1;
            } else {
                return src = female2;
            }
        }

    }

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

                {
                    children && children.length == 0 ?
                    <>
                        <div style={{ marginTop: 20, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <PersonSearchIcon color="disabled" sx={{ fontSize: '10em' }} />
                        </div>
                        <div style={{ marginTop: 10, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <Typography variant="h6" style={{textTransform: 'uppercase'}} gutterBottom>
                                No members enrolled yet
                            </Typography>
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <Typography textAlign="center" style={{color: '#999'}} variant="subtitle1" gutterBottom>
                                Sorry, you haven't enrolled any members on your account.
                            </Typography>
                        </div>   

                        <div style={{ marginTop: 20, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <Button 
                                variant="contained" 
                                size="large" 
                                startIcon={<PersonAddAlt1Icon />}
                                onClick={() => {
                                    setChildPos(null);
                                    setEnrollOpen(true);}}>
                                Enroll new member
                            </Button>

                            <Enrollment open={enrollOpen} setOpen={setEnrollOpen} refresh={fetchUsers} />
                        </div>

                                   
                    </>: null

                }

                {
                    children && children.length > 0 ?
                    <>
                        { !childPos && <h5>Enrolled Members</h5> }


                        {
                            // childPos !== null && children[childPos].sex && children[childPos].sex !== null &&
                            // <Box sx={{ flexGrow: 1 }}>
                            //     <AppBar position="static" sx={{pl: 3, pr: 2}}>
                            //         <Stack direction="row" alignItems="center" justifyContent="space-between">
                            //             {/* <IconButton
                            //                 size="small"
                            //                 edge="start"
                            //                 aria-label="menu"
                            //                 sx={{mr: 1}}
                            //             >                                             */}
                            //             {/* <img src={childPicture(children[childPos].sex, monthDiff(new Date(children[childPos].dob)))} alt='child' style={{ width: '2em' }} /> */}
                            //             {/* </IconButton> */}
                            //             <Box>
                            //             <h4 sx={{ flexGrow: 1 }} component="div">
                            //                 {children[childPos].name} ({children[childPos].sex}, {getChildAge(children[childPos].dob, monthDiff(new Date(children[childPos].dob)))})
                            //             </h4>
                            //             </Box>
                            //             <Box>
                            //                 <Chip 
                            //                     icon={<InfoTwoToneIcon />} 
                            //                     label="Profile" 
                            //                     color='success' 
                            //                     variant="contained" 
                            //                     onClick={() => setProfileOpen(true)}
                            //                     sx={{ mr: 2, px: 1}}/>
                            //                 <Chip 
                            //                     onClick={async () => {
                            //                         if (window.confirm(`Do you want to remove ${children[childPos].name} from your enrollments?`)) {
                            //                             try {
                            //                                 fetch(await API_URL() + 'api/removeEnrollment', {
                            //                                     method: 'POST',
                            //                                     headers: {
                            //                                         'Content-Type': 'application/json',
                            //                                         'x-token': getCookie()
                            //                                     },
                            //                                     body: JSON.stringify({ epi: children[childPos].epi })
                            //                                 })
                            //                                     .then(res => res.json())
                            //                                     .then(out => {
                            //                                         setChildPos(null);
                            //                                         alert("Enrollment removed");
                            //                                         fetchUsers();
                            //                                     })
                            //                                     .catch(e => {
                            //                                         console.log("Error", e);
                            //                                     })
                            //                             } catch (err) {
                            //                                 console.log("Catch Error", err);
                            //                             }
                            //                         }
                            //                     }}
                            //                     icon={<PersonRemoveTwoToneIcon />} 
                            //                     label="Remove this member" 
                            //                     color='error' 
                            //                     variant="contained"
                            //                     sx={{ mr: 2, px: 1}}
                            //                 />

                            //                 <Button variant='contained' color='secondary'> View All Members </Button>
                            //             </Box>
                            //         </Stack>
                            //     </AppBar>
                            // </Box> 
                        }

                            <div style={{ display: 'flex', overflowX: 'auto' }}>
                                <div 
                                    style={{ padding: '1em', display: 'flex', alignItems: 'center', cursor: 'pointer' }} 
                                    onClick={() => {
                                    setChildPos(null);
                                    setEnrollOpen(true);}}>
                                    <img src="/new.png" alt='child' style={{ width: '3em' }} />
                                </div>
                                <Enrollment open={enrollOpen} setOpen={setEnrollOpen} refresh={fetchUsers} />
                                {
                                    children.map((child, index) => {

                                        console.log(children);
                                    
                                        var ageInMonths = monthDiff(new Date(child.dob))

                                        let src = srcList[0];
                                        
                                        if (child.sex === "Male") {
                                            if (ageInMonths && ageInMonths < 12) {
                                                src = infant;
                                            } else if (ageInMonths && ageInMonths < 60) {
                                                src = male2;
                                            } else if (ageInMonths && ageInMonths < 216) {
                                                src = male1;
                                            } else {
                                                src = male0;
                                            }
                                        } else {
                                            if (ageInMonths && ageInMonths < 12) {
                                                src = infant;
                                            } else if (ageInMonths && ageInMonths < 60) {
                                                src = female0;
                                            } else if (ageInMonths && ageInMonths < 216) {
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
                                            {/* <p style={{ fontSize: '0.6em', padding: 0 }}>({`${age} Y ${months}`})</p> */}
                                        </div>
                                    })
                                }
                            </div>

                        {
                            childPos !== null ?
                                <>
                                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                        <h4>
                                            {children[childPos].name} ({children[childPos].sex}, {getChildAge(children[childPos].dob, monthDiff(new Date(children[childPos].dob)))})
                                        </h4>
                                    </div>
                                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                        {/* <IconButton onClick={() => setProfileOpen(true)}> */}
                                            {/* <InfoTwoToneIcon color='primary' /> */}
                                            <Chip 
                                                icon={<InfoTwoToneIcon />} 
                                                label="Info" 
                                                color='primary' 
                                                variant="outlined" 
                                                onClick={() => setProfileOpen(true)}
                                                sx={{ mr: 2, px: 1}}/>
                                        {/* </IconButton> */}
                                            {/* <Stack direction="row" spacing={2}> */}
                                            
                                            {/* </Stack> */}
                                            {/* {value === '1' && 
                                            <PrintTwoTone color='primary' style={{ marginRight: '.5em', cursor: 'pointer' }} onClick={openPublic} />} */}

                                            {value === '1' &&
                                            <Chip 
                                                icon={<PrintTwoTone />} 
                                                label="Print View" 
                                                color='primary' 
                                                variant="outlined" 
                                                onClick={openPublic}
                                                sx={{ mr: 2, px: 1}}/>}
                                            {value === '1' && 
                                            // <CardTravelTwoToneIcon color='primary' style={{ marginRight: '.5em', cursor: 'pointer' }} onClick={openTraveller} />
                                            <Chip 
                                                icon={<VaccinesIcon />} 
                                                label="Vaccination Info" 
                                                color='primary' 
                                                variant="outlined" 
                                                onClick={openTraveller}
                                                sx={{ mr: 2, px: 1}}/>
                                            }
                                        <Chip 
                                            onClick={async () => {
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
                                            }}
                                            icon={<PersonRemoveTwoToneIcon />} 
                                            label="Remove this person" 
                                            color='error' 
                                            variant="outlined"
                                            sx={{ mr: 2, px: 1}}
                                        />

                                        {/* </span> */}
                                    </div>
                                    
                                    <Box sx={{mt: 2, width: '100%', typography: 'body1' }} className='spread'>
                                        <TabContext value={value}>
                                            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                                                <TabList variant="fullWidth" onChange={handleChange} aria-label="lab API tabs example">
                                                {
                                                    fullEvents.length > 0 && isImmunizationDataAvailable && isImmunizationDataAvailable == true ?   
                                                        <Tab wrapped label="Immunization" value="1" />                                                
                                                    : null
                                                }
                                                {
                                                    fullEvents.length > 0 && isGrowthDataAvailable && isGrowthDataAvailable == true ?     
                                                        <Tab wrapped label="Growth Monitoring" value="2" />
                                                    : null
                                                }
                                                {
                                                    fullEvents.length > 0 && isDevelopmentMilestonesDataAvailable && isDevelopmentMilestonesDataAvailable == true ?
                                                        <Tab wrapped label="Development Milestones" value="3" />
                                                    : null
                                                }
                                                {
                                                    fullEvents.length > 0 ?
                                                        <Tab wrapped label="Vitamin A & Deworming" value="4" />
                                                    : null
                                                }
                                                {
                                                    phcEvents.length > 0 ?   
                                                        <Tab  wrapped label="Noncommunicable Diseases" value="5" />
                                                    : null
                                                }
                                                </TabList>
                                            </Box>
                                            {
                                                fullEvents.length > 0 && isImmunizationDataAvailable && isImmunizationDataAvailable == true ?                                        
                                                    <TabPanel value="1" className='overflow full-height'><VaccineCard full={fullEvents} vacs={vacList} /></TabPanel>                                            
                                                : null
                                            }
                                            {
                                                fullEvents.length > 0 && isGrowthDataAvailable && isGrowthDataAvailable == true ?
                                                    <TabPanel value="2" className='overflow full-height'>{<GrowthMonitoring childData={child} allChildEvents={growthEvents}/>}</TabPanel>
                                                : null
                                            }
                                            {
                                                fullEvents.length > 0 && isDevelopmentMilestonesDataAvailable && isDevelopmentMilestonesDataAvailable == true ?
                                                    <TabPanel value="3" className='overflow full-height'>{<Milestones childData={child} developmentEvents={developmentEvents}/>}</TabPanel>
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

                        {
                            childPos == null ?
                            <>
                            <div style={{ marginTop: 20,  display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                <Alert variant="filled" severity="info">
                                    Please select an enrolled member to view information.
                                </Alert>
                            </div>
                            </> : null
                        }
                    
                    </> : null
                }
                
            </div>
        </div>
    </div>
}

export default Dashboard;