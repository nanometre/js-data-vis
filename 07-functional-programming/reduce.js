// reduce is to summarise, or to find the aggregate of the array.
// usually the final step of data processing(?)

// FINDING THE SUM OF ELEMENTS IN ARRAY
let numbers = [1,3,5,7]; 
let reducer = function(current, total) {
    return current + total;
}
// there's an internal for-loop in reduce() function
let sum = numbers.reduce(reducer, 0);
console.log(sum);

// FINDING LARGEST VALUE ELEMENT
let random = [3,6,-1,100,32,-5,11,]
let maxReducer = function(current, largestSoFar) {
    if (current > largestSoFar) {
        return current;
    } else {
        return largestSoFar;
    }
}
let max = random.reduce(maxReducer, random[0]);
console.log('max=', max);

// CUSTOM REDUCE() FUNCTION
function myReduce(arr, reducer, initialValue) {
    let temp =  initialValue;
    for (let el of arr) {
       temp= reducer(el,temp);
    }
    return temp;
}