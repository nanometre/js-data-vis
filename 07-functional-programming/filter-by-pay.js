// filter() returns a array when a value meets a certain criteria
// not all elements will be in the new array, as there's a possibility that the criteria is not met

let jobs = [
    {
        'name':'Zookeeper',
        'salary': 3000
    },
    {
        'name':'Beekeeper',
        'salary': 4000
    },
    {
        'name':'Hawker',
        'salary': 10000
    },
    {
        'name':'Pirated DVD Vendor',
        'salary':1000
    }
]

// filter() function has an internal for-loops
let shortlisted = jobs.filter(function(job){
    return job.salary >= 3000;
})

console.log(shortlisted)
