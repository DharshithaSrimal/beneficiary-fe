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

const ADeworming = ({childData, allChildEvents, full}) => {

    // console.log(JSON.stringify(full))

    

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

    var vitaminA9Months = "XgAmcGObp5V"
    var vitaminA18Months = "LSMECP65Ty7"

    var vitaminA2Years = "Wnc0Lo2FwfC"
    var vitaminA2YearsDate = "yt1p2mH6xN6"
    var vitaminA2_5Years = "yClDrDjrmDc"
    var vitaminA2_5YearsDate = "mXDhvzMpbLS"

    var vitaminA3Years = "bdpAzzq2UGa"
    var vitaminA3YearsDate = "s9t5yLro27w"
    var vitaminA3_5Years = "yxNkrSXU6Dv"
    var vitaminA3_5YearsDate = "Ttfc7otRHDq"

    var vitaminA4Years = "om3f4fqIfJT"
    var vitaminA4YearsDate = "t9QSyfAsU6t"
    var vitaminA4_5Years = "FLFETWw2Zag"
    var vitaminA4_5YearsDate = "DID5CJ3hYjY"

    var vitaminA5Years = "sohefiqFjb2"
    var vitaminA5YearsDate = "rHCHEVBDY4W"
    var vitaminA5_5Years = "pxa56TIFRfq"
    var vitaminA5_5YearsDate = "RGMhi4fZW2a"

    var deworming2Years = "Q8hLsT4fkva"
    var deworming2YearsDate = "vQW23uYML6Y"

    var deworming3Years = "SyCtTMC7FcY"
    var deworming3YearsDate = "XwiuoGTV8rJ"

    var deworming4Years = "YyYHNZxPfre"
    var deworming4YearsDate = "rH0CL0w0Yq8"

    var deworming5Years = "TmWK3iITDCF"
    var deworming5YearsDate = "kbWZv2dPHoi"

    console.log(full.find(o => o.dataElement === vitaminA3Years))


    return <div className='dashboard-container'>
        <div className='dashboard-wrapper'>
            <div className='content-wrapper'>
                <TableContainer component={Paper}>
                    <Table>
                        <TableHead>
                            <TableRow className="phc-table-header">
                            <TableCell className="phc-table-header-cell" align="center" >Age</TableCell>
                                <TableCell className="phc-table-header-cell" align="center">
                                    Vitamin A Schedule <br/>
                                    <span className='dateReceived'>Date Received</span>
                                </TableCell>
                                <TableCell className="phc-table-header-cell" align="center">
                                    Deworming Schedule <br/>
                                    <span className='dateReceived'>Date Received</span>
                                </TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            <TableRow>
                                <TableCell align='center'> 9 Months </TableCell>
                                <TableCell align="center" style={{  }}>
                                    {

                                        full.length > 0 && full.find(o => o.dataElement === vitaminA9Months) && full.find(o => o.dataElement === vitaminA9Months).value == 'true' ? 
                                            "Yes"
                                            : "N/A"
                                    }
                                </TableCell>
                                <TableCell align="center" className='grey-row'></TableCell>
                            </TableRow>

                            <TableRow>
                                <TableCell align='center'> 18 Months </TableCell>
                                <TableCell align="center" style={{  }}>
                                    {

                                        full.length > 0 && full.find(o => o.dataElement === vitaminA18Months) && full.find(o => o.dataElement === vitaminA18Months).value == 'true' ? 
                                            "Yes"
                                            : "N/A"
                                    }
                                </TableCell>
                                <TableCell align="center" className='grey-row'></TableCell>
                            </TableRow>

                            <TableRow>
                                <TableCell align='center'> 2 Years </TableCell>
                                <TableCell align="center" style={{  }}>
                                    {

                                        full.length > 0 && full.find(o => o.dataElement === vitaminA2Years) && full.find(o => o.dataElement === vitaminA2Years).value == 'true' ? 
                                            full.find(o => o.dataElement === vitaminA2YearsDate).value
                                            : "N/A"
                                    }
                                </TableCell>
                                <TableCell align="center" style={{  }}>
                                    {

                                        full.length > 0 && full.find(o => o.dataElement === deworming2Years) && full.find(o => o.dataElement === deworming2Years).value == 'true' ? 
                                            full.find(o => o.dataElement === deworming2YearsDate).value
                                            : "N/A"
                                    }
                                </TableCell>
                            </TableRow>

                            <TableRow>
                                <TableCell align='center'> 2 <sup>1/2</sup> Years </TableCell>
                                <TableCell align="center" style={{  }}>
                                    {

                                        full.length > 0 && full.find(o => o.dataElement === vitaminA2_5Years) && full.find(o => o.dataElement === vitaminA2_5Years).value == 'true' ? 
                                            full.find(o => o.dataElement === vitaminA2_5YearsDate).value
                                            : "N/A"
                                    }
                                </TableCell>
                                <TableCell align="center" className='grey-row'></TableCell>
                            </TableRow>

                            <TableRow>
                                <TableCell align='center'> 3 Years </TableCell>
                                <TableCell align="center" style={{  }}>
                                    {

                                        full.length > 0 && full.find(o => o.dataElement === vitaminA3Years) && full.find(o => o.dataElement === vitaminA3Years).value == 'true' ? 
                                            full.find(o => o.dataElement === vitaminA3YearsDate).value
                                            : "N/A"
                                    }
                                </TableCell>
                                <TableCell align="center" style={{  }}>
                                    {

                                        full.length > 0 && full.find(o => o.dataElement === deworming3Years) && full.find(o => o.dataElement === deworming3Years).value == 'true' ? 
                                            full.find(o => o.dataElement === deworming3YearsDate).value
                                            : "N/A"
                                    }
                                </TableCell>
                            </TableRow>

                            <TableRow>
                                <TableCell align='center'> 3 <sup>1/2</sup> Years </TableCell>
                                <TableCell align="center" style={{  }}>
                                    {

                                        full.length > 0 && full.find(o => o.dataElement === vitaminA3_5Years) && full.find(o => o.dataElement === vitaminA3_5Years).value == 'true' ? 
                                            full.find(o => o.dataElement === vitaminA3_5YearsDate).value
                                            : "N/A"
                                    }
                                </TableCell>
                                <TableCell align="center"  className='grey-row'></TableCell>
                            </TableRow>

                            <TableRow>
                                <TableCell align='center'> 4 Years </TableCell>
                                <TableCell align="center" style={{  }}>
                                    {

                                        full.length > 0 && full.find(o => o.dataElement === vitaminA4Years) && full.find(o => o.dataElement === vitaminA4Years).value == 'true' ? 
                                            full.find(o => o.dataElement === vitaminA4YearsDate).value
                                            : "N/A"
                                    }
                                </TableCell>
                                <TableCell align="center" style={{  }}>
                                    {

                                        full.length > 0 && full.find(o => o.dataElement === deworming4Years) && full.find(o => o.dataElement === deworming4Years).value == 'true' ? 
                                            full.find(o => o.dataElement === deworming4YearsDate).value
                                            : "N/A"
                                    }
                                </TableCell>
                            </TableRow>

                            <TableRow>
                                <TableCell align='center'> 4 <sup>1/2</sup> Years </TableCell>
                                <TableCell align="center" style={{  }}>
                                    {

                                        full.length > 0 && full.find(o => o.dataElement === vitaminA4_5Years) && full.find(o => o.dataElement === vitaminA4_5Years).value == 'true' ? 
                                            full.find(o => o.dataElement === vitaminA4_5YearsDate).value
                                            : "N/A"
                                    }
                                </TableCell>
                                <TableCell align="center"  className='grey-row'></TableCell>
                            </TableRow>

                            <TableRow>
                                <TableCell align='center'> 5 Years </TableCell>
                                <TableCell align="center" style={{  }}>
                                    {

                                        full.length > 0 && full.find(o => o.dataElement === vitaminA5Years) && full.find(o => o.dataElement === vitaminA5Years).value == 'true' ? 
                                            full.find(o => o.dataElement === vitaminA5YearsDate).value
                                            : "N/A"
                                    }
                                </TableCell>
                                <TableCell align="center" style={{  }}>
                                    {

                                        full.length > 0 && full.find(o => o.dataElement === deworming5Years) && full.find(o => o.dataElement === deworming5Years).value == 'true' ? 
                                            full.find(o => o.dataElement === deworming5YearsDate).value
                                            : "N/A"
                                    }
                                </TableCell>
                            </TableRow>

                            <TableRow>
                                <TableCell align='center'> 5 <sup>1/2</sup> Years </TableCell>
                                <TableCell align="center" style={{  }}>
                                    {

                                        full.length > 0 && full.find(o => o.dataElement === vitaminA5_5Years) && full.find(o => o.dataElement === vitaminA5_5Years).value == 'true' ? 
                                            full.find(o => o.dataElement === vitaminA5_5YearsDate).value
                                            : "N/A"
                                    }
                                </TableCell>
                                <TableCell align="center"  className='grey-row'></TableCell>
                            </TableRow>
                            
                        </TableBody>
                    </Table>
                </TableContainer>
                <br></br>
            </div>
        </div>
    </div>
}

export default ADeworming;