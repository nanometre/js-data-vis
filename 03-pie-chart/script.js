// create the options that represent the chart
const options = {
    chart:{
        type: 'pie',
        height:'100%',
    },
    // each element in the series represents one slice of the pice chart
    series: [21,23,22,27,45],
    labels:['English', 'Mathematics', 'Mother Tongue', 'Science', 'PE'],
    colors:['#DFBBB1', '#F56476', '#E43F6F', '#BE3E82', '#5E4352']
}

const chart = new ApexCharts(document.querySelector('#chart'), options)
chart.render();