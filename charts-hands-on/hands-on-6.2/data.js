async function getData() {
    let request1 = axios.get('https://raw.githubusercontent.com/kunxin-chor/dwad-apexcharts/master/09-hands-axios-and-synchronized/meteors.json');
    let request2 = axios.get('https://raw.githubusercontent.com/kunxin-chor/dwad-apexcharts/master/09-hands-axios-and-synchronized/sightings.json');

    let response1 = await request1;
    let response2 = await request2;

    return [response1.data, response2.data]
}