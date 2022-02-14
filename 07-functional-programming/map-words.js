// original array
let words =["apples", "fox", "seashells", "durians", "roger"];
// new array
// inside map function there's an internal for-loops
let count = words.map(function(eachWord){
    return eachWord.length;
})
console.log(count);


// customising the map() function
function myCustomMap(data, f){
    let results=[];
    for (let d of data) {
        results.push(f(d));
    }
    return results;
}
let count3 = myCustomMap(words, function(w){
    return w.length;
})
console.log(count3);