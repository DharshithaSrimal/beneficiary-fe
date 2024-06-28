import './styles.css';
import { useEffect, useState } from 'react';
import { API_URL, getCookie } from '../../constants';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import male0 from '../../assets/avatar/male0.png'
import male1 from '../../assets/avatar/male1.png'
import male2 from '../../assets/avatar/male2.png'
import female0 from '../../assets/avatar/female0.png'
import female1 from '../../assets/avatar/female1.png'
import female2 from '../../assets/avatar/female2.png'

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

const Milestones = () => {
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

    function createData(name, calories, fat, carbs, protein) {
        return { name, calories, fat, carbs, protein };
      }
      
      const rows = [
        createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
        createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
        createData('Eclair', 262, 16.0, 24, 6.0),
        createData('Cupcake', 305, 3.7, 67, 4.3),
        createData('Gingerbread', 356, 16.0, 49, 3.9),
      ];

    return <div className='dashboard-container'>
        <div className='dashboard-wrapper'>
            <div className='content-wrapper'>
                <h4>From birth to 6 months</h4>
                <TableContainer component={Paper}>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell style={{ width: '5%' }}>#</TableCell>
                                <TableCell align="center" style={{ width: '50%' }}>Development Milestones</TableCell>
                                <TableCell align="center" style={{ width: '15%' }}>Average age</TableCell>
                                <TableCell align="center" style={{ width: '20%' }}>Picture</TableCell>
                                <TableCell align="center" style={{ width: '10%' }}>Status</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            <TableRow>
                                <TableCell>01</TableCell>
                                <TableCell>Startled by loud noices</TableCell>
                                <TableCell align="center">01 Months</TableCell>
                                <TableCell></TableCell>
                                <TableCell align="center">Yes</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>02</TableCell>
                                <TableCell>Smile responsively</TableCell>
                                <TableCell align="center">02 Months</TableCell>
                                <TableCell></TableCell>
                                <TableCell align="center">Yes</TableCell>
                            </TableRow>
                            <TableRow>   
                                <TableCell>03</TableCell>
                                <TableCell>Hold head up</TableCell>
                                <TableCell align="center">03 Months</TableCell>
                                <TableCell></TableCell>
                                <TableCell align="center">No</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>04</TableCell>
                                <TableCell>Make simple sounds</TableCell>
                                <TableCell align="center">03 Months</TableCell>
                                <TableCell></TableCell>
                                <TableCell align="center">No</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>05</TableCell>
                                <TableCell>Wiggles and kicks with arms and legs</TableCell>
                                <TableCell align="center">04 Months</TableCell>
                                <TableCell></TableCell>
                                <TableCell align="center">No</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>06</TableCell>
                                <TableCell>Communicate hunger, fear, discomfort</TableCell>
                                <TableCell align="center">04 Months</TableCell>
                                <TableCell></TableCell>
                                <TableCell align="center">No</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>07</TableCell>
                                <TableCell>Sits with some support</TableCell>
                                <TableCell align="center">04 Months</TableCell>
                                <TableCell></TableCell>
                                <TableCell align="center"></TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>08</TableCell>
                                <TableCell>Eyes track moving object 180 degrees</TableCell>
                                <TableCell align="center">05 Months</TableCell>
                                <TableCell></TableCell>
                                <TableCell align="center"></TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>09</TableCell>
                                <TableCell>Roll over</TableCell>
                                <TableCell align="center">05 Months</TableCell>
                                <TableCell></TableCell>
                                <TableCell align="center"></TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>10</TableCell>
                                <TableCell>Turns head to sounds</TableCell>
                                <TableCell align="center">06 Months</TableCell>
                                <TableCell></TableCell>
                                <TableCell align="center"></TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>11</TableCell>
                                <TableCell>Reach and grasp objects</TableCell>
                                <TableCell align="center">06 Months</TableCell>
                                <TableCell></TableCell>
                                <TableCell align="center"></TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </TableContainer>
                <h4>From 6 months to 12 months</h4>
                <TableContainer component={Paper}>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell style={{ width: '5%' }}>#</TableCell>
                                <TableCell align="center" style={{ width: '50%' }}>Development Milestones</TableCell>
                                <TableCell align="center" style={{ width: '15%' }}>Average age</TableCell>
                                <TableCell align="center" style={{ width: '20%' }}>Picture</TableCell>
                                <TableCell align="center" style={{ width: '10%' }}>Status</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            <TableRow>
                                <TableCell>01</TableCell>
                                <TableCell>Startled by loud noices</TableCell>
                                <TableCell align="center">01 Months</TableCell>
                                <TableCell></TableCell>
                                <TableCell align="center">Yes</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>02</TableCell>
                                <TableCell>Smile responsively</TableCell>
                                <TableCell align="center">02 Months</TableCell>
                                <TableCell></TableCell>
                                <TableCell align="center">Yes</TableCell>
                            </TableRow>
                            <TableRow>   
                                <TableCell>03</TableCell>
                                <TableCell>Hold head up</TableCell>
                                <TableCell align="center">03 Months</TableCell>
                                <TableCell></TableCell>
                                <TableCell align="center">No</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>04</TableCell>
                                <TableCell>Make simple sounds</TableCell>
                                <TableCell align="center">03 Months</TableCell>
                                <TableCell></TableCell>
                                <TableCell align="center">No</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>05</TableCell>
                                <TableCell>Wiggles and kicks with arms and legs</TableCell>
                                <TableCell align="center">04 Months</TableCell>
                                <TableCell></TableCell>
                                <TableCell align="center">No</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>06</TableCell>
                                <TableCell>Communicate hunger, fear, discomfort</TableCell>
                                <TableCell align="center">04 Months</TableCell>
                                <TableCell></TableCell>
                                <TableCell align="center">No</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>07</TableCell>
                                <TableCell>Sits with some support</TableCell>
                                <TableCell align="center">04 Months</TableCell>
                                <TableCell></TableCell>
                                <TableCell align="center"></TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>08</TableCell>
                                <TableCell>Eyes track moving object 180 degrees</TableCell>
                                <TableCell align="center">05 Months</TableCell>
                                <TableCell></TableCell>
                                <TableCell align="center"></TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>09</TableCell>
                                <TableCell>Roll over</TableCell>
                                <TableCell align="center">05 Months</TableCell>
                                <TableCell></TableCell>
                                <TableCell align="center"></TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>10</TableCell>
                                <TableCell>Turns head to sounds</TableCell>
                                <TableCell align="center">06 Months</TableCell>
                                <TableCell></TableCell>
                                <TableCell align="center"></TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>11</TableCell>
                                <TableCell>Reach and grasp objects</TableCell>
                                <TableCell align="center">06 Months</TableCell>
                                <TableCell></TableCell>
                                <TableCell align="center"></TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
        </div>
    </div>
}

export default Milestones;