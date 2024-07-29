import './styles.css';
import { useEffect, useState } from 'react';
import { API_URL, getCookie } from '../../constants';
import { Table, Card, CardContent, Typography, CardActions, Button, Box } from '@mui/material';
import {TableBody, Grid} from '@mui/material';
import {styled} from '@mui/material';
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

import m1_0to2_img from '../../assets/avatar/m1_0to2.png'
import m2_0to2_img from '../../assets/avatar/m2_0to2.png'
import m3_0to2_img from '../../assets/avatar/m3_0to2.png'
import m4_0to2_img from '../../assets/avatar/m4_0to2.png'

import m1_2to4_img from '../../assets/avatar/m1_2to4.png'
import m2_2to4_img from '../../assets/avatar/m2_2to4.png'
import m3_2to4_img from '../../assets/avatar/m3_2to4.png'
import m4_2to4_img from '../../assets/avatar/m4_2to4.png'

import m1_4to6_img from '../../assets/avatar/m1_4to6.png'
import m2_4to6_img from '../../assets/avatar/m2_4to6.png'
import m3_4to6_img from '../../assets/avatar/m3_4to6.png'
import m4_4to6_img from '../../assets/avatar/m4_4to6.png'

import m1_6to9_img from '../../assets/avatar/m1_6to9.png'
import m2_6to9_img from '../../assets/avatar/m2_6to9.png'
import m3_6to9_img from '../../assets/avatar/m3_6to9.png'
import m4_6to9_img from '../../assets/avatar/m4_6to9.png'

import m1_9to12_img from '../../assets/avatar/m1_9to12.png'
import m2_9to12_img from '../../assets/avatar/m2_9to12.png'
import m3_9to12_img from '../../assets/avatar/m3_9to12.png'
import m4_9to12_img from '../../assets/avatar/m4_9to12.png'

import m1_12to15_img from '../../assets/avatar/m1_12to15.png'
import m2_12to15_img from '../../assets/avatar/m2_12to15.png'
import m3_12to15_img from '../../assets/avatar/m3_12to15.png'
import m4_12to15_img from '../../assets/avatar/m4_12to15.png'

import m1_15to18_img from '../../assets/avatar/m1_15to18.png'
import m2_15to18_img from '../../assets/avatar/m2_15to18.png'
import m3_15to18_img from '../../assets/avatar/m3_15to18.png'
import m4_15to18_img from '../../assets/avatar/m4_15to18.png'

import m1_18to24_img from '../../assets/avatar/m1_18to24.png'
import m2_18to24_img from '../../assets/avatar/m2_18to24.png'
import m3_18to24_img from '../../assets/avatar/m3_18to24.png'
import m4_18to24_img from '../../assets/avatar/m4_18to24.png'

import m1_24to30_img from '../../assets/avatar/m1_24to30.png'
import m2_24to30_img from '../../assets/avatar/m2_24to30.png'

import m1_30to36_img from '../../assets/avatar/m1_30to36.png'
import m2_30to36_img from '../../assets/avatar/m2_30to36.png'
import m3_30to36_img from '../../assets/avatar/m3_30to36.png'
import m4_30to36_img from '../../assets/avatar/m4_30to36.png'

import m1_36to48_img from '../../assets/avatar/m1_36to48.png'
import m2_36to48_img from '../../assets/avatar/m2_36to48.png'
import m3_36to48_img from '../../assets/avatar/m3_36to48.png'
import m4_36to48_img from '../../assets/avatar/m4_36to48.png'

import m1_48to60_img from '../../assets/avatar/m1_48to60.png'
import m2_48to60_img from '../../assets/avatar/m2_48to60.png'
import m3_48to60_img from '../../assets/avatar/m3_48to60.png'
import m4_48to60_img from '../../assets/avatar/m4_48to60.png'


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

const Milestones = ({developmentEvents}) => {

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

    // const classes = {
    //     root: {
    //       flexGrow: 1
    //     },
    //     disabled: {
    //         paper: {
    //             padding: 12,
    //             //   textAlign: "center",
    //             color: "rgba(0,0,0,0.26)",
    //             fontFamily: 'Open Sans',
    //             backgroundColor: "rgba(0,0,0,0.12)",
    //             minHeight: 150
    //         },
    //         cardTitle: {
    //             fontWeight: 800,
    //             fontSize: 14,
    //             paddingBottom: 10
    //         }, 
    //         cardMonths: {
    //             fontSize: 12
    //         },
    //     },
    //     success: {
    //         paper: {
    //         padding: 12,
    //         //   textAlign: "center",
    //         color: "#FFF",
    //         fontFamily: 'Open Sans',
    //         backgroundColor: "#1F7A1F"
    //         },
    //         cardTitle: {
    //             fontWeight: 800,
    //             fontSize: 14,
    //             paddingBottom: 10
    //         }, 
    //         cardMonths: {
    //             fontSize: 12,
    //             color: "#dfdfdf"
    //         },
    //     },
    //     failure: {
    //         paper: {
    //         padding: 12,
    //         //   textAlign: "center",
    //         color: "#FFF",
    //         fontFamily: 'Open Sans',
    //         backgroundColor: "#C41C1C"
    //         },
    //         cardTitle: {
    //             fontWeight: 800,
    //             fontSize: 14,
    //             paddingBottom: 10
    //         }, 
    //         cardMonths: {
    //             fontSize: 12,
    //             color: "#dfdfdf"
    //         },
    //     },
    //     milestoneTitle: {
    //         paper: {
    //             padding: 12,
    //             paddingRight: 20,
    //             paddingLeft: 20,
    //             //   textAlign: "center",
    //             color: "#FFF",
    //             fontSize: 20,
    //             fontWeight: 800,
    //             fontFamily: 'Open Sans',
    //             backgroundColor: "#0B6BCB",
    //             borderRadius: 0
    //         }
    //     },
    //     milestoneTag: {
    //         paper: {
    //             padding: 12,
    //             paddingLeft: 15,
    //             //   textAlign: "center",
    //             // color: "#FFF",
    //             fontSize: 18,
    //             fontWeight: 800,
    //             fontFamily: 'Open Sans',
    //             // backgroundColor: "#0B6BCB",
    //             borderRadius: 0
    //         }
    //     }
    //   };

    // //Milestone 1
    // var m1_0to2_1_paper = classes.disabled.paper;
    // var m1_0to2_1_cardTitle = classes.disabled.cardTitle;
    // var m1_0to2_1_cardMonths = classes.disabled.cardMonths;

    // var m1_0to2_2_paper = classes.disabled.paper;
    // var m1_0to2_2_cardTitle = classes.disabled.cardTitle;
    // var m1_0to2_2_cardMonths = classes.disabled.cardMonths;

    // var m1_0to2_3_paper = classes.disabled.paper;
    // var m1_0to2_3_cardTitle = classes.disabled.cardTitle;
    // var m1_0to2_3_cardMonths = classes.disabled.cardMonths;

    // var m1_0to2_4_paper = classes.disabled.paper;
    // var m1_0to2_4_cardTitle = classes.disabled.cardTitle;
    // var m1_0to2_4_cardMonths = classes.disabled.cardMonths;

    // var m1_2to4_1_paper = classes.disabled.paper;
    // var m1_2to4_1_cardTitle = classes.disabled.cardTitle;
    // var m1_2to4_1_cardMonths = classes.disabled.cardMonths;

    // var m1_2to4_2_paper = classes.disabled.paper;
    // var m1_2to4_2_cardTitle = classes.disabled.cardTitle;
    // var m1_2to4_2_cardMonths = classes.disabled.cardMonths;

    // var m1_2to4_3_paper = classes.disabled.paper;
    // var m1_2to4_3_cardTitle = classes.disabled.cardTitle;
    // var m1_2to4_3_cardMonths = classes.disabled.cardMonths;

    // // Milestone 2
    // var m2_0to2_1_paper = classes.disabled.paper;
    // var m2_0to2_1_cardTitle = classes.disabled.cardTitle;
    // var m2_0to2_1_cardMonths = classes.disabled.cardMonths;

    // var m2_0to2_2_paper = classes.disabled.paper;
    // var m2_0to2_2_cardTitle = classes.disabled.cardTitle;
    // var m2_0to2_2_cardMonths = classes.disabled.cardMonths;

    // var m2_0to4_1_paper = classes.disabled.paper;
    // var m2_0to4_1_cardTitle = classes.disabled.cardTitle;
    // var m2_0to4_1_cardMonths = classes.disabled.cardMonths;

    // var m2_0to4_2_paper = classes.disabled.paper;
    // var m2_0to4_2_cardTitle = classes.disabled.cardTitle;
    // var m2_0to4_2_cardMonths = classes.disabled.cardMonths;

    // var m2_0to4_3_paper = classes.disabled.paper;
    // var m2_0to4_3_cardTitle = classes.disabled.cardTitle;
    // var m2_0to4_3_cardMonths = classes.disabled.cardMonths;

    // // Milestone 3
    // var m3_0to2_1_paper = classes.disabled.paper;
    // var m3_0to2_1_cardTitle = classes.disabled.cardTitle;
    // var m3_0to2_1_cardMonths = classes.disabled.cardMonths;

    // var m3_0to2_2_paper = classes.disabled.paper;
    // var m3_0to2_2_cardTitle = classes.disabled.cardTitle;
    // var m3_0to2_2_cardMonths = classes.disabled.cardMonths;

    // var m3_2to4_1_paper = classes.disabled.paper;
    // var m3_2to4_1_cardTitle = classes.disabled.cardTitle;
    // var m3_2to4_1_cardMonths = classes.disabled.cardMonths;

    // var m3_2to4_2_paper = classes.disabled.paper;
    // var m3_2to4_2_cardTitle = classes.disabled.cardTitle;
    // var m3_2to4_2_cardMonths = classes.disabled.cardMonths;

    // //Milestone 4
    // var m4_0to2_1_paper = classes.disabled.paper;
    // var m4_0to2_1_cardTitle = classes.disabled.cardTitle;
    // var m4_0to2_1_cardMonths = classes.disabled.cardMonths;

    // var m4_0to2_2_paper = classes.disabled.paper;
    // var m4_0to2_2_cardTitle = classes.disabled.cardTitle;
    // var m4_0to2_2_cardMonths = classes.disabled.cardMonths;

    // var m4_0to2_3_paper = classes.disabled.paper;
    // var m4_0to2_3_cardTitle = classes.disabled.cardTitle;
    // var m4_0to2_3_cardMonths = classes.disabled.cardMonths;

    // var m4_2to4_1_paper = classes.disabled.paper;
    // var m4_2to4_1_cardTitle = classes.disabled.cardTitle;
    // var m4_2to4_1_cardMonths = classes.disabled.cardMonths;

    // var m4_2to4_2_paper = classes.disabled.paper;
    // var m4_2to4_2_cardTitle = classes.disabled.cardTitle;
    // var m4_2to4_2_cardMonths = classes.disabled.cardMonths;

    // var m4_2to4_3_paper = classes.disabled.paper;
    // var m4_2to4_3_cardTitle = classes.disabled.cardTitle;
    // var m4_2to4_3_cardMonths = classes.disabled.cardMonths;

    // var m4_2to4_4_paper = classes.disabled.paper;
    // var m4_2to4_4_cardTitle = classes.disabled.cardTitle;
    // var m4_2to4_4_cardMonths = classes.disabled.cardMonths;

    // var m4_2to4_5_paper = classes.disabled.paper;
    // var m4_2to4_5_cardTitle = classes.disabled.cardTitle;
    // var m4_2to4_5_cardMonths = classes.disabled.cardMonths;

    
    // console.log ("developmentEvents", developmentEvents)

    var m1_0to2_1_id = "v6P3nKGeHLL";
    var m1_0to2_2_id = "LiLtoNpzbiU";
    var m1_0to2_3_id = "SN74UaUnfqx";
    var m1_0to2_4_id = "Rsa3kO41gUW";

    var m2_0to2_1_id = "EzOd4SWHTPt";
    var m2_0to2_2_id = "kGvcjLkNHrF";

    var m3_0to2_1_id = "d1ZEgqpvfOC";
    var m3_0to2_2_id = "zhLgObBMGzY";

    var m4_0to2_1_id = "h3MGqOKUhE7";
    var m4_0to2_2_id = "XW3VkvrPKuM";
    var m4_0to2_3_id = "qrGLVpwbNFK";

    var m1_0to2_1;
    var m1_0to2_2 = "";
    var m1_0to2_3 = "";
    var m1_0to2_4 = "";

    var m2_0to2_1 = "";
    var m2_0to2_2 = "";

    var m3_0to2_1 = "";
    var m3_0to2_2 = "";

    var m4_0to2_1 = "";
    var m4_0to2_2 = "";
    var m4_0to2_3 = "";

    if(developmentEvents.length > 0) {

        developmentEvents.map((data) => {

            m1_0to2_1 = data.dataValues.find(o => o.dataElement === m1_0to2_1_id)
            m1_0to2_2 = data.dataValues.find(o => o.dataElement === m1_0to2_2_id)
            m1_0to2_3 = data.dataValues.find(o => o.dataElement === m1_0to2_3_id)
            m1_0to2_4 = data.dataValues.find(o => o.dataElement === m1_0to2_4_id)

            m2_0to2_1 = data.dataValues.find(o => o.dataElement === m2_0to2_1_id)
            m2_0to2_2 = data.dataValues.find(o => o.dataElement === m2_0to2_2_id)

            m3_0to2_1 = data.dataValues.find(o => o.dataElement === m3_0to2_1_id)
            m3_0to2_2 = data.dataValues.find(o => o.dataElement === m3_0to2_2_id)

            m4_0to2_1 = data.dataValues.find(o => o.dataElement === m4_0to2_1_id)
            m4_0to2_2 = data.dataValues.find(o => o.dataElement === m4_0to2_2_id)
            m4_0to2_3 = data.dataValues.find(o => o.dataElement === m4_0to2_3_id)

            // console.log(data);
        })
        
    }

    if(m1_0to2_1 && m1_0to2_1.value == 'true') {
        m1_0to2_1 = true;
    } else if (m1_0to2_1 && m1_0to2_1.value == 'false') {
        m1_0to2_1 = false;
    }

    if(m1_0to2_2 && m1_0to2_2.value == 'true') {
        m1_0to2_2 = true;
    } else if (m1_0to2_2 && m1_0to2_2.value == 'false') {
        m1_0to2_2 = false;
    }

    if(m1_0to2_3 && m1_0to2_3.value == 'true') {
        m1_0to2_3 = true;
    } else if (m1_0to2_3 && m1_0to2_3.value == 'false') {
        m1_0to2_3 = false;
    }

    if(m1_0to2_4 && m1_0to2_4.value == 'true') {
        m1_0to2_4 = true;
    } else if (m1_0to2_4 && m1_0to2_4.value == 'false') {
        m1_0to2_4 = false;
    }

    if(m2_0to2_1 && m2_0to2_1.value == 'true') {
        m2_0to2_1 = true;
    } else if (m2_0to2_1 && m2_0to2_1.value == 'false') {
        m2_0to2_1 = false;
    }

    if(m2_0to2_2 && m2_0to2_2.value == 'true') {
        m2_0to2_2 = true;
    } else if (m2_0to2_2 && m2_0to2_2.value == 'false') {
        m2_0to2_2 = false;
    }

    // console.log(m1_0to2_1);
    // console.log(m1_0to2_2);

    return <div className='dashboard-container'>
        <div className='dashboard-wrapper'>
            <div className='content-wrapper'>

            {/* <Grid container direction="row" alignItems="center" sx={{ my: 2 }}>
                <Grid item xs="auto">
                        <Paper style={classes.milestoneTitle.paper}>
                            <div>MILESTONE - I</div>
                        </Paper>
                    </Grid>
                    <Grid item xs="auto">
                            <div style={classes.milestoneTag.paper}>
                                Social / Emotional
                            </div>
                    </Grid>
            </Grid>
            */}

                
            {/* <div style={classes.root}>
                <Grid sx={{ mb: 3 }} container spacing={2}>
                    <Grid item xs={2}>
                        <Paper style={m1_0to2_1_paper}>
                            <div style={m1_0to2_1_cardTitle}>Calms down when spoken to or picked up</div>
                            <div style={m1_0to2_1_cardMonths}>(0-2 months)</div>
                            <img src=""/>
                        </Paper>
                    </Grid>
                    <Grid item xs={2}>
                        <Paper style={m1_0to2_2_paper}>
                            <div style={m1_0to2_2_cardTitle}>Looks at your face</div>
                            <div style={m1_0to2_2_cardMonths}>(0-2 months)</div>
                            <img src=""/>
                        </Paper>
                    </Grid>
                    <Grid item xs={2}>
                        <Paper style={m1_0to2_3_paper}>
                            <div style={m1_0to2_3_cardTitle}>Seems happy to see you when you walk up to her</div>
                            <div style={m1_0to2_3_cardMonths}>(0-2 months)</div>
                            <img src=""/>
                        </Paper>
                    </Grid>
                </Grid>
                <Grid sx={{ mb: 3 }} container spacing={2}>
                    <Grid item xs={2}>
                        <Paper style={m1_0to2_1_paper}>
                            <div style={m1_0to2_1_cardTitle}>Smiles on his own to get your attention</div>
                            <div style={m1_0to2_1_cardMonths}>(2-4 months)</div>
                            <img src=""/>
                        </Paper>
                    </Grid>
                    <Grid item xs={2}>
                        <Paper style={m1_0to2_2_paper}>
                            <div style={m1_0to2_2_cardTitle}>Chuckles (not yet a full laugh) when you try to make her laugh</div>
                            <div style={m1_0to2_2_cardMonths}>(2-4 months)</div>
                            <img src=""/>
                        </Paper>
                    </Grid>
                    <Grid item xs={2}>
                        <Paper style={m1_0to2_3_paper}>
                            <div style={m1_0to2_3_cardTitle}>Looks at you, moves, or makes sounds to get or keep your attention</div>
                            <div style={m1_0to2_3_cardMonths}>(2-4 months)</div>
                            <img src=""/>
                        </Paper>
                    </Grid>
                </Grid>
            </div>
            <br/><br/>

            <Grid container direction="row" alignItems="center" sx={{ my: 2 }}>
                <Grid item xs="auto">
                        <Paper style={classes.milestoneTitle.paper}>
                            <div>MILESTONE - II</div>
                        </Paper>
                    </Grid>
                    <Grid item xs="auto">
                            <div style={classes.milestoneTag.paper}>
                                Language / Communication
                            </div>
                    </Grid>
            </Grid>

            <div style={classes.root}>
                <Grid container spacing={2}>
                    <Grid item xs={2}>
                        <Paper style={classes.disabled.paper}>
                            <div>Reply to Smile</div>
                            <div>(0-2 months)</div>
                            <img src=""/>
                        </Paper>
                    </Grid>
                    <Grid item xs={2}>
                        <Paper style={classes.success.paper}>
                            <div>Reply to Smile</div>
                            <div>(0-2 months)</div>
                            <img src=""/>
                        </Paper>
                    </Grid>
                    <Grid item xs={2}>
                        <Paper style={classes.failure.paper}>
                            <div>Reply to Smile</div>
                            <div>(0-2 months)</div>
                            <img src=""/>
                        </Paper>
                    </Grid>
                </Grid>
            </div>
            <br/><br/>

            <Grid container direction="row" alignItems="center" sx={{ my: 2 }}>
                <Grid item xs="auto">
                        <Paper style={classes.milestoneTitle.paper}>
                            <div>MILESTONE - III</div>
                        </Paper>
                    </Grid>
                    <Grid item xs="auto">
                            <div style={classes.milestoneTag.paper}>
                                Cognitive (learning, thinking, problem-solving)
                            </div>
                    </Grid>
            </Grid>

            <div style={classes.root}>
                <Grid container spacing={2}>
                    <Grid item xs={2}>
                        <Paper style={classes.disabled.paper}>
                            <div>Reply to Smile</div>
                            <div>(0-2 months)</div>
                            <img src=""/>
                        </Paper>
                    </Grid>
                    <Grid item xs={2}>
                        <Paper style={classes.success.paper}>
                            <div>Reply to Smile</div>
                            <div>(0-2 months)</div>
                            <img src=""/>
                        </Paper>
                    </Grid>
                    <Grid item xs={2}>
                        <Paper style={classes.failure.paper}>
                            <div>Reply to Smile</div>
                            <div>(0-2 months)</div>
                            <img src=""/>
                        </Paper>
                    </Grid>
                </Grid>
            </div>
            <br/><br/>

            <Grid container direction="row" alignItems="center" sx={{ my: 2 }}>
                <Grid item xs="auto">
                        <Paper style={classes.milestoneTitle.paper}>
                            <div>MILESTONE - IV</div>
                        </Paper>
                    </Grid>
                    <Grid item xs="auto">
                            <div style={classes.milestoneTag.paper}>
                                Movement / Physical Development
                            </div>
                    </Grid>
            </Grid>

            <div style={classes.root}>
                <Grid container spacing={2}>
                    <Grid item xs={2}>
                        <Paper style={classes.disabled.paper}>
                            <div>Reply to Smile</div>
                            <div>(0-2 months)</div>
                            <img src=""/>
                        </Paper>
                    </Grid>
                    <Grid item xs={2}>
                        <Paper style={classes.success.paper}>
                            <div>Reply to Smile</div>
                            <div>(0-2 months)</div>
                            <img src=""/>
                        </Paper>
                    </Grid>
                    <Grid item xs={2}>
                        <Paper style={classes.failure.paper}>
                            <div>Reply to Smile</div>
                            <div>(0-2 months)</div>
                            <img src=""/>
                        </Paper>
                    </Grid>
                </Grid>
            </div>
            <br/><br/>            

            <div style={classes.root}>
                <Grid container spacing={2}>
                    <Grid item xs={2}>
                        <Paper style={classes.disabled.paper}>
                            <div>Reply to Smile</div>
                            <div>(0-2 months)</div>
                            <img src=""/>
                        </Paper>
                    </Grid>
                    <Grid item xs={2}>
                        <Paper style={classes.success.paper}>
                            <div>Reply to Smile</div>
                            <div>(0-2 months)</div>
                            <img src=""/>
                        </Paper>
                    </Grid>
                    <Grid item xs={2}>
                        <Paper style={classes.failure.paper}>
                            <div>Reply to Smile</div>
                            <div>(0-2 months)</div>
                            <img src=""/>
                        </Paper>
                    </Grid>
                </Grid>
            </div>  */}


                <h4>At 2 Months</h4>
                <h4>Milestone I - Social / Emotional Milestone</h4>
                <TableContainer component={Paper}>
                    <Table>
                        <TableHead className='table-header'>
                            <TableRow className='phc-table-header'>
                                {/* <TableCell className="milestone-table-header" style={{ width: '5%' }}>#</TableCell> */}
                                <TableCell className="phc-table-header-cell" align="center" style={{ width: '55%' }}>Milestone</TableCell>
                                {/* <TableCell className="milestone-table-header" align="center" style={{ width: '20%' }}>Average age</TableCell> */}
                                {/* <TableCell className="milestone-table-header" align="center" style={{ width: '10%' }}>Picture</TableCell> */}
                                <TableCell className="phc-table-header-cell" align="center" style={{ width: '10%' }}>Status</TableCell>
                                <TableCell className="phc-table-header-cell" style={{ width: '10%' }}></TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            <TableRow className=''>
                                {/* <TableCell>01</TableCell> */}
                                <TableCell>Calms down when spoken to or picked up</TableCell>
                                {/* <TableCell align="center">01 Months</TableCell> */}
                                <TableCell align="center">
                                    { m1_0to2_1 === true ? <DoneIcon sx={{ color: 'green' }}/> : '' }
                                    { m1_0to2_1 === false ? <CloseIcon sx={{ color: 'red' }}/> : '' }                                    
                                </TableCell>
                                <TableCell className="image-row" rowSpan={5} align="center"><img src={m1_0to2_img} alt='Startled by loud noices' style={{ height: '10em'}} /></TableCell>
                            </TableRow>
                            <TableRow className='grey-row'>
                                {/* <TableCell>02</TableCell> */}
                                <TableCell>Looks at your face</TableCell>
                                {/* <TableCell align="center">02 Months</TableCell> */}
                                <TableCell align="center">
                                    { m1_0to2_2 === true ? <DoneIcon sx={{ color: 'green' }}/> : '' }
                                    { m1_0to2_2 === false ? <CloseIcon sx={{ color: 'red' }}/> : '' } 
                                </TableCell>
                                {/* <TableCell align="center"><img src={m2} alt='Startled by loud noices' style={{ height: '3em'}} /></TableCell> */}
                            </TableRow>
                            <TableRow className=''>   
                                {/* <TableCell>03</TableCell> */}
                                <TableCell>Seems happy to see you when you walk up to her</TableCell>
                                {/* <TableCell align="center">03 Months</TableCell> */}
                                <TableCell align="center">
                                    { m1_0to2_3 === true ? <DoneIcon sx={{ color: 'green' }}/> : '' }
                                    { m1_0to2_3 === false ? <CloseIcon sx={{ color: 'red' }}/> : '' }
                                </TableCell>
                                {/* <TableCell align="center"><img src={m3} alt='Startled by loud noices' style={{ height: '3em'}} /></TableCell> */}
                            </TableRow>
                            <TableRow className='grey-row'>
                                {/* <TableCell style={{ backgroundColor: '#FAE8ED'}}>04</TableCell> */}
                                <TableCell>Smiles when you talk to or smile at her</TableCell>
                                {/* <TableCell align="center">03 Months</TableCell> */}
                                <TableCell align="center">
                                    { m1_0to2_4 === true ? <DoneIcon sx={{ color: 'green' }}/> : '' }
                                    { m1_0to2_4 === false ? <CloseIcon sx={{ color: 'red' }}/> : '' }
                                </TableCell>
                                {/* <TableCell align="center"><img src={m4} alt='Startled by loud noices' style={{ height: '3em'}} /></TableCell> */}
                            </TableRow>
                        </TableBody>
                    </Table>
                </TableContainer>
                <br/>

                <h4>Milestone II - Language / Communication Milestone</h4>
                <TableContainer component={Paper}>
                    <Table>
                        <TableHead className='table-header'>
                            <TableRow className='phc-table-header'>
                                <TableCell className="phc-table-header-cell" align="center" style={{ width: '55%' }}>Milestone</TableCell>
                                <TableCell className="phc-table-header-cell" align="center" style={{ width: '10%' }}>Status</TableCell>
                                <TableCell className="phc-table-header-cell" style={{ width: '5%' }}></TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            <TableRow className=''>
                                <TableCell>Makes sounds other than crying</TableCell>
                                <TableCell align="center">
                                    { m2_0to2_1 === true ? <DoneIcon sx={{ color: 'green' }}/> : '' }
                                    { m2_0to2_1 === false ? <CloseIcon sx={{ color: 'red' }}/> : '' }
                                </TableCell>
                                <TableCell className="image-row" rowSpan={5} align="center"><img src={m2_0to2_img} alt='Startled by loud noices' style={{ height: '10em'}} /></TableCell>
                            </TableRow>
                            <TableRow className='grey-row'>
                                <TableCell>Reacts to loud sounds</TableCell>
                                <TableCell align="center">
                                    { m2_0to2_2 === true ? <DoneIcon sx={{ color: 'green' }}/> : '' }
                                    { m2_0to2_2 === false ? <CloseIcon sx={{ color: 'red' }}/> : '' }
                                </TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </TableContainer>
                <br/>

                <h4>Milestone III - Cognitive Milestone (learning, thinking, problem-solving)</h4>
                <TableContainer component={Paper}>
                    <Table>
                        <TableHead className='table-header'>
                            <TableRow className='phc-table-header'>
                                <TableCell className="phc-table-header-cell" align="center" style={{ width: '55%' }}>Milestone</TableCell>
                                <TableCell className="phc-table-header-cell" align="center" style={{ width: '10%' }}>Status</TableCell>
                                <TableCell className="phc-table-header-cell" style={{ width: '5%' }}></TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            <TableRow className=''>
                                <TableCell>Watches you as you move</TableCell>
                                <TableCell align="center">
                                    { m3_0to2_1 === true ? <DoneIcon sx={{ color: 'green' }}/> : '' }
                                    { m3_0to2_1 === false ? <CloseIcon sx={{ color: 'red' }}/> : '' }
                                </TableCell>
                                <TableCell className="image-row" rowSpan={5} align="center"><img src={m3_0to2_img} alt='Startled by loud noices' style={{ height: '10em'}} /></TableCell>
                            </TableRow>
                            <TableRow className='grey-row'>
                                <TableCell>Looks at a toy for several seconds</TableCell>
                                <TableCell align="center">
                                    { m3_0to2_2 === true ? <DoneIcon sx={{ color: 'green' }}/> : '' }
                                    { m3_0to2_2 === false ? <CloseIcon sx={{ color: 'red' }}/> : '' }
                                </TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </TableContainer>
                <br/>

                <h4>Milestone IV - Movement / Physical Development Milestones</h4>
                <TableContainer component={Paper}>
                    <Table>
                        <TableHead className='table-header'>
                            <TableRow className='phc-table-header'>
                                <TableCell className="phc-table-header-cell" align="center" style={{ width: '55%' }}>Milestone</TableCell>
                                <TableCell className="phc-table-header-cell" align="center" style={{ width: '10%' }}>Status</TableCell>
                                <TableCell className="phc-table-header-cell" style={{ width: '5%' }}></TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            <TableRow className=''>
                                <TableCell>Holds head up when on tummy</TableCell>
                                <TableCell align="center">
                                    { m4_0to2_2 === true ? <DoneIcon sx={{ color: 'green' }}/> : '' }
                                    { m4_0to2_2 === false ? <CloseIcon sx={{ color: 'red' }}/> : '' }
                                </TableCell>
                                <TableCell className="image-row" rowSpan={5} align="center"><img src={m4_0to2_img} alt='Startled by loud noices' style={{ height: '10em'}} /></TableCell>
                            </TableRow>
                            <TableRow className='grey-row'>
                                <TableCell>Moves both arms and both legs</TableCell>
                                <TableCell align="center">
                                    { m3_0to2_2 === true ? <DoneIcon sx={{ color: 'green' }}/> : '' }
                                    { m3_0to2_2 === false ? <CloseIcon sx={{ color: 'red' }}/> : '' }
                                </TableCell>
                            </TableRow>
                            <TableRow className=''>
                                <TableCell>Opens hands briefly</TableCell>
                                <TableCell align="center">
                                    { m3_0to2_2 === true ? <DoneIcon sx={{ color: 'green' }}/> : '' }
                                    { m3_0to2_2 === false ? <CloseIcon sx={{ color: 'red' }}/> : '' }
                                </TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </TableContainer>
                <br/>

                {/* 4 Months */}

                <h4>At 4 Months</h4>
                <h4>Milestone I - Social / Emotional Milestone</h4>
                <TableContainer component={Paper}>
                    <Table>
                        <TableHead className='table-header'>
                            <TableRow className='phc-table-header'>
                                <TableCell className="phc-table-header-cell" align="center" style={{ width: '55%' }}>Milestone</TableCell>
                                <TableCell className="phc-table-header-cell" align="center" style={{ width: '10%' }}>Status</TableCell>
                                <TableCell className="phc-table-header-cell" style={{ width: '5%' }}></TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            <TableRow className=''>
                                <TableCell>Smiles on his own to get your attention</TableCell>
                                <TableCell align="center"><DoneIcon sx={{ color: 'green' }}/></TableCell>
                                <TableCell className="image-row" rowSpan={5} align="center"><img src={m1_2to4_img} alt='Startled by loud noices' style={{ height: '10em'}} /></TableCell>
                            </TableRow>
                            <TableRow className='grey-row'>
                                <TableCell>Chuckles (not yet a full laugh) when you try to make her laugh</TableCell>
                                <TableCell align="center"><DoneIcon sx={{ color: 'green' }}/></TableCell>
                            </TableRow>
                            <TableRow className=''>   
                                <TableCell>Looks at you, moves, or makes sounds to get or keep your attention</TableCell>
                                <TableCell align="center"><CloseIcon sx={{ color: 'red' }}/></TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </TableContainer>
                <br/>

                <h4>Milestone II - Language / Communication Milestone</h4>
                <TableContainer component={Paper}>
                    <Table>
                        <TableHead className='table-header'>
                            <TableRow className='phc-table-header'>
                                <TableCell className="phc-table-header-cell" align="center" style={{ width: '55%' }}>Milestone</TableCell>
                                <TableCell className="phc-table-header-cell" align="center" style={{ width: '10%' }}>Status</TableCell>
                                <TableCell className="phc-table-header-cell" style={{ width: '5%' }}></TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            <TableRow className=''>
                                <TableCell>Makes sounds like "ooo", "aahh" (cooing)</TableCell>
                                <TableCell align="center"><DoneIcon sx={{ color: 'green' }}/></TableCell>
                                <TableCell className="image-row" rowSpan={5} align="center"><img src={m2_2to4_img} alt='Startled by loud noices' style={{ height: '10em'}} /></TableCell>
                            </TableRow>
                            <TableRow className='grey-row'>
                                <TableCell>Makes sounds back when you talk to him</TableCell>
                                <TableCell align="center"><DoneIcon sx={{ color: 'green' }}/></TableCell>
                            </TableRow>
                            <TableRow className=''>
                                <TableCell>Turns head towards the sound of your voice</TableCell>
                                <TableCell align="center"><DoneIcon sx={{ color: 'green' }}/></TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </TableContainer>
                <br/>

                <h4>Milestone III - Cognitive Milestone (learning, thinking, problem-solving)</h4>
                <TableContainer component={Paper}>
                    <Table>
                        <TableHead className='table-header'>
                            <TableRow className='phc-table-header'>
                                <TableCell className="phc-table-header-cell" align="center" style={{ width: '55%' }}>Milestone</TableCell>
                                <TableCell className="phc-table-header-cell" align="center" style={{ width: '10%' }}>Status</TableCell>
                                <TableCell className="phc-table-header-cell" style={{ width: '5%' }}></TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            <TableRow className=''>
                                <TableCell>If hungry, opens mouth when she sees breast</TableCell>
                                <TableCell align="center"><DoneIcon sx={{ color: 'green' }}/></TableCell>
                                <TableCell className="image-row" rowSpan={5} align="center"><img src={m3_2to4_img} alt='Startled by loud noices' style={{ height: '10em'}} /></TableCell>
                            </TableRow>
                            <TableRow className='grey-row'>
                                <TableCell>Looks at his hands with interest</TableCell>
                                <TableCell align="center"><DoneIcon sx={{ color: 'green' }}/></TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </TableContainer>
                <br/>

                <h4>Milestone IV - Movement / Physical Development Milestones</h4>
                <TableContainer component={Paper}>
                    <Table>
                        <TableHead className='table-header'>
                            <TableRow className='phc-table-header'>
                                <TableCell className="phc-table-header-cell" align="center" style={{ width: '55%' }}>Milestone</TableCell>
                                <TableCell className="phc-table-header-cell" align="center" style={{ width: '10%' }}>Status</TableCell>
                                <TableCell className="phc-table-header-cell" style={{ width: '5%' }}></TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            <TableRow className=''>
                                <TableCell>Holds head steady without support when you are holding her</TableCell>
                                <TableCell align="center"><DoneIcon sx={{ color: 'green' }}/></TableCell>
                                <TableCell className="image-row" rowSpan={5} align="center"><img src={m4_2to4_img} alt='Startled by loud noices' style={{ height: '10em'}} /></TableCell>
                            </TableRow>
                            <TableRow className='grey-row'>
                                <TableCell>Holds a toy when you put it in his hand</TableCell>
                                <TableCell align="center"><DoneIcon sx={{ color: 'green' }}/></TableCell>
                            </TableRow>
                            <TableRow className=''>
                                <TableCell>Uses her arm to swing at toys</TableCell>
                                <TableCell align="center"><DoneIcon sx={{ color: 'green' }}/></TableCell>
                            </TableRow>
                            <TableRow className='grey-row'>
                                <TableCell>Brings hands to mouth</TableCell>
                                <TableCell align="center"><DoneIcon sx={{ color: 'green' }}/></TableCell>
                            </TableRow>
                            <TableRow className=''>
                                <TableCell>Pushes up onto elbows/forearms when on tummy</TableCell>
                                <TableCell align="center"><DoneIcon sx={{ color: 'green' }}/></TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </TableContainer>
                <br/>

                {/* 6 Months */}

                <h4>At 6 Months</h4>
                <h4>Milestone I - Social / Emotional Milestone</h4>
                <TableContainer component={Paper}>
                    <Table>
                        <TableHead className='table-header'>
                            <TableRow className='phc-table-header'>
                                <TableCell className="phc-table-header-cell" align="center" style={{ width: '55%' }}>Milestone</TableCell>
                                <TableCell className="phc-table-header-cell" align="center" style={{ width: '10%' }}>Status</TableCell>
                                <TableCell className="phc-table-header-cell" style={{ width: '5%' }}></TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            <TableRow className=''>
                                <TableCell>Knows familiar people</TableCell>
                                <TableCell align="center"><DoneIcon sx={{ color: 'green' }}/></TableCell>
                                <TableCell className="image-row" rowSpan={5} align="center"><img src={m1_4to6_img} alt='Startled by loud noices' style={{ height: '10em'}} /></TableCell>
                            </TableRow>
                            <TableRow className='grey-row'>
                                <TableCell>Likes to look at himself in a mirror</TableCell>
                                <TableCell align="center"><DoneIcon sx={{ color: 'green' }}/></TableCell>
                            </TableRow>
                            <TableRow className=''>   
                                <TableCell>Laughs</TableCell>
                                <TableCell align="center"><CloseIcon sx={{ color: 'red' }}/></TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </TableContainer>
                <br/>

                <h4>Milestone II - Language / Communication Milestone</h4>
                <TableContainer component={Paper}>
                    <Table>
                        <TableHead className='table-header'>
                            <TableRow className='phc-table-header'>
                                <TableCell className="phc-table-header-cell" align="center" style={{ width: '55%' }}>Milestone</TableCell>
                                <TableCell className="phc-table-header-cell" align="center" style={{ width: '10%' }}>Status</TableCell>
                                <TableCell className="phc-table-header-cell" style={{ width: '5%' }}></TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            <TableRow className=''>
                                <TableCell>Takes turns making sounds with you</TableCell>
                                <TableCell align="center"><DoneIcon sx={{ color: 'green' }}/></TableCell>
                                <TableCell className="image-row" rowSpan={5} align="center"><img src={m2_4to6_img} alt='Startled by loud noices' style={{ height: '10em'}} /></TableCell>
                            </TableRow>
                            <TableRow className='grey-row'>
                                <TableCell>Blows "raspberries" (sticks tongue out and blows)</TableCell>
                                <TableCell align="center"><DoneIcon sx={{ color: 'green' }}/></TableCell>
                            </TableRow>
                            <TableRow className=''>
                                <TableCell>Makes squealing noises</TableCell>
                                <TableCell align="center"><DoneIcon sx={{ color: 'green' }}/></TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </TableContainer>
                <br/>

                <h4>Milestone III - Cognitive Milestone (learning, thinking, problem-solving)</h4>
                <TableContainer component={Paper}>
                    <Table>
                        <TableHead className='table-header'>
                            <TableRow className='phc-table-header'>
                                <TableCell className="phc-table-header-cell" align="center" style={{ width: '55%' }}>Milestone</TableCell>
                                <TableCell className="phc-table-header-cell" align="center" style={{ width: '10%' }}>Status</TableCell>
                                <TableCell className="phc-table-header-cell" style={{ width: '5%' }}></TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            <TableRow className=''>
                                <TableCell>Puts things in her mouth to explore them</TableCell>
                                <TableCell align="center"><DoneIcon sx={{ color: 'green' }}/></TableCell>
                                <TableCell className="image-row" rowSpan={5} align="center"><img src={m3_4to6_img} alt='Startled by loud noices' style={{ height: '10em'}} /></TableCell>
                            </TableRow>
                            <TableRow className='grey-row'>
                                <TableCell>Reaches to grab a toy he wants</TableCell>
                                <TableCell align="center"><DoneIcon sx={{ color: 'green' }}/></TableCell>
                            </TableRow>
                            <TableRow className=''>
                                <TableCell>Closes lips to show she doesn't want more food</TableCell>
                                <TableCell align="center"><DoneIcon sx={{ color: 'green' }}/></TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </TableContainer>
                <br/>

                <h4>Milestone IV - Movement / Physical Development Milestones</h4>
                <TableContainer component={Paper}>
                    <Table>
                        <TableHead className='table-header'>
                            <TableRow className='phc-table-header'>
                                <TableCell className="phc-table-header-cell" align="center" style={{ width: '55%' }}>Milestone</TableCell>
                                <TableCell className="phc-table-header-cell" align="center" style={{ width: '10%' }}>Status</TableCell>
                                <TableCell className="phc-table-header-cell" style={{ width: '5%' }}></TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            <TableRow className=''>
                                <TableCell>Rolls from tummy to back</TableCell>
                                <TableCell align="center"><DoneIcon sx={{ color: 'green' }}/></TableCell>
                                <TableCell className="image-row" rowSpan={5} align="center"><img src={m4_4to6_img} alt='Startled by loud noices' style={{ height: '10em'}} /></TableCell>
                            </TableRow>
                            <TableRow className='grey-row'>
                                <TableCell>Pushes up with straight arms when on tummy</TableCell>
                                <TableCell align="center"><DoneIcon sx={{ color: 'green' }}/></TableCell>
                            </TableRow>
                            <TableRow className=''>
                                <TableCell>Leans on hands to support himself when sitting</TableCell>
                                <TableCell align="center"><DoneIcon sx={{ color: 'green' }}/></TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </TableContainer>

                {/*  9 Months */}

                <h4>At 9 Months</h4>
                <h4>Milestone I - Social / Emotional Milestone</h4>
                <TableContainer component={Paper}>
                    <Table>
                        <TableHead className='table-header'>
                            <TableRow className='phc-table-header'>
                                <TableCell className="phc-table-header-cell" align="center" style={{ width: '55%' }}>Milestone</TableCell>
                                <TableCell className="phc-table-header-cell" align="center" style={{ width: '10%' }}>Status</TableCell>
                                <TableCell className="phc-table-header-cell" style={{ width: '5%' }}></TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            <TableRow className=''>
                                <TableCell>Is shy, clingy, or fearful around strangers</TableCell>
                                <TableCell align="center"><DoneIcon sx={{ color: 'green' }}/></TableCell>
                                <TableCell className="image-row" rowSpan={5} align="center"><img src={m1_6to9_img} alt='Startled by loud noices' style={{ height: '10em'}} /></TableCell>
                            </TableRow>
                            <TableRow className='grey-row'>
                                <TableCell>Shows several facial expressions, like happy, sad, angry, and surprised</TableCell>
                                <TableCell align="center"><DoneIcon sx={{ color: 'green' }}/></TableCell>
                            </TableRow>
                            <TableRow className=''>   
                                <TableCell>Looks when you call her name</TableCell>
                                <TableCell align="center"><CloseIcon sx={{ color: 'red' }}/></TableCell>
                            </TableRow>
                            <TableRow className='grey-row'>
                                <TableCell>React whe you leave (looks, reaches for you, or cries)</TableCell>
                                <TableCell align="center"><DoneIcon sx={{ color: 'green' }}/></TableCell>
                            </TableRow>
                            <TableRow className=''>   
                                <TableCell>Smiles or laughs when you play peek-a-boo</TableCell>
                                <TableCell align="center"><CloseIcon sx={{ color: 'red' }}/></TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </TableContainer>
                <br/>

                <h4>Milestone II - Language / Communication Milestone</h4>
                <TableContainer component={Paper}>
                    <Table>
                        <TableHead className='table-header'>
                            <TableRow className='phc-table-header'>
                                <TableCell className="phc-table-header-cell" align="center" style={{ width: '55%' }}>Milestone</TableCell>
                                <TableCell className="phc-table-header-cell" align="center" style={{ width: '10%' }}>Status</TableCell>
                                <TableCell className="phc-table-header-cell" style={{ width: '5%' }}></TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            <TableRow className=''>
                                <TableCell>Makes different sounds like "mamamama" and "babababa"</TableCell>
                                <TableCell align="center"><DoneIcon sx={{ color: 'green' }}/></TableCell>
                                <TableCell className="image-row" rowSpan={5} align="center"><img src={m2_6to9_img} alt='Startled by loud noices' style={{ height: '10em'}} /></TableCell>
                            </TableRow>
                            <TableRow className='grey-row'>
                                <TableCell>Lifts arms up to be picked up</TableCell>
                                <TableCell align="center"><DoneIcon sx={{ color: 'green' }}/></TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </TableContainer>
                <br/>

                <h4>Milestone III - Cognitive Milestone (learning, thinking, problem-solving)</h4>
                <TableContainer component={Paper}>
                    <Table>
                        <TableHead className='table-header'>
                            <TableRow className='phc-table-header'>
                                <TableCell className="phc-table-header-cell" align="center" style={{ width: '55%' }}>Milestone</TableCell>
                                <TableCell className="phc-table-header-cell" align="center" style={{ width: '10%' }}>Status</TableCell>
                                <TableCell className="phc-table-header-cell" style={{ width: '5%' }}></TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            <TableRow className=''>
                                <TableCell>Looks for objects when dropped out of sight (like his spoon or toy)</TableCell>
                                <TableCell align="center"><DoneIcon sx={{ color: 'green' }}/></TableCell>
                                <TableCell className="image-row" rowSpan={5} align="center"><img src={m3_6to9_img} alt='Startled by loud noices' style={{ height: '10em'}} /></TableCell>
                            </TableRow>
                            <TableRow className='grey-row'>
                                <TableCell>Bands two things together</TableCell>
                                <TableCell align="center"><DoneIcon sx={{ color: 'green' }}/></TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </TableContainer>

                <h4>Milestone IV - Movement / Physical Development Milestones</h4>
                <TableContainer component={Paper}>
                    <Table>
                        <TableHead className='table-header'>
                            <TableRow className='phc-table-header'>
                                <TableCell className="phc-table-header-cell" align="center" style={{ width: '55%' }}>Milestone</TableCell>
                                <TableCell className="phc-table-header-cell" align="center" style={{ width: '10%' }}>Status</TableCell>
                                <TableCell className="phc-table-header-cell" style={{ width: '5%' }}></TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            <TableRow className=''>
                                <TableCell>Gets to a sitting position by herself</TableCell>
                                <TableCell align="center"><DoneIcon sx={{ color: 'green' }}/></TableCell>
                                <TableCell className="image-row" rowSpan={5} align="center"><img src={m4_6to9_img} alt='Startled by loud noices' style={{ height: '10em'}} /></TableCell>
                            </TableRow>
                            <TableRow className='grey-row'>
                                <TableCell>Moves things from one hand to her other hand</TableCell>
                                <TableCell align="center"><DoneIcon sx={{ color: 'green' }}/></TableCell>
                            </TableRow>
                            <TableRow className=''>
                                <TableCell>Uses fingers to "rake" food towards himself</TableCell>
                                <TableCell align="center"><DoneIcon sx={{ color: 'green' }}/></TableCell>
                            </TableRow>
                            <TableRow className='grey-row'>
                                <TableCell>Sits without support</TableCell>
                                <TableCell align="center"><DoneIcon sx={{ color: 'green' }}/></TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </TableContainer>
                <br/>

                {/* 12 Months */}

                <h4>At 12 Months</h4>
                <h4>Milestone I - Social / Emotional Milestone</h4>
                <TableContainer component={Paper}>
                    <Table>
                        <TableHead className='table-header'>
                            <TableRow className='phc-table-header'>
                                <TableCell className="phc-table-header-cell" align="center" style={{ width: '55%' }}>Milestone</TableCell>
                                <TableCell className="phc-table-header-cell" align="center" style={{ width: '10%' }}>Status</TableCell>
                                <TableCell className="phc-table-header-cell" style={{ width: '5%' }}></TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            <TableRow className=''>
                                <TableCell>Plays games with you, like hide and seek</TableCell>
                                <TableCell align="center"><DoneIcon sx={{ color: 'green' }}/></TableCell>
                                <TableCell className="image-row" rowSpan={5} align="center"><img src={m1_9to12_img} alt='Startled by loud noices' style={{ height: '10em'}} /></TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </TableContainer>
                <br/>

                <h4>Milestone II - Language / Communication Milestone</h4>
                <TableContainer component={Paper}>
                    <Table>
                        <TableHead className='table-header'>
                            <TableRow className='phc-table-header'>
                                <TableCell className="phc-table-header-cell" align="center" style={{ width: '55%' }}>Milestone</TableCell>
                                <TableCell className="phc-table-header-cell" align="center" style={{ width: '10%' }}>Status</TableCell>
                                <TableCell className="phc-table-header-cell" style={{ width: '5%' }}></TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            <TableRow className=''>
                                <TableCell>Waves "bye-bye"</TableCell>
                                <TableCell align="center"><DoneIcon sx={{ color: 'green' }}/></TableCell>
                                <TableCell className="image-row" rowSpan={5} align="center"><img src={m2_9to12_img} alt='Startled by loud noices' style={{ height: '10em'}} /></TableCell>
                            </TableRow>
                            <TableRow className='grey-row'>
                                <TableCell>Calls a parent by special name eg: Mom, Dad</TableCell>
                                <TableCell align="center"><DoneIcon sx={{ color: 'green' }}/></TableCell>
                            </TableRow>
                            <TableRow className=''>
                                <TableCell>Understands "no" (pauses briefly or stops when you say it)</TableCell>
                                <TableCell align="center"><DoneIcon sx={{ color: 'green' }}/></TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </TableContainer>
                <br/>

                <h4>Milestone III - Cognitive Milestone (learning, thinking, problem-solving)</h4>
                <TableContainer component={Paper}>
                    <Table>
                        <TableHead className='table-header'>
                            <TableRow className='phc-table-header'>
                                <TableCell className="phc-table-header-cell" align="center" style={{ width: '55%' }}>Milestone</TableCell>
                                <TableCell className="phc-table-header-cell" align="center" style={{ width: '10%' }}>Status</TableCell>
                                <TableCell className="phc-table-header-cell" style={{ width: '5%' }}></TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            <TableRow className=''>
                                <TableCell>Puts something in a container, like a block in a cup</TableCell>
                                <TableCell align="center"><DoneIcon sx={{ color: 'green' }}/></TableCell>
                                <TableCell className="image-row" rowSpan={5} align="center"><img src={m3_9to12_img} alt='Startled by loud noices' style={{ height: '10em'}} /></TableCell>
                            </TableRow>
                            <TableRow className='grey-row'>
                                <TableCell>Looks for things he sees you hide, like a toy under a blanket</TableCell>
                                <TableCell align="center"><DoneIcon sx={{ color: 'green' }}/></TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </TableContainer>
                <br/>

                <h4>Milestone IV - Movement / Physical Development Milestones</h4>
                <TableContainer component={Paper}>
                    <Table>
                        <TableHead className='table-header'>
                            <TableRow className='phc-table-header'>
                                <TableCell className="phc-table-header-cell" align="center" style={{ width: '55%' }}>Milestone</TableCell>
                                <TableCell className="phc-table-header-cell" align="center" style={{ width: '10%' }}>Status</TableCell>
                                <TableCell className="phc-table-header-cell" style={{ width: '5%' }}></TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            <TableRow className=''>
                                <TableCell>Pulls up to stand</TableCell>
                                <TableCell align="center"><DoneIcon sx={{ color: 'green' }}/></TableCell>
                                <TableCell className="image-row" rowSpan={5} align="center"><img src={m4_9to12_img} alt='Startled by loud noices' style={{ height: '10em'}} /></TableCell>
                            </TableRow>
                            <TableRow className='grey-row'>
                                <TableCell>Walks, holding on to furniture</TableCell>
                                <TableCell align="center"><DoneIcon sx={{ color: 'green' }}/></TableCell>
                            </TableRow>
                            <TableRow className=''>
                                <TableCell>Drinks from a cup without a lid, as you hold it</TableCell>
                                <TableCell align="center"><DoneIcon sx={{ color: 'green' }}/></TableCell>
                            </TableRow>
                            <TableRow className='grey-row'>
                                <TableCell>Picks things up between thumb and pointer finger, like small bits of food</TableCell>
                                <TableCell align="center"><DoneIcon sx={{ color: 'green' }}/></TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </TableContainer>
                <br/>

                {/* 15 Months */}
                {/*
                <h4>At 15 Months</h4>
                <h4>Milestone I - Social / Emotional Milestone</h4>
                <TableContainer component={Paper}>
                    <Table>
                        <TableHead className='table-header'>
                            <TableRow className='phc-table-header'>
                                <TableCell className="phc-table-header-cell" align="center" style={{ width: '55%' }}>Milestone</TableCell>
                                <TableCell className="phc-table-header-cell" align="center" style={{ width: '10%' }}>Status</TableCell>
                                <TableCell className="phc-table-header-cell" style={{ width: '5%' }}></TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            <TableRow className=''>
                                <TableCell>Copies other children while playing, like taking toys out of a container when another child does</TableCell>
                                <TableCell align="center"><DoneIcon sx={{ color: 'green' }}/></TableCell>
                                <TableCell rowSpan={5} align="center"><img src={m1} alt='Startled by loud noices' style={{ height: '3em'}} /></TableCell>
                            </TableRow>
                            <TableRow className='grey-row'>
                                <TableCell>Shows you an object she likes</TableCell>
                                <TableCell align="center"><DoneIcon sx={{ color: 'green' }}/></TableCell>
                            </TableRow>
                            <TableRow className=''>   
                                <TableCell>Claps when excited</TableCell>
                                <TableCell align="center"><CloseIcon sx={{ color: 'red' }}/></TableCell>
                            </TableRow>
                            <TableRow className='grey-row'>
                                <TableCell>Hugs stuffed doll or other toys</TableCell>
                                <TableCell align="center"><DoneIcon sx={{ color: 'green' }}/></TableCell>
                            </TableRow>
                            <TableRow className=''>   
                                <TableCell>Shows you affection (hugs, cuddles, or kisses you)</TableCell>
                                <TableCell align="center"><CloseIcon sx={{ color: 'red' }}/></TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </TableContainer>
                <br/>

                <h4>Milestone II - Language / Communication Milestone</h4>
                <TableContainer component={Paper}>
                    <Table>
                        <TableHead className='table-header'>
                            <TableRow className='phc-table-header'>
                                <TableCell className="phc-table-header-cell" align="center" style={{ width: '55%' }}>Milestone</TableCell>
                                <TableCell className="phc-table-header-cell" align="center" style={{ width: '10%' }}>Status</TableCell>
                                <TableCell className="phc-table-header-cell" style={{ width: '5%' }}></TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            <TableRow className=''>
                                <TableCell>Tries to say one or two words besides "mama" or "dada", like "ba" for ball or "da" for dog</TableCell>
                                <TableCell align="center"><DoneIcon sx={{ color: 'green' }}/></TableCell>
                                <TableCell rowSpan={5} align="center"><img src={m1} alt='Startled by loud noices' style={{ height: '3em'}} /></TableCell>
                            </TableRow>
                            <TableRow className='grey-row'>
                                <TableCell>Looks at a familiar object when you name it</TableCell>
                                <TableCell align="center"><DoneIcon sx={{ color: 'green' }}/></TableCell>
                            </TableRow>
                            <TableRow className='grey-row'>
                                <TableCell>Follows directions given with both a gesture and words. For example, he gives you a toy when you hold out your hand say, "Give me the toy"</TableCell>
                                <TableCell align="center"><DoneIcon sx={{ color: 'green' }}/></TableCell>
                            </TableRow>
                            <TableRow className='grey-row'>
                                <TableCell>Points to ask for something or to get help</TableCell>
                                <TableCell align="center"><DoneIcon sx={{ color: 'green' }}/></TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </TableContainer>
                <br/>

                <h4>Milestone III - Cognitive Milestone (learning, thinking, problem-solving)</h4>
                <TableContainer component={Paper}>
                    <Table>
                        <TableHead className='table-header'>
                            <TableRow className='phc-table-header'>
                                <TableCell className="phc-table-header-cell" align="center" style={{ width: '55%' }}>Milestone</TableCell>
                                <TableCell className="phc-table-header-cell" align="center" style={{ width: '10%' }}>Status</TableCell>
                                <TableCell className="phc-table-header-cell" style={{ width: '5%' }}></TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            <TableRow className=''>
                                <TableCell>Tries to use things the right way, like a cup, or book</TableCell>
                                <TableCell align="center"><DoneIcon sx={{ color: 'green' }}/></TableCell>
                                <TableCell rowSpan={5} align="center"><img src={m1} alt='Startled by loud noices' style={{ height: '3em'}} /></TableCell>
                            </TableRow>
                            <TableRow className='grey-row'>
                                <TableCell>stacks at least two small objects, like blocks</TableCell>
                                <TableCell align="center"><DoneIcon sx={{ color: 'green' }}/></TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </TableContainer>

                <h4>Milestone IV - Movement / Physical Development Milestones</h4>
                <TableContainer component={Paper}>
                    <Table>
                        <TableHead className='table-header'>
                            <TableRow className='phc-table-header'>
                                <TableCell className="phc-table-header-cell" align="center" style={{ width: '55%' }}>Milestone</TableCell>
                                <TableCell className="phc-table-header-cell" align="center" style={{ width: '10%' }}>Status</TableCell>
                                <TableCell className="phc-table-header-cell" style={{ width: '5%' }}></TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            <TableRow className=''>
                                <TableCell>Takes a few steps on his own</TableCell>
                                <TableCell align="center"><DoneIcon sx={{ color: 'green' }}/></TableCell>
                                <TableCell rowSpan={5} align="center"><img src={m1} alt='Startled by loud noices' style={{ height: '3em'}} /></TableCell>
                            </TableRow>
                            <TableRow className='grey-row'>
                                <TableCell>Uses fingers to feed herself some food</TableCell>
                                <TableCell align="center"><DoneIcon sx={{ color: 'green' }}/></TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </TableContainer>
                    */}
                {/* 18 Months */}

                {/* <h4>At 18 Months</h4>
                <h4>Milestone I - Social / Emotional Milestone</h4>
                <TableContainer component={Paper}>
                    <Table>
                        <TableHead className='table-header'>
                            <TableRow className='phc-table-header'>
                                <TableCell className="phc-table-header-cell" align="center" style={{ width: '55%' }}>Milestone</TableCell>
                                <TableCell className="phc-table-header-cell" align="center" style={{ width: '10%' }}>Status</TableCell>
                                <TableCell className="phc-table-header-cell" style={{ width: '5%' }}></TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            <TableRow className=''>
                                <TableCell>Moves away from you, but looks to make sure you are close by</TableCell>
                                <TableCell align="center"><DoneIcon sx={{ color: 'green' }}/></TableCell>
                                <TableCell rowSpan={5} align="center"><img src={m1} alt='Startled by loud noices' style={{ height: '3em'}} /></TableCell>
                            </TableRow>
                            <TableRow className='grey-row'>
                                <TableCell>Points to show you something interesting</TableCell>
                                <TableCell align="center"><DoneIcon sx={{ color: 'green' }}/></TableCell>
                            </TableRow>
                            <TableRow className=''>   
                                <TableCell>Puts hands out for you to wash them</TableCell>
                                <TableCell align="center"><CloseIcon sx={{ color: 'red' }}/></TableCell>
                            </TableRow>
                            <TableRow className=''>   
                                <TableCell>Looks at a few pages in a book with you</TableCell>
                                <TableCell align="center"><CloseIcon sx={{ color: 'red' }}/></TableCell>
                            </TableRow>
                            <TableRow className=''>   
                                <TableCell>Helps you dress him by pushing arm through sleeve or lifting up foot</TableCell>
                                <TableCell align="center"><CloseIcon sx={{ color: 'red' }}/></TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </TableContainer>
                <br/>

                <h4>Milestone II - Language / Communication Milestone</h4>
                <TableContainer component={Paper}>
                    <Table>
                        <TableHead className='table-header'>
                            <TableRow className='phc-table-header'>
                                <TableCell className="phc-table-header-cell" align="center" style={{ width: '55%' }}>Milestone</TableCell>
                                <TableCell className="phc-table-header-cell" align="center" style={{ width: '10%' }}>Status</TableCell>
                                <TableCell className="phc-table-header-cell" style={{ width: '5%' }}></TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            <TableRow className=''>
                                <TableCell>Tries to say three or more words besides "mama" or "dada"</TableCell>
                                <TableCell align="center"><DoneIcon sx={{ color: 'green' }}/></TableCell>
                                <TableCell rowSpan={5} align="center"><img src={m1} alt='Startled by loud noices' style={{ height: '3em'}} /></TableCell>
                            </TableRow>
                            <TableRow className='grey-row'>
                                <TableCell>Follows one-step direction without any gestures, like giving you the toy when you say, "Give it to me"</TableCell>
                                <TableCell align="center"><DoneIcon sx={{ color: 'green' }}/></TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </TableContainer>
                <br/>

                <h4>Milestone III - Cognitive Milestone (learning, thinking, problem-solving)</h4>
                <TableContainer component={Paper}>
                    <Table>
                        <TableHead className='table-header'>
                            <TableRow className='phc-table-header'>
                                <TableCell className="phc-table-header-cell" align="center" style={{ width: '55%' }}>Milestone</TableCell>
                                <TableCell className="phc-table-header-cell" align="center" style={{ width: '10%' }}>Status</TableCell>
                                <TableCell className="phc-table-header-cell" style={{ width: '5%' }}></TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            <TableRow className=''>
                                <TableCell>Copies you doing chores, like sweeping with a broom</TableCell>
                                <TableCell align="center"><DoneIcon sx={{ color: 'green' }}/></TableCell>
                                <TableCell rowSpan={5} align="center"><img src={m1} alt='Startled by loud noices' style={{ height: '3em'}} /></TableCell>
                            </TableRow>
                            <TableRow className='grey-row'>
                                <TableCell>Plays with toys in a simple way, like pushing a toy car</TableCell>
                                <TableCell align="center"><DoneIcon sx={{ color: 'green' }}/></TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </TableContainer>

                <h4>Milestone IV - Movement / Physical Development Milestones</h4>
                <TableContainer component={Paper}>
                    <Table>
                        <TableHead className='table-header'>
                            <TableRow className='phc-table-header'>
                                <TableCell className="phc-table-header-cell" align="center" style={{ width: '55%' }}>Milestone</TableCell>
                                <TableCell className="phc-table-header-cell" align="center" style={{ width: '10%' }}>Status</TableCell>
                                <TableCell className="phc-table-header-cell" style={{ width: '5%' }}></TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            <TableRow className=''>
                                <TableCell>Walks without holding on to anyone or anything</TableCell>
                                <TableCell align="center"><DoneIcon sx={{ color: 'green' }}/></TableCell>
                                <TableCell rowSpan={5} align="center"><img src={m1} alt='Startled by loud noices' style={{ height: '3em'}} /></TableCell>
                            </TableRow>
                            <TableRow className='grey-row'>
                                <TableCell>Scribbles</TableCell>
                                <TableCell align="center"><DoneIcon sx={{ color: 'green' }}/></TableCell>
                            </TableRow>
                            <TableRow className='grey-row'>
                                <TableCell>Drinks from a cup without a lid and may spill sometimes</TableCell>
                                <TableCell align="center"><DoneIcon sx={{ color: 'green' }}/></TableCell>
                            </TableRow>
                            <TableRow className='grey-row'>
                                <TableCell>Feeds herself with her fingers</TableCell>
                                <TableCell align="center"><DoneIcon sx={{ color: 'green' }}/></TableCell>
                            </TableRow>
                            <TableRow className='grey-row'>
                                <TableCell>Tries to use a spoon</TableCell>
                                <TableCell align="center"><DoneIcon sx={{ color: 'green' }}/></TableCell>
                            </TableRow>
                            <TableRow className='grey-row'>
                                <TableCell>Climbs on and of a couch or chair without help</TableCell>
                                <TableCell align="center"><DoneIcon sx={{ color: 'green' }}/></TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </TableContainer> */}

                {/* 2 Years */}

                {/* <h4>At 2 Years</h4>
                <h4>Milestone I - Social / Emotional Milestone</h4>
                <TableContainer component={Paper}>
                    <Table>
                        <TableHead className='table-header'>
                            <TableRow className='phc-table-header'>
                                <TableCell className="phc-table-header-cell" align="center" style={{ width: '55%' }}>Milestone</TableCell>
                                <TableCell className="phc-table-header-cell" align="center" style={{ width: '10%' }}>Status</TableCell>
                                <TableCell className="phc-table-header-cell" style={{ width: '5%' }}></TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            <TableRow className=''>
                                <TableCell>Notices when other are hurt or upset, like pausing or looking sad when someone is crying</TableCell>
                                <TableCell align="center"><DoneIcon sx={{ color: 'green' }}/></TableCell>
                                <TableCell rowSpan={5} align="center"><img src={m1} alt='Startled by loud noices' style={{ height: '3em'}} /></TableCell>
                            </TableRow>
                            <TableRow className='grey-row'>
                                <TableCell>Looks at your face to see how to react in a new situation</TableCell>
                                <TableCell align="center"><DoneIcon sx={{ color: 'green' }}/></TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </TableContainer>
                <br/>

                <h4>Milestone II - Language / Communication Milestone</h4>
                <TableContainer component={Paper}>
                    <Table>
                        <TableHead className='table-header'>
                            <TableRow className='phc-table-header'>
                                <TableCell className="phc-table-header-cell" align="center" style={{ width: '55%' }}>Milestone</TableCell>
                                <TableCell className="phc-table-header-cell" align="center" style={{ width: '10%' }}>Status</TableCell>
                                <TableCell className="phc-table-header-cell" style={{ width: '5%' }}></TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            <TableRow className=''>
                                <TableCell>Points to things in a book when you ask, like "where is the cat?"</TableCell>
                                <TableCell align="center"><DoneIcon sx={{ color: 'green' }}/></TableCell>
                                <TableCell rowSpan={5} align="center"><img src={m1} alt='Startled by loud noices' style={{ height: '3em'}} /></TableCell>
                            </TableRow>
                            <TableRow className='grey-row'>
                                <TableCell>Says at least 2 words together</TableCell>
                                <TableCell align="center"><DoneIcon sx={{ color: 'green' }}/></TableCell>
                            </TableRow>
                            <TableRow className='grey-row'>
                                <TableCell>Points to at least two body parts when you ask him to show you</TableCell>
                                <TableCell align="center"><DoneIcon sx={{ color: 'green' }}/></TableCell>
                            </TableRow>
                            <TableRow className='grey-row'>
                                <TableCell>Uses more gestures that just waving and pointing, like blowing a kiss/nodding</TableCell>
                                <TableCell align="center"><DoneIcon sx={{ color: 'green' }}/></TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </TableContainer>
                <br/>

                <h4>Milestone III - Cognitive Milestone (learning, thinking, problem-solving)</h4>
                <TableContainer component={Paper}>
                    <Table>
                        <TableHead className='table-header'>
                            <TableRow className='phc-table-header'>
                                <TableCell className="phc-table-header-cell" align="center" style={{ width: '55%' }}>Milestone</TableCell>
                                <TableCell className="phc-table-header-cell" align="center" style={{ width: '10%' }}>Status</TableCell>
                                <TableCell className="phc-table-header-cell" style={{ width: '5%' }}></TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            <TableRow className=''>
                                <TableCell>Holds something in one hand while using the other hand; for example, holding a container and taking the lid off</TableCell>
                                <TableCell align="center"><DoneIcon sx={{ color: 'green' }}/></TableCell>
                                <TableCell rowSpan={5} align="center"><img src={m1} alt='Startled by loud noices' style={{ height: '3em'}} /></TableCell>
                            </TableRow>
                            <TableRow className='grey-row'>
                                <TableCell>Tries to use switches, knobs, or buttons on a toy</TableCell>
                                <TableCell align="center"><DoneIcon sx={{ color: 'green' }}/></TableCell>
                            </TableRow>
                            <TableRow className='grey-row'>
                                <TableCell>Plays with more than one toy at the same time, like putting toy food on a toy plate</TableCell>
                                <TableCell align="center"><DoneIcon sx={{ color: 'green' }}/></TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </TableContainer>

                <h4>Milestone IV - Movement / Physical Development Milestones</h4>
                <TableContainer component={Paper}>
                    <Table>
                        <TableHead className='table-header'>
                            <TableRow className='phc-table-header'>
                                <TableCell className="phc-table-header-cell" align="center" style={{ width: '55%' }}>Milestone</TableCell>
                                <TableCell className="phc-table-header-cell" align="center" style={{ width: '10%' }}>Status</TableCell>
                                <TableCell className="phc-table-header-cell" style={{ width: '5%' }}></TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            <TableRow className=''>
                                <TableCell>Kicks a ball</TableCell>
                                <TableCell align="center"><DoneIcon sx={{ color: 'green' }}/></TableCell>
                                <TableCell rowSpan={5} align="center"><img src={m1} alt='Startled by loud noices' style={{ height: '3em'}} /></TableCell>
                            </TableRow>
                            <TableRow className='grey-row'>
                                <TableCell>Runs</TableCell>
                                <TableCell align="center"><DoneIcon sx={{ color: 'green' }}/></TableCell>
                            </TableRow>
                            <TableRow className='grey-row'>
                                <TableCell>Walks (not climbs) up a few stairs with or without help</TableCell>
                                <TableCell align="center"><DoneIcon sx={{ color: 'green' }}/></TableCell>
                            </TableRow>
                            <TableRow className='grey-row'>
                                <TableCell>Eats with a spoon</TableCell>
                                <TableCell align="center"><DoneIcon sx={{ color: 'green' }}/></TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </TableContainer> */}

                {/* 30 Months */}

                {/* <h4>At 30 Months</h4>
                <h4>Milestone I - Social / Emotional Milestone</h4>
                <TableContainer component={Paper}>
                    <Table>
                        <TableHead className='table-header'>
                            <TableRow className='phc-table-header'>
                                <TableCell className="phc-table-header-cell" align="center" style={{ width: '55%' }}>Milestone</TableCell>
                                <TableCell className="phc-table-header-cell" align="center" style={{ width: '10%' }}>Status</TableCell>
                                <TableCell className="phc-table-header-cell" style={{ width: '5%' }}></TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            <TableRow className=''>
                                <TableCell>Plays net to other children and sometimes play with them</TableCell>
                                <TableCell align="center"><DoneIcon sx={{ color: 'green' }}/></TableCell>
                                <TableCell rowSpan={5} align="center"><img src={m1} alt='Startled by loud noices' style={{ height: '3em'}} /></TableCell>
                            </TableRow>
                            <TableRow className='grey-row'>
                                <TableCell>Shows you what she can do by saying, "Look at me!"</TableCell>
                                <TableCell align="center"><DoneIcon sx={{ color: 'green' }}/></TableCell>
                            </TableRow>
                            <TableRow className=''>   
                                <TableCell>Follows simple routines when told, like helping to pick up toys when you say, "It's clean-up time"</TableCell>
                                <TableCell align="center"><CloseIcon sx={{ color: 'red' }}/></TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </TableContainer>
                <br/>

                <h4>Milestone II - Language / Communication Milestone</h4>
                <TableContainer component={Paper}>
                    <Table>
                        <TableHead className='table-header'>
                            <TableRow className='phc-table-header'>
                                <TableCell className="phc-table-header-cell" align="center" style={{ width: '55%' }}>Milestone</TableCell>
                                <TableCell className="phc-table-header-cell" align="center" style={{ width: '10%' }}>Status</TableCell>
                                <TableCell className="phc-table-header-cell" style={{ width: '5%' }}></TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            <TableRow className=''>
                                <TableCell>Says about 50 words</TableCell>
                                <TableCell align="center"><DoneIcon sx={{ color: 'green' }}/></TableCell>
                                <TableCell rowSpan={5} align="center"><img src={m1} alt='Startled by loud noices' style={{ height: '3em'}} /></TableCell>
                            </TableRow>
                            <TableRow className='grey-row'>
                                <TableCell>Says two or more words together, with one action word, like "Cat run"</TableCell>
                                <TableCell align="center"><DoneIcon sx={{ color: 'green' }}/></TableCell>
                            </TableRow>
                            <TableRow className='grey-row'>
                                <TableCell>Names things in a book when you point and ask, "What is this?"</TableCell>
                                <TableCell align="center"><DoneIcon sx={{ color: 'green' }}/></TableCell>
                            </TableRow>
                            <TableRow className='grey-row'>
                                <TableCell>Say words like "I", "me", or "we"</TableCell>
                                <TableCell align="center"><DoneIcon sx={{ color: 'green' }}/></TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </TableContainer>
                <br/>

                <h4>Milestone III - Cognitive Milestone (learning, thinking, problem-solving)</h4>
                <TableContainer component={Paper}>
                    <Table>
                        <TableHead className='table-header'>
                            <TableRow className='phc-table-header'>
                                <TableCell className="phc-table-header-cell" align="center" style={{ width: '55%' }}>Milestone</TableCell>
                                <TableCell className="phc-table-header-cell" align="center" style={{ width: '10%' }}>Status</TableCell>
                                <TableCell className="phc-table-header-cell" style={{ width: '5%' }}></TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            <TableRow className=''>
                                <TableCell>Uses things to pretend, like feeding a block to a doll as if it were food</TableCell>
                                <TableCell align="center"><DoneIcon sx={{ color: 'green' }}/></TableCell>
                                <TableCell rowSpan={5} align="center"><img src={m1} alt='Startled by loud noices' style={{ height: '3em'}} /></TableCell>
                            </TableRow>
                            <TableRow className='grey-row'>
                                <TableCell>Shows simple problem-solving skills, eg: standing on a stool to reach something</TableCell>
                                <TableCell align="center"><DoneIcon sx={{ color: 'green' }}/></TableCell>
                            </TableRow>
                            <TableRow className='grey-row'>
                                <TableCell>Follows two-step instructions like "Put the toy down and close the door"</TableCell>
                                <TableCell align="center"><DoneIcon sx={{ color: 'green' }}/></TableCell>
                            </TableRow>
                            <TableRow className='grey-row'>
                                <TableCell>Shows he knows at least one color; like pointing to a red crayon when you ask, "Which one is red?"</TableCell>
                                <TableCell align="center"><DoneIcon sx={{ color: 'green' }}/></TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </TableContainer>

                <h4>Milestone IV - Movement / Physical Development Milestones</h4>
                <TableContainer component={Paper}>
                    <Table>
                        <TableHead className='table-header'>
                            <TableRow className='phc-table-header'>
                                <TableCell className="phc-table-header-cell" align="center" style={{ width: '55%' }}>Milestone</TableCell>
                                <TableCell className="phc-table-header-cell" align="center" style={{ width: '10%' }}>Status</TableCell>
                                <TableCell className="phc-table-header-cell" style={{ width: '5%' }}></TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            <TableRow className=''>
                                <TableCell>Uses hands to twist things, like turning doorknobs or unscrewing lids</TableCell>
                                <TableCell align="center"><DoneIcon sx={{ color: 'green' }}/></TableCell>
                                <TableCell rowSpan={5} align="center"><img src={m1} alt='Startled by loud noices' style={{ height: '3em'}} /></TableCell>
                            </TableRow>
                            <TableRow className='grey-row'>
                                <TableCell>Takes some clothes off by himself, like loose pants or an open jacket</TableCell>
                                <TableCell align="center"><DoneIcon sx={{ color: 'green' }}/></TableCell>
                            </TableRow>
                            <TableRow className='grey-row'>
                                <TableCell>Jumps off the ground with both feet</TableCell>
                                <TableCell align="center"><DoneIcon sx={{ color: 'green' }}/></TableCell>
                            </TableRow>
                            <TableRow className='grey-row'>
                                <TableCell>Turns book pages, one at a time, when read to her</TableCell>
                                <TableCell align="center"><DoneIcon sx={{ color: 'green' }}/></TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </TableContainer> */}

                {/* 3 Years */}

                {/* <h4>At 3 Years</h4>
                <h4>Milestone I - Social / Emotional Milestone</h4>
                <TableContainer component={Paper}>
                    <Table>
                        <TableHead className='table-header'>
                            <TableRow className='phc-table-header'>
                                <TableCell className="phc-table-header-cell" align="center" style={{ width: '55%' }}>Milestone</TableCell>
                                <TableCell className="phc-table-header-cell" align="center" style={{ width: '10%' }}>Status</TableCell>
                                <TableCell className="phc-table-header-cell" style={{ width: '5%' }}></TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            <TableRow className=''>
                                <TableCell>Calms down within 10 minutes after you leave her, like at a childcare drop off</TableCell>
                                <TableCell align="center"><DoneIcon sx={{ color: 'green' }}/></TableCell>
                                <TableCell rowSpan={5} align="center"><img src={m1} alt='Startled by loud noices' style={{ height: '3em'}} /></TableCell>
                            </TableRow>
                            <TableRow className='grey-row'>
                                <TableCell>Notices other children and joins them to play</TableCell>
                                <TableCell align="center"><DoneIcon sx={{ color: 'green' }}/></TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </TableContainer>
                <br/>

                <h4>Milestone II - Language / Communication Milestone</h4>
                <TableContainer component={Paper}>
                    <Table>
                        <TableHead className='table-header'>
                            <TableRow className='phc-table-header'>
                                <TableCell className="phc-table-header-cell" align="center" style={{ width: '55%' }}>Milestone</TableCell>
                                <TableCell className="phc-table-header-cell" align="center" style={{ width: '10%' }}>Status</TableCell>
                                <TableCell className="phc-table-header-cell" style={{ width: '5%' }}></TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            <TableRow className=''>
                                <TableCell>Talks with you in conversation using at least two back-and-forth exchanges</TableCell>
                                <TableCell align="center"><DoneIcon sx={{ color: 'green' }}/></TableCell>
                                <TableCell rowSpan={5} align="center"><img src={m1} alt='Startled by loud noices' style={{ height: '3em'}} /></TableCell>
                            </TableRow>
                            <TableRow className='grey-row'>
                                <TableCell>Asks "who", "what", "where", or "why" questions, like "Where is mommy / daddy?"</TableCell>
                                <TableCell align="center"><DoneIcon sx={{ color: 'green' }}/></TableCell>
                            </TableRow>
                            <TableRow className='grey-row'>
                                <TableCell>Says what action is happening in a picture or book when asked, like "running", "eating", or "playing"</TableCell>
                                <TableCell align="center"><DoneIcon sx={{ color: 'green' }}/></TableCell>
                            </TableRow>
                            <TableRow className='grey-row'>
                                <TableCell>Says first name, when asked</TableCell>
                                <TableCell align="center"><DoneIcon sx={{ color: 'green' }}/></TableCell>
                            </TableRow>
                            <TableRow className='grey-row'>
                                <TableCell>Talks well enough for others to understand, most of the time</TableCell>
                                <TableCell align="center"><DoneIcon sx={{ color: 'green' }}/></TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </TableContainer>
                <br/>

                <h4>Milestone III - Cognitive Milestone (learning, thinking, problem-solving)</h4>
                <TableContainer component={Paper}>
                    <Table>
                        <TableHead className='table-header'>
                            <TableRow className='phc-table-header'>
                                <TableCell className="phc-table-header-cell" align="center" style={{ width: '55%' }}>Milestone</TableCell>
                                <TableCell className="phc-table-header-cell" align="center" style={{ width: '10%' }}>Status</TableCell>
                                <TableCell className="phc-table-header-cell" style={{ width: '5%' }}></TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            <TableRow className=''>
                                <TableCell>Draws a circle, when you show him how</TableCell>
                                <TableCell align="center"><DoneIcon sx={{ color: 'green' }}/></TableCell>
                                <TableCell rowSpan={5} align="center"><img src={m1} alt='Startled by loud noices' style={{ height: '3em'}} /></TableCell>
                            </TableRow>
                            <TableRow className='grey-row'>
                                <TableCell>Avoids touching hot objects, like a stove, when you warn her</TableCell>
                                <TableCell align="center"><DoneIcon sx={{ color: 'green' }}/></TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </TableContainer>

                <h4>Milestone IV - Movement / Physical Development Milestones</h4>
                <TableContainer component={Paper}>
                    <Table>
                        <TableHead className='table-header'>
                            <TableRow className='phc-table-header'>
                                <TableCell className="phc-table-header-cell" align="center" style={{ width: '55%' }}>Milestone</TableCell>
                                <TableCell className="phc-table-header-cell" align="center" style={{ width: '10%' }}>Status</TableCell>
                                <TableCell className="phc-table-header-cell" style={{ width: '5%' }}></TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            <TableRow className=''>
                                <TableCell>Strings items together, like large beads or macaroni</TableCell>
                                <TableCell align="center"><DoneIcon sx={{ color: 'green' }}/></TableCell>
                                <TableCell rowSpan={5} align="center"><img src={m1} alt='Startled by loud noices' style={{ height: '3em'}} /></TableCell>
                            </TableRow>
                            <TableRow className='grey-row'>
                                <TableCell>Puts on some clothes by himself, like loose pants or a jacket</TableCell>
                                <TableCell align="center"><DoneIcon sx={{ color: 'green' }}/></TableCell>
                            </TableRow>
                            <TableRow className='grey-row'>
                                <TableCell>Uses a fork</TableCell>
                                <TableCell align="center"><DoneIcon sx={{ color: 'green' }}/></TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </TableContainer> */}

                {/* 4 Years */}

                {/* <h4>At 4 Years</h4>
                <h4>Milestone I - Social / Emotional Milestone</h4>
                <TableContainer component={Paper}>
                    <Table>
                        <TableHead className='table-header'>
                            <TableRow className='phc-table-header'>
                                <TableCell className="phc-table-header-cell" align="center" style={{ width: '55%' }}>Milestone</TableCell>
                                <TableCell className="phc-table-header-cell" align="center" style={{ width: '10%' }}>Status</TableCell>
                                <TableCell className="phc-table-header-cell" style={{ width: '5%' }}></TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            <TableRow className=''>
                                <TableCell>Pretends to be something else during play (teacher, superhero, cat)</TableCell>
                                <TableCell align="center"><DoneIcon sx={{ color: 'green' }}/></TableCell>
                                <TableCell rowSpan={5} align="center"><img src={m1} alt='Startled by loud noices' style={{ height: '3em'}} /></TableCell>
                            </TableRow>
                            <TableRow className='grey-row'>
                                <TableCell>Asks to go play with children if none are around, like "Can I play with Ali?"</TableCell>
                                <TableCell align="center"><DoneIcon sx={{ color: 'green' }}/></TableCell>
                            </TableRow>
                            <TableRow className='grey-row'>
                                <TableCell>Comforts others who are hurt or sad, like hugging a crying friend</TableCell>
                                <TableCell align="center"><DoneIcon sx={{ color: 'green' }}/></TableCell>
                            </TableRow>
                            <TableRow className=''>
                                <TableCell>Avoids danger, like not jumping from tall heights at the playground</TableCell>
                                <TableCell align="center"><DoneIcon sx={{ color: 'green' }}/></TableCell>
                                <TableCell rowSpan={5} align="center"><img src={m1} alt='Startled by loud noices' style={{ height: '3em'}} /></TableCell>
                            </TableRow>
                            <TableRow className='grey-row'>
                                <TableCell>Likes to be a "helper"</TableCell>
                                <TableCell align="center"><DoneIcon sx={{ color: 'green' }}/></TableCell>
                            </TableRow>
                            <TableRow className='grey-row'>
                                <TableCell>Changes behaviour based on where she is (place of worship, library, playground)</TableCell>
                                <TableCell align="center"><DoneIcon sx={{ color: 'green' }}/></TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </TableContainer>
                <br/>

                <h4>Milestone II - Language / Communication Milestone</h4>
                <TableContainer component={Paper}>
                    <Table>
                        <TableHead className='table-header'>
                            <TableRow className='phc-table-header'>
                                <TableCell className="phc-table-header-cell" align="center" style={{ width: '55%' }}>Milestone</TableCell>
                                <TableCell className="phc-table-header-cell" align="center" style={{ width: '10%' }}>Status</TableCell>
                                <TableCell className="phc-table-header-cell" style={{ width: '5%' }}></TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            <TableRow className=''>
                                <TableCell>Say sentences with four or more words</TableCell>
                                <TableCell align="center"><DoneIcon sx={{ color: 'green' }}/></TableCell>
                                <TableCell rowSpan={5} align="center"><img src={m1} alt='Startled by loud noices' style={{ height: '3em'}} /></TableCell>
                            </TableRow>
                            <TableRow className='grey-row'>
                                <TableCell>Says some words from a song, story, or nursery rhyme</TableCell>
                                <TableCell align="center"><DoneIcon sx={{ color: 'green' }}/></TableCell>
                            </TableRow>
                            <TableRow className='grey-row'>
                                <TableCell>Talks about at least one thing tht happened during his day, like "I played soccer"</TableCell>
                                <TableCell align="center"><DoneIcon sx={{ color: 'green' }}/></TableCell>
                            </TableRow>
                            <TableRow className='grey-row'>
                                <TableCell>Answers simple questions like "What is a coat for?" or "What is a crayon for?"</TableCell>
                                <TableCell align="center"><DoneIcon sx={{ color: 'green' }}/></TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </TableContainer>
                <br/>

                <h4>Milestone III - Cognitive Milestone (learning, thinking, problem-solving)</h4>
                <TableContainer component={Paper}>
                    <Table>
                        <TableHead className='table-header'>
                            <TableRow className='phc-table-header'>
                                <TableCell className="phc-table-header-cell" align="center" style={{ width: '55%' }}>Milestone</TableCell>
                                <TableCell className="phc-table-header-cell" align="center" style={{ width: '10%' }}>Status</TableCell>
                                <TableCell className="phc-table-header-cell" style={{ width: '5%' }}></TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            <TableRow className=''>
                                <TableCell>Names a few colors of items</TableCell>
                                <TableCell align="center"><DoneIcon sx={{ color: 'green' }}/></TableCell>
                                <TableCell rowSpan={5} align="center"><img src={m1} alt='Startled by loud noices' style={{ height: '3em'}} /></TableCell>
                            </TableRow>
                            <TableRow className='grey-row'>
                                <TableCell>Tells what is next in a well-known story</TableCell>
                                <TableCell align="center"><DoneIcon sx={{ color: 'green' }}/></TableCell>
                            </TableRow>
                            <TableRow className='grey-row'>
                                <TableCell>Draws a person with 3 or more body parts</TableCell>
                                <TableCell align="center"><DoneIcon sx={{ color: 'green' }}/></TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </TableContainer>

                <h4>Milestone IV - Movement / Physical Development Milestones</h4>
                <TableContainer component={Paper}>
                    <Table>
                        <TableHead className='table-header'>
                            <TableRow className='phc-table-header'>
                                <TableCell className="phc-table-header-cell" align="center" style={{ width: '55%' }}>Milestone</TableCell>
                                <TableCell className="phc-table-header-cell" align="center" style={{ width: '10%' }}>Status</TableCell>
                                <TableCell className="phc-table-header-cell" style={{ width: '5%' }}></TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            <TableRow className=''>
                                <TableCell>Catches a large ball most of the time</TableCell>
                                <TableCell align="center"><DoneIcon sx={{ color: 'green' }}/></TableCell>
                                <TableCell rowSpan={5} align="center"><img src={m1} alt='Startled by loud noices' style={{ height: '3em'}} /></TableCell>
                            </TableRow>
                            <TableRow className='grey-row'>
                                <TableCell>Serves himself food or pours water, with adult supervision</TableCell>
                                <TableCell align="center"><DoneIcon sx={{ color: 'green' }}/></TableCell>
                            </TableRow>
                            <TableRow className='grey-row'>
                                <TableCell>Unbuttons some buttons</TableCell>
                                <TableCell align="center"><DoneIcon sx={{ color: 'green' }}/></TableCell>
                            </TableRow>
                            <TableRow className='grey-row'>
                                <TableCell>Holds crayon or pencil between fingers and thumb (not a fist)</TableCell>
                                <TableCell align="center"><DoneIcon sx={{ color: 'green' }}/></TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </TableContainer> */}

                {/* 5 Years */}

                {/* <h4>At 5 Years</h4>
                <h4>Milestone I - Social / Emotional Milestone</h4>
                <TableContainer component={Paper}>
                    <Table>
                        <TableHead className='table-header'>
                            <TableRow className='phc-table-header'>
                                <TableCell className="phc-table-header-cell" align="center" style={{ width: '55%' }}>Milestone</TableCell>
                                <TableCell className="phc-table-header-cell" align="center" style={{ width: '10%' }}>Status</TableCell>
                                <TableCell className="phc-table-header-cell" style={{ width: '5%' }}></TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            <TableRow className=''>
                                <TableCell>Follows rules or takes turns when playing games with other children</TableCell>
                                <TableCell align="center"><DoneIcon sx={{ color: 'green' }}/></TableCell>
                                <TableCell rowSpan={5} align="center"><img src={m1} alt='Startled by loud noices' style={{ height: '3em'}} /></TableCell>
                            </TableRow>
                            <TableRow className='grey-row'>
                                <TableCell>Sings, dances, or acts for you</TableCell>
                                <TableCell align="center"><DoneIcon sx={{ color: 'green' }}/></TableCell>
                            </TableRow>
                            <TableRow className='grey-row'>
                                <TableCell>Does simple chores at home, like matching socks</TableCell>
                                <TableCell align="center"><DoneIcon sx={{ color: 'green' }}/></TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </TableContainer>
                <br/>

                <h4>Milestone II - Language / Communication Milestone</h4>
                <TableContainer component={Paper}>
                    <Table>
                        <TableHead className='table-header'>
                            <TableRow className='phc-table-header'>
                                <TableCell className="phc-table-header-cell" align="center" style={{ width: '55%' }}>Milestone</TableCell>
                                <TableCell className="phc-table-header-cell" align="center" style={{ width: '10%' }}>Status</TableCell>
                                <TableCell className="phc-table-header-cell" style={{ width: '5%' }}></TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            <TableRow className=''>
                                <TableCell>Tells a story she heared or made up with at least two events. For example, a cat was stuck in a tree and a firefighter saved it</TableCell>
                                <TableCell align="center"><DoneIcon sx={{ color: 'green' }}/></TableCell>
                                <TableCell rowSpan={5} align="center"><img src={m1} alt='Startled by loud noices' style={{ height: '3em'}} /></TableCell>
                            </TableRow>
                            <TableRow className='grey-row'>
                                <TableCell>Answers simple questions about a book or story after you read or tell it to him</TableCell>
                                <TableCell align="center"><DoneIcon sx={{ color: 'green' }}/></TableCell>
                            </TableRow>
                            <TableRow className='grey-row'>
                                <TableCell>Keeps a conversation going with more than three back-and-forth exchanges</TableCell>
                                <TableCell align="center"><DoneIcon sx={{ color: 'green' }}/></TableCell>
                            </TableRow>
                            <TableRow className='grey-row'>
                                <TableCell>Uses or recognizes simple rhymes (bat-cat, ball-tall)</TableCell>
                                <TableCell align="center"><DoneIcon sx={{ color: 'green' }}/></TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </TableContainer>
                <br/>

                <h4>Milestone III - Cognitive Milestone (learning, thinking, problem-solving)</h4>
                <TableContainer component={Paper}>
                    <Table>
                        <TableHead className='table-header'>
                            <TableRow className='phc-table-header'>
                                <TableCell className="phc-table-header-cell" align="center" style={{ width: '55%' }}>Milestone</TableCell>
                                <TableCell className="phc-table-header-cell" align="center" style={{ width: '10%' }}>Status</TableCell>
                                <TableCell className="phc-table-header-cell" style={{ width: '5%' }}></TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            <TableRow className=''>
                                <TableCell>Counts to 10</TableCell>
                                <TableCell align="center"><DoneIcon sx={{ color: 'green' }}/></TableCell>
                                <TableCell rowSpan={5} align="center"><img src={m1} alt='Startled by loud noices' style={{ height: '3em'}} /></TableCell>
                            </TableRow>
                            <TableRow className='grey-row'>
                                <TableCell>Names some numbers between 1 and 5 when you point to them</TableCell>
                                <TableCell align="center"><DoneIcon sx={{ color: 'green' }}/></TableCell>
                            </TableRow>
                            <TableRow className=''>
                                <TableCell>Uses words about time, like "yesterday", "tomorrow", "morning", or "night"</TableCell>
                                <TableCell align="center"><DoneIcon sx={{ color: 'green' }}/></TableCell>
                            </TableRow>
                            <TableRow className='grey-row'>
                                <TableCell>Pays attention for 5 to 10 minutes during activities. For example, during story time or making arts and crafts (screen time does not count)</TableCell>
                                <TableCell align="center"><DoneIcon sx={{ color: 'green' }}/></TableCell>
                            </TableRow>
                            <TableRow className=''>
                                <TableCell>Writes some letters in her name</TableCell>
                                <TableCell align="center"><DoneIcon sx={{ color: 'green' }}/></TableCell>
                            </TableRow>
                            <TableRow className='grey-row'>
                                <TableCell>Names some letters when you point to them</TableCell>
                                <TableCell align="center"><DoneIcon sx={{ color: 'green' }}/></TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </TableContainer>

                <h4>Milestone IV - Movement / Physical Development Milestones</h4>
                <TableContainer component={Paper}>
                    <Table>
                        <TableHead className='table-header'>
                            <TableRow className='phc-table-header'>
                                <TableCell className="phc-table-header-cell" align="center" style={{ width: '55%' }}>Milestone</TableCell>
                                <TableCell className="phc-table-header-cell" align="center" style={{ width: '10%' }}>Status</TableCell>
                                <TableCell className="phc-table-header-cell" style={{ width: '5%' }}></TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            <TableRow className=''>
                                <TableCell>Buttons some buttons</TableCell>
                                <TableCell align="center"><DoneIcon sx={{ color: 'green' }}/></TableCell>
                                <TableCell rowSpan={5} align="center"><img src={m1} alt='Startled by loud noices' style={{ height: '3em'}} /></TableCell>
                            </TableRow>
                            <TableRow className='grey-row'>
                                <TableCell>Hops on one foot</TableCell>
                                <TableCell align="center"><DoneIcon sx={{ color: 'green' }}/></TableCell>
                            </TableRow>
                            <TableRow className=''>
                                <TableCell>Uses a fork</TableCell>
                                <TableCell align="center"><DoneIcon sx={{ color: 'green' }}/></TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </TableContainer> */}


                
                {/* <h4>From 6 months to 12 months</h4>
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
                </TableContainer> */}
            </div>
        </div>
    </div>
}

export default Milestones;