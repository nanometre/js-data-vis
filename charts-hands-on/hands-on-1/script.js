const lineChartOptions = {
    chart: {
        type: 'line',
        height: '100%',
    },
    series: [
        {
            name: 'Deals Closed',
            data: [3000, 3200, 4100, 1500, 1000, 2000, 7000],
        },
        {
            name: 'Deals Rejected',
            data: [1500, 1000, 500, 1200, 1500, 500, 2000],
        },
    ],
    xaxis: {
        categories: [1999, 2000, 2001, 2002, 2003, 2004, 2005]
    }

}

let lineChart = new ApexCharts(document.querySelector('#chart'), lineChartOptions);
lineChart.render();