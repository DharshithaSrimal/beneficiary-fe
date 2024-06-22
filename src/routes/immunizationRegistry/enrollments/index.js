import { Button, Grid, IconButton } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import Banner from '../../../components/banner';
import Header from '../../../components/header';
import Marquee from "react-fast-marquee";
import './styles.css';
import MarqueeText from '../../../components/marquee';
import Chart from '../../../components/chart';
import Carousel from 'react-material-ui-carousel'
import { useEffect, useState } from 'react';
import { API_URL, getCookie, parsePatient } from '../../../constants';
import InfoTwoToneIcon from '@mui/icons-material/InfoTwoTone';
import PrintTwoTone from '@mui/icons-material/PrintTwoTone';
import PersonRemoveTwoToneIcon from '@mui/icons-material/PersonRemoveTwoTone';
import CardTravelTwoToneIcon from '@mui/icons-material/CardTravelTwoTone';

import male0 from '../../../assets/avatar/male0.png'
import male1 from '../../../assets/avatar/male1.png'
import male2 from '../../../assets/avatar/male2.png'
import female0 from '../../../assets/avatar/female0.png'
import female1 from '../../../assets/avatar/female1.png'
import female2 from '../../../assets/avatar/female2.png'
import infant from '../../../assets/avatar/infant.png'
import { ProfileDetails } from './profileDetails';
import Enrollment from './enrollment';
import { VaccineCard } from './vaccineCard';

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

const Enrollments = () => {
    const [children, setChildren] = useState([]);
    const [childPos, setChildPos] = useState(null);
    const [profileOpen, setProfileOpen] = useState(false);
    const [enrollOpen, setEnrollOpen] = useState(false);
    const [child, setChild] = useState(null);
    const [fullEvents, setFullEvents] = useState([]);
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
        if (children[childPos]) {
            fetch(await API_URL() + 'api/getEnrollmentDetails', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'x-token': getCookie()
                },
                body: JSON.stringify({
                    epi: children[childPos].epi
                })
            })
                .then(res => res.json())
                .then(out => {
                    if (out.data && out.data.child) {
                        setChild(out.data.child);
                        console.log("FETCH USER", out.data.child);
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
                    console.log("PVAC", out.data);
                    if (out.data.events) {
                        setVacList(out.data);
                        setFullEvents(out.data.events);
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

    return <div className='dashboard-container'>
        {/* <Header /> */}
        <div className='dashboard-wrapper'>
            <div className='content-wrapper'>
                <Marquee gradientColor={[247, 253, 255]}>
                    <MarqueeText text="Vaccines reduce risks of getting a disease by working with your body’s natural defences to build protection." />
                    {/* <MarqueeText text="News Two" />
                    <MarqueeText text="News Three" /> */}
                </Marquee>
                <div style={{ display: 'flex', overflowX: 'auto' }}>
                    <div style={{ padding: '1em', display: 'flex', alignItems: 'center', cursor: 'pointer' }} onClick={() => {
                        setChildPos(null);
                        setEnrollOpen(true);
                    }}>
                        <img src="/new.png" alt='child' style={{ width: '3em' }} />
                    </div>
                    {
                        children.map((child, index) => {
                            let src = srcList[0];
                            const age = child.dob ? (new Date().getFullYear() - new Date(child.dob).getFullYear()) : null;
                            const months = child.dob ? (new Date().getMonth() - new Date(child.dob).getMonth()) : null;
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
                            return <div style={{ padding: '1em', background: index !== childPos ? '' : 'rgb(248, 219, 163)', cursor: 'pointer', display: 'flex', flexDirection: 'column', alignItems: 'center', width: '8em' }} onClick={() => setChildPos(childPos === index ? null : index)}>
                                <img src={src} alt='child' style={{ width: '5em' }} />
                                <h6 style={{ margin: 0, textAlign: 'center', padding: '5px 0' }}>{child.name}</h6>
                                <p style={{ fontSize: '0.6em', padding: 0 }}>({`${age} Y ${months} M`})</p>
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
                                <IconButton onClick={() => openPublic()}><PrintTwoTone color='primary' /></IconButton>
                                <IconButton onClick={() => openTraveller()}><CardTravelTwoToneIcon color='primary' /></IconButton>
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
                            <VaccineCard full={fullEvents} vacs={vacList} />
                            <ProfileDetails profileOpen={profileOpen} setProfileOpen={setProfileOpen} user={child ?? children[childPos]} />
                        </>
                        : null
                }
                {/* <div className='common-head'>
                    <Grid container spacing={2} className='centered'>
                        <Grid item xs={12} md={6}>
                            <Carousel>
                                {
                                    items.map((item, i) => <img key={i} src={item} alt='banner' />)
                                }
                            </Carousel>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <Chart />
                        </Grid>
                    </Grid>
                </div> */}
            </div>
        </div>
    </div>
}

export default Enrollments;