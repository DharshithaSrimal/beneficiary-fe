import './styles.css';
import { useEffect, useState } from 'react';
import { API_URL, getCookie } from '../../constants';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import CircleIcon from '@mui/icons-material/Circle';
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

const PublicHealthRegistry = ({ phcEvents }) => {

    console.log("PHC Events", phcEvents)
    
    const [children, setChildren] = useState([]);
    const [childPos, setChildPos] = useState(null);
    const [child, setChild] = useState(null);
    const [fullEvents, setFullEvents] = useState([]);
    const [vacList, setVacList] = useState([]);
    const [latestVisit, setLatestVisit] = useState(null);
    const [monthsSinceLastVisit, setMonthsSinceLastVisit] = useState(null);

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
    const getDataElementValue = (dataValues, dataElementId) => {
        const dataElement = dataValues.find(element => element.dataElement === dataElementId);
        return dataElement ? dataElement.value : 'N/A';
    };

    useEffect(() => {
        if (phcEvents && phcEvents.length > 0) {
            // Sort events by eventDate
            const sortedEvents = [...phcEvents].sort((a, b) => new Date(b.eventDate) - new Date(a.eventDate));
            const latestEvent = sortedEvents[0];
            setLatestVisit(latestEvent);

            // Calculate months since last visit
            const lastVisitDate = new Date(latestEvent.eventDate);
            const currentDate = new Date();
            const monthsDifference = (currentDate.getFullYear() - lastVisitDate.getFullYear()) * 12 + (currentDate.getMonth() - lastVisitDate.getMonth());
            setMonthsSinceLastVisit(monthsDifference);
        }
    }, [phcEvents]);

    useEffect(() => {  fetchUser(); }, []);
    useEffect(() => { fetchUser(); }, [childPos]);

    return <div className='dashboard-container'>
        <div className='dashboard-wrapper'>
            <div className='content-wrapper'>
                {phcEvents && (
                    <TableContainer component={Paper}>
                        <Table sx={{ minWidth: 650 }} aria-label="simple table">
                            <TableBody>
                                <TableRow className="phc-table-header">
                                    <TableCell className="phc-table-header-cell" colSpan={2} align="center">Visits</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>Last visit</TableCell>
                                    <TableCell align="center">{latestVisit ? new Date(latestVisit.eventDate).toLocaleDateString('en-CA') : 'N/A'}</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>Number of visits</TableCell>
                                    <TableCell align="center">{phcEvents.length}</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>Months since last visits</TableCell>
                                    <TableCell align="center">{monthsSinceLastVisit !== null ? monthsSinceLastVisit : 'N/A'}</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>Next visit</TableCell>
                                    <TableCell align="center"></TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </TableContainer>
                )}
                <br></br>
                {latestVisit && (
                    getDataElementValue(latestVisit.dataValues, `${process.env.REACT_APP_DIABETES}`) !== 'N/A' ||
                    getDataElementValue(latestVisit.dataValues, `${process.env.REACT_APP_HYPERLIPIDAEMIA}`) !== 'N/A' ||
                    getDataElementValue(latestVisit.dataValues, `${process.env.REACT_APP_COPD}`) !== 'N/A' ||
                    getDataElementValue(latestVisit.dataValues, `${process.env.REACT_APP_ASTHMA}`) !== 'N/A'
                ) && (
                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableBody>
                            <TableRow className="phc-table-header">
                                <TableCell className="phc-table-header-cell" colSpan={2} align="center">Diagnosis</TableCell>
                            </TableRow>
                            <TableRow>
                                <List className="diagnosis-row" sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }} aria-label="contacts">
                                    <ListItem disablePadding>
                                        {latestVisit && getDataElementValue(latestVisit.dataValues, `${process.env.REACT_APP_DIABETES}`) !== 'N/A' && (
                                            <ListItem disablePadding>
                                                Diabetes - {getDataElementValue(latestVisit.dataValues, `${process.env.REACT_APP_DIABETES}`)}
                                            </ListItem>
                                        )}
                                    </ListItem>
                                    <ListItem disablePadding>
                                        {latestVisit && getDataElementValue(latestVisit.dataValues, `${process.env.REACT_APP_HYPERLIPIDAEMIA}`) !== 'N/A' && (
                                            <ListItem disablePadding>
                                                Hyperlipidemia - {getDataElementValue(latestVisit.dataValues, `${process.env.REACT_APP_HYPERLIPIDAEMIA}`)}
                                            </ListItem>
                                        )}
                                    </ListItem>
                                    <ListItem disablePadding>
                                        {latestVisit && getDataElementValue(latestVisit.dataValues, `${process.env.REACT_APP_COPD}`) !== 'N/A' && (
                                            <ListItem disablePadding>
                                                COPD - {getDataElementValue(latestVisit.dataValues, `${process.env.REACT_APP_COPD}`)}
                                            </ListItem>
                                        )}
                                    </ListItem>
                                    <ListItem disablePadding>
                                        {latestVisit && getDataElementValue(latestVisit.dataValues, `${process.env.REACT_APP_ASTHMA}`) !== 'N/A' && (
                                            <ListItem disablePadding>
                                                Asthma - {getDataElementValue(latestVisit.dataValues, `${process.env.REACT_APP_ASTHMA}`)}
                                            </ListItem>
                                        )}
                                    </ListItem>
                                </List>
                            </TableRow>
                        </TableBody>
                    </Table>
                </TableContainer> 
                )}
                <br></br>
                {latestVisit && (
                    getDataElementValue(latestVisit.dataValues, `${process.env.REACT_APP_HEIGHT}`) !== 'N/A' ||
                    getDataElementValue(latestVisit.dataValues, `${process.env.REACT_APP_WEIGHT}`) !== 'N/A' ||
                    getDataElementValue(latestVisit.dataValues, `${process.env.REACT_APP_BLOOD_PRESSURE}`) !== 'N/A' ||
                    getDataElementValue(latestVisit.dataValues, `${process.env.REACT_APP_WAIST_CIRCUMFERENCE}`) !== 'N/A' ||
                    getDataElementValue(latestVisit.dataValues, `${process.env.REACT_APP_WAIST_BODY_FAT}`) !== 'N/A'
                ) && (
                    <TableContainer component={Paper}>
                        <Table sx={{ minWidth: 650 }} aria-label="simple table">
                            <TableBody>
                                <TableRow className="phc-table-header">
                                    <TableCell className="phc-table-header-cell" colSpan={2} align="center">Examinations</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>Height</TableCell>
                                    <TableCell align="center">{latestVisit ? getDataElementValue(latestVisit.dataValues, `${process.env.REACT_APP_HEIGHT}`): 'N/A'}cm</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>Weight</TableCell>
                                    <TableCell align="center">
                                    {latestVisit && getDataElementValue(latestVisit.dataValues, `${process.env.REACT_APP_WEIGHT}`) ? (
                                        <>
                                            {getDataElementValue(latestVisit.dataValues, `${process.env.REACT_APP_WEIGHT}`)}kg ({new Date(latestVisit.eventDate).toISOString().split('T')[0]})
                                        </>
                                    ) : 'N/A'}
                                </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>Blood Pressure</TableCell>
                                    <TableCell align="center">{latestVisit ? getDataElementValue(latestVisit.dataValues, `${process.env.REACT_APP_BLOOD_PRESSURE}`): 'N/A'} ({new Date(latestVisit.eventDate).toISOString().split('T')[0]}) </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>Waist circumference</TableCell>
                                    <TableCell align="center">{latestVisit ? getDataElementValue(latestVisit.dataValues, `${process.env.REACT_APP_WAIST_CIRCUMFERENCE}`): 'N/A'} ({new Date(latestVisit.eventDate).toISOString().split('T')[0]}) </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>Body fat</TableCell>
                                    <TableCell align="center">{latestVisit ? getDataElementValue(latestVisit.dataValues, `${process.env.REACT_APP_WAIST_BODY_FAT}`): 'N/A'} ({new Date(latestVisit.eventDate).toISOString().split('T')[0]}) </TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </TableContainer>
                )}
                <br></br>
                {latestVisit && (
                    getDataElementValue(latestVisit.dataValues, 'e86IssaHvSm') !== 'N/A' ||
                    getDataElementValue(latestVisit.dataValues, 'yptOqRaEaYg') !== 'N/A' ||
                    getDataElementValue(latestVisit.dataValues, 'ZI3RQBfK7p7') !== 'N/A' ||
                    getDataElementValue(latestVisit.dataValues, 'E9pZuvjqutZ') !== 'N/A' ||
                    getDataElementValue(latestVisit.dataValues, 'lqAyxwQyTB1') !== 'N/A' ||
                    getDataElementValue(latestVisit.dataValues, 'V9NHh4JU8Uf') !== 'N/A' ||
                    getDataElementValue(latestVisit.dataValues, 'Oa5cJZSmV7l') !== 'N/A' ||
                    getDataElementValue(latestVisit.dataValues, 'yXWnTMdz9rV') !== 'N/A'
                ) && (
                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableBody>
                            <TableRow className="phc-table-header">
                                <TableCell className="phc-table-header-cell" colSpan={2} align="center">Investigations</TableCell>
                            </TableRow>
                            {latestVisit && getDataElementValue(latestVisit.dataValues, `${process.env.REACT_APP_Fasting_Blood_Sugar}`) !== 'N/A' && (
                                <TableRow>
                                    <TableCell>Fasting Blood Sugar</TableCell>
                                    <TableCell align="center">{getDataElementValue(latestVisit.dataValues, `${process.env.REACT_APP_Fasting_Blood_Sugar}`)} mmHg</TableCell>
                                </TableRow>
                            )}
                            {latestVisit && getDataElementValue(latestVisit.dataValues, `${process.env.REACT_APP_Random_Blood_Sugar}`) !== 'N/A' && (
                                <TableRow>
                                    <TableCell>Random Blood Sugar</TableCell>
                                    <TableCell align="center">{getDataElementValue(latestVisit.dataValues, `${process.env.REACT_APP_Random_Blood_Sugar}`)} mmHg</TableCell>
                                </TableRow>
                            )}
                            {latestVisit && getDataElementValue(latestVisit.dataValues, `${process.env.REACT_APP_Random_HBA1C}`) !== 'N/A' && (
                                <TableRow>
                                    <TableCell>HBA1C</TableCell>
                                    <TableCell align="center">{getDataElementValue(latestVisit.dataValues, `${process.env.REACT_APP_Random_HBA1C}`)}</TableCell>
                                </TableRow>
                            )}
                            {latestVisit && getDataElementValue(latestVisit.dataValues, 'E9pZuvjqutZ') !== 'N/A' && (
                                <TableRow>
                                    <TableCell>Total Cholesterol</TableCell>
                                    <TableCell align="center">{getDataElementValue(latestVisit.dataValues, 'E9pZuvjqutZ')}</TableCell>
                                </TableRow>
                            )}
                            {latestVisit && getDataElementValue(latestVisit.dataValues, 'lqAyxwQyTB1') !== 'N/A' && (
                                <TableRow>
                                    <TableCell>Triglycerides</TableCell>
                                    <TableCell align="center">{getDataElementValue(latestVisit.dataValues, 'lqAyxwQyTB1')}</TableCell>
                                </TableRow>
                            )}
                            {latestVisit && getDataElementValue(latestVisit.dataValues, 'V9NHh4JU8Uf') !== 'N/A' && (
                                <TableRow>
                                    <TableCell>HDL - High Density Lipoprotein</TableCell>
                                    <TableCell align="center">{getDataElementValue(latestVisit.dataValues, 'V9NHh4JU8Uf')}</TableCell>
                                </TableRow>
                            )}
                            {latestVisit && getDataElementValue(latestVisit.dataValues, 'Oa5cJZSmV7l') !== 'N/A' && (
                                <TableRow>
                                    <TableCell>LDL - Low Density Lipoprotein</TableCell>
                                    <TableCell align="center">{getDataElementValue(latestVisit.dataValues, 'Oa5cJZSmV7l')}</TableCell>
                                </TableRow>
                            )}
                            {latestVisit && getDataElementValue(latestVisit.dataValues, 'yXWnTMdz9rV') !== 'N/A' && (
                                <TableRow>
                                    <TableCell>VLDL - Very Low Density Lipoprotein</TableCell>
                                    <TableCell align="center">{getDataElementValue(latestVisit.dataValues, 'yXWnTMdz9rV')}</TableCell>
                                </TableRow>
                            )}
                        </TableBody>
                    </Table>
                </TableContainer>
                )}
                <br></br>
            
                </div>
        </div>
    </div>
}

export default PublicHealthRegistry;