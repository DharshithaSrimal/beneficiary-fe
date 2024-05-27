import React from 'react';
import ReactECharts from 'echarts-for-react';

const Chart = () => {
    const option = {
        series: [
            {
                type: 'pie',
                data: [
                    {
                        value: 100,
                        name: 'Total Vaccines Taken (10)'
                    },
                    {
                        value: 200,
                        name: 'Total Vaccines Pending (20)'
                    },
                    {
                        value: 300,
                        name: 'Appointments Pending (30)'
                    }
                ],
                roseType: 'area'
            }
        ]
    };

    return <ReactECharts
        option={option}
    />
}

export default Chart;