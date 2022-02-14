// chaining 2 different function to get what I want
// in this case, returning only the name of the job that earns >= 3000

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

// let shortlisted = jobs.filter(function(job){
//     return job.salary >= 3000;
// })
// let transformed = shortlisted.map(function(job){
//     return job.name;
// })
// console.log(transformed);

let final = jobs.filter(function(job){
    return job.salary >= 3000;
}).map(function(job){
    return job.name;
})
console.log(final);