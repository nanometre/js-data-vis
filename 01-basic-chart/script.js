// first we define the options:
const options = {
    // chart settings
    'chart': {
        'type': 'line',
        'height': '100%'
    },
    // the data for the graph
    'series': [
        {
            'name': 'Sightings',
            'data': [10, 13, 15, 22, 34, 23, 55, 78, 44, 12]
        },
        {
            'name': 'Temperature',
            'data': [33, 21, 22, 24, 25, 26, 26, 21, 31, 44]
        }
    ],
    // define the xaxis (or the categories)
    xaxis: {
        'categories': ['Jan', 'Feb', 'Mar', 'Apr', 'May',
            'Jun', 'Jul', 'Aug', 'Sept', 'Oct']
    }
}
const divChart = document.querySelector('#chart');
// create a new chart object
// first arg of new ApexCharts() is the div where we have the chart
// second arg is the options for the chart
const chart = new ApexCharts(divChart, options);

// render the chart
chart.render();