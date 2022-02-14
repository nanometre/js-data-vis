window.addEventListener('DOMContentLoaded', async function(){
    let series = await getData();

    const barOptions = {
        chart:{
            type: 'bar',
            height: '100%',
        },
        series:[
            {
                name: 'temperature',
                data: series,
            }
        ],
    }

    const lineChart = new ApexCharts(document.querySelector('#chart'), barOptions);
    lineChart.render();
})

