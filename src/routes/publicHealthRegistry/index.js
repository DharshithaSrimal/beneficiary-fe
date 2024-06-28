import './styles.css';
import { useEffect, useState } from 'react';
import { API_URL, getCookie } from '../../constants';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import StarIcon from '@mui/icons-material/Star';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import male0 from '../../assets/avatar/male0.png'
import male1 from '../../assets/avatar/male1.png'
import male2 from '../../assets/avatar/male2.png'
import female0 from '../../assets/avatar/female0.png'
import female1 from '../../assets/avatar/female1.png'
import female2 from '../../assets/avatar/female2.png'
import { red } from '@mui/material/colors';
import { TableHead } from '@mui/material';

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

const PublicHealthRegistry = () => {
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
                <h4>Diagnosis</h4>
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
                <br></br>
                <h4>Examinations</h4>
                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableBody>
                            <TableRow>
                                <TableCell>Height</TableCell>
                                <TableCell align="center">183cm</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>Weight</TableCell>
                                <TableCell align="center">61kg (Date: 2023-09-14)</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>Blood Pressure</TableCell>
                                <TableCell align="center">137/97 mmHg (Date: 2023-09-14)</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>Waist circumference</TableCell>
                                <TableCell align="center">cm</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>Waist circumference</TableCell>
                                <TableCell align="center">cm</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>Body fat</TableCell>
                                <TableCell align="center">%</TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </TableContainer>
                <br></br>
                <h4>Investigations</h4>
                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableBody>
                            <TableRow>
                                <TableCell>Fasting Blood Sugar</TableCell>
                                <TableCell align="center">183cm</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>Random Blood Sugar</TableCell>
                                <TableCell align="center">61kg (Date: 2023-09-14)</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>HBA1C</TableCell>
                                <TableCell align="center">137/97 mmHg (Date: 2023-09-14)</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>Total Cholesterol</TableCell>
                                <TableCell align="center">mg/dl</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>Triglycerides</TableCell>
                                <TableCell align="center">mg/dl</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>HDL - High Density Lipoprotein</TableCell>
                                <TableCell align="center">mg/dl</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>LDL - Low Density Lipoprotein</TableCell>
                                <TableCell align="center">mg/dl</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>VLDL - Very Low Density Lipoprotein</TableCell>
                                <TableCell align="center">mg/dl</TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </TableContainer>
                <h4>Visits</h4>
                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableHead>
                        <TableRow>
                                <TableCell align="center">Date</TableCell>
                                <TableCell align="center">Facility</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            <TableRow>
                                <TableCell></TableCell>
                                <TableCell align="center"></TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </TableContainer>
                <br></br>
            </div>
        </div>
    </div>
}

export default PublicHealthRegistry;