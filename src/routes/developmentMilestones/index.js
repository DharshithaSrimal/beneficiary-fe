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
import DoneIcon from '@mui/icons-material/Done';
import CloseIcon from '@mui/icons-material/Close';

import male0 from '../../assets/avatar/male0.png'
import male1 from '../../assets/avatar/male1.png'
import male2 from '../../assets/avatar/male2.png'
import female0 from '../../assets/avatar/female0.png'
import female1 from '../../assets/avatar/female1.png'
import female2 from '../../assets/avatar/female2.png'
import m1 from '../../assets/avatar/m1.JPG'
import m2 from '../../assets/avatar/m2.JPG'
import m3 from '../../assets/avatar/m3.JPG'
import m4 from '../../assets/avatar/m4.JPG'
import m5 from '../../assets/avatar/m5.JPG'
import m6 from '../../assets/avatar/m6.JPG'
import m7 from '../../assets/avatar/m7.JPG'
import m8 from '../../assets/avatar/m8.JPG'
import m9 from '../../assets/avatar/m9.JPG'
import m10 from '../../assets/avatar/m10.JPG'
import m11 from '../../assets/avatar/m11.JPG'
import m12 from '../../assets/avatar/m12.JPG'
import m13 from '../../assets/avatar/m13.JPG'
import m14 from '../../assets/avatar/m14.JPG'
import m15 from '../../assets/avatar/m15.JPG'
import m16 from '../../assets/avatar/m16.JPG'
import m17 from '../../assets/avatar/m17.JPG'
import m18 from '../../assets/avatar/m18.JPG'
import m19 from '../../assets/avatar/m19.JPG'
import m20 from '../../assets/avatar/m11.JPG'


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
                        <TableHead className='table-header'>
                            <TableRow className='pink-row'>
                                <TableCell className="milestone-table-header" style={{ width: '5%' }}>#</TableCell>
                                <TableCell className="milestone-table-header" align="center" style={{ width: '55%' }}>Development Milestones</TableCell>
                                <TableCell className="milestone-table-header" align="center" style={{ width: '20%' }}>Average age</TableCell>
                                <TableCell className="milestone-table-header" align="center" style={{ width: '10%' }}>Picture</TableCell>
                                <TableCell className="milestone-table-header" align="center" style={{ width: '10%' }}>Status</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            <TableRow className='purple-row'>
                                <TableCell>01</TableCell>
                                <TableCell>Startled by loud noices</TableCell>
                                <TableCell align="center">01 Months</TableCell>
                                <TableCell align="center"><img src={m1} alt='Startled by loud noices' style={{ height: '3em'}} /></TableCell>
                                <TableCell align="center">
                                        <DoneIcon sx={{ color: 'green' }}/>
                                </TableCell>
                            </TableRow>
                            <TableRow className='pink-row'>
                                <TableCell>02</TableCell>
                                <TableCell>Smile responsively</TableCell>
                                <TableCell align="center">02 Months</TableCell>
                                <TableCell align="center"><img src={m2} alt='Startled by loud noices' style={{ height: '3em'}} /></TableCell>
                                <TableCell align="center"><DoneIcon sx={{ color: 'green' }}/></TableCell>
                            </TableRow>
                            <TableRow className='purple-row'>   
                                <TableCell>03</TableCell>
                                <TableCell>Hold head up</TableCell>
                                <TableCell align="center">03 Months</TableCell>
                                <TableCell align="center"><img src={m3} alt='Startled by loud noices' style={{ height: '3em'}} /></TableCell>
                                <TableCell align="center"><CloseIcon sx={{ color: 'red' }}/></TableCell>
                            </TableRow>
                            <TableRow className='pink-row'>
                                <TableCell style={{ backgroundColor: '#FAE8ED'}}>04</TableCell>
                                <TableCell>Make simple sounds</TableCell>
                                <TableCell align="center">03 Months</TableCell>
                                <TableCell align="center"><img src={m4} alt='Startled by loud noices' style={{ height: '3em'}} /></TableCell>
                                <TableCell align="center"><DoneIcon sx={{ color: 'green' }}/></TableCell>
                            </TableRow>
                            <TableRow className='purple-row'>
                                <TableCell>05</TableCell>
                                <TableCell>Wiggles and kicks with arms and legs</TableCell>
                                <TableCell align="center">04 Months</TableCell>
                                <TableCell align="center"><img src={m5} alt='Startled by loud noices' style={{ height: '3em'}} /></TableCell>
                                <TableCell align="center"><CloseIcon sx={{ color: 'red' }}/></TableCell>
                            </TableRow>
                            <TableRow className='pink-row'>
                                <TableCell>06</TableCell>
                                <TableCell>Communicate hunger, fear, discomfort</TableCell>
                                <TableCell align="center">04 Months</TableCell>
                                <TableCell align="center"><img src={m6} alt='Startled by loud noices' style={{ height: '3em'}} /></TableCell>
                                <TableCell align="center"></TableCell>
                            </TableRow>
                            <TableRow className='purple-row'>
                                <TableCell>07</TableCell>
                                <TableCell>Sits with some support</TableCell>
                                <TableCell align="center">04 Months</TableCell>
                                <TableCell align="center"><img src={m7} alt='Startled by loud noices' style={{ height: '3em'}} /></TableCell>
                                <TableCell align="center"></TableCell>
                            </TableRow>
                            <TableRow className='pink-row'>
                                <TableCell>08</TableCell>
                                <TableCell>Eyes track moving object 180 degrees</TableCell>
                                <TableCell align="center">05 Months</TableCell>
                                <TableCell align="center"><img src={m8} alt='Startled by loud noices' style={{ height: '3em'}} /></TableCell>
                                <TableCell align="center"></TableCell>
                            </TableRow>
                            <TableRow className='purple-row'>
                                <TableCell>09</TableCell>
                                <TableCell>Roll over</TableCell>
                                <TableCell align="center">05 Months</TableCell>
                                <TableCell align="center"><img src={m9} alt='Startled by loud noices' style={{ height: '3em'}} /></TableCell>
                                <TableCell align="center"></TableCell>
                            </TableRow>
                            <TableRow className='pink-row'>
                                <TableCell>10</TableCell>
                                <TableCell>Turns head to sounds</TableCell>
                                <TableCell align="center">06 Months</TableCell>
                                <TableCell align="center"><img src={m10} alt='Startled by loud noices' style={{ height: '3em'}} /></TableCell>
                                <TableCell align="center"></TableCell>
                            </TableRow>
                            <TableRow className='purple-row'>
                                <TableCell>11</TableCell>
                                <TableCell>Reach and grasp objects</TableCell>
                                <TableCell align="center">06 Months</TableCell>
                                <TableCell align="center"><img src={m8} alt='Startled by loud noices' style={{ height: '3em'}} /></TableCell>
                                <TableCell align="center"></TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </TableContainer>
                <h4>From 6 months to 12 months</h4>
                <TableContainer component={Paper}>
                    <Table>
                        <TableHead>
                            <TableRow className='pink-row'>
                                <TableCell style={{ width: '5%' }}>#</TableCell>
                                <TableCell align="center" style={{ width: '55%' }}>Development Milestones</TableCell>
                                <TableCell align="center" style={{ width: '20%' }}>Average age</TableCell>
                                <TableCell align="center" style={{ width: '10%' }}>Picture</TableCell>
                                <TableCell align="center" style={{ width: '10%' }}>Status</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            <TableRow className='purple-row'>
                                <TableCell>01</TableCell>
                                <TableCell>Sits well without support</TableCell>
                                <TableCell align="center">07 Months</TableCell>
                                <TableCell align="center"><img src={m12} alt='Sits well without support' style={{ height: '3em'}}/></TableCell>
                                <TableCell align="center"></TableCell>
                            </TableRow>
                            <TableRow className='pink-row'>
                                <TableCell>02</TableCell>
                                <TableCell>Passes objects from hand to hand</TableCell>
                                <TableCell align="center">08 Months</TableCell>
                                <TableCell align="center"><img src={m13} alt='Passes objects from hand to hand' style={{ height: '3em'}} /></TableCell>
                                <TableCell align="center"></TableCell>
                            </TableRow>
                            <TableRow className='purple-row'>   
                                <TableCell>03</TableCell>
                                <TableCell>Stands holding on</TableCell>
                                <TableCell align="center">09 Months</TableCell>
                                <TableCell align="center"><img src={m14} alt='Startled by loud noices' style={{ height: '3em'}} /></TableCell>
                                <TableCell align="center"></TableCell>
                            </TableRow>
                            <TableRow className='pink-row'>
                                <TableCell>04</TableCell>
                                <TableCell>Imitate simple speech sounds</TableCell>
                                <TableCell align="center">09 Months</TableCell>
                                <TableCell align="center"><img src={m15} alt='Startled by loud noices' style={{ height: '3em'}} /></TableCell>
                                <TableCell align="center"></TableCell>
                            </TableRow>
                            <TableRow className='purple-row'>
                                <TableCell>05</TableCell>
                                <TableCell>Pull to standing position without help</TableCell>
                                <TableCell align="center">10 Months</TableCell>
                                <TableCell align="center"><img src={m16} alt='Startled by loud noices' style={{ height: '3em'}} /></TableCell>
                                <TableCell align="center"></TableCell>
                            </TableRow>
                            <TableRow className='pink-row'>
                                <TableCell>06</TableCell>
                                <TableCell>Begins placing objects in and out of a container</TableCell>
                                <TableCell align="center">11 Months</TableCell>
                                <TableCell align="center"><img src={m17} alt='Startled by loud noices' style={{ height: '3em'}} /></TableCell>
                                <TableCell align="center"></TableCell>
                            </TableRow>
                            <TableRow className='purple-row'>
                                <TableCell>07</TableCell>
                                <TableCell>Plays simple game like peek-a-boo</TableCell>
                                <TableCell align="center">11 Months</TableCell>
                                <TableCell align="center"><img src={m18} alt='Startled by loud noices' style={{ height: '3em'}} /></TableCell>
                                <TableCell align="center"></TableCell>
                            </TableRow>
                            <TableRow className='pink-row'>
                                <TableCell>08</TableCell>
                                <TableCell>Copies multiple gestures (clap)</TableCell>
                                <TableCell align="center">11 Months</TableCell>
                                <TableCell align="center"><img src={m19} alt='Startled by loud noices' style={{ height: '3em'}} /></TableCell>
                                <TableCell align="center"></TableCell>
                            </TableRow>
                            <TableRow className='purple-row'>
                                <TableCell>09</TableCell>
                                <TableCell>Crawls on hands and knees</TableCell>
                                <TableCell align="center">11 Months</TableCell>
                                <TableCell align="center"><img src={m20} alt='Startled by loud noices' style={{ height: '3em'}} /></TableCell>
                                <TableCell align="center"></TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </TableContainer>
                <br></br>
                <h4>From 1 to 2 years</h4>
                <TableContainer component={Paper}>
                    <Table>
                        <TableHead>
                            <TableRow className='pink-row'>
                                <TableCell style={{ width: '5%' }}>#</TableCell>
                                <TableCell align="center" style={{ width: '55%' }}>Development Milestones</TableCell>
                                <TableCell align="center" style={{ width: '20%' }}>Average age</TableCell>
                                <TableCell align="center" style={{ width: '10%' }}>Picture</TableCell>
                                <TableCell align="center" style={{ width: '10%' }}>Status</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            <TableRow className='purple-row'>
                                <TableCell>01</TableCell>
                                <TableCell>Sits well without support</TableCell>
                                <TableCell align="center">07 Months</TableCell>
                                <TableCell align="center"><img src={m12} alt='Sits well without support' style={{ height: '3em'}}/></TableCell>
                                <TableCell align="center"></TableCell>
                            </TableRow>
                            <TableRow className='pink-row'>
                                <TableCell>02</TableCell>
                                <TableCell>Passes objects from hand to hand</TableCell>
                                <TableCell align="center">08 Months</TableCell>
                                <TableCell align="center"><img src={m13} alt='Passes objects from hand to hand' style={{ height: '3em'}} /></TableCell>
                                <TableCell align="center"></TableCell>
                            </TableRow>
                            <TableRow className='purple-row'>   
                                <TableCell>03</TableCell>
                                <TableCell>Stands holding on</TableCell>
                                <TableCell align="center">09 Months</TableCell>
                                <TableCell align="center"><img src={m14} alt='Startled by loud noices' style={{ height: '3em'}} /></TableCell>
                                <TableCell align="center"></TableCell>
                            </TableRow>
                            <TableRow className='pink-row'>
                                <TableCell>04</TableCell>
                                <TableCell>Imitate simple speech sounds</TableCell>
                                <TableCell align="center">09 Months</TableCell>
                                <TableCell align="center"><img src={m15} alt='Startled by loud noices' style={{ height: '3em'}} /></TableCell>
                                <TableCell align="center"></TableCell>
                            </TableRow>
                            <TableRow className='purple-row'>
                                <TableCell>05</TableCell>
                                <TableCell>Pull to standing position without help</TableCell>
                                <TableCell align="center">10 Months</TableCell>
                                <TableCell align="center"><img src={m16} alt='Startled by loud noices' style={{ height: '3em'}} /></TableCell>
                                <TableCell align="center"></TableCell>
                            </TableRow>
                            <TableRow className='pink-row'>
                                <TableCell>06</TableCell>
                                <TableCell>Begins placing objects in and out of a container</TableCell>
                                <TableCell align="center">11 Months</TableCell>
                                <TableCell align="center"><img src={m17} alt='Startled by loud noices' style={{ height: '3em'}} /></TableCell>
                                <TableCell align="center"></TableCell>
                            </TableRow>
                            <TableRow className='purple-row'>
                                <TableCell>07</TableCell>
                                <TableCell>Plays simple game like peek-a-boo</TableCell>
                                <TableCell align="center">11 Months</TableCell>
                                <TableCell align="center"><img src={m18} alt='Startled by loud noices' style={{ height: '3em'}} /></TableCell>
                                <TableCell align="center"></TableCell>
                            </TableRow>
                            <TableRow className='pink-row'>
                                <TableCell>08</TableCell>
                                <TableCell>Copies multiple gestures (clap)</TableCell>
                                <TableCell align="center">11 Months</TableCell>
                                <TableCell align="center"><img src={m19} alt='Startled by loud noices' style={{ height: '3em'}} /></TableCell>
                                <TableCell align="center"></TableCell>
                            </TableRow>
                            <TableRow className='purple-row'>
                                <TableCell>09</TableCell>
                                <TableCell>Crawls on hands and knees</TableCell>
                                <TableCell align="center">11 Months</TableCell>
                                <TableCell align="center"><img src={m20} alt='Startled by loud noices' style={{ height: '3em'}} /></TableCell>
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