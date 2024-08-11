import { Dataset } from "@mui/icons-material";
import { id } from "date-fns/locale";
import { tooltip } from "leaflet";
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
                        tooltip: {
                            enabled: true,
                                // intersect: false,
                                position: 'nearest',
                                backgroundColor: 'white',
                                bodyFont: {
                                    size: 12
                                },
                                bodyColor: 'black',
                                borderColor: 'black',
                                borderWidth: 1,
                                padding: 12,
                                caretPadding: 4,
                                boxPadding: 4,
                                usePointStyle: true,
                                animation: false,
                                displayColors: false,
                            callbacks: {
                                title: () => '',
                                label: function(context) {

                                    console.log("context", context)

                                    let label = [];
                                    
                                    if (context.parsed.y !== null) {

                                        if(chartData.chartProperties.chartShortCode == 'wfa' || chartData.chartProperties.chartShortCode == 'wflh') {
                                            label.push(`Weight: ${context.parsed.y} kg`);

                                            let eventDateParsed = new Date(chartData.chartProperties.dataPoints.find(val => val.x == context.parsed.x).date)
                                            let newParsedDate = eventDateParsed.getFullYear() + '-' + eventDateParsed.getMonth() + '-' + eventDateParsed.getDate();

                                            //take the x value, find the date by x value
                                            label.push(`Date: ${newParsedDate}`);
                                        }

                                        if(chartData.chartProperties.chartShortCode == 'lhfa') {
                                            label.push(`Length / Height: ${context.parsed.y} cm `);

                                            let eventDateParsed = new Date(chartData.chartProperties.dataPoints.find(val => val.x == context.parsed.x).date)
                                            let newParsedDate = eventDateParsed.getFullYear() + '-' + eventDateParsed.getMonth() + '-' + eventDateParsed.getDate();

                                            //take the x value, find the date by x value
                                            label.push(`Date: ${newParsedDate}`);
                                        }

                                        if(chartData.chartProperties.chartShortCode == 'hcfa') {
                                            label.push(`Head Circumference: ${context.parsed.y} cm `);
                                            
                                            let eventDateParsed = new Date(chartData.chartProperties.dataPoints.find(val => val.x == context.parsed.x).date)
                                            let newParsedDate = eventDateParsed.getFullYear() + '-' + eventDateParsed.getMonth() + '-' + eventDateParsed.getDate();

                                            //take the x value, find the date by x value
                                            label.push(`Date: ${newParsedDate}`);
                                        }
                                    }
                                    return label;
                                    // let sum = 0;

                                    // tooltipItems.forEach(function(tooltipItem) {

                                    // })

                                    // return tooltipItems;
                                }
                            }
                            

                        
                        //     filter: (tooltipItem) => tooltipItem.dataset.id === 'measurementData',
                            // callbacks: {
                                // title: () => '',
                                // beforeLabel: (tooltipItem) => {
                                //     const date = new Date(tooltipItem.raw.eventDate).toLocaleDateString();
                                //     return `${date}`;
                                // },
                                // label: (tooltipItem) => {
                                    // const date = new Date(tooltipItem.raw.eventDate);
                                    // let yValue = Number(tooltipItem.formattedValue.replace(',', '.'));
                                    // let xValue = Number(tooltipItem.label.replace(',', '.'));
                                    // // const weeks = differenceInWeeks(date, dateOfBirth);
                                    // const weeks = differenceInWeeks(date, dateOfBirth);

                                    // let xLabel = '';

                                    // yValue = Number(yValue.toFixed(2));
                                    // xValue = Number(xValue.toFixed(2));

                                    // const yLabel = `${yAxisLabel}: ${yValue} ${yUnit}`;
                                    // xLabel = `${xAxisLabel}: ${xValue} ${xUnit}`;

                                    // if (xAxisLabel === TimeUnitCodes.weeks) {
                                    //     xLabel = `${i18n.t('Age')}: `;
                                    //     xLabel += `${weeks} ${(weeks === 1) ? timeUnitData.Weeks.singular : timeUnitData.Weeks.plural} `;
                                    // }

                                    // if (xAxisLabel === TimeUnitCodes.months) {
                                    //     const months = differenceInMonths(date, dateOfBirth) % 12;
                                    //     const years = differenceInYears(date, dateOfBirth);
                    
                                    //     xLabel = `${i18n.t('Age')}: `;
                    
                                    //     if (weeks <= 13) {
                                    //         xLabel += `${weeks} ${(weeks === 1) ? timeUnitData.Weeks.singular : timeUnitData.Weeks.plural} `;
                                    //     }
                    
                                    //     if (weeks > 13) {
                                    //         if (years > 0) {
                                    //             xLabel += `${years} ${(years === 1) ? timeUnitData.Years.singular : timeUnitData.Years.plural} `;
                                    //         }
                    
                                    //         if (months > 0) {
                                    //             xLabel += `${months} ${(months === 1) ? timeUnitData.Months.singular : timeUnitData.Months.plural} `;
                                    //         }
                                    //     }
                                    // }

                                    // const labels = [];
                                    // labels.push('Wight in Kg');
                                    // labels.push('Age in Months');

                                    // return labels;
                                // }
                            // }
                        }
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