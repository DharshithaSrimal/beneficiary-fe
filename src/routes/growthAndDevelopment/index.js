import * as React from 'react';
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
  
  const theme1 = {
    backdropFill: "#B2EBF2",
    gridColor: "#00ACC1",
  };

  const theme2 = {
    backdropFill: "#E7CBEB",
    gridColor: "#aa00ff",
  };
  
const GrowthAndDevelopment = () => {
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
        <Header />
        <div className='dashboard-wrapper'>
            <div className='content-wrapper help-centered'>
                <h4>Growth and Development</h4>
            </div>
            <div className='content-section content-wrapper'>
                <Box sx={{ width: '100%', typography: 'body1' }} className='spread'>
                    <TabContext value={value}>
                        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                            <TabList onChange={handleChange} aria-label="lab API tabs example">
                                <Tab label="Growth and Monitoring" value="1" />
                                <Tab label="Development Milestones" value="2" />
                                <Tab label="Vitamin A & Deworming" value="3" />
                            </TabList>
                        </Box>
                        <TabPanel value="1" className='overflow full-height'>
                            <div className="help-centered">
                                <TableContainer sx={{ width: 700}} component={Paper}>
                                    <Table sx={{ minWidth: 650, }} aria-label="simple table">
                                        <TableHead>
                                            <TableRow>
                                                <TableCell align="center" colSpan={2}>Visits</TableCell>
                                            </TableRow>
                                        </TableHead>
                                        
                                        <TableBody>
                                            <TableRow>
                                                <TableCell>Last Visit</TableCell>
                                                <TableCell align="center">2023-10-09</TableCell>
                                            </TableRow>
                                            <TableRow>
                                                <TableCell>Next visit</TableCell>
                                                <TableCell align="center"> Scheduled Date </TableCell>
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
                                                <TableCell align="center">Weight for Age</TableCell>
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

                            {/* <PChart
                                width={1200}
                                height={800}
                                dataset={dataset1}
                                patients={testpatient1}
                                showtitle
                                showlines
                                theme={theme1}
                            /> */}
                        </TabPanel>
                        <TabPanel value="2" className='overflow full-height'>Development Milestones</TabPanel>
                        <TabPanel value="3" className='overflow full-height'>Vitamin A & Deworming</TabPanel>
                    </TabContext>
                </Box>
            </div>
        </div>
    </div>
}

export default GrowthAndDevelopment;