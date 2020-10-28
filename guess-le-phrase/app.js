const qwerty = document.getElementById('qwerty');
const keyboardKeys = qwerty.getElementsByTagName('button');
const phrase = document.getElementById('phrase');
const overlay = document.getElementById('overlay');
const startButton = document.getElementsByClassName('btn__reset')[0];
let missed = 0;

//phrases array
const phrases = [
    'GOSSIPMONGER DING DONG',
    'DUCK DUCK GOOSE',
    'RED LEATHER YELLOW LEATHER',
    'HAIKU HAIRDO',
    'HAKUNA MATATA'
];

//clear screen to start from button

startButton.addEventListener('click', function () {
    overlay.style.display = 'none';
    reset();
})

//return a random phrase from array
function getRandomPhrase(arr) {
    const randomPhrase = arr[Math.floor(Math.random() * arr.length)];
    console.log(randomPhrase);
    const letterArray = randomPhrase.split("");
    console.log(letterArray);
    return letterArray;
}

//phraseToDisplay function
function addPhraseToDisplay(arr) {
    for (char of arr) {
        const ul = document.getElementsByTagName('ul')[0];
        const listItem = document.createElement('li');
        listItem.textContent = char;
        if (listItem.textContent !== " ") {
            listItem.className = 'letter';
        } else if (listItem.textContent === " ") {
            listItem.className = 'space'
        }
        ul.appendChild(listItem);
    }
}

//add the letters of string to display


//check if a lette is in the phrase
function checkLetter(button) {
    const letters = document.getElementsByClassName("letter");
    let sameLetter = null;

    for (letter of letters) {
        if (letter.textContent === button.textContent.toUpperCase()) {
            letter.className += ' show';
            sameLetter = letter.textContent;
            console.log(sameLetter);
        }
    }
    return sameLetter;
}

//check if game has been won or lost

function checkIfWon(){
    const twoClassLetters = document.getElementsByClassName("letter show");
    const oneClassLetters = document.getElementsByClassName("letter");
    if(twoClassLetters.length === oneClassLetters.length) {
        title = document.getElementsByClassName("title")[0];
        title.textContent = "Yahoo! You win!";
        startButton.textContent = "Play again?"
        overlay.style.display = null;
    } else if (missed >= 5) {
        title = document.getElementsByClassName('title')[0];
        title.textContent = "Aw sorry, you lost!";
        startButton.textContent = "Try again?";
        overlay.style.display = null;

    }
}

// keyboard event listeners

for (keyboardKey of keyboardKeys) {
    keyboardKey.addEventListener('click', function (event) {
        const button = event.target;

        button.className += ' chosen';
        button.disabled = true;
        const letterFound = checkLetter(button);

        if(!letterFound) {
            missed++;
            button.className += ' chosenWrong';
            const hearts = document.getElementsByTagName('img');
            hearts[missed - 1].style.backgroundColor = 'red';
        }
        checkIfWon();
    });
}

//reset the game

function reset() {
    const ul = document.getElementsByTagName('ul')[0];
    ul.textContent = "";

    const phrasesArray = getRandomPhrase(phrases);
    addPhraseToDisplay(phrasesArray);
    missed = 0;
    const hearts = document.getElementsByTagName('img');
    for(heart of hearts) {
        heart.style.backgroundColor = null;
    } for(keyboardKey of keyboardKeys) {
        keyboardKey.className = null;
        keyboardKey.disabled = false;
    }
}