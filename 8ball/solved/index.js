//JAVASCRIPT CHALLENGE: Magic 8 Ball
//Edit this file only; an html/css framework has already been provided
//Suggestion: open the html file in your browser before psuedocoding

//connect HTML button press to newly declared shakeEl variable
let shakeEl = document.querySelector('button');

//connects the text displayed within the 8-Ball to this newly declared JS Variable (answerEl)
let answerEl = document.querySelector('#answer');

//array of responses
let responses = [
    'It is Done', 
    'Without a Doubt', 
    'Highly Doubtful', 
    'My Sources Say No', 
    'Certainly', 
    'Better Not Count On It',
    'Reply Hazy, Try Again',
    'Absolutely',
    'Probably Not',
    'When the Time is Right',
    'In Another Life',
    'No Time Like the Present',
    'Hard to Say',
    'Break Out the Champagne',
    'It is Written in the Stars',
    'Yes',
    'No'
];

//HELPER PROVIDED: Random Number Generator
function getRandomNumber(min, max) {
    let step1 = max - min + 1;
    let step2 = Math.random() * step1;
    let result = Math.floor(step2) + min;

    return result;
}


//adds a Click Event to the SHAKE button
shakeEl.addEventListener('click', function() {
    //Calls upon a random number between 0 (min) and the length of the responses array (max)
    //Remember, we use length-1 because in JS, the first object in the array is i=0;
    let index = getRandomNumber(0, responses.length-1);

    //Replaces the id="answer" element with an object in the 'responses' array whose index number [i] was randomly selected
    answerEl.innerText = responses[index];

});




//IDEAS FOR IMPROVEMENTS (v2.0)
//An IF statement that checks whether there is text in the input box and returns an error if it is blank
//The possibility for a user to add a response to the 8-Ball

