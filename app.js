//
// DOM VARIABLES
//

const form = document.getElementById('form');


//
// DATA VARIABLES
//

let answers = ['It is certain.', 
                'It is decidedly so.', 
                'Without a doubt.', 
                'Yes - definitely.', 
                'You may rely on it',
                'As I see it, yes.',
                ' Most likely.',
                'Outlook good.',
                'Signs point to yes.',
                'Yes',
                'Reply hazy, try again.',
                'Ask me again later.',
                'Better not tell you now.',
                'Cannot predict now.',
                ' Concentrate and ask again.',
                'Don\'t count on it.',
                'My reply is no.',
                'My sources say no.',
                'Outlook not so good.',
                'Very doubtful.',
                'You will never know...',
            ];


//
// METHODS
//

/**
 * Show initial text message
 */

const showMessage = function() {
    //Reference to message paragraph
    const p = document.querySelector('.message-paragraph');

    if(p.textContent === '') {
        const text = document.createTextNode = 'Let me think...';
        p.textContent = text;
    } 
}


/**
 * Run when user asks the questions
 * @param { Event } e
 */

const handleSubmit = function(e) {
    //Question input
    const input = document.getElementById('question');
    e.preventDefault();
    //If there is no question, do nothing.
    if(input.value.length === 0) return;

     showMessage();
     getAnswer();

    input.value = '';
    input.focus();
};

/**
 * Randomly shuffle an array
 * @param { Array } array to shuffle
 * 
 * @return { String } The first item from the shuffled array
 */

 const shuffleArray = function(array) {
    let currentIndex = array.length;
    let temporaryValue;
    let randomIndex;

    //checking that array.length is not equal 0

    while(0 !== currentIndex) {
        //Pick a random element
        randomIndex = Math.floor(Math.random() * currentIndex );

        currentIndex-=1;

        //swap it with current element

        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue; 
    }

    return array;
 };


 /**
  * Get random answer from the array
  * @return { String } The answer
  */
const getAnswer = function() {
    //Reference to answer-paragraph tag
    const output = document.querySelector('.user-answer');

    setTimeout(() => {
        const text =  shuffleArray(answers.slice())[0];
        output.textContent = `${text}`;
    document.querySelector('.message-paragraph').textContent = '';
    }, 2000)
}


//
// EVENT LISTENERS
//

form.addEventListener('submit', handleSubmit, false);

