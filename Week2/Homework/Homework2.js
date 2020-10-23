//write a function that gets the sum of integers in an array 
let numbers = [3,5,1,9,12]; 

function Sum(numArray) {
    //loop through the array
    var sum = 0;
    numArray.forEach(function(item, index, array){
        sum += item;
    })
    console.log("The sum is",sum);
}

//call your function using 'numbers' array as parameter
Sum(numbers);

//write a function that creates a sentence from an array of strings
let words = ["JavaScript", "is", "so", "awesome" , "👾"]; 
var sentence = ""; 

function Sentence(strArray) {
    strArray.forEach(function(item, index, array) {
        sentence = sentence.concat(item, " ");
})
    console.log(sentence);
}

//call your function using "words" as parameter
Sentence(words);