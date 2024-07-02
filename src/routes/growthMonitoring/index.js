import * as React from 'react';
import { useState } from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import Header from '../../components/header';
import './styles.css';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';

import { Dataset, PChart } from "pchart";
// import { LMSDataset, Patient, Theme } from "pchart/dist/types";
import heightBoys519Y from "./who/height_boys_5-19Y.json";
import heightGirls013W from "./who/height_girls_0-13W.json";

import { ComposedChart, Area, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ReferenceLine, DefaultLegendContent, ResponsiveContainer, } from 'recharts';

const percentiles1 = [3, 10, 25, 50, 75, 90, 97];
const percentiles2 = [5, 15, 30, 50, 70, 85, 95];

function randomColor() {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i += 1) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
  
  const testpatient1 = {
    firstname: "John",
    lastname: "Doe",
    sex: "male",
    birthdate: "2002-04-27",
    measures: [
      {
        date: "2018-09-11",
        height: 181.5,
        weight: 60, // useless data
      },
      {
        date: "2018-08-18",
        height: 181,
      },
      {
        date: "2018-08-17",
        weight: 59, // useless data
      },
      {
        date: "2018-05-18",
        height: 180,
      },
      {
        date: "2017-08-02",
        height: 176,
      },
      {
        date: "2017-01-28",
        height: 173,
      },
      {
        date: "2016-10-08",
        height: 170,
      },
      {
        date: "2016-03-16",
        height: 165,
      },
      {
        date: "2015-09-26",
        height: 160,
      },
      {
        date: "2005-09-26",
        height: 160,
      },
    ],
  };

  const testpatient2 = {
    firstname: "Jane",
    lastname: "Doe",
    sex: "female",
    birthdate: "2018-01-14",
    measures: [
      {
        date: "2018-01-23",
        height: 52,
      },
      {
        date: "2018-01-31",
        height: 54,
      },
      {
        date: "2018-02-17",
        height: 57,
      },
      {
        date: "2018-02-26",
        height: 58.9,
      },
      {
        date: "2018-03-04",
        height: 60,
      },
    ],
  };
  const testpatient3 = {
    firstname: "Janelle",
    lastname: "Doe",
    sex: "female",
    birthdate: "2018-01-14",
    color: randomColor(),
    measures: [
      {
        date: "2018-01-23",
        height: 51,
      },
      {
        date: "2018-01-31",
        height: 52,
      },
      {
        date: "2018-02-17",
        height: 53,
      },
      {
        date: "2018-02-26",
        height: 54,
      },
      {
        date: "2018-03-04",
        height: 56,
      },
    ],
  };
  
  const defaultTheme = {
    backgroundColor: 'transparent',
    backdropFill: '#FFFDE7',
    axisColor: '#707070',
    gridColor: '#FFD54F',
    areaColor: 'rgba(127,127,127, .3)'
  }

  const theme1 = {
    backgroundColor: '#FFF',
    backdropFill: '#FFFDE7',
    axisColor: '#707070',
    gridColor: '#FFD54F',
    areaColor: 'rgba(127,127,127, .3)'
  }

  const theme2 = {
    backdropFill: "#E7CBEB",
    gridColor: "#aa00ff",
  };

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
  

// Growth Dummy Line Data
const data = [
    {
        name: "0",
        SD3Neg: [2.4, 2],
        SD2Neg: [2.8, 2.4],
        SD1Neg: [3.2, 2.8],
        SD0: [3.7, 3.2],

        SD1: [4.2, 3.7],
        SD2: [4.8, 4.2],

        weight: 3.5,
    },
    {
        name: "1",
        SD3Neg: [3.2, 2.7],
        SD2Neg: [3.6, 3.2],
        SD1Neg: [4.2, 3.6],
        SD0: [4.8, 4.2],

        SD1: [5.5, 4.8],
        SD2: [6.2, 5.5],
        
        weight: 4.0,
    },
    {
        name: "2",
        SD3Neg: [3.9, 3.4],
        SD2Neg: [4.5, 3.9],
        SD1Neg: [5.1, 4.5],
        SD0: [5.8, 5.1],

        SD1: [6.6, 5.8],
        SD2: [7.5, 6.6],
        
        weight: 4.5,
    },
    {
        name: "3",
        SD3Neg: [4.5, 4.0],
        SD2Neg: [5.2, 4.5],
        SD1Neg: [5.8, 5.2],
        SD0: [6.6, 5.8],

        SD1: [7.5, 6.6],
        SD2: [8.5, 7.5],
        
        weight: 5.0,
    },
    {
        name: "4",
        SD3Neg: [5.0, 4.4],
        SD2Neg: [5.7, 5.0],
        SD1Neg: [6.4, 5.7],
        SD0: [7.3, 6.4],

        SD1: [8.2, 7.3],
        SD2: [9.3, 8.2],
        
        weight: 5.5,
    },
    {
        name: "5",
        SD3Neg: [5.4, 4.8],
        SD2Neg: [6.1, 5.4],
        SD1Neg: [6.9, 6.1],
        SD0: [7.8, 6.9],

        SD1: [8.8, 7.8],
        SD2: [10.0, 8.8],
        
        weight: 6.1,
    },
    {
        name: "6",
        SD3Neg: [5.7, 5.1],
        SD2Neg: [6.5, 5.7],
        SD1Neg: [7.3, 6.5],
        SD0: [8.2, 7.3],

        SD1: [9.3, 8.2],
        SD2: [10.6, 9.3],
        
        weight: 6.8,
    },
    {
        name: "7",
        SD3Neg: [6.0, 5.3],
        SD2Neg: [6.8, 6.0],
        SD1Neg: [7.6, 6.8],
        SD0: [8.6, 7.6],

        SD1: [9.8, 8.6],
        SD2: [11.1, 9.8],
        
        weight: 7.4,
    },
    {
        name: "8",
        SD3Neg: [6.3, 5.6],
        SD2Neg: [7.0, 6.3],
        SD1Neg: [7.9, 7.0],
        SD0: [9.0, 7.9],

        SD1: [10.2, 9.0],
        SD2: [11.6, 10.2],
        
        weight: 8.2,
    },
    {
        name: "9",
        SD3Neg: [6.5, 5.8],
        SD2Neg: [7.3, 6.5],
        SD1Neg: [8.2, 7.3],
        SD0: [9.3, 8.2],

        SD1: [10.5, 9.3],
        SD2: [12.0, 10.5],
        
        weight: 9.0,
      },
    {
        name: "10",
        SD3Neg: [6.7, 5.9],
        SD2Neg: [7.5, 6.7],
        SD1Neg: [8.5, 7.5],
        SD0: [9.6, 8.5],

        SD1: [10.9, 9.6],
        SD2: [12.4, 10.9],
        
        weight: 9.5,
    },
    {
        name: "11",
        SD3Neg: [6.9, 6.1],
        SD2Neg: [7.7, 6.9],
        SD1Neg: [8.7, 7.7],
        SD0: [9.9, 8.7],

        SD1: [11.2, 9.9],
        SD2: [12.8, 11.2],
        
        weight: 10.0,
    },
    {
        name: "12",
        SD3Neg: [7.0, 6.3],
        SD2Neg: [7.9, 7.0],
        SD1Neg: [8.9, 7.9],
        SD0: [10.1, 8.9],

        SD1: [11.5, 10.1],
        SD2: [13.1, 11.5],
        
    },
    {
        name: "13",
        SD3Neg: [7.2, 6.4],
        SD2Neg: [8.1, 7.2],
        SD1Neg: [9.2, 8.1],
        SD0: [10.4, 9.2],

        SD1: [11.8, 10.4],
        SD2: [13.5, 11.8],
        
    },
    {
        name: "14",
        SD3Neg: [7.4, 6.6],
        SD2Neg: [8.3, 7.4],
        SD1Neg: [9.4, 8.3],
        SD0: [10.6, 9.4],

        SD1: [12.1, 10.6],
        SD2: [13.8, 12.1],
        
    },
    {
        name: "15",
        SD3Neg: [7.6, 6.7],
        SD2Neg: [8.5, 7.6],
        SD1Neg: [9.6, 8.5],
        SD0: [10.9, 9.6],

        SD1: [12.4, 10.9],
        SD2: [14.1, 12.4],
        
    },
    {
        name: "16",
        SD3Neg: [7.7, 6.9],
        SD2Neg: [8.7, 7.7],
        SD1Neg: [9.8, 8.7],
        SD0: [11.1, 9.8],

        SD1: [12.6, 11.1],
        SD2: [14.5, 12.6],
        
    },
    {
        name: "17",
        SD3Neg: [7.9, 7.0],
        SD2Neg: [8.9, 7.9],
        SD1Neg: [10.0, 8.9],
        SD0: [11.4, 10.0],

        SD1: [12.9, 11.4],
        SD2: [14.8, 12.9],
        
    },
    {
        name: "18",
        SD3Neg: [8.1, 7.2],
        SD2Neg: [9.1, 8.1],
        SD1Neg: [10.2, 9.1],
        SD0: [11.6, 10.2],

        SD1: [13.2, 11.6],
        SD2: [15.1, 13.2],
        
    },
    {
        name: "19",
        SD3Neg: [8.2, 7.3],
        SD2Neg: [9.2, 8.2],
        SD1Neg: [10.4, 9.2],
        SD0: [11.8, 10.4],

        SD1: [13.5, 11.8],
        SD2: [15.4, 13.5],
        
    },
    {
        name: "20",
        SD3Neg: [8.4, 7.5],
        SD2Neg: [9.4, 8.4],
        SD1Neg: [10.6, 9.4],
        SD0: [12.1, 10.6],

        SD1: [13.7, 12.1],
        SD2: [15.7, 13.7],
        
    },
    {
        name: "21",
        SD3Neg: [8.6, 7.6],
        SD2Neg: [9.6, 8.6],
        SD1Neg: [10.9, 9.6],
        SD0: [12.3, 10.9],

        SD1: [14.0, 12.3],
        SD2: [16.0, 14.0],
        
    },
    {
        name: "22",
        SD3Neg: [8.7, 7.8],
        SD2Neg: [9.8, 8.7],
        SD1Neg: [11.1, 9.8],
        SD0: [12.5, 11.1],

        SD1: [14.3, 12.5],
        SD2: [16.4, 14.3],
        
    },
    {
        name: "23",
        SD3Neg: [8.9, 7.9],
        SD2Neg: [10.0, 8.9],
        SD1Neg: [11.3, 10.0],
        SD0: [12.8, 11.3],

        SD1: [14.6, 12.8],
        SD2: [16.7, 14.6],
        
    },
    {
        name: "24",
        SD3Neg: [9.0, 8.1],
        SD2Neg: [10.2, 9.0],
        SD1Neg: [11.5, 10.2],
        SD0: [13.0, 11.5],

        SD1: [14.8, 13.0],
        SD2: [17.0, 14.8],
        
    }
  ];

const renderTooltipWithoutRange = ({ payload, content, ...rest }) => {
    const newPayload = payload.filter((x) => x.dataKey !== "a");
    return <Tooltip payload={newPayload} {...rest} />;
}

const renderLegendWithoutRange = ({ payload, content, ...rest }) => {
  const newPayload = payload.filter((x) => x.dataKey !== "a");
  return <DefaultLegendContent payload={newPayload} {...rest} />;
}

  
const GrowthMonitoring = () => {
    const [value, setValue] = React.useState('1');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const dataset1 = new Dataset(heightBoys519Y, percentiles1);
    const dataset2 = new Dataset(heightGirls013W, percentiles2);

    // const dataset2 = useMemo(() => {
    //     return new Dataset(heightGirls013W as LMSDataset, percentiles2);
    // }, []);

    return <div className='dashboard-container'>
        <div className='dashboard-wrapper'>
            <div className='content-wrapper help-centered'></div>
            <div className='content-section content-wrapper'>


            <div className="help-centered">
                    <TableContainer component={Paper}>
                        <Table sx={{ minWidth: 650 }} aria-label="simple table">
                            <TableHead>
                                <TableRow>
                                    <TableCell align="center">Weight for Age</TableCell>
                                </TableRow>
                            </TableHead>
                            
                            <TableBody>
                                <TableRow>
                                    <TableCell align='center'>
                                        <ResponsiveContainer width={'99%'} height={500}>
                                            <ComposedChart
                                                width={500}
                                                height={400}
                                                data={data}
                                                margin={{
                                                    top: 10,
                                                    right: 30,
                                                    left: 20,
                                                    bottom: 20,
                                                }}
                                            >
                                                <CartesianGrid strokeDasharray="3 3" />
                                                <XAxis dataKey="name" label={{value: 'Age (Months)', position: 'bottom'}} />
                                                <YAxis label={{value: 'Weight (Kg)', angle: -90, position: "left"}}/>
                                                <Tooltip content={renderTooltipWithoutRange} />
                                                <ReferenceLine x="2 Years" stroke="red"  />
                                                <Area
                                                    type="monotone"
                                                    dataKey="SD3Neg"
                                                    stroke="#000"
                                                    fill="#e36d3e"
                                                    connectNulls
                                                    dot={false}
                                                    activeDot={false}
                                                />

                                                <Area
                                                    type="monotone"
                                                    dataKey="SD2Neg"
                                                    stroke="#000"
                                                    fill="#c3dd98"
                                                    connectNulls
                                                    dot={false}
                                                    activeDot={false}
                                                    tooltipType="none"
                                                />

                                                <Area
                                                    type="monotone"
                                                    dataKey="SD1Neg"
                                                    stroke="#000"
                                                    fill="#c3dd98"
                                                    connectNulls
                                                    dot={false}
                                                    activeDot={false}
                                                    tooltipType="none"
                                                />

                                                <Area
                                                    type="monotone"
                                                    dataKey="SD0"
                                                    stroke="#000"
                                                    fill="#c3dd98"
                                                    connectNulls
                                                    dot={false}
                                                    activeDot={false}
                                                    tooltipType="none"
                                                />

                                                <Area
                                                    type="monotone"
                                                    dataKey="SD1"
                                                    stroke="#000"
                                                    fill="#d0cb8d"
                                                    connectNulls
                                                    dot={false}
                                                    activeDot={false}
                                                    tooltipType="none"
                                                />

                                                <Area
                                                    type="monotone"
                                                    dataKey="SD2"
                                                    stroke="#000"
                                                    fill="#d0cb8d"
                                                    connectNulls
                                                    dot={false}
                                                    activeDot={false}
                                                    tooltipType="none"
                                                />
                                                
                                                
                                                <Line type="natural" dataKey="weight" stroke="#00f" connectNulls />
                                                <ReferenceLine stroke='black' x="12" />
                                                <ReferenceLine stroke='black' x="24" />
                                        </ComposedChart>
                                        </ResponsiveContainer>
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

                {/*                                
                <div className="help-centered">
                    <TableContainer component={Paper}>
                        <Table sx={{ minWidth: 650, }} aria-label="simple table">
                            <TableHead>
                                <TableRow>
                                    <TableCell align="center">Weight for Age</TableCell>
                                </TableRow>
                            </TableHead>
                            
                            <TableBody>
                                <TableRow>
                                    <TableCell align='center'>
                                    <PChart
                                        // width={1200}
                                        // height={800}
                                        dataset={dataset1}
                                        patients={testpatient1}
                                        showtitle={false}
                                        showlines={true}
                                        theme={theme1}
                                    />
                                    </TableCell>
                                </TableRow>

                                <TableRow>
                                    <TableCell align='center'>
                                    Latest weight for age: Normal
                                    </TableCell>
                                </TableRow>

                                <TableRow>
                                    <TableCell align='center'>
                                        <Button variant="contained">
                                            Show Data
                                        </Button>

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
                                                        <TableCell align='center'></TableCell>
                                                        <TableCell align='center'></TableCell>
                                                        <TableCell align='center'></TableCell>
                                                    </TableRow>
                                                    <TableRow>
                                                        <TableCell align='center'></TableCell>
                                                        <TableCell align='center'></TableCell>
                                                        <TableCell align='center'></TableCell>
                                                    </TableRow>
                                                    <TableRow>
                                                        <TableCell align='center'></TableCell>
                                                        <TableCell align='center'></TableCell>
                                                        <TableCell align='center'></TableCell>
                                                    </TableRow>
                                                </TableBody>
                                            </Table>
                                        </TableContainer>


                                    </TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </TableContainer>
                </div>
                    
                <br/><br/>

                <div className="help-centered">
                    <TableContainer component={Paper}>
                        <Table sx={{ minWidth: 650, }} aria-label="simple table">
                            <TableHead>
                                <TableRow>
                                    <TableCell align="center">Length/Height for Age</TableCell>
                                </TableRow>
                            </TableHead>
                            
                            <TableBody>
                                <TableRow>
                                    <TableCell align='center'>
                                    <PChart
                                        // width={1200}
                                        // height={800}
                                        dataset={dataset2}
                                        patients={testpatient1}
                                        showtitle={false}
                                        showlines={true}
                                        theme={theme1}
                                    />
                                    </TableCell>
                                </TableRow>

                                <TableRow>
                                    <TableCell align='center'>
                                    Latest length/height for age: Normal
                                    </TableCell>
                                </TableRow>

                                <TableRow>
                                    <TableCell align='center'>
                                        <Button variant="contained">
                                            Show Data
                                        </Button>

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
                                                        <TableCell align='center'></TableCell>
                                                        <TableCell align='center'></TableCell>
                                                        <TableCell align='center'></TableCell>
                                                    </TableRow>
                                                    <TableRow>
                                                        <TableCell align='center'></TableCell>
                                                        <TableCell align='center'></TableCell>
                                                        <TableCell align='center'></TableCell>
                                                    </TableRow>
                                                    <TableRow>
                                                        <TableCell align='center'></TableCell>
                                                        <TableCell align='center'></TableCell>
                                                        <TableCell align='center'></TableCell>
                                                    </TableRow>
                                                </TableBody>
                                            </Table>
                                        </TableContainer>


                                    </TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </TableContainer>
                </div>

                <br/><br/>

                <div className="help-centered">
                    <TableContainer component={Paper}>
                        <Table sx={{ minWidth: 650, }} aria-label="simple table">
                            <TableHead>
                                <TableRow>
                                    <TableCell align="center">Weight for Length/Height</TableCell>
                                </TableRow>
                            </TableHead>
                            
                            <TableBody>
                                <TableRow>
                                    <TableCell align='center'>
                                    <PChart
                                        // width={1200}
                                        // height={800}
                                        dataset={dataset2}
                                        patients={testpatient1}
                                        showtitle={false}
                                        showlines={true}
                                        theme={theme1}
                                    />
                                    </TableCell>
                                </TableRow>

                                <TableRow>
                                    <TableCell align='center'>
                                    Latest weight for length/height: Normal
                                    </TableCell>
                                </TableRow>

                                <TableRow>
                                    <TableCell align='center'>
                                        <Button variant="contained">
                                            Show Data
                                        </Button>

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
                                                        <TableCell align='center'></TableCell>
                                                        <TableCell align='center'></TableCell>
                                                        <TableCell align='center'></TableCell>
                                                    </TableRow>
                                                    <TableRow>
                                                        <TableCell align='center'></TableCell>
                                                        <TableCell align='center'></TableCell>
                                                        <TableCell align='center'></TableCell>
                                                    </TableRow>
                                                    <TableRow>
                                                        <TableCell align='center'></TableCell>
                                                        <TableCell align='center'></TableCell>
                                                        <TableCell align='center'></TableCell>
                                                    </TableRow>
                                                </TableBody>
                                            </Table>
                                        </TableContainer>


                                    </TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </TableContainer>
                </div>

                <br/><br/>

                <div className="help-centered">
                    <TableContainer component={Paper}>
                        <Table sx={{ minWidth: 650, }} aria-label="simple table">
                            <TableHead>
                                <TableRow>
                                    <TableCell align="center">Head Circumference for Age</TableCell>
                                </TableRow>
                            </TableHead>
                            
                            <TableBody>
                                <TableRow>
                                    <TableCell align='center'>
                                    <PChart
                                        // width={1200}
                                        // height={800}
                                        dataset={dataset1}
                                        patients={testpatient1}
                                        showtitle={false}
                                        showlines={true}
                                        theme={theme1}
                                    />
                                    </TableCell>
                                </TableRow>

                                <TableRow>
                                    <TableCell align='center'>
                                    Latest head Circumference for age: Normal
                                    </TableCell>
                                </TableRow>

                                <TableRow>
                                    <TableCell align='center'>
                                        <Button variant="contained">
                                            Show Data
                                        </Button>

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
                                                        <TableCell align='center'></TableCell>
                                                        <TableCell align='center'></TableCell>
                                                        <TableCell align='center'></TableCell>
                                                    </TableRow>
                                                    <TableRow>
                                                        <TableCell align='center'></TableCell>
                                                        <TableCell align='center'></TableCell>
                                                        <TableCell align='center'></TableCell>
                                                    </TableRow>
                                                    <TableRow>
                                                        <TableCell align='center'></TableCell>
                                                        <TableCell align='center'></TableCell>
                                                        <TableCell align='center'></TableCell>
                                                    </TableRow>
                                                </TableBody>
                                            </Table>
                                        </TableContainer>


                                    </TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </TableContainer>
                </div>
                */} 
            </div>
        </div>
    </div>
}

export default GrowthMonitoring;