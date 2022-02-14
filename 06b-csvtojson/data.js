async function loadData() {
    // get the CSV file via axios 
    const response = await axios.get('data.csv');
    // convert the raw CSV file into an array of JSON objects
    // the csv() function is included in the global scope
    // when we include in csvtojson js file.
    const json = await csv().fromString(response.data);
    return json;
}

// brute force way to transform data
function transformData(rawData) {
    let transformedData = [];
    for (let d of rawData) {
        if (d.ethnic_group.toLowerCase().trim() == 'others') {
            transformedData.push({
                'x': Number(d.year),
                'y': Number(d.live_births),
            })
        }
    }
    return transformedData;
}