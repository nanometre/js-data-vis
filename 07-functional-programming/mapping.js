// mapping creates a copy of the original array after modifying it.
// orignal array is not modified
// all elements will be included in the new array

let results = [
    {
        "location": {
            "lat": 1.03,
            "lng": 130.12
        },
        "details":{
            "name":"BK Eating House",
            "address":"North Canal Road 01-01"
        }
    },
    {
        "location": {
            "lat": 1.03,
            "lng": 129.5
        },
        "details":{
            "name":"The Central",
            "address":"Tanjong Pagar Street 1"
        }
    },
    {
        "location": {
            "lat": 1.03,
            "lng": 129.01
        },
        "details":{
            "name":"Hong Lim Park",
            "address":"1 Geogre Street"
        }
    }
]


//using for-loop is known as the iterative solution
let coordinates = [];
for (let r of results) {
    let coordinate = [r.location.lat, r.location.lng];
    coordinates.push(coordinate);
}
console.log(coordinates);

//using the map function
let coordinates2 = results.map(function(r){
    return [r.location.lat, r.location.lng]
})
console.log(coordinates2)