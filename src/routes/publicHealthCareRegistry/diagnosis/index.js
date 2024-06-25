import './styles.css';
import { useEffect, useState } from 'react';
import { API_URL, getCookie } from '../../../constants';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import StarIcon from '@mui/icons-material/Star';

import male0 from '../../../assets/avatar/male0.png'
import male1 from '../../../assets/avatar/male1.png'
import male2 from '../../../assets/avatar/male2.png'
import female0 from '../../../assets/avatar/female0.png'
import female1 from '../../../assets/avatar/female1.png'
import female2 from '../../../assets/avatar/female2.png'
import { red } from '@mui/material/colors';

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

const Diagnosis = () => {
    const [children, setChildren] = useState([]);
    const [childPos, setChildPos] = useState(null);
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
        <div className='dashboard-wrapper'>
            <div className='content-wrapper'>
                <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }} aria-label="contacts">
                    <ListItem disablePadding>
                        <ListItemIcon>
                            <StarIcon sx={{ color: 'red' }}/>
                        </ListItemIcon>
                        <ListItemText primary="Diabetes" />
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemIcon>
                            <StarIcon sx={{ color: 'green' }}/>
                        </ListItemIcon>
                        <ListItemText primary="Hyperlipidemia" />
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemIcon>
                            <StarIcon sx={{ color: 'green' }}/>
                        </ListItemIcon>
                        <ListItemText primary="COPD" />
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemIcon>
                            <StarIcon sx={{ color: 'green' }}/>
                        </ListItemIcon>
                        <ListItemText primary="Asthma" />
                    </ListItem>
                </List>
            </div>
        </div>
    </div>
}

export default Diagnosis;