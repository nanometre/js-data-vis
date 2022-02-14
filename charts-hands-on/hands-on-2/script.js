const barOptions = {
    chart: {
        type: 'bar',
        height: '100%',
    },
    series: [
        {
            name: 'Male Residents',
            data: [175000, 188000, 190000, 185000, 190760],
        },
        {
            name: 'Female Residents',
            data: [180000, 190000, 210000, 200000, 210000]
        }
    ],
    xaxis: {
        categories: [1999, 2000, 2001, 2002, 2003]
    }
}

const barChart = new ApexCharts(document.querySelector('#chart'), barOptions);
barChart.render();