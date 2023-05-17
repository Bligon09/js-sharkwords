const ALPHABET = 'abcdefghijklmnopqrstuvwxyz';

const WORDS = [
  'strawberry',
  'orange',
  'apple',
  'banana',
  'pineapple',
  'kiwi',
  'peach',
  'pecan',
  'eggplant',
  'durian',
  'peanut',
  'chocolate',
];

const numWrong = 0;

// Loop over the letters in `word` and create divs.
// The divs should be appended to the section with id="word-container".
//
// Use the following template string to create each div:
// `<div class="letter-box ${letter}"></div>`
//
const createDivsForChars = (word) => {
  // Replace this with your code
  for (const letter of word){
    //document.querySelector('ul').insertAdjacentHTML('beforeend', '<li>Finish homework</li>');
    document.querySelector('#word-container').insertAdjacentHTML('afterbegin', `<div class="letter-box ${letter}"></div>`)
  }
};

// Loop over each letter in the alphabet and generate a button for each letter
// The buttons should be appended to the section with id="letter-buttons".
const generateLetterButtons = () => {
  // Replace this with your code
  for (const letter of ALPHABET){
    //document.querySelector('ul').insertAdjacentHTML('beforeend', '<li>Finish homework</li>');
    document.querySelector('#letter-buttons').insertAdjacentHTML('beforeend', `<button id="button${letter}">${letter}</button>`)
    // document.querySelector(`#button${letter}`).addEventListener('click', isLetterInWord(`${letter}`, word))
  }
  // let new_letter = letter;
  // return new_letter;
};


// Set the `disabled` property of `buttonEl` to true.
//
// `buttonEl` is an `HTMLElement` object.
//
const disableLetterButton = (buttonEl) => {
  // Replace this with your code 
  // document.getElementById("myBtn").disabled = true;
  buttonEl.disabled = true
  console.log(buttonEl)
};

// This is a helper function we will use in the future
// It should return `true` if `letter` is in the word
// For now, you should test it out to make sure it works

const isLetterInWord = (letter, word) => {

  if(word.includes(letter)){
    handleCorrectGuess(letter);
    
    return true
  }
  else {
    disableLetterButton(letter)
  }
  // Replace this with your code
};

const handleCorrectGuess = (letter) => {
  // let newLetter = document.createTextNode(letter);
  let divElement = document.querySelectorAll(`.${letter}`);
  divElement.innerHTML(letter);

};

// This is like if __name__ == '__main__' in Python
// It will be called when the file is run (because
// we call the function on line 66)
(function startGame() {
  // For now, we'll hardcode the word that the user has to guess
  // You can change this to choose a random word from WORDS once you
  // finish this lab but we hard code it so we know what the word is
  // and can tell if things look correct for this word
  const word = 'hello';

  createDivsForChars(word);

  generateLetterButtons();

  // in the next lab, you will be adding functionality to handle when
  // someone clicks on a letter
})();
