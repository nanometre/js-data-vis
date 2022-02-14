async function getData(){
    let response = await axios.get('https://raw.githubusercontent.com/kunxin-chor/data-files-and-stuff/master/fake-graph-data')
    return response.data.temperatures
}