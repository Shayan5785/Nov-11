import {
    findSubmissionByName,
    findLowestScore,
    findAverageScore,
    filterPassing,
    filter90andAbove,
} from "./functions.js"

let submissions = [
    {
        name:"jane",
        score:95,
        date: new Date('2020-01-24') ,
        passed:true,
    },
    {
        name:"joe",
        score:77,
        date: new Date('2018-05-14') ,
        passed:true,
    },
    {
        name:"jack",
        score:59,
        date: new Date('2019-07-05') ,
        passed:false,
    },
    {
        name:"jill",
        score:88,
        date: new Date('2020-04-22') ,
        passed:true,
    },
]

console.table(submissions);

console.log(findSubmissionByName(submissions,"joe"));
console.log(findLowestScore(submissions));
console.log(findAverageScore(submissions));
console.log(filterPassing(submissions));
console.log(filter90andAbove(submissions));
