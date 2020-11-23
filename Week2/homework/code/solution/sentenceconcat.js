//write a function that creates a sentence from an array of strings

function sentence(strArray) {
    var sentence = "";
    strArray.forEach(function(item, index, array) {
        sentence = sentence.concat(item, " ");
      })
    sentence = sentence.concat(".");
    return sentence;
}

//call your function using "words" as parameter
let words = ["JavaScript", "is", "so", "awesome" , "👾"];
console.log(sentence(words));
