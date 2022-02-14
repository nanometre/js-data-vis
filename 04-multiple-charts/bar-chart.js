const barChartOptions = {
    chart: {
        type: 'bar',
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
    xaxis: {
        categories: categories
    }
}

const barChart = new ApexCharts(document.querySelector('#bar-chart'), barChartOptions);
barChart.render();