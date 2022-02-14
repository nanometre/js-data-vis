const lineChartOptions = {
    chart: {
        type: 'line',
        height: '100%',
    },
    series: [
        {
            name: 'Sightings',
            data: sightings,
        },
        {
            name: 'Temperature',
            data: temperature,
        }

    ],
    'xaxis': {
        categories: categories,
    }
}

let lineChart = new ApexCharts(document.querySelector('#line-chart'), lineChartOptions);
lineChart.render();