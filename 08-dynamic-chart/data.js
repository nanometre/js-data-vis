async function loadData() {
    const response = await axios.get("https://raw.githubusercontent.com/kunxin-chor/data-files-and-stuff/master/bigger-sales.json");
    return response.data;
}

function transformData(rawData, country, year) {
    let filterFunc = function(record) {
        // if no country is provided
        if (!country) {
            return true;
        } else if (country == record.billing_address.country) {
            return true;
        }
        // one-liner
        // return !country || country == record.billing_address.country;
    }

    let filterByYear=function(record) {
        let dateObj = new Date(record.completed_at);
        if (!year) {
            return true;
        } else if (year == dateObj.getFullYear()) {
            return true;
        }

        // alternatives include
        // let chunks = dateObj.split('-');
        // if (year == parseInt(chunks[0])) {
        //     return true;
        // }
        //
        // 2:
        // if (record.completed_at.includes(year)) {
        // return true;    
        //}
    }

    let filtered = rawData.filter(filterFunc);
    let filteredByYear = filtered.filter(filterByYear);
    let earnings = filteredByYear.map(function(record){
        let dateObj = new Date(record.completed_at);
        return {
            amount: record.payment.amount,
            month: dateObj.getMonth()
        }
    }) 

    // create new object to represent the groups
    // think of groups as a Python dictionary not as an object might be better
    let groups = {};
    for (let i =0; i < 12; i++) {
        // groups is not an array, it's an object
        groups[i] = [];  // create one array per possible month
    }

    // categorize each record we have into the months
    for (let record of earnings) {
        groups[record.month].push(record);
    }

    let series = [];
    let reducer = function(total, record) {
        return total + record.amount;
    }
    // groups is an object
    // `let month in groups` will go through the keys of the groups object
    for (let month in groups) {
        let group = groups[month];
        series.push({
            x: month,
            y: group.reduce(reducer, 0)
        })
    }
    return series;
}

function transformDataEx(rawData, country, year) {
    let filterFunc = function(record) {
        // if no country is provided
        if (!country) {
            return true;
        } else if (country == record.billing_address.country) {
            return true;
        }
        // one-liner
        // return !country || country == record.billing_address.country;
    }

    let filterByYear=function(record) {
        let dateObj = new Date(record.completed_at);
        if (!year) {
            return true;
        } else if (year == dateObj.getFullYear()) {
            return true;
        }
    }


    let earnings = rawData.filter(filterFunc)
                          .filter(filterByYear)
                          .map(function(record){
                            let dateObj = new Date(record.completed_at);
                            return {
                                amount: record.payment.amount,
                                month: dateObj.getMonth()
                            }
                        })

    // create new object to represent the groups
    // think of groups as a Python dictionary not as an object might be better
    let groups = {};
    for (let i =0; i < 12; i++) {
        // groups is not an array, it's an object
        groups[i] = [];  // create one array per possible month
    }

    // categorize each record we have into the months
    for (let record of earnings) {
        groups[record.month].push(record);
    }

    let series = [];
    let reducer = function(total, record) {
        return total + record.amount;
    }
    // groups is an object
    // `let month in groups` will go through the keys of the groups object
    for (let month in groups) {
        let group = groups[month];
        series.push({
            x: month,
            y: group.reduce(reducer, 0)
        })
    }
    return series;
}