window.addEventListener('DOMContentLoaded', async function(){
    let series = await getData();

    lineChart.updateSeries(
        [
            {
                name: 'Data1',
                data: series[0],
            },
            {
                name: 'Data2',
                data: series[1],
            }
        ]
    )
})

let lineOptions = {
    chart: {
        type: 'line',
        height: '100%',
    },
    series: [

    ],
    noData: {
        text: 'Loading...',
    }
}

const lineChart = new ApexCharts(document.querySelector('#chart'), lineOptions);
lineChart.render();