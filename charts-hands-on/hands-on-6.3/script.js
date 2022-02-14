window.addEventListener('DOMContentLoaded', async function(){
    let series = await getData();

    lineChart1.updateSeries(
        [
            {
                name: 'Data1',
                data: series[0],
            }
        ]
    )

    lineChart2.updateSeries(
        [
            {
                name: 'Data2',
                data: series[1],
            }
        ]
    )
})

let lineOptions1 = {
    chart: {
        type: 'line',
        height: '100%',
        id: 'chart1',
        group: 'sync-charts'
    },
    series: [

    ],
    noData: {
        text: 'Loading...',
    }
}

let lineOptions2 = {
    chart: {
        type: 'line',
        height: '100%',
        id: 'chart2',
        group: 'sync-charts'
    },
    series: [

    ],
    noData: {
        text: 'Loading...',
    }
}

const lineChart1 = new ApexCharts(document.querySelector('#chart1'), lineOptions1);
lineChart1.render();

const lineChart2 = new ApexCharts(document.querySelector('#chart2'), lineOptions2);
lineChart2.render();