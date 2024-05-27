import { Button, IconButton, SwipeableDrawer } from '@mui/material';
import { useEffect, useRef, useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import Header from '../../components/header';
import './styles.css';
import Beneficiary from './beneficiary';
import ChildProfile from './childProfile';
import EnrollForm from './enroll';
import { API_URL, getCookie, parsePatient } from '../../constants';
import CancelTwoToneIcon from '@mui/icons-material/CancelTwoTone';
import PrintTwoToneIcon from '@mui/icons-material/PrintTwoTone';
import ReactToPrint from 'react-to-print';
import VisibilityTwoToneIcon from '@mui/icons-material/VisibilityTwoTone';
import DeleteSweepTwoToneIcon from '@mui/icons-material/DeleteSweepTwoTone';
import Delete from './delete';

const Profile = () => {
    const [user, setUser] = useState({
        name: ''
    });
    const [enrollOpen, setEnrollOpen] = useState(false);
    const [userRows, setUserRows] = useState([]);
    const [profileOpen, setProfileOpen] = useState(false);
    const [delOpen, setDelOpen] = useState(false);

    const profileRef = useRef(null);

    const tblColumns = [
        { field: 'id', headerName: 'EPI No', headerClassName: 'table-header' },
        { field: 'name', headerName: 'Name', flex: 1, headerClassName: 'table-header' },
        { field: 'sex', headerName: 'Gender', headerClassName: 'table-header' },
        { field: 'foolhuma', headerName: 'Foolhuma', headerClassName: 'table-header' },
        {
            headerName: 'Actions', headerClassName: 'table-header', renderCell: (params) => {
                return (
                    <div style={{ display: 'flex', justifyContent: 'end', width: '100%' }}>
                        <IconButton onClick={() => { setUser(params.row); setProfileOpen(true); }}>
                            <VisibilityTwoToneIcon style={{ color: '#344966' }} />
                        </IconButton>
                        <IconButton onClick={() => { setUser(params.row); setDelOpen(true); }}>
                            <DeleteSweepTwoToneIcon style={{ color: '#FE6D73' }} />
                        </IconButton>
                    </div>
                );
            }
        },
    ]

    const fetchUsers = async () => {
        fetch(await API_URL() + 'api/getPatients', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'x-token': getCookie()
            },
        })
            .then(res => res.json())
            .then(out => {
                if (out.data.patients && out.data.patients.length > 0) {
                    const patients = out.data.patients.map((data) => {
                        return parsePatient(JSON.parse(data.data))
                    });
                    console.log("Parsed Patient", patients, "PUBLIC", out.data.patients.public);
                    setUserRows(patients);
                    setUser(patients[0])
                }
            })
            .catch(err => console.log("Error Catch", err))
    }

    useEffect(() => {
        fetchUsers();
    }, []);

    useEffect(() => {
        fetchUsers();
    }, []);

    return <div className='profile-container'>
        <div className='profile-wrapper'>
            <Header />
            <div className='profile-body'>
                <div className='profile-side'>
                    <Beneficiary />
                    <div className='expanded'>
                        <h5>Enrollments</h5>
                        <Button variant="outlined" size="small" onClick={() => {
                            setEnrollOpen(true);
                        }}>
                            Enroll
                        </Button>
                    </div>
                    <EnrollForm open={enrollOpen} setOpen={setEnrollOpen} refresh={fetchUsers} />
                    <DataGrid
                        rows={userRows}
                        columns={tblColumns}
                        autoHeight={true}
                        rowHeight={40}
                        headerHeight={40}
                        sx={{ border: 'none' }}
                        getRowClassName={(params) => `table-row`}
                    />
                </div>
            </div>
        </div>
        <SwipeableDrawer
            anchor='right'
            open={profileOpen}
            onClose={() => setProfileOpen(false)}
            onOpen={() => setProfileOpen(true)}
        >
            <div style={{ minWidth: '50vw' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', margin: '1% 5% 0 2%' }}>
                    <IconButton style={{ width: 'fit-content' }} onClick={() => setProfileOpen(false)}>
                        <CancelTwoToneIcon color='error' />
                    </IconButton>
                    <>
                        <ReactToPrint
                            trigger={() => <IconButton style={{ width: 'fit-content' }}>
                                <PrintTwoToneIcon color='primary' />
                            </IconButton>}
                            content={() => profileRef.current}
                        />
                    </>
                </div>

                <ChildProfile user={user} ref={profileRef} />
            </div>
        </SwipeableDrawer>
        <Delete open={delOpen} setClose={() => setDelOpen(false)} user={user} refresh={fetchUsers} />
    </div>
}

export default Profile;