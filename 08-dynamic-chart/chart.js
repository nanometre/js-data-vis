window.addEventListener("DOMContentLoaded", async function(){
    // load the chart data
    let data = await loadData();
    let transformed = transformData(data, null, null);
    updateChart(chart, transformed, 'sales');

    document.querySelector('#search-btn')
    .addEventListener('click', function(){
        let country = document.querySelector('#search-terms').value;
        let transformed = transformData(data, country, null);
        updateChart(chart, transformed, 'sales');
    })
})

function updateChart(chart, newSeries, newSeriesName) {
    chart.updateSeries([
        {
            'name': newSeriesName,
            'data': newSeries
        }
    ])
}

const options = {
    chart: {
        'type':'line',
        'height':'100%'
    },
    series:[],
    noData:{
        'text':'Loading'
    }
}

const chart = new ApexCharts(document.querySelector('#chart'), options);
chart.render();