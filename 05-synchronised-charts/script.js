const chartOptions = {
    chart:{
        type:'line',
        height:'100%',
        group:'campaign-reach-compare',
        id:'campaign' // The ID here has nothing to
                      // with CSS or html
    },
    series:[
        {
            'name':'Campaigns',
            'data':campaigns
        }
    ],
    xaxis:{
        'categories': categories
    },
    title:{
        'text':'Campaign'
    }
}

const campaignChart = new ApexCharts(document.querySelector('#chart'), chartOptions);
campaignChart.render();

const reachChartOptions = {
    'chart':{
        'type':'line',
        'height':'100%',
        'id':'reach',
        'group':'campaign-reach-compare'
    },
    'series': [
        {
            'name':'Reach',
            'data':reach
        }
    ],
    'xaxis':{
        'categories':categories
    },
    'yaxis':{
        'labels':{
            'minWidth': 40
        }
    },
    'title':{
        'text':'Reach'
    }
}
const reachChart = new ApexCharts(document.querySelector('#reachChart'), reachChartOptions);
reachChart.render();