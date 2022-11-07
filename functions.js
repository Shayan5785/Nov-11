function editsubmissions(array,index,score) {
    return array[index].score = score;
}

// function 6
const findSubmissionByName = function(array, name) {
    return array.find( person => person.name === name )
}

// function 7
const findLowestScore = function(array) {
    let min = array[0].score
    array.forEach( item =>
    {
        if(item.score < min) 
        {
            min=item.score
        }
    })
    return  array.find( item => item.score == min ? item : null)    
}

// function 8
const findAverageScore = function(array) {
    let sum = 0
    for (let item of array) {
        sum += item.score;
    }
    return sum/array.length;
}

// function 9
const filterPassing = function(array) {
    return array.filter( item => item.passed == true);
}

// function 10
const filter90andAbove = function(array) {
    return array.filter( item => item.score >= 90);
}

export {
    editsubmissions,
    findSubmissionByName,
    findLowestScore,
    findAverageScore,
    filterPassing,
    filter90andAbove,
}