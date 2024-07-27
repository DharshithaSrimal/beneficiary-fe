import { Dataset } from "@mui/icons-material";
import { id } from "date-fns/locale";
import React from "react";
import { Line } from "react-chartjs-2";


function DrawChart({ chartData }) {

    if (chartData.chartProperties.showYearBreakLine == true) {
        var annotationData = [
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
                value: 36,
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
                value: 48,
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
                value: 60,
                borderColor: 'black',
                borderWidth: 1,
                label: {
                    enabled: true,
                    content: 'Vertical Line'
                }
            }
        ]
    } else {
        var annotationData = "";
    }
    
    return (
        <div className="chart-container">
            <Line
                data={chartData.dataSets}
                plugins={[{
                    id: 'customPlugin',
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
                                
                                if(label == 3 || label == 2 || label == 1 || label == 0 || label == -1 || label == -2 || label == -3) {
                                    ctx.fillText(label, xOffset, yOffset)
                                }
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
                            text: chartData.chartProperties.yAxisValue
                          },
                          beginAtZero: chartData.chartProperties.beginWithZeroAtAxisY
                        },
                        x: {
                            title: {
                                display: true,
                                text: chartData.chartProperties.xAxisValue
                            },
                            beginAtZero: chartData.chartProperties.beginWithZeroAtAxisX
                        },
                        
                    },
                    plugins: {
                        title: {
                            display: true,
                            text: chartData.chartProperties.chartTitle,
                            font: {
                                size: 17
                            },
                            padding: {
                                bottom: 30,
                                top: 20
                            }
                        },
                        legend: {
                            display: false
                        },
                        annotation: {
                            annotations: annotationData
                        },
                        // zoom: {
                        //     zoom: {
                        //         wheel: {
                        //             enabled: true
                        //         },
                        //         pinch: {
                        //             enabled: true
                        //         },
                        //         drag: {
                        //             enabled: true
                        //         },
                        //         mode: 'xy',
                        //     }
                        // }
                    },
                    layout: {
                        padding: {
                            left: 0,
                            right: 20,
                            top: 0,
                            bottom: 0
                        }
                    }
                }}
            />
            
        </div>
    );
}

export default DrawChart;