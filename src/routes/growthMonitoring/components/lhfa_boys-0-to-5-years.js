import { Dataset } from "@mui/icons-material";
import { id } from "date-fns/locale";
import React from "react";
import { Line } from "react-chartjs-2";

//Later change the name from LineChart.js to wfa_boys_....

function Lhfa_Boys({ chartData }) {
    return (
        <div className="chart-container">
            <Line
                data={chartData}
                plugins={[{
                    id: 'customPlugin',
                    // beforeDraw: (chart, args, options) => {
                    //     let text = options.consoleText || 'fillerConsoleText';
                    //     console.log(text)
                    // }
                    afterDatasetsDraw: chart => {
                        
                        const datasets = chart.config.data.datasets;
                        
                        if (datasets) {
                            const ctx = chart.ctx;

                            ctx.save();
                            
                            ctx.font = '600 12px Open Sans, sans-serif';

                            for (let i = 0; i < datasets.length -1; i++) {

                                const ds = datasets[i]
                                const label = ds.label;
                                const meta = chart.getDatasetMeta(i);
                                const len = meta.data.length - 1;
                                const xOffset = meta.data[len].x +5;
                                const yOffset = meta.data[len].y;

                                if(label == -3) {
                                    var labelColor = 'black'
                                } else if (label == -2) {
                                    var labelColor = 'red'
                                } else if (label == -1) {
                                    var labelColor = 'red'
                                } else if (label == 0) {
                                    var labelColor = 'green'
                                } else if (label == 1) {
                                    var labelColor = 'red'
                                } else if (label == 2) {
                                    var labelColor = 'red'
                                } else if (label == 3) {
                                    var labelColor = 'black'
                                } else {
                                    var labelColor = 'black'
                                }

                                ctx.fillStyle = labelColor;
                                
                                ctx.fillText(label, xOffset, yOffset)
                            }

                            ctx.restore();
                            
                        }
                        
                    }
                }]}
                options={{
                    scales: {
                        y: {
                          title: {
                            display: true,
                            text: 'Length / Height (cm)'
                          },
                        //   beginAtZero: true
                        },
                        x: {
                            title: {
                                display: true,
                                text: 'Age (months)'
                            },
                            // offset: true
                        },
                        // beginAtZero: true
                    },
                    plugins: {
                        
                        // title: {
                        //     display: true,
                        //     text: "Users Gained between 2016-2020"
                        // },
                        legend: {
                            display: false
                        },
                        annotation: {
                            annotations: [
                                {
                                    type: 'line',
                                    mode: 'vertical',
                                    scaleID: 'x',
                                    value: 0,
                                    borderColor: 'black',
                                    borderWidth: 1,
                                },
                                {
                                    type: 'line',
                                    mode: 'vertical',
                                    scaleID: 'x',
                                    value: 12,
                                    borderColor: 'black',
                                    borderWidth: 1,
                                    label: {
                                        enabled: true,
                                        content: 'Vertical Line'
                                    }
                                },
                                {
                                    type: 'line',
                                    mode: 'vertical',
                                    scaleID: 'x',
                                    value: 24,
                                    borderColor: 'black',
                                    borderWidth: 1,
                                    label: {
                                        enabled: true,
                                        content: 'Vertical Line'
                                    }
                                },
                                {
                                    type: 'line',
                                    mode: 'vertical',
                                    scaleID: 'x',
                                    value: 37,
                                    borderColor: 'black',
                                    borderWidth: 1,
                                    label: {
                                        enabled: true,
                                        content: 'Vertical Line'
                                    }
                                },
                                {
                                    type: 'line',
                                    mode: 'vertical',
                                    scaleID: 'x',
                                    value: 49,
                                    borderColor: 'black',
                                    borderWidth: 1,
                                    label: {
                                        enabled: true,
                                        content: 'Vertical Line'
                                    }
                                },
                                {
                                    type: 'line',
                                    mode: 'vertical',
                                    scaleID: 'x',
                                    value: 61,
                                    borderColor: 'black',
                                    borderWidth: 1,
                                    label: {
                                        enabled: true,
                                        content: 'Vertical Line'
                                    }
                                }
                            ]
                        }
                    },
                    layout: {
                        padding: {
                            left: 0,
                            right: 20,
                            top: 0,
                            bottom: 0
                        }
                    }
                    // elements: {
                    //     point: {
                    //         radius: 0
                    //     }
                    // }
                    // Example to add some random string before the values either in x or y axis
                    // scales: {
                    //     y: {
                    //         scaleLabel: {
                    //             display: true,
                    //             labelString: 'y'
                    //         }
                    //     }
                    // }
                }}
            />
            
        </div>
    );
}

export default Lhfa_Boys;