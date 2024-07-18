import * as React from 'react';
import { useState } from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import Header from '../../components/header';


import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';

import Chart from 'chart.js/auto'
import { CategoryScale, defaults, Filler, LineController } from 'chart.js';
import annotationPlugin from 'chartjs-plugin-annotation';

import { wfa_b_0_to_5_years_zscores } from "./DataSets/whoStandard/ZScores/wfa/wfa_boys_0-to-5-years_zscores";
import { wfa_g_0_to_5_years_zscores } from "./DataSets/whoStandard/ZScores/wfa/wfa_girls_0-to-5-years_zscores";
import { lhfa_b_0_to_5_years_zscores } from "./DataSets/whoStandard/ZScores/lhfa/lhfa_boys_0-to-5-years_zscores";
import { lhfa_g_0_to_5_years_zscores } from "./DataSets/whoStandard/ZScores/lhfa/lhfa_girls_0-to-5-years_zscores";
import { hcfa_b_0_to_5_years_zscores } from "./DataSets/whoStandard/ZScores/hcfa/hcfa_boys_0-to-5-years_zscores";
import { hcfa_g_0_to_5_years_zscores } from "./DataSets/whoStandard/ZScores/hcfa/hcfa_girls_0-to-5-years_zscores";
import Wfa_Boys from "./components/wfa_boys-0-to-5-years"
import Wfa_Girls from "./components/wfa_girls-0-to-5-years"
import Lhfa_Boys from "./components/lhfa_boys-0-to-5-years"
import Lhfa_Girls from "./components/lhfa_girls-0-to-5-years"
import Hcfa_Boys from "./components/hcfa_boys-0-to-5-years"
import Hcfa_Girls from "./components/hcfa_girls-0-to-5-years"
import './styles.css';

Chart.register(CategoryScale, Filler, annotationPlugin)

/*
    Data Requirement
        Gender
        DOB
        DataPoints (Events)

    @TODO 
    - Disable DataPoint (tooltip) for base chart
*/


  function ToggleVisibility({children}) {
    const [show, setShow] = useState();

    function toggleShow() {
        setShow(!show);
    }

    var btnText = show ? "Hide Data" : "Show Data";

    return(
        <div className="component-container">

            <Button onClick={toggleShow} variant="contained">{btnText}</Button>
            <br/>
            {show && children}
            
        </div>
    );
  }

const GrowthMonitoring = () => {
    const [value, setValue] = React.useState('1');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const [wfaBoyschartData, setWfaBoyschartData] = useState({
        labels: wfa_b_0_to_5_years_zscores.map((data) => data.Month), 
        datasets: [            
            {
                // yAxisID: 'yAxes',
                label: "3",
                data: wfa_b_0_to_5_years_zscores.map((data) => data.SD3),
                borderColor: "black",
                borderWidth: 2,
                pointRadius: 0,
                fill: {
                    target: "2",
                    above: "rgba(255,255,0,0.3)"
                },
            },
            {
                label: "2",
                data: wfa_b_0_to_5_years_zscores.map((data) => data.SD2),
                borderColor: "black",
                borderWidth: 2,
                pointRadius: 0
            },
            {
                label: "1",
                data: wfa_b_0_to_5_years_zscores.map((data) => data.SD1),
                borderColor: "black",
                borderWidth: 2,
                pointRadius: 0
            },
            {
                label: "0",
                data: wfa_b_0_to_5_years_zscores.map((data) => data.SD0),
                borderColor: "black",
                borderWidth: 2,
                pointRadius: 0
            },
            {
                label: "-1",
                data: wfa_b_0_to_5_years_zscores.map((data) => data.SD1neg),
                borderColor: "black",
                borderWidth: 2,
                pointRadius: 0
            },
            {
                label: "-2",
                data: wfa_b_0_to_5_years_zscores.map((data) => data.SD2neg),
                borderColor: "black",
                borderWidth: 2,
                pointRadius: 0,
                fill: {
                    target: "2",
                    below: "rgba(0,255,0,0.3)"
                },
            },
            {
                label: "-3",
                data: wfa_b_0_to_5_years_zscores.map((data) => data.SD3neg),
                borderColor: "black",
                borderWidth: 2,
                pointRadius: 0,
                fill: {
                    target: "-1",
                    below: "rgba(255,0,0,0.3)"
                },
            },
            {
                label: "eventData",
                data: [null,1,4,5],
                borderColor: "blue",
                borderWidth: 2,
                pointRadius: 2
            }
        ],
    });

    const [wfaGirlschartData, setWfaGirlschartData] = useState({
        labels: wfa_g_0_to_5_years_zscores.map((data) => data.Month), 
        datasets: [            
            {
                // yAxisID: 'yAxes',
                label: "3",
                data: wfa_g_0_to_5_years_zscores.map((data) => data.SD3),
                borderColor: "black",
                borderWidth: 2,
                pointRadius: 0,
                fill: {
                    target: "2",
                    above: "rgba(255,255,0,0.3)"
                },
            },
            {
                label: "2",
                data: wfa_g_0_to_5_years_zscores.map((data) => data.SD2),
                borderColor: "black",
                borderWidth: 2,
                pointRadius: 0
            },
            {
                label: "1",
                data: wfa_g_0_to_5_years_zscores.map((data) => data.SD1),
                borderColor: "black",
                borderWidth: 2,
                pointRadius: 0
            },
            {
                label: "0",
                data: wfa_g_0_to_5_years_zscores.map((data) => data.SD0),
                borderColor: "black",
                borderWidth: 2,
                pointRadius: 0
            },
            {
                label: "-1",
                data: wfa_g_0_to_5_years_zscores.map((data) => data.SD1neg),
                borderColor: "black",
                borderWidth: 2,
                pointRadius: 0
            },
            {
                label: "-2",
                data: wfa_g_0_to_5_years_zscores.map((data) => data.SD2neg),
                borderColor: "black",
                borderWidth: 2,
                pointRadius: 0,
                fill: {
                    target: "2",
                    below: "rgba(0,255,0,0.3)"
                },
            },
            {
                label: "-3",
                data: wfa_g_0_to_5_years_zscores.map((data) => data.SD3neg),
                borderColor: "black",
                borderWidth: 2,
                pointRadius: 0,
                fill: {
                    target: "-1",
                    below: "rgba(255,0,0,0.3)"
                },
            },
            // {
            //     label: "eventData",
            //     data: [null,1,4,5],
            //     borderColor: "blue",
            //     borderWidth: 2,
            //     pointRadius: 2
            // }
        ],
        defaults: {
            scale: {
                ticks: { min: 0}
            }
        }
    });

    const [lhfaBoyschartData, setLhfaBoyschartData] = useState({
        labels: lhfa_b_0_to_5_years_zscores.map((data) => data.Month), 
        datasets: [            
            {
                // yAxisID: 'yAxes',
                label: "3",
                data: lhfa_b_0_to_5_years_zscores.map((data) => data.SD3),
                borderColor: "black",
                borderWidth: 2,
                pointRadius: 0,
                fill: {
                    target: "2",
                    above: "rgba(255,255,0,0.3)"
                },
            },
            {
                label: "2",
                data: lhfa_b_0_to_5_years_zscores.map((data) => data.SD2),
                borderColor: "black",
                borderWidth: 2,
                pointRadius: 0
            },
            {
                label: "1",
                data: lhfa_b_0_to_5_years_zscores.map((data) => data.SD1),
                borderColor: "black",
                borderWidth: 2,
                pointRadius: 0
            },
            {
                label: "0",
                data: lhfa_b_0_to_5_years_zscores.map((data) => data.SD0),
                borderColor: "black",
                borderWidth: 2,
                pointRadius: 0
            },
            {
                label: "-1",
                data: lhfa_b_0_to_5_years_zscores.map((data) => data.SD1neg),
                borderColor: "black",
                borderWidth: 2,
                pointRadius: 0
            },
            {
                label: "-2",
                data: lhfa_b_0_to_5_years_zscores.map((data) => data.SD2neg),
                borderColor: "black",
                borderWidth: 2,
                pointRadius: 0,
                fill: {
                    target: "2",
                    below: "rgba(0,255,0,0.3)"
                },
            },
            {
                label: "-3",
                data: lhfa_b_0_to_5_years_zscores.map((data) => data.SD3neg),
                borderColor: "black",
                borderWidth: 2,
                pointRadius: 0,
                fill: {
                    target: "-1",
                    below: "rgba(255,0,0,0.3)"
                },
            },
            // {
            //     label: "eventData",
            //     data: [null,1,4,5],
            //     borderColor: "blue",
            //     borderWidth: 2,
            //     pointRadius: 2
            // }
        ],
        defaults: {
            scale: {
                ticks: { min: 0}
            }
        }
    });

    const [lhfaGirlschartData, setLhfaGirlschartData] = useState({
        labels: lhfa_g_0_to_5_years_zscores.map((data) => data.Month), 
        datasets: [            
            {
                // yAxisID: 'yAxes',
                label: "3",
                data: lhfa_g_0_to_5_years_zscores.map((data) => data.SD3),
                borderColor: "black",
                borderWidth: 2,
                pointRadius: 0,
                fill: {
                    target: "2",
                    above: "rgba(255,255,0,0.3)"
                },
            },
            {
                label: "2",
                data: lhfa_g_0_to_5_years_zscores.map((data) => data.SD2),
                borderColor: "black",
                borderWidth: 2,
                pointRadius: 0
            },
            {
                label: "1",
                data: lhfa_g_0_to_5_years_zscores.map((data) => data.SD1),
                borderColor: "black",
                borderWidth: 2,
                pointRadius: 0
            },
            {
                label: "0",
                data: lhfa_g_0_to_5_years_zscores.map((data) => data.SD0),
                borderColor: "black",
                borderWidth: 2,
                pointRadius: 0
            },
            {
                label: "-1",
                data: lhfa_g_0_to_5_years_zscores.map((data) => data.SD1neg),
                borderColor: "black",
                borderWidth: 2,
                pointRadius: 0
            },
            {
                label: "-2",
                data: lhfa_g_0_to_5_years_zscores.map((data) => data.SD2neg),
                borderColor: "black",
                borderWidth: 2,
                pointRadius: 0,
                fill: {
                    target: "2",
                    below: "rgba(0,255,0,0.3)"
                },
            },
            {
                label: "-3",
                data: lhfa_g_0_to_5_years_zscores.map((data) => data.SD3neg),
                borderColor: "black",
                borderWidth: 2,
                pointRadius: 0,
                fill: {
                    target: "-1",
                    below: "rgba(255,0,0,0.3)"
                },
            },
            // {
            //     label: "eventData",
            //     data: [null,1,4,5],
            //     borderColor: "blue",
            //     borderWidth: 2,
            //     pointRadius: 2
            // }
        ],
        defaults: {
            scale: {
                ticks: { min: 0}
            }
        }
    });

    const [hcfaBoyschartData, setHcfaBoyschartData] = useState({
        labels: hcfa_b_0_to_5_years_zscores.map((data) => data.Month), 
        datasets: [            
            {
                // yAxisID: 'yAxes',
                label: "3",
                data: hcfa_b_0_to_5_years_zscores.map((data) => data.SD3),
                borderColor: "black",
                borderWidth: 2,
                pointRadius: 0,
                fill: {
                    target: "2",
                    above: "rgba(255,255,0,0.3)"
                },
            },
            {
                label: "2",
                data: hcfa_b_0_to_5_years_zscores.map((data) => data.SD2),
                borderColor: "black",
                borderWidth: 2,
                pointRadius: 0
            },
            {
                label: "1",
                data: hcfa_b_0_to_5_years_zscores.map((data) => data.SD1),
                borderColor: "black",
                borderWidth: 2,
                pointRadius: 0
            },
            {
                label: "0",
                data: hcfa_b_0_to_5_years_zscores.map((data) => data.SD0),
                borderColor: "black",
                borderWidth: 2,
                pointRadius: 0
            },
            {
                label: "-1",
                data: hcfa_b_0_to_5_years_zscores.map((data) => data.SD1neg),
                borderColor: "black",
                borderWidth: 2,
                pointRadius: 0
            },
            {
                label: "-2",
                data: hcfa_b_0_to_5_years_zscores.map((data) => data.SD2neg),
                borderColor: "black",
                borderWidth: 2,
                pointRadius: 0,
                fill: {
                    target: "2",
                    below: "rgba(0,255,0,0.3)"
                },
            },
            {
                label: "-3",
                data: hcfa_b_0_to_5_years_zscores.map((data) => data.SD3neg),
                borderColor: "black",
                borderWidth: 2,
                pointRadius: 0,
                fill: {
                    target: "-1",
                    below: "rgba(255,0,0,0.3)"
                },
            },
            // {
            //     label: "eventData",
            //     data: [null,1,4,5],
            //     borderColor: "blue",
            //     borderWidth: 2,
            //     pointRadius: 2
            // }
        ],
        defaults: {
            scale: {
                ticks: { min: 0}
            }
        }
    });

    const [hcfaGirlschartData, setHcfaGirlschartData] = useState({
        labels: hcfa_g_0_to_5_years_zscores.map((data) => data.Month), 
        datasets: [            
            {
                // yAxisID: 'yAxes',
                label: "3",
                data: hcfa_g_0_to_5_years_zscores.map((data) => data.SD3),
                borderColor: "black",
                borderWidth: 2,
                pointRadius: 0,
                fill: {
                    target: "2",
                    above: "rgba(255,255,0,0.3)"
                },
            },
            {
                label: "2",
                data: hcfa_g_0_to_5_years_zscores.map((data) => data.SD2),
                borderColor: "black",
                borderWidth: 2,
                pointRadius: 0
            },
            {
                label: "1",
                data: hcfa_g_0_to_5_years_zscores.map((data) => data.SD1),
                borderColor: "black",
                borderWidth: 2,
                pointRadius: 0
            },
            {
                label: "0",
                data: hcfa_g_0_to_5_years_zscores.map((data) => data.SD0),
                borderColor: "black",
                borderWidth: 2,
                pointRadius: 0
            },
            {
                label: "-1",
                data: hcfa_g_0_to_5_years_zscores.map((data) => data.SD1neg),
                borderColor: "black",
                borderWidth: 2,
                pointRadius: 0
            },
            {
                label: "-2",
                data: hcfa_g_0_to_5_years_zscores.map((data) => data.SD2neg),
                borderColor: "black",
                borderWidth: 2,
                pointRadius: 0,
                fill: {
                    target: "2",
                    below: "rgba(0,255,0,0.3)"
                },
            },
            {
                label: "-3",
                data: hcfa_g_0_to_5_years_zscores.map((data) => data.SD3neg),
                borderColor: "black",
                borderWidth: 2,
                pointRadius: 0,
                fill: {
                    target: "-1",
                    below: "rgba(255,0,0,0.3)"
                },
            },
            // {
            //     label: "eventData",
            //     data: [null,1,4,5],
            //     borderColor: "blue",
            //     borderWidth: 2,
            //     pointRadius: 2
            // }
        ],
        defaults: {
            scale: {
                ticks: { min: 0}
            }
        }
    });

    return (
    <div className='dashboard-container'>
        <div className='dashboard-wrapper'>
            <h3 className="help-centered"> All charts for demo </h3>

            <div className='content-wrapper help-centered'></div>
            <div className='content-section content-wrapper'>

                <div className="help-centered">
                    <TableContainer component={Paper}>
                        <Table sx={{ minWidth: 650 }} aria-label="simple table">
                            <TableHead>
                                <TableRow>
                                    <TableCell align="center">Weight for Age (Boys)</TableCell>
                                </TableRow>
                            </TableHead>
                            
                            <TableBody>
                                <TableRow>
                                    <TableCell align='center'>
                                        <div className='App'>
                                            <Wfa_Boys chartData={wfaBoyschartData}/>
                                        </div>
                                    </TableCell>
                                </TableRow>

                                <TableRow>
                                    <TableCell align='center'>
                                    Latest weight for age: Normal
                                    </TableCell>
                                </TableRow>

                                <TableRow>
                                    <TableCell align='center'>
                                        <div className="App">
                                            <ToggleVisibility>

                                            <br/><br/>

                                                <TableContainer component={Paper}>
                                                    <Table sx={{ minWidth: 650, }} aria-label="simple table">
                                                        <TableHead>
                                                            <TableRow>
                                                                <TableCell align="center">Date</TableCell>
                                                                <TableCell align="center">Value</TableCell>
                                                                <TableCell align="center">Flag</TableCell>
                                                            </TableRow>
                                                        </TableHead>

                                                        <TableBody>
                                                            <TableRow>
                                                                <TableCell align='center'>2024-01-01</TableCell>
                                                                <TableCell align='center'>3.5</TableCell>
                                                                <TableCell align='center'>Normal</TableCell>
                                                            </TableRow>
                                                            <TableRow>
                                                                <TableCell align='center'>2024-02-05</TableCell>
                                                                <TableCell align='center'>4.0</TableCell>
                                                                <TableCell align='center'>Normal</TableCell>
                                                            </TableRow>
                                                            <TableRow>
                                                                <TableCell align='center'>2024-03-06</TableCell>
                                                                <TableCell align='center'>4.5</TableCell>
                                                                <TableCell align='center'>Normal</TableCell>
                                                            </TableRow>
                                                            <TableRow>
                                                                <TableCell align='center'>2024-04-05</TableCell>
                                                                <TableCell align='center'>5</TableCell>
                                                                <TableCell align='center'>Normal</TableCell>
                                                            </TableRow>
                                                            <TableRow>
                                                                <TableCell align='center'>2024-05-01</TableCell>
                                                                <TableCell align='center'>5.5</TableCell>
                                                                <TableCell align='center'>Normal</TableCell>
                                                            </TableRow>
                                                            <TableRow>
                                                                <TableCell align='center'>2024-06-05</TableCell>
                                                                <TableCell align='center'>6.1</TableCell>
                                                                <TableCell align='center'>Normal</TableCell>
                                                            </TableRow>
                                                            <TableRow>
                                                                <TableCell align='center'>2024-07-02</TableCell>
                                                                <TableCell align='center'>6.8</TableCell>
                                                                <TableCell align='center'>Normal</TableCell>
                                                            </TableRow>
                                                            <TableRow>
                                                                <TableCell align='center'>2024-08-05</TableCell>
                                                                <TableCell align='center'>7.4</TableCell>
                                                                <TableCell align='center'>Normal</TableCell>
                                                            </TableRow>
                                                            <TableRow>
                                                                <TableCell align='center'>2024-09-04</TableCell>
                                                                <TableCell align='center'>8.2</TableCell>
                                                                <TableCell align='center'>Normal</TableCell>
                                                            </TableRow>
                                                            <TableRow>
                                                                <TableCell align='center'>2024-10-08</TableCell>
                                                                <TableCell align='center'>9.0</TableCell>
                                                                <TableCell align='center'>Normal</TableCell>
                                                            </TableRow>
                                                            <TableRow>
                                                                <TableCell align='center'>2024-11-01</TableCell>
                                                                <TableCell align='center'>9.5</TableCell>
                                                                <TableCell align='center'>Normal</TableCell>
                                                            </TableRow>
                                                            <TableRow>
                                                                <TableCell align='center'>2024-12-05</TableCell>
                                                                <TableCell align='center'>10.0</TableCell>
                                                                <TableCell align='center'>Normal</TableCell>
                                                            </TableRow>

                                                        </TableBody>
                                                    </Table>
                                                </TableContainer>
                                            </ToggleVisibility>
                                        </div>

                                    </TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </TableContainer>
                </div>

                <br/><br/>

                <div className="help-centered">
                    <TableContainer component={Paper}>
                        <Table sx={{ minWidth: 650 }} aria-label="simple table">
                            <TableHead>
                                <TableRow>
                                    <TableCell align="center">Weight for Age (Girls)</TableCell>
                                </TableRow>
                            </TableHead>
                            
                            <TableBody>
                                <TableRow>
                                    <TableCell align='center'>
                                        <div className='App'>
                                            <Wfa_Girls chartData={wfaGirlschartData}/>
                                        </div>
                                    </TableCell>
                                </TableRow>

                                <TableRow>
                                    <TableCell align='center'>
                                    Latest weight for age: Normal
                                    </TableCell>
                                </TableRow>

                                <TableRow>
                                    <TableCell align='center'>
                                        <div className="App">
                                            <ToggleVisibility>

                                            <br/><br/>

                                                <TableContainer component={Paper}>
                                                    <Table sx={{ minWidth: 650, }} aria-label="simple table">
                                                        <TableHead>
                                                            <TableRow>
                                                                <TableCell align="center">Date</TableCell>
                                                                <TableCell align="center">Value</TableCell>
                                                                <TableCell align="center">Flag</TableCell>
                                                            </TableRow>
                                                        </TableHead>

                                                        <TableBody>
                                                            <TableRow>
                                                                <TableCell align='center'>2024-01-01</TableCell>
                                                                <TableCell align='center'>3.5</TableCell>
                                                                <TableCell align='center'>Normal</TableCell>
                                                            </TableRow>
                                                            <TableRow>
                                                                <TableCell align='center'>2024-02-05</TableCell>
                                                                <TableCell align='center'>4.0</TableCell>
                                                                <TableCell align='center'>Normal</TableCell>
                                                            </TableRow>
                                                            <TableRow>
                                                                <TableCell align='center'>2024-03-06</TableCell>
                                                                <TableCell align='center'>4.5</TableCell>
                                                                <TableCell align='center'>Normal</TableCell>
                                                            </TableRow>
                                                            <TableRow>
                                                                <TableCell align='center'>2024-04-05</TableCell>
                                                                <TableCell align='center'>5</TableCell>
                                                                <TableCell align='center'>Normal</TableCell>
                                                            </TableRow>
                                                            <TableRow>
                                                                <TableCell align='center'>2024-05-01</TableCell>
                                                                <TableCell align='center'>5.5</TableCell>
                                                                <TableCell align='center'>Normal</TableCell>
                                                            </TableRow>
                                                            <TableRow>
                                                                <TableCell align='center'>2024-06-05</TableCell>
                                                                <TableCell align='center'>6.1</TableCell>
                                                                <TableCell align='center'>Normal</TableCell>
                                                            </TableRow>
                                                            <TableRow>
                                                                <TableCell align='center'>2024-07-02</TableCell>
                                                                <TableCell align='center'>6.8</TableCell>
                                                                <TableCell align='center'>Normal</TableCell>
                                                            </TableRow>
                                                            <TableRow>
                                                                <TableCell align='center'>2024-08-05</TableCell>
                                                                <TableCell align='center'>7.4</TableCell>
                                                                <TableCell align='center'>Normal</TableCell>
                                                            </TableRow>
                                                            <TableRow>
                                                                <TableCell align='center'>2024-09-04</TableCell>
                                                                <TableCell align='center'>8.2</TableCell>
                                                                <TableCell align='center'>Normal</TableCell>
                                                            </TableRow>
                                                            <TableRow>
                                                                <TableCell align='center'>2024-10-08</TableCell>
                                                                <TableCell align='center'>9.0</TableCell>
                                                                <TableCell align='center'>Normal</TableCell>
                                                            </TableRow>
                                                            <TableRow>
                                                                <TableCell align='center'>2024-11-01</TableCell>
                                                                <TableCell align='center'>9.5</TableCell>
                                                                <TableCell align='center'>Normal</TableCell>
                                                            </TableRow>
                                                            <TableRow>
                                                                <TableCell align='center'>2024-12-05</TableCell>
                                                                <TableCell align='center'>10.0</TableCell>
                                                                <TableCell align='center'>Normal</TableCell>
                                                            </TableRow>

                                                        </TableBody>
                                                    </Table>
                                                </TableContainer>
                                            </ToggleVisibility>
                                        </div>

                                    </TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </TableContainer>
                </div>

                <br/><br/>

                <div className="help-centered">
                    <TableContainer component={Paper}>
                        <Table sx={{ minWidth: 650 }} aria-label="simple table">
                            <TableHead>
                                <TableRow>
                                    <TableCell align="center">Length / Height for Age (Boys)</TableCell>
                                </TableRow>
                            </TableHead>
                            
                            <TableBody>
                                <TableRow>
                                    <TableCell align='center'>
                                        <div className='App'>
                                            <Lhfa_Boys chartData={lhfaBoyschartData}/>
                                        </div>
                                    </TableCell>
                                </TableRow>

                                <TableRow>
                                    <TableCell align='center'>
                                    Latest weight for age: Normal
                                    </TableCell>
                                </TableRow>

                                <TableRow>
                                    <TableCell align='center'>
                                        <div className="App">
                                            <ToggleVisibility>

                                            <br/><br/>

                                                <TableContainer component={Paper}>
                                                    <Table sx={{ minWidth: 650, }} aria-label="simple table">
                                                        <TableHead>
                                                            <TableRow>
                                                                <TableCell align="center">Date</TableCell>
                                                                <TableCell align="center">Value</TableCell>
                                                                <TableCell align="center">Flag</TableCell>
                                                            </TableRow>
                                                        </TableHead>

                                                        <TableBody>
                                                            <TableRow>
                                                                <TableCell align='center'>2024-01-01</TableCell>
                                                                <TableCell align='center'>3.5</TableCell>
                                                                <TableCell align='center'>Normal</TableCell>
                                                            </TableRow>
                                                            <TableRow>
                                                                <TableCell align='center'>2024-02-05</TableCell>
                                                                <TableCell align='center'>4.0</TableCell>
                                                                <TableCell align='center'>Normal</TableCell>
                                                            </TableRow>
                                                            <TableRow>
                                                                <TableCell align='center'>2024-03-06</TableCell>
                                                                <TableCell align='center'>4.5</TableCell>
                                                                <TableCell align='center'>Normal</TableCell>
                                                            </TableRow>
                                                            <TableRow>
                                                                <TableCell align='center'>2024-04-05</TableCell>
                                                                <TableCell align='center'>5</TableCell>
                                                                <TableCell align='center'>Normal</TableCell>
                                                            </TableRow>
                                                            <TableRow>
                                                                <TableCell align='center'>2024-05-01</TableCell>
                                                                <TableCell align='center'>5.5</TableCell>
                                                                <TableCell align='center'>Normal</TableCell>
                                                            </TableRow>
                                                            <TableRow>
                                                                <TableCell align='center'>2024-06-05</TableCell>
                                                                <TableCell align='center'>6.1</TableCell>
                                                                <TableCell align='center'>Normal</TableCell>
                                                            </TableRow>
                                                            <TableRow>
                                                                <TableCell align='center'>2024-07-02</TableCell>
                                                                <TableCell align='center'>6.8</TableCell>
                                                                <TableCell align='center'>Normal</TableCell>
                                                            </TableRow>
                                                            <TableRow>
                                                                <TableCell align='center'>2024-08-05</TableCell>
                                                                <TableCell align='center'>7.4</TableCell>
                                                                <TableCell align='center'>Normal</TableCell>
                                                            </TableRow>
                                                            <TableRow>
                                                                <TableCell align='center'>2024-09-04</TableCell>
                                                                <TableCell align='center'>8.2</TableCell>
                                                                <TableCell align='center'>Normal</TableCell>
                                                            </TableRow>
                                                            <TableRow>
                                                                <TableCell align='center'>2024-10-08</TableCell>
                                                                <TableCell align='center'>9.0</TableCell>
                                                                <TableCell align='center'>Normal</TableCell>
                                                            </TableRow>
                                                            <TableRow>
                                                                <TableCell align='center'>2024-11-01</TableCell>
                                                                <TableCell align='center'>9.5</TableCell>
                                                                <TableCell align='center'>Normal</TableCell>
                                                            </TableRow>
                                                            <TableRow>
                                                                <TableCell align='center'>2024-12-05</TableCell>
                                                                <TableCell align='center'>10.0</TableCell>
                                                                <TableCell align='center'>Normal</TableCell>
                                                            </TableRow>

                                                        </TableBody>
                                                    </Table>
                                                </TableContainer>
                                            </ToggleVisibility>
                                        </div>

                                    </TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </TableContainer>
                </div>

                <br/><br/>

                <div className="help-centered">
                    <TableContainer component={Paper}>
                        <Table sx={{ minWidth: 650 }} aria-label="simple table">
                            <TableHead>
                                <TableRow>
                                    <TableCell align="center">Length / Height for Age (Girls)</TableCell>
                                </TableRow>
                            </TableHead>
                            
                            <TableBody>
                                <TableRow>
                                    <TableCell align='center'>
                                        <div className='App'>
                                            <Lhfa_Girls chartData={lhfaGirlschartData}/>
                                        </div>
                                    </TableCell>
                                </TableRow>

                                <TableRow>
                                    <TableCell align='center'>
                                    Latest weight for age: Normal
                                    </TableCell>
                                </TableRow>

                                <TableRow>
                                    <TableCell align='center'>
                                        <div className="App">
                                            <ToggleVisibility>

                                            <br/><br/>

                                                <TableContainer component={Paper}>
                                                    <Table sx={{ minWidth: 650, }} aria-label="simple table">
                                                        <TableHead>
                                                            <TableRow>
                                                                <TableCell align="center">Date</TableCell>
                                                                <TableCell align="center">Value</TableCell>
                                                                <TableCell align="center">Flag</TableCell>
                                                            </TableRow>
                                                        </TableHead>

                                                        <TableBody>
                                                            <TableRow>
                                                                <TableCell align='center'>2024-01-01</TableCell>
                                                                <TableCell align='center'>3.5</TableCell>
                                                                <TableCell align='center'>Normal</TableCell>
                                                            </TableRow>
                                                            <TableRow>
                                                                <TableCell align='center'>2024-02-05</TableCell>
                                                                <TableCell align='center'>4.0</TableCell>
                                                                <TableCell align='center'>Normal</TableCell>
                                                            </TableRow>
                                                            <TableRow>
                                                                <TableCell align='center'>2024-03-06</TableCell>
                                                                <TableCell align='center'>4.5</TableCell>
                                                                <TableCell align='center'>Normal</TableCell>
                                                            </TableRow>
                                                            <TableRow>
                                                                <TableCell align='center'>2024-04-05</TableCell>
                                                                <TableCell align='center'>5</TableCell>
                                                                <TableCell align='center'>Normal</TableCell>
                                                            </TableRow>
                                                            <TableRow>
                                                                <TableCell align='center'>2024-05-01</TableCell>
                                                                <TableCell align='center'>5.5</TableCell>
                                                                <TableCell align='center'>Normal</TableCell>
                                                            </TableRow>
                                                            <TableRow>
                                                                <TableCell align='center'>2024-06-05</TableCell>
                                                                <TableCell align='center'>6.1</TableCell>
                                                                <TableCell align='center'>Normal</TableCell>
                                                            </TableRow>
                                                            <TableRow>
                                                                <TableCell align='center'>2024-07-02</TableCell>
                                                                <TableCell align='center'>6.8</TableCell>
                                                                <TableCell align='center'>Normal</TableCell>
                                                            </TableRow>
                                                            <TableRow>
                                                                <TableCell align='center'>2024-08-05</TableCell>
                                                                <TableCell align='center'>7.4</TableCell>
                                                                <TableCell align='center'>Normal</TableCell>
                                                            </TableRow>
                                                            <TableRow>
                                                                <TableCell align='center'>2024-09-04</TableCell>
                                                                <TableCell align='center'>8.2</TableCell>
                                                                <TableCell align='center'>Normal</TableCell>
                                                            </TableRow>
                                                            <TableRow>
                                                                <TableCell align='center'>2024-10-08</TableCell>
                                                                <TableCell align='center'>9.0</TableCell>
                                                                <TableCell align='center'>Normal</TableCell>
                                                            </TableRow>
                                                            <TableRow>
                                                                <TableCell align='center'>2024-11-01</TableCell>
                                                                <TableCell align='center'>9.5</TableCell>
                                                                <TableCell align='center'>Normal</TableCell>
                                                            </TableRow>
                                                            <TableRow>
                                                                <TableCell align='center'>2024-12-05</TableCell>
                                                                <TableCell align='center'>10.0</TableCell>
                                                                <TableCell align='center'>Normal</TableCell>
                                                            </TableRow>

                                                        </TableBody>
                                                    </Table>
                                                </TableContainer>
                                            </ToggleVisibility>
                                        </div>

                                    </TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </TableContainer>
                </div>

                <br/><br/>

                <div className="help-centered">
                    <TableContainer component={Paper}>
                        <Table sx={{ minWidth: 650 }} aria-label="simple table">
                            <TableHead>
                                <TableRow>
                                    <TableCell align="center">Head circumference for Age (Boys)</TableCell>
                                </TableRow>
                            </TableHead>
                            
                            <TableBody>
                                <TableRow>
                                    <TableCell align='center'>
                                        <div className='App'>
                                            <Hcfa_Boys chartData={hcfaBoyschartData}/>
                                        </div>
                                    </TableCell>
                                </TableRow>

                                <TableRow>
                                    <TableCell align='center'>
                                    Latest weight for age: Normal
                                    </TableCell>
                                </TableRow>

                                <TableRow>
                                    <TableCell align='center'>
                                        <div className="App">
                                            <ToggleVisibility>

                                            <br/><br/>

                                                <TableContainer component={Paper}>
                                                    <Table sx={{ minWidth: 650, }} aria-label="simple table">
                                                        <TableHead>
                                                            <TableRow>
                                                                <TableCell align="center">Date</TableCell>
                                                                <TableCell align="center">Value</TableCell>
                                                                <TableCell align="center">Flag</TableCell>
                                                            </TableRow>
                                                        </TableHead>

                                                        <TableBody>
                                                            <TableRow>
                                                                <TableCell align='center'>2024-01-01</TableCell>
                                                                <TableCell align='center'>3.5</TableCell>
                                                                <TableCell align='center'>Normal</TableCell>
                                                            </TableRow>
                                                            <TableRow>
                                                                <TableCell align='center'>2024-02-05</TableCell>
                                                                <TableCell align='center'>4.0</TableCell>
                                                                <TableCell align='center'>Normal</TableCell>
                                                            </TableRow>
                                                            <TableRow>
                                                                <TableCell align='center'>2024-03-06</TableCell>
                                                                <TableCell align='center'>4.5</TableCell>
                                                                <TableCell align='center'>Normal</TableCell>
                                                            </TableRow>
                                                            <TableRow>
                                                                <TableCell align='center'>2024-04-05</TableCell>
                                                                <TableCell align='center'>5</TableCell>
                                                                <TableCell align='center'>Normal</TableCell>
                                                            </TableRow>
                                                            <TableRow>
                                                                <TableCell align='center'>2024-05-01</TableCell>
                                                                <TableCell align='center'>5.5</TableCell>
                                                                <TableCell align='center'>Normal</TableCell>
                                                            </TableRow>
                                                            <TableRow>
                                                                <TableCell align='center'>2024-06-05</TableCell>
                                                                <TableCell align='center'>6.1</TableCell>
                                                                <TableCell align='center'>Normal</TableCell>
                                                            </TableRow>
                                                            <TableRow>
                                                                <TableCell align='center'>2024-07-02</TableCell>
                                                                <TableCell align='center'>6.8</TableCell>
                                                                <TableCell align='center'>Normal</TableCell>
                                                            </TableRow>
                                                            <TableRow>
                                                                <TableCell align='center'>2024-08-05</TableCell>
                                                                <TableCell align='center'>7.4</TableCell>
                                                                <TableCell align='center'>Normal</TableCell>
                                                            </TableRow>
                                                            <TableRow>
                                                                <TableCell align='center'>2024-09-04</TableCell>
                                                                <TableCell align='center'>8.2</TableCell>
                                                                <TableCell align='center'>Normal</TableCell>
                                                            </TableRow>
                                                            <TableRow>
                                                                <TableCell align='center'>2024-10-08</TableCell>
                                                                <TableCell align='center'>9.0</TableCell>
                                                                <TableCell align='center'>Normal</TableCell>
                                                            </TableRow>
                                                            <TableRow>
                                                                <TableCell align='center'>2024-11-01</TableCell>
                                                                <TableCell align='center'>9.5</TableCell>
                                                                <TableCell align='center'>Normal</TableCell>
                                                            </TableRow>
                                                            <TableRow>
                                                                <TableCell align='center'>2024-12-05</TableCell>
                                                                <TableCell align='center'>10.0</TableCell>
                                                                <TableCell align='center'>Normal</TableCell>
                                                            </TableRow>

                                                        </TableBody>
                                                    </Table>
                                                </TableContainer>
                                            </ToggleVisibility>
                                        </div>

                                    </TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </TableContainer>
                </div>

                <br/><br/>

                <div className="help-centered">
                    <TableContainer component={Paper}>
                        <Table sx={{ minWidth: 650 }} aria-label="simple table">
                            <TableHead>
                                <TableRow>
                                    <TableCell align="center">Head circumference for Age (Girls)</TableCell>
                                </TableRow>
                            </TableHead>
                            
                            <TableBody>
                                <TableRow>
                                    <TableCell align='center'>
                                        <div className='App'>
                                            <Hcfa_Girls chartData={hcfaGirlschartData}/>
                                        </div>
                                    </TableCell>
                                </TableRow>

                                <TableRow>
                                    <TableCell align='center'>
                                    Latest weight for age: Normal
                                    </TableCell>
                                </TableRow>

                                <TableRow>
                                    <TableCell align='center'>
                                        <div className="App">
                                            <ToggleVisibility>

                                            <br/><br/>

                                                <TableContainer component={Paper}>
                                                    <Table sx={{ minWidth: 650, }} aria-label="simple table">
                                                        <TableHead>
                                                            <TableRow>
                                                                <TableCell align="center">Date</TableCell>
                                                                <TableCell align="center">Value</TableCell>
                                                                <TableCell align="center">Flag</TableCell>
                                                            </TableRow>
                                                        </TableHead>

                                                        <TableBody>
                                                            <TableRow>
                                                                <TableCell align='center'>2024-01-01</TableCell>
                                                                <TableCell align='center'>3.5</TableCell>
                                                                <TableCell align='center'>Normal</TableCell>
                                                            </TableRow>
                                                            <TableRow>
                                                                <TableCell align='center'>2024-02-05</TableCell>
                                                                <TableCell align='center'>4.0</TableCell>
                                                                <TableCell align='center'>Normal</TableCell>
                                                            </TableRow>
                                                            <TableRow>
                                                                <TableCell align='center'>2024-03-06</TableCell>
                                                                <TableCell align='center'>4.5</TableCell>
                                                                <TableCell align='center'>Normal</TableCell>
                                                            </TableRow>
                                                            <TableRow>
                                                                <TableCell align='center'>2024-04-05</TableCell>
                                                                <TableCell align='center'>5</TableCell>
                                                                <TableCell align='center'>Normal</TableCell>
                                                            </TableRow>
                                                            <TableRow>
                                                                <TableCell align='center'>2024-05-01</TableCell>
                                                                <TableCell align='center'>5.5</TableCell>
                                                                <TableCell align='center'>Normal</TableCell>
                                                            </TableRow>
                                                            <TableRow>
                                                                <TableCell align='center'>2024-06-05</TableCell>
                                                                <TableCell align='center'>6.1</TableCell>
                                                                <TableCell align='center'>Normal</TableCell>
                                                            </TableRow>
                                                            <TableRow>
                                                                <TableCell align='center'>2024-07-02</TableCell>
                                                                <TableCell align='center'>6.8</TableCell>
                                                                <TableCell align='center'>Normal</TableCell>
                                                            </TableRow>
                                                            <TableRow>
                                                                <TableCell align='center'>2024-08-05</TableCell>
                                                                <TableCell align='center'>7.4</TableCell>
                                                                <TableCell align='center'>Normal</TableCell>
                                                            </TableRow>
                                                            <TableRow>
                                                                <TableCell align='center'>2024-09-04</TableCell>
                                                                <TableCell align='center'>8.2</TableCell>
                                                                <TableCell align='center'>Normal</TableCell>
                                                            </TableRow>
                                                            <TableRow>
                                                                <TableCell align='center'>2024-10-08</TableCell>
                                                                <TableCell align='center'>9.0</TableCell>
                                                                <TableCell align='center'>Normal</TableCell>
                                                            </TableRow>
                                                            <TableRow>
                                                                <TableCell align='center'>2024-11-01</TableCell>
                                                                <TableCell align='center'>9.5</TableCell>
                                                                <TableCell align='center'>Normal</TableCell>
                                                            </TableRow>
                                                            <TableRow>
                                                                <TableCell align='center'>2024-12-05</TableCell>
                                                                <TableCell align='center'>10.0</TableCell>
                                                                <TableCell align='center'>Normal</TableCell>
                                                            </TableRow>

                                                        </TableBody>
                                                    </Table>
                                                </TableContainer>
                                            </ToggleVisibility>
                                        </div>

                                    </TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </TableContainer>
                </div>
            </div>
        </div>
    </div>
)
}

export default GrowthMonitoring;