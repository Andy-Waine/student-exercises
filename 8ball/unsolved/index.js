//JAVASCRIPT CHALLENGE: Code a Magic 8 Ball with Random Responses
//Edit this file only; an html/css framework has already been provided
//Suggestion: open the html file in your browser before psuedocoding












//HELPER PROVIDED: Random Number Generator
function getRandomNumber(min, max) {
    let step1 = max - min + 1;
    let step2 = Math.random() * step1;
    let result = Math.floor(step2) + min;

    return result;
};


























