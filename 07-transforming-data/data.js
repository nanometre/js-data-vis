async function loadData() {
    const response = await axios.get('https://raw.githubusercontent.com/kunxin-chor/sales-data/main/data/sales.json');
    return response.data;
}

// input: rawData of sales transaction
// output: a series, where x is the name of the month, and y is total revenue for the month
function transformData(rawData) {
    console.log(rawData);
    let monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug','Sept','Oct','Nov','Dec']

    // 1. use map to keep only the information that we want
    let transformed = rawData.map(function(transaction){
        return {
            amount: transaction.payment.amount,
            date: new Date(transaction.completed_at) //=> convert from date string to a date object
        }
    })
    let filtered = transformed.filter(function(transaction){
        return transaction.date.getFullYear() == 2020;
    });
    let withMonth = filtered.map(function(transaction){
        return {
            amount: transaction.amount,
            month: monthNames[transaction.date.getMonth()]
        }
    })


    // grouping
    // final results should look something like this:
    /* {
        0: [ t1, t2, t6 ],
        1: [ t3, t4, t7]
        ...
    } */
    // create the empty groups
    let groups = {};
    for (let m=0; m < 12; m++) {
        groups[monthNames[m]] = []; // create one array for month
    }
    // categorize each transaction by its month
    for(let transaction of withMonth) {
        let monthNumber = transaction.month;
        groups[monthNumber].push(transaction);
    }
   
    let series = [];
    let reducer = function(totalSoFar, currentTransaction ){
        return currentTransaction.amount + totalSoFar;
    }
    for (let eachMonth in groups) {
        let coordinate = {
            x: eachMonth,
            y: groups[eachMonth].reduce(reducer , 0)
        }
        series.push(coordinate);
    }
    return series;
}