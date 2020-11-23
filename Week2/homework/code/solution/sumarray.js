//write a function that gets the sum of integers in an array

function sum(numArray) {
    //loop through the array
    var sum = 0;
    numArray.forEach(function(item, index, array){
        sum += item;
    })
    return sum;
}

//call your function using 'numbers' array as parameter
let numbers = [3,5,1,9,12];
console.log("The sum is", sum(numbers));
