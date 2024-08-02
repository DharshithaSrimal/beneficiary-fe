import * as React from 'react';
import { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import Header from '../../components/header';


import { Table, TableBody, TableCell, TableContainer, TableHead } from '@mui/material';
// import TableBody from '@mui/material/TableBody';
// import TableCell from '@mui/material/TableCell';
// import TableContainer from '@mui/material/TableContainer';
// import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';

import Chart from 'chart.js/auto'
import { CategoryScale, defaults, Filler, LineController, registerables } from 'chart.js';
import annotationPlugin from 'chartjs-plugin-annotation';
import zoomPlugin from 'chartjs-plugin-zoom'

import { growthDataElements } from '../../constants';

import { wfa_b_0_to_5_years_zscores } from "./DataSets/whoStandard/ZScores/wfa/wfa_boys_0-to-5-years_zscores";
import { wfa_g_0_to_5_years_zscores } from "./DataSets/whoStandard/ZScores/wfa/wfa_girls_0-to-5-years_zscores";
import { hcfa_b_0_to_5_years_zscores } from "./DataSets/whoStandard/ZScores/hcfa/hcfa_boys_0-to-5-years_zscores";
import { hcfa_g_0_to_5_years_zscores } from "./DataSets/whoStandard/ZScores/hcfa/hcfa_girls_0-to-5-years_zscores";

//test 
import { lhfa_g_0_to_2_years_zscores } from "./DataSets/whoStandard/ZScores/lhfa/lhfa_girls_0-to-2-years_zscores";
import { lhfa_g_2_to_5_years_zscores } from "./DataSets/whoStandard/ZScores/lhfa/lhfa_girls_2-to-5-years_zscores";
import { lhfa_b_0_to_2_years_zscores } from "./DataSets/whoStandard/ZScores/lhfa/lhfa_boys_0-to-2-years_zscores";
import { lhfa_b_2_to_5_years_zscores } from "./DataSets/whoStandard/ZScores/lhfa/lhfa_boys_2-to-5-years_zscores";
import { lhfa_months } from "./DataSets/whoStandard/ZScores/lhfa/lhfa_months";

import { wflh_b_0_to_2_years_zscores } from "./DataSets/whoStandard/ZScores/wflh/wflh_boys_0-to-2-years_zscores";
import { wflh_b_2_to_5_years_zscores } from "./DataSets/whoStandard/ZScores/wflh/wflh_boys_2-to-5-years_zscores";
import { wflh_g_0_to_2_years_zscores } from "./DataSets/whoStandard/ZScores/wflh/wflh_girls_0-to-2-years_zscores";
import { wflh_g_2_to_5_years_zscores } from "./DataSets/whoStandard/ZScores/wflh/wflh_girls_2-to-5-years_zscores";
import { wflh_length_height } from "./DataSets/whoStandard/ZScores/wflh/wflh_length_height";

import DrawChart from "./components/drawChart"


import './styles.css';
import { da } from 'date-fns/locale';

Chart.register(CategoryScale, Filler, annotationPlugin, zoomPlugin, ...registerables )

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

const GrowthMonitoring = ({childData, allChildEvents}) => {

    // console.log("ALL EVENET", childData);
    console.log("Growth Data Elements", allChildEvents);

    const deWeightId = growthDataElements.DATA_ELEMENT_WEIGHT;
    const deLengthHeightId = growthDataElements.DATA_ELEMENT_LENGTH_HEIGHT;
    const deHeadCircumference = growthDataElements.DATA_ELEMENT_HEAD_CIRCUMFERENCE;
    const deAgeAtReportInMonths = growthDataElements.AGE_AT_THE_TIME_OF_REPORTING_MONTHS;
    const ageAtTheTimeOfReporting = growthDataElements.AGE_AT_THE_TIME_OF_REPORTING_MONTHS;
    const indiWeightForAge = growthDataElements.INDICATOR_WEIGHT_FOR_AGE;
    const indiLengthHeightForAge = growthDataElements.INDICATOR_LENGTH_HEIGHT_FOR_AGE;
    const indiWeightForLengthHeight = growthDataElements.INDICATOR_WEIGHT_FOR_LENGTH_HEIGHT;
    const indiHeadCircumferenece = growthDataElements.INDICATOR_HEAD_CIRCUMFERENCE_FOR_AGE;

    var latestWeightForAge = "";
    var latestLengthHeightForAge = "";
    var latestWeightForLengthHeight = "";
    var latestHeadCircumferenceForAge = "";

    if (allChildEvents.length > 0) {
        latestWeightForAge = (allChildEvents[0].dataValues.find(o => o.dataElement === indiWeightForAge)).value
        latestLengthHeightForAge = (allChildEvents[0].dataValues.find(o => o.dataElement === indiLengthHeightForAge)).value
        latestWeightForLengthHeight = (allChildEvents[0].dataValues.find(o => o.dataElement === indiWeightForLengthHeight)).value
        latestHeadCircumferenceForAge = ''
    }
    
    var weightForAgeDataPoint = [] //x: age(months)     y: weight
    var lengthHeightForAgeDataPoint = [] //x: age(months)   y: Length/height
    var weightForLengthHeightDataPoint = [] //x: length/height  y: weight
    var headCircumferenceDataPoint = [] //x: age(months)    y: headcircumference

    allChildEvents.map((data) => {

        if(data.eventDate) {

            let ageInMonths = data.dataValues.find(o => o.dataElement === ageAtTheTimeOfReporting);
            let weightValue = data.dataValues.find(o => o.dataElement === deWeightId);
            let lengthHeightValue = data.dataValues.find(o => o.dataElement === deLengthHeightId);
            let headCircumferenceValue = data.dataValues.find(o => o.dataElement === deHeadCircumference);
            

            weightForAgeDataPoint.push({
                x: parseInt(ageInMonths.value),
                y: parseFloat(weightValue.value)
            })

            lengthHeightForAgeDataPoint.push({
                x: parseInt(ageInMonths.value),
                y: lengthHeightValue.value
            })

            weightForLengthHeightDataPoint.push({
                x: parseFloat(lengthHeightValue.value),
                y: parseFloat(weightValue.value)
            })

            headCircumferenceDataPoint.push({
                x: parseInt(ageInMonths.value),
                y: headCircumferenceValue.value
            })

        }

    })

    // console.log("lengthHeightForAgeDataPoint", lengthHeightForAgeDataPoint)
    console.log("weightForLengthHeightDataPoint", weightForLengthHeightDataPoint)
    // console.log("headCircumferenceDataPoint", headCircumferenceDataPoint)


    const [value, setValue] = React.useState('1');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    
    const [wfaBoyschartData, setWfaBoyschartData] = useState({
        dataSets: {
            labels: wfa_b_0_to_5_years_zscores.map((data) => data.Month), 
            datasets: [            
            {
                // yAxisID: 'yAxes',
                label: "3",
                data: wfa_b_0_to_5_years_zscores.map((data) => data.SD3),
                borderColor: "rgba(0,0,0,0.3)",
                borderWidth: 2,
                pointRadius: 0,
                pointHitRadius: 0,
                fill: {
                    target: "2",
                    above: "rgba(255,255,0,0.3)"
                },
            },
            {
                label: "2",
                data: wfa_b_0_to_5_years_zscores.map((data) => data.SD2),
                borderColor: "rgba(0,0,0,0.3)",
                borderWidth: 2,
                pointRadius: 0,
                pointHitRadius: 0
            },
            {
                label: "1",
                data: wfa_b_0_to_5_years_zscores.map((data) => data.SD1),
                borderColor: "rgba(0,0,0,0.3)",
                borderWidth: 2,
                pointRadius: 0,
                pointHitRadius: 0,
            },
            {
                label: "0",
                data: wfa_b_0_to_5_years_zscores.map((data) => data.SD0),
                borderColor: "rgba(0,0,0,0.3)",
                borderWidth: 2,
                pointRadius: 0,
                pointHitRadius: 0,
            },
            {
                label: "-1",
                data: wfa_b_0_to_5_years_zscores.map((data) => data.SD1neg),
                borderColor: "rgba(0,0,0,0.3)",
                borderWidth: 2,
                pointRadius: 0,
                pointHitRadius: 0,
            },
            {
                label: "-2",
                data: wfa_b_0_to_5_years_zscores.map((data) => data.SD2neg),
                borderColor: "rgba(0,0,0,0.3)",
                borderWidth: 2,
                pointRadius: 0,
                pointHitRadius: 0,
                fill: {
                    target: "2",
                    below: "rgba(0,255,0,0.3)"
                },
            },
            {
                label: "-3",
                data: wfa_b_0_to_5_years_zscores.map((data) => data.SD3neg),
                borderColor: "rgba(0,0,0,0.3)",
                borderWidth: 2,
                pointRadius: 0,
                pointHitRadius: 0,
                fill: {
                    target: "-1",
                    below: "rgba(255,0,0,0.3)"
                },
            },
            {
                label: "",
                data: weightForAgeDataPoint.reverse(),
                borderColor: "black",
                borderWidth: 2,
                pointRadius: 2
            }
            ]
        },
        chartProperties: {
            chartShortCode: 'wfa',
            chartTitle: 'Weight for Age (Boys)',
            xAxisValue: 'Age (months)',
            yAxisValue: 'Weight (kg)',
            showYearBreakLine: true
        }
    });

    const [wfaGirlschartData, setWfaGirlschartData] = useState({
        dataSets: {
            labels: wfa_g_0_to_5_years_zscores.map((data) => data.Month), 
            datasets: [            
                {
                    // yAxisID: 'yAxes',
                    label: "3",
                    data: wfa_g_0_to_5_years_zscores.map((data) => data.SD3),
                    borderColor: "rgba(0,0,0,0.3)",
                    borderWidth: 2,
                    pointRadius: 0,
                    pointHitRadius: 0,
                    fill: {
                        target: "2",
                        above: "rgba(255,255,0,0.3)"
                    },
                },
                {
                    label: "2",
                    data: wfa_g_0_to_5_years_zscores.map((data) => data.SD2),
                    borderColor: "rgba(0,0,0,0.3)",
                    borderWidth: 2,
                    pointRadius: 0,
                    pointHitRadius: 0
                },
                {
                    label: "1",
                    data: wfa_g_0_to_5_years_zscores.map((data) => data.SD1),
                    borderColor: "rgba(0,0,0,0.3)",
                    borderWidth: 2,
                    pointRadius: 0,
                    pointHitRadius: 0,
                },
                {
                    label: "0",
                    data: wfa_g_0_to_5_years_zscores.map((data) => data.SD0),
                    borderColor: "rgba(0,0,0,0.3)",
                    borderWidth: 2,
                    pointRadius: 0,
                    pointHitRadius: 0,
                },
                {
                    label: "-1",
                    data: wfa_g_0_to_5_years_zscores.map((data) => data.SD1neg),
                    borderColor: "rgba(0,0,0,0.3)",
                    borderWidth: 2,
                    pointRadius: 0,
                    pointHitRadius: 0,
                },
                {
                    label: "-2",
                    data: wfa_g_0_to_5_years_zscores.map((data) => data.SD2neg),
                    borderColor: "rgba(0,0,0,0.3)",
                    borderWidth: 2,
                    pointRadius: 0,
                    pointHitRadius: 0,
                    fill: {
                        target: "2",
                        below: "rgba(0,255,0,0.3)"
                    },
                },
                {
                    label: "-3",
                    data: wfa_g_0_to_5_years_zscores.map((data) => data.SD3neg),
                    borderColor: "rgba(0,0,0,0.3)",
                    borderWidth: 2,
                    pointRadius: 0,
                    pointHitRadius: 0,
                    fill: {
                        target: "-1",
                        below: "rgba(255,0,0,0.3)"
                    },
                },
                {
                    label: "",
                    data: weightForAgeDataPoint.reverse(),
                    borderColor: "black",
                    borderWidth: 2,
                    pointRadius: 2
                }
            ],
        },
        chartProperties: {
            chartShortCode: 'wfa',
            chartTitle: 'Weight for Age (Girls)',
            xAxisValue: 'Age (months)',
            yAxisValue: 'Weight (kg)',
            showYearBreakLine: true
        }
    });

    const [lhfaGirlschartData, setLhfaGirlschartData] = useState({
        dataSets: {
            labels: lhfa_months.map((data) => data.Month), 
            datasets: [ 
                {
                    label: "3a",
                    data: lhfa_g_0_to_2_years_zscores.map((data) => data.SD3),
                    borderColor: "rgba(0,0,0,0.3)",
                    borderWidth: 2,
                    pointRadius: 0,
                    pointHitRadius: 0,
                    fill: {
                        target: "2a",
                        above: "rgba(255,255,0,0.3)"
                    }
                },
                {
                    label: "2a",
                    data: lhfa_g_0_to_2_years_zscores.map((data) => data.SD2),
                    borderColor: "rgba(0,0,0,0.3)",
                    borderWidth: 2,
                    pointHitRadius: 0,
                    pointRadius: 0
                },
                {
                    label: "1a",
                    data: lhfa_g_0_to_2_years_zscores.map((data) => data.SD1),
                    borderColor: "rgba(0,0,0,0.3)",
                    borderWidth: 2,
                    pointHitRadius: 0,
                    pointRadius: 0
                },
                {
                    label: "0a",
                    data: lhfa_g_0_to_2_years_zscores.map((data) => data.SD0),
                    borderColor: "rgba(0,0,0,0.3)",
                    borderWidth: 2,
                    pointHitRadius: 0,
                    pointRadius: 0
                },
                {
                    label: "-1a",
                    data: lhfa_g_0_to_2_years_zscores.map((data) => data.SD1neg),
                    borderColor: "rgba(0,0,0,0.3)",
                    borderWidth: 2,
                    pointHitRadius: 0,
                    pointRadius: 0
                },
                {
                    label: "-2a",
                    data: lhfa_g_0_to_2_years_zscores.map((data) => data.SD2neg),
                    borderColor: "rgba(0,0,0,0.3)",
                    borderWidth: 2,
                    pointHitRadius: 0,
                    pointRadius: 0,
                    fill: {
                        target: "2a",
                        below: "rgba(0,255,0,0.3)"
                    }
                },
                {
                    label: "-3a",
                    data: lhfa_g_0_to_2_years_zscores.map((data) => data.SD3neg),
                    borderColor: "rgba(0,0,0,0.3)",
                    borderWidth: 2,
                    pointRadius: 0,
                    pointHitRadius: 0,
                    fill: {
                        target: "-1a",
                        below: "rgba(255,0,0,0.3)"
                    }
                },
                {
                    label: "3",
                    data: lhfa_g_2_to_5_years_zscores.map((data) => data.SD3),
                    borderColor: "rgba(0,0,0,0.3)",
                    borderWidth: 2,
                    pointRadius: 0,
                    pointHitRadius: 0,
                    fill: {
                        target: "2",
                        below: "rgba(255,255,0,1)"
                    }
                },
                {
                    label: "2",
                    data: lhfa_g_2_to_5_years_zscores.map((data) => data.SD2),
                    borderColor: "rgba(0,0,0,0.3)",
                    borderWidth: 2,
                    pointHitRadius: 0,
                    pointRadius: 0
                },
                {
                    label: "1",
                    data: lhfa_g_2_to_5_years_zscores.map((data) => data.SD1),
                    borderColor: "rgba(0,0,0,0.3)",
                    borderWidth: 2,
                    pointRadius: 0,
                    pointHitRadius: 0,
                    fill: {
                        target: "-2",
                        below: "rgba(255,255,0,0.3)"
                    }
                },
                {
                    label: "0",
                    data: lhfa_g_2_to_5_years_zscores.map((data) => data.SD0),
                    borderColor: "rgba(0,0,0,0.3)",
                    borderWidth: 2,
                    pointHitRadius: 0,
                    pointRadius: 0
                },
                {
                    label: "-1",
                    data: lhfa_g_2_to_5_years_zscores.map((data) => data.SD1neg),
                    borderColor: "rgba(0,0,0,0.3)",
                    borderWidth: 2,
                    pointHitRadius: 0,
                    pointRadius: 0
                },
                {
                    label: "-2",
                    data: lhfa_g_2_to_5_years_zscores.map((data) => data.SD2neg),
                    borderColor: "rgba(0,0,0,0.3)",
                    borderWidth: 2,
                    pointRadius: 0,
                    pointHitRadius: 0,
                    fill: {
                        target: "-3",
                        below: "rgba(0,255,0,0.3)"
                    }
                },
                {
                    label: "-3",
                    data: lhfa_g_2_to_5_years_zscores.map((data) => data.SD3neg),
                    borderColor: "rgba(0,0,0,0.3)",
                    borderWidth: 2,
                    pointRadius: 0,
                    pointHitRadius: 0,
                    fill: {
                        target: "-1",
                        below: "rgba(255,0,0,0.3)"
                    }
                },
                {
                    label: "",
                    data: lengthHeightForAgeDataPoint.reverse(),
                    borderColor: "black",
                    borderWidth: 2,
                    pointRadius: 2
                }
            ],
            defaults: {
                scale: {
                    ticks: { min: 0}
                }
            }
        },
        chartProperties: {
            chartShortCode: 'lhfa',
            chartTitle: 'Length / Height for Age (Girls)',
            xAxisValue: 'Age (months)',
            yAxisValue: 'Length / Height (cm)',
            beginWithZeroAtAxisX: false,
            beginWithZeroAtAxisY: false,
            showYearBreakLine: true
        }
    });

    const [lhfaBoyschartData, setLhfaBoyschartData] = useState({
        dataSets: {
            labels: lhfa_months.map((data) => data.Month), 
            datasets: [ 
                {
                    label: "3a",
                    data: lhfa_b_0_to_2_years_zscores.map((data) => data.SD3),
                    borderColor: "rgba(0,0,0,0.3)",
                    borderWidth: 2,
                    pointRadius: 0,
                    pointHitRadius: 0,
                    fill: {
                        target: "2a",
                        above: "rgba(255,255,0,0.3)"
                    }
                },
                {
                    label: "2a",
                    data: lhfa_b_0_to_2_years_zscores.map((data) => data.SD2),
                    borderColor: "rgba(0,0,0,0.3)",
                    borderWidth: 2,
                    pointHitRadius: 0,
                    pointRadius: 0
                },
                {
                    label: "1a",
                    data: lhfa_b_0_to_2_years_zscores.map((data) => data.SD1),
                    borderColor: "rgba(0,0,0,0.3)",
                    borderWidth: 2,
                    pointHitRadius: 0,
                    pointRadius: 0
                },
                {
                    label: "0a",
                    data: lhfa_b_0_to_2_years_zscores.map((data) => data.SD0),
                    borderColor: "rgba(0,0,0,0.3)",
                    borderWidth: 2,
                    pointHitRadius: 0,
                    pointRadius: 0
                },
                {
                    label: "-1a",
                    data: lhfa_b_0_to_2_years_zscores.map((data) => data.SD1neg),
                    borderColor: "rgba(0,0,0,0.3)",
                    borderWidth: 2,
                    pointHitRadius: 0,
                    pointRadius: 0
                },
                {
                    label: "-2a",
                    data: lhfa_b_0_to_2_years_zscores.map((data) => data.SD2neg),
                    borderColor: "rgba(0,0,0,0.3)",
                    borderWidth: 2,
                    pointHitRadius: 0,
                    pointRadius: 0,
                    fill: {
                        target: "2a",
                        below: "rgba(0,255,0,0.3)"
                    }
                },
                {
                    label: "-3a",
                    data: lhfa_b_0_to_2_years_zscores.map((data) => data.SD3neg),
                    borderColor: "rgba(0,0,0,0.3)",
                    borderWidth: 2,
                    pointRadius: 0,
                    pointHitRadius: 0,
                    fill: {
                        target: "-1a",
                        below: "rgba(255,0,0,0.3)"
                    }
                },
                {
                    label: "3",
                    data: lhfa_b_2_to_5_years_zscores.map((data) => data.SD3),
                    borderColor: "rgba(0,0,0,0.3)",
                    borderWidth: 2,
                    pointRadius: 0,
                    pointHitRadius: 0,
                    fill: {
                        target: "2",
                        below: "rgba(255,255,0,1)"
                    }
                },
                {
                    label: "2",
                    data: lhfa_b_2_to_5_years_zscores.map((data) => data.SD2),
                    borderColor: "rgba(0,0,0,0.3)",
                    borderWidth: 2,
                    pointHitRadius: 0,
                    pointRadius: 0
                },
                {
                    label: "1",
                    data: lhfa_b_2_to_5_years_zscores.map((data) => data.SD1),
                    borderColor: "rgba(0,0,0,0.3)",
                    borderWidth: 2,
                    pointRadius: 0,
                    pointHitRadius: 0,
                    fill: {
                        target: "-2",
                        below: "rgba(255,255,0,0.3)"
                    }
                },
                {
                    label: "0",
                    data: lhfa_b_2_to_5_years_zscores.map((data) => data.SD0),
                    borderColor: "rgba(0,0,0,0.3)",
                    borderWidth: 2,
                    pointHitRadius: 0,
                    pointRadius: 0
                },
                {
                    label: "-1",
                    data: lhfa_b_2_to_5_years_zscores.map((data) => data.SD1neg),
                    borderColor: "rgba(0,0,0,0.3)",
                    borderWidth: 2,
                    pointHitRadius: 0,
                    pointRadius: 0
                },
                {
                    label: "-2",
                    data: lhfa_b_2_to_5_years_zscores.map((data) => data.SD2neg),
                    borderColor: "rgba(0,0,0,0.3)",
                    borderWidth: 2,
                    pointRadius: 0,
                    pointHitRadius: 0,
                    fill: {
                        target: "-3",
                        below: "rgba(0,255,0,0.3)"
                    }
                },
                {
                    label: "-3",
                    data: lhfa_b_2_to_5_years_zscores.map((data) => data.SD3neg),
                    borderColor: "rgba(0,0,0,0.3)",
                    borderWidth: 2,
                    pointRadius: 0,
                    pointHitRadius: 0,
                    fill: {
                        target: "-1",
                        below: "rgba(255,0,0,0.3)"
                    }
                },
                
                {
                    label: "",
                    data: lengthHeightForAgeDataPoint.reverse(),
                    borderColor: "black",
                    borderWidth: 2,
                    pointRadius: 2
                }
            ],
            defaults: {
                scale: {
                    ticks: { min: 0}
                }
            }
        },
        chartProperties: {
            chartShortCode: 'lhfa',
            chartTitle: 'Length / Height for Age (Boys)',
            xAxisValue: 'Age (months)',
            yAxisValue: 'Length / Height (cm)',
            beginWithZeroAtAxisX: false,
            beginWithZeroAtAxisY: false,
            showYearBreakLine: true
        }
    });

    const [wflhGirlschartData, setWflhGirlschartData] = useState({
        dataSets: {
            labels: wflh_length_height.map((data) => data.Length_height), 
            datasets: [ 
                {
                    label: "3a",
                    data: wflh_g_0_to_2_years_zscores.map((data) => data.SD3),
                    borderColor: "rgba(0,0,0,0.3)",
                    borderWidth: 2,
                    pointRadius: 0,
                    pointHitRadius: 0,
                    fill: {
                        target: "2a",
                        above: "rgba(255,255,0,0.3)"
                    }
                },
                {
                    label: "2a",
                    data: wflh_g_0_to_2_years_zscores.map((data) => data.SD2),
                    borderColor: "rgba(0,0,0,0.3)",
                    borderWidth: 2,
                    pointHitRadius: 0,
                    pointRadius: 0
                },
                {
                    label: "1a",
                    data: wflh_g_0_to_2_years_zscores.map((data) => data.SD1),
                    borderColor: "rgba(0,0,0,0.3)",
                    borderWidth: 2,
                    pointHitRadius: 0,
                    pointRadius: 0
                },
                {
                    label: "0a",
                    data: wflh_g_0_to_2_years_zscores.map((data) => data.SD0),
                    borderColor: "rgba(0,0,0,0.3)",
                    borderWidth: 2,
                    pointHitRadius: 0,
                    pointRadius: 0
                },
                {
                    label: "-1a",
                    data: wflh_g_0_to_2_years_zscores.map((data) => data.SD1neg),
                    borderColor: "rgba(0,0,0,0.3)",
                    borderWidth: 2,
                    pointHitRadius: 0,
                    pointRadius: 0
                },
                {
                    label: "-2a",
                    data: wflh_g_0_to_2_years_zscores.map((data) => data.SD2neg),
                    borderColor: "rgba(0,0,0,0.3)",
                    borderWidth: 2,
                    pointHitRadius: 0,
                    pointRadius: 0,
                    fill: {
                        target: "2a",
                        below: "rgba(0,255,0,0.3)"
                    }
                },
                {
                    label: "-3a",
                    data: wflh_g_0_to_2_years_zscores.map((data) => data.SD3neg),
                    borderColor: "rgba(0,0,0,0.3)",
                    borderWidth: 2,
                    pointRadius: 0,
                    pointHitRadius: 0,
                    fill: {
                        target: "-1a",
                        below: "rgba(255,0,0,0.3)"
                    }
                },
                {
                    label: "3",
                    data: wflh_g_2_to_5_years_zscores.map((data) => data.SD3),
                    borderColor: "rgba(0,0,0,0.3)",
                    borderWidth: 2,
                    pointRadius: 0,
                    pointHitRadius: 0,
                    fill: {
                        target: "2",
                        below: "rgba(255,255,0,1)"
                    }
                },
                {
                    label: "2",
                    data: wflh_g_2_to_5_years_zscores.map((data) => data.SD2),
                    borderColor: "rgba(0,0,0,0.3)",
                    borderWidth: 2,
                    pointHitRadius: 0,
                    pointRadius: 0
                },
                {
                    label: "1",
                    data: wflh_g_2_to_5_years_zscores.map((data) => data.SD1),
                    borderColor: "rgba(0,0,0,0.3)",
                    borderWidth: 2,
                    pointRadius: 0,
                    pointHitRadius: 0,
                    fill: {
                        target: "-2",
                        below: "rgba(255,255,0,0.3)"
                    }
                },
                {
                    label: "0",
                    data: wflh_g_2_to_5_years_zscores.map((data) => data.SD0),
                    borderColor: "rgba(0,0,0,0.3)",
                    borderWidth: 2,
                    pointHitRadius: 0,
                    pointRadius: 0
                },
                {
                    label: "-1",
                    data: wflh_g_2_to_5_years_zscores.map((data) => data.SD1neg),
                    borderColor: "rgba(0,0,0,0.3)",
                    borderWidth: 2,
                    pointHitRadius: 0,
                    pointRadius: 0
                },
                {
                    label: "-2",
                    data: wflh_g_2_to_5_years_zscores.map((data) => data.SD2neg),
                    borderColor: "rgba(0,0,0,0.3)",
                    borderWidth: 2,
                    pointRadius: 0,
                    pointHitRadius: 0,
                    fill: {
                        target: "-3",
                        below: "rgba(0,255,0,0.3)"
                    }
                },
                {
                    label: "-3",
                    data: wflh_g_2_to_5_years_zscores.map((data) => data.SD3neg),
                    borderColor: "rgba(0,0,0,0.3)",
                    borderWidth: 2,
                    pointRadius: 0,
                    pointHitRadius: 0,
                    fill: {
                        target: "-1",
                        below: "rgba(255,0,0,0.3)"
                    }
                },
                
                {
                    label: "",
                    data: weightForLengthHeightDataPoint,
                    borderColor: "black",
                    borderWidth: 2,
                    pointRadius: 2
                }
            ],
            defaults: {
                scale: {
                    ticks: { min: 0}
                }
            }
        },
        chartProperties: {
            chartShortCode: 'wflh',
            chartTitle: 'Weight for Length / Height (Girls)',
            xAxisValue: 'Length / Height (cm)',
            yAxisValue: 'Weight (Kg)',
            beginWithZeroAtAxisX: false,
            beginWithZeroAtAxisY: false,
            showYearBreakLine: false
        }
    });

    const [wflhBoyschartData, setWflhBoyschartData] = useState({
        dataSets: {
            labels: wflh_length_height.map((data) => data.Length_height), 
            datasets: [ 
                {
                    label: "3a",
                    data: wflh_b_0_to_2_years_zscores.map((data) => data.SD3),
                    borderColor: "rgba(0,0,0,0.3)",
                    borderWidth: 2,
                    pointRadius: 0,
                    pointHitRadius: 0,
                    fill: {
                        target: "2a",
                        above: "rgba(255,255,0,0.3)"
                    }
                },
                {
                    label: "2a",
                    data: wflh_b_0_to_2_years_zscores.map((data) => data.SD2),
                    borderColor: "rgba(0,0,0,0.3)",
                    borderWidth: 2,
                    pointHitRadius: 0,
                    pointRadius: 0
                },
                {
                    label: "1a",
                    data: wflh_b_0_to_2_years_zscores.map((data) => data.SD1),
                    borderColor: "rgba(0,0,0,0.3)",
                    borderWidth: 2,
                    pointHitRadius: 0,
                    pointRadius: 0
                },
                {
                    label: "0a",
                    data: wflh_b_0_to_2_years_zscores.map((data) => data.SD0),
                    borderColor: "rgba(0,0,0,0.3)",
                    borderWidth: 2,
                    pointHitRadius: 0,
                    pointRadius: 0
                },
                {
                    label: "-1a",
                    data: wflh_b_0_to_2_years_zscores.map((data) => data.SD1neg),
                    borderColor: "rgba(0,0,0,0.3)",
                    borderWidth: 2,
                    pointHitRadius: 0,
                    pointRadius: 0
                },
                {
                    label: "-2a",
                    data: wflh_b_0_to_2_years_zscores.map((data) => data.SD2neg),
                    borderColor: "rgba(0,0,0,0.3)",
                    borderWidth: 2,
                    pointHitRadius: 0,
                    pointRadius: 0,
                    fill: {
                        target: "2a",
                        below: "rgba(0,255,0,0.3)"
                    }
                },
                {
                    label: "-3a",
                    data: wflh_b_0_to_2_years_zscores.map((data) => data.SD3neg),
                    borderColor: "rgba(0,0,0,0.3)",
                    borderWidth: 2,
                    pointRadius: 0,
                    pointHitRadius: 0,
                    fill: {
                        target: "-1a",
                        below: "rgba(255,0,0,0.3)"
                    }
                },
                {
                    label: "3",
                    data: wflh_b_2_to_5_years_zscores.map((data) => data.SD3),
                    borderColor: "rgba(0,0,0,0.3)",
                    borderWidth: 2,
                    pointRadius: 0,
                    pointHitRadius: 0,
                    fill: {
                        target: "2",
                        below: "rgba(255,255,0,1)"
                    }
                },
                {
                    label: "2",
                    data: wflh_b_2_to_5_years_zscores.map((data) => data.SD2),
                    borderColor: "rgba(0,0,0,0.3)",
                    borderWidth: 2,
                    pointHitRadius: 0,
                    pointRadius: 0
                },
                {
                    label: "1",
                    data: wflh_b_2_to_5_years_zscores.map((data) => data.SD1),
                    borderColor: "rgba(0,0,0,0.3)",
                    borderWidth: 2,
                    pointRadius: 0,
                    pointHitRadius: 0,
                    fill: {
                        target: "-2",
                        below: "rgba(255,255,0,0.3)"
                    }
                },
                {
                    label: "0",
                    data: wflh_b_2_to_5_years_zscores.map((data) => data.SD0),
                    borderColor: "rgba(0,0,0,0.3)",
                    borderWidth: 2,
                    pointHitRadius: 0,
                    pointRadius: 0
                },
                {
                    label: "-1",
                    data: wflh_b_2_to_5_years_zscores.map((data) => data.SD1neg),
                    borderColor: "rgba(0,0,0,0.3)",
                    borderWidth: 2,
                    pointHitRadius: 0,
                    pointRadius: 0
                },
                {
                    label: "-2",
                    data: wflh_b_2_to_5_years_zscores.map((data) => data.SD2neg),
                    borderColor: "rgba(0,0,0,0.3)",
                    borderWidth: 2,
                    pointRadius: 0,
                    pointHitRadius: 0,
                    fill: {
                        target: "-3",
                        below: "rgba(0,255,0,0.3)"
                    }
                },
                {
                    label: "-3",
                    data: wflh_b_2_to_5_years_zscores.map((data) => data.SD3neg),
                    borderColor: "rgba(0,0,0,0.3)",
                    borderWidth: 2,
                    pointRadius: 0,
                    pointHitRadius: 0,
                    fill: {
                        target: "-1",
                        below: "rgba(255,0,0,0.3)"
                    }
                },
                
                {
                    label: "",
                    data: weightForLengthHeightDataPoint.reverse(),
                    borderColor: "black",
                    borderWidth: 2,
                    pointRadius: 2
                }
            ],
            defaults: {
                scale: {
                    ticks: { min: 0}
                }
            }
        },
        chartProperties: {
            chartShortCode: 'wflh',
            chartTitle: 'Weight for Length / Height (Boys)',
            xAxisValue: 'Length / Height (cm)',
            yAxisValue: 'Weight (Kg)',
            beginWithZeroAtAxisX: false,
            beginWithZeroAtAxisY: false,
            showYearBreakLine: false
        }
    });  

    const [hcfaBoyschartData, setHcfaBoyschartData] = useState({
        dataSets: {
            labels: hcfa_b_0_to_5_years_zscores.map((data) => data.Month), 
            datasets: [            
                {
                    // yAxisID: 'yAxes',
                    label: "3",
                    data: hcfa_b_0_to_5_years_zscores.map((data) => data.SD3),
                    borderColor: "rgba(0,0,0,0.3)",
                    borderWidth: 2,
                    pointRadius: 0
                },
                {
                    label: "2",
                    data: hcfa_b_0_to_5_years_zscores.map((data) => data.SD2),
                    borderColor: "red",
                    borderWidth: 2,
                    pointRadius: 0
                },
                {
                    label: "1",
                    data: hcfa_b_0_to_5_years_zscores.map((data) => data.SD1),
                    borderColor: "orange",
                    borderWidth: 2,
                    pointRadius: 0
                },
                {
                    label: "0",
                    data: hcfa_b_0_to_5_years_zscores.map((data) => data.SD0),
                    borderColor: "green",
                    borderWidth: 2,
                    pointRadius: 0
                },
                {
                    label: "-1",
                    data: hcfa_b_0_to_5_years_zscores.map((data) => data.SD1neg),
                    borderColor: "orange",
                    borderWidth: 2,
                    pointRadius: 0
                },
                {
                    label: "-2",
                    data: hcfa_b_0_to_5_years_zscores.map((data) => data.SD2neg),
                    borderColor: "red",
                    borderWidth: 2,
                    pointRadius: 0
                },
                {
                    label: "-3",
                    data: hcfa_b_0_to_5_years_zscores.map((data) => data.SD3neg),
                    borderColor: "rgba(0,0,0,0.3)",
                    borderWidth: 2,
                    pointRadius: 0,
                },
                {
                    label: "",
                    data: headCircumferenceDataPoint.reverse(),
                    borderColor: "black",
                    borderWidth: 2,
                    pointRadius: 2
                }
            ],
            defaults: {
                scale: {
                    ticks: { min: 0}
                }
            }
        },
        chartProperties: {
            chartShortCode: 'hcfa',
            chartTitle: 'Head circumference for age (Boys)',
            xAxisValue: 'Age (months)',
            yAxisValue: 'Head circumference (cm)',
            beginWithZeroAtAxisX: false,
            beginWithZeroAtAxisY: false,
            showYearBreakLine: true
        }
    });

    const [hcfaGirlschartData, setHcfaGirlschartData] = useState({
        dataSets: {
            labels: hcfa_g_0_to_5_years_zscores.map((data) => data.Month), 
            datasets: [            
                {
                    // yAxisID: 'yAxes',
                    label: "3",
                    data: hcfa_g_0_to_5_years_zscores.map((data) => data.SD3),
                    borderColor: "rgba(0,0,0,0.3)",
                    borderWidth: 2,
                    pointRadius: 0
                },
                {
                    label: "2",
                    data: hcfa_g_0_to_5_years_zscores.map((data) => data.SD2),
                    borderColor: "red",
                    borderWidth: 2,
                    pointRadius: 0
                },
                {
                    label: "1",
                    data: hcfa_g_0_to_5_years_zscores.map((data) => data.SD1),
                    borderColor: "orange",
                    borderWidth: 2,
                    pointRadius: 0
                },
                {
                    label: "0",
                    data: hcfa_g_0_to_5_years_zscores.map((data) => data.SD0),
                    borderColor: "green",
                    borderWidth: 2,
                    pointRadius: 0
                },
                {
                    label: "-1",
                    data: hcfa_g_0_to_5_years_zscores.map((data) => data.SD1neg),
                    borderColor: "orange",
                    borderWidth: 2,
                    pointRadius: 0
                },
                {
                    label: "-2",
                    data: hcfa_g_0_to_5_years_zscores.map((data) => data.SD2neg),
                    borderColor: "red",
                    borderWidth: 2,
                    pointRadius: 0
                },
                {
                    label: "-3",
                    data: hcfa_g_0_to_5_years_zscores.map((data) => data.SD3neg),
                    borderColor: "rgba(0,0,0,0.3)",
                    borderWidth: 2,
                    pointRadius: 0,
                },
                {
                    label: "",
                    data: headCircumferenceDataPoint.reverse(),
                    borderColor: "black",
                    borderWidth: 2,
                    pointRadius: 2
                }
            ],
            defaults: {
                scale: {
                    ticks: { min: 0}
                }
            }
        },
        chartProperties: {
            chartShortCode: 'hcfa',
            chartTitle: 'Head circumference for age (Girls)',
            xAxisValue: 'Age (months)',
            yAxisValue: 'Head circumference (cm)',
            beginWithZeroAtAxisX: false,
            beginWithZeroAtAxisY: false,
            showYearBreakLine: true
        }
    });

    const chartRef = React.useRef(null);

    const handleResetZoom = () => {
        if (chartRef && chartRef.current) {
        chartRef.current.resetZoom();
        }
    };

    return (
    <div className='dashboard-container'>
        <div className='dashboard-wrapper'>
            <div className='content-wrapper help-centered'></div>
            <div className='content-section content-wrapper'>

                <div className="help-centered">
                    <TableContainer component={Paper}>
                        <Table sx={{ minWidth: 650 }} aria-label="simple table">
                            <TableBody>
                                <TableRow>
                                    <TableCell align='center'>
                                        <div className='App'>
                                            {
                                                childData.sex === 'Male' ? <DrawChart ref={chartRef} chartData={wfaBoyschartData}/> : <DrawChart ref={chartRef} chartData={wfaGirlschartData}/>
                                            }
                                            {/* <Button variant="outlined" onClick={handleResetZoom}> Reset Zoom </Button> */}
                                        </div>
                                    </TableCell>
                                </TableRow>

                                <TableRow>
                                    <TableCell align='center'>
                                        Latest weight for age: 
                                        {
                                            latestWeightForAge ? ' ' + latestWeightForAge : ' No Data'
                                        }
                                    </TableCell>
                                </TableRow>

                                <TableRow>
                                    <TableCell align='center'>
                                        <div className="App">

                                            <ToggleVisibility>

                                            <br/><br/>

                                                <TableContainer component={Paper}>
                                                    <Table sx={{ minWidth: 650, }} aria-label="simple table">
                                                        <TableHead className='table-header'>
                                                            <TableRow className="phc-table-header">
                                                                <TableCell className="phc-table-header-cell" align="center">Date</TableCell>
                                                                <TableCell className="phc-table-header-cell" align="center">Value</TableCell>
                                                                <TableCell className="phc-table-header-cell" align="center">Flag</TableCell>
                                                            </TableRow>
                                                        </TableHead>                                                        
                                                        <TableBody>
                                                            {
                                                                allChildEvents.map((data) => {

                                                                    if(data.eventDate) {
                                                                    
                                                                        // console.log(data);

                                                                        let date = new Date(data.eventDate);
                                                                        let newDate = date.getFullYear() + '-' + date.getMonth() + '-' + date.getDate();

                                                                        // console.log(newDate)

                                                                        let weightValue = data.dataValues.find(o => o.dataElement === deWeightId);
                                                                        let weightFlag = data.dataValues.find(o => o.dataElement === indiWeightForAge);

                                                                        return (
                                                                            <TableRow>
                                                                                <TableCell align='center'>{newDate}</TableCell>
                                                                                <TableCell align='center'>{weightValue.value}</TableCell>
                                                                                <TableCell align='center'>{weightFlag.value}</TableCell>
                                                                            </TableRow>

                                                                        );

                                                                    } else {
                                                                        return(
                                                                            <TableRow>
                                                                                <TableCell align='center'>No Data</TableCell>
                                                                                <TableCell align='center'>No Data</TableCell>
                                                                                <TableCell align='center'>No Data</TableCell>
                                                                            </TableRow>
                                                                        )
                                                                    }
                                                                    
                                                                })
                                                            }
                                                            
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
                            <TableBody>
                                <TableRow>
                                    <TableCell align='center'>
                                        <div className='App'>
                                            {
                                                childData.sex === 'Male' ? <DrawChart chartData={lhfaBoyschartData}/> : <DrawChart chartData={lhfaGirlschartData}/>
                                            }
                                        </div>
                                    </TableCell>
                                </TableRow>

                                <TableRow>
                                    <TableCell align='center'>
                                        Latest Length / Height for Age:
                                        {
                                            latestLengthHeightForAge ? ' ' + latestLengthHeightForAge : ' No Data'
                                        }
                                    </TableCell>
                                </TableRow>

                                <TableRow>
                                    <TableCell align='center'>
                                        <div className="App">
                                            
                                            <ToggleVisibility>

                                            <br/><br/>

                                                <TableContainer component={Paper}>
                                                    <Table sx={{ minWidth: 650, }} aria-label="simple table">
                                                        <TableHead className='table-header'>
                                                            <TableRow className="phc-table-header">
                                                                <TableCell className="phc-table-header-cell" align="center">Date</TableCell>
                                                                <TableCell className="phc-table-header-cell" align="center">Value</TableCell>
                                                                <TableCell className="phc-table-header-cell" align="center">Flag</TableCell>
                                                            </TableRow>
                                                        </TableHead>  

                                                        <TableBody>
                                                            {
                                                                allChildEvents.map((data) => {

                                                                    if(data.eventDate) {
                                                                    
                                                                        // console.log(data);

                                                                        let date = new Date(data.eventDate);
                                                                        let newDate = date.getFullYear() + '-' + date.getMonth() + '-' + date.getDate();

                                                                        // console.log(newDate)

                                                                        let lengthHeightValue = data.dataValues.find(o => o.dataElement === deLengthHeightId);
                                                                        let lengthHeightFlag = data.dataValues.find(o => o.dataElement === indiLengthHeightForAge);

                                                                        return (
                                                                            <TableRow>
                                                                                <TableCell align='center'>{newDate}</TableCell>
                                                                                <TableCell align='center'>{lengthHeightValue.value}</TableCell>
                                                                                <TableCell align='center'>{lengthHeightFlag.value}</TableCell>
                                                                            </TableRow>

                                                                        );
                                                                    } else {
                                                                        return(
                                                                            <TableRow>
                                                                                <TableCell align='center'>No Data</TableCell>
                                                                                <TableCell align='center'>No Data</TableCell>
                                                                                <TableCell align='center'>No Data</TableCell>
                                                                            </TableRow>
                                                                        )
                                                                    }
                                                                    
                                                                })
                                                            }

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
                            <TableBody>
                                <TableRow>
                                    <TableCell align='center'>
                                        <div className='App'>
                                            {
                                                childData.sex === 'Male' ? <DrawChart chartData={wflhBoyschartData}/> : <DrawChart chartData={wflhGirlschartData}/>
                                            }
                                        </div>
                                    </TableCell>
                                </TableRow>

                                <TableRow>
                                    <TableCell align='center'>
                                        Latest Weight for Length / Height:
                                        {
                                            latestWeightForLengthHeight ? ' ' + latestWeightForLengthHeight : ' No Data'
                                        }
                                    </TableCell>
                                </TableRow>

                                <TableRow>
                                    <TableCell align='center'>
                                        <div className="App">
                                            <ToggleVisibility>

                                            <br/><br/>

                                                <TableContainer component={Paper}>
                                                    <Table sx={{ minWidth: 650, }} aria-label="simple table">
                                                        <TableHead className='table-header'>
                                                            <TableRow className="phc-table-header">
                                                                <TableCell className="phc-table-header-cell" align="center">Date</TableCell>
                                                                <TableCell className="phc-table-header-cell" align="center">Value</TableCell>
                                                                <TableCell className="phc-table-header-cell" align="center">Flag</TableCell>
                                                            </TableRow>
                                                        </TableHead>  

                                                        <TableBody>
                                                            {
                                                                allChildEvents.map((data) => {

                                                                    if(data.eventDate) {
                                                                    
                                                                        // console.log(data);

                                                                        let date = new Date(data.eventDate);
                                                                        let newDate = date.getFullYear() + '-' + date.getMonth() + '-' + date.getDate();

                                                                        // console.log(newDate)

                                                                        let lengthHeightValue = data.dataValues.find(o => o.dataElement === deLengthHeightId);
                                                                        let lengthHeightFlag = data.dataValues.find(o => o.dataElement === indiLengthHeightForAge);

                                                                        return (
                                                                            <TableRow>
                                                                                <TableCell align='center'>{newDate}</TableCell>
                                                                                <TableCell align='center'>{lengthHeightValue.value}</TableCell>
                                                                                <TableCell align='center'>{lengthHeightFlag.value}</TableCell>
                                                                            </TableRow>

                                                                        );
                                                                    } else {
                                                                        return(
                                                                            <TableRow>
                                                                                <TableCell align='center'>No Data</TableCell>
                                                                                <TableCell align='center'>No Data</TableCell>
                                                                                <TableCell align='center'>No Data</TableCell>
                                                                            </TableRow>
                                                                        )
                                                                    }
                                                                    
                                                                })
                                                            }

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
                            <TableBody>
                                <TableRow>
                                    <TableCell align='center'>
                                        <div className='App'>
                                        {
                                                childData.sex === 'Male' ? <DrawChart chartData={hcfaBoyschartData}/> : <DrawChart chartData={hcfaGirlschartData}/>
                                            }
                                        </div>
                                    </TableCell>
                                </TableRow>

                                <TableRow>
                                    <TableCell align='center'>
                                        Latest Head Circumference for Age:
                                        {
                                            latestHeadCircumferenceForAge ? ' ' + latestHeadCircumferenceForAge : ' No Data'
                                        }
                                    </TableCell>
                                </TableRow>

                                <TableRow>
                                    <TableCell align='center'>
                                        <div className="App">
                                            <ToggleVisibility>

                                            <br/><br/>

                                                <TableContainer component={Paper}>
                                                    <Table sx={{ minWidth: 650, }} aria-label="simple table">
                                                        <TableHead className='table-header'>
                                                            <TableRow className="phc-table-header">
                                                                <TableCell className="phc-table-header-cell" align="center">Date</TableCell>
                                                                <TableCell className="phc-table-header-cell" align="center">Value</TableCell>
                                                                <TableCell className="phc-table-header-cell" align="center">Flag</TableCell>
                                                            </TableRow>
                                                        </TableHead>  

                                                        <TableBody>
                                                            {
                                                                allChildEvents.map((data) => {

                                                                    if(data.eventDate) {
                                                                    
                                                                        // console.log(data);

                                                                        let date = new Date(data.eventDate);
                                                                        let newDate = date.getFullYear() + '-' + date.getMonth() + '-' + date.getDate();

                                                                        // console.log(newDate)

                                                                        let headCircumferenceValue = data.dataValues.find(o => o.dataElement === deHeadCircumference);
                                                                        let headCircumferenceFlag = data.dataValues.find(o => o.dataElement === indiHeadCircumferenece);

                                                                        return (
                                                                            <TableRow>
                                                                                <TableCell align='center'>{newDate}</TableCell>
                                                                                <TableCell align='center'>{headCircumferenceValue.value}</TableCell>
                                                                                <TableCell align='center'></TableCell>
                                                                            </TableRow>

                                                                        );
                                                                    } else {
                                                                        return(
                                                                            <TableRow>
                                                                                <TableCell align='center'>No Data</TableCell>
                                                                                <TableCell align='center'>No Data</TableCell>
                                                                                <TableCell align='center'>No Data</TableCell>
                                                                            </TableRow>
                                                                        )
                                                                    }
                                                                    
                                                                })
                                                            }

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