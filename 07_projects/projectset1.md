# Projects related to DOM

## project link
[Click Here](https://stackblitz.com/edit/dom-project-chaiaurcode-2nwd3kpw?file=1-colorChanger%2Findex.html,index.html,1-colorChanger%2Fchaiaurcode.js,1-colorChanger%2Fstyle.css)

# Solution code

## project 1


``` JavaScript
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <link rel="stylesheet" href="style.css" />
    <link rel="stylesheet" href="../styles.css" />
    <title>JavaScript Background Color Switcher</title>
  </head>
  <body>
    <nav>
      <a href="/" aria-current="page">Home</a>
      <a target="_blank" href="">Youtube channel</a>
    </nav>
    <div class="canvas">
      <!-- <a
        style="
          background-color: #fff;
          padding: 10px 30px;
          border-radius: 8px;
          color: #212121;
          text-decoration: none;
          border: 2px solid #212121;
        "
        href="../index.html"
        >Back to Home Page</a
      > -->
      <h1>Color Scheme Switcher</h1>
      <span class="button" id="grey"></span>
      <span class="button" id="white"></span>
      <span class="button" id="blue"></span>
      <span class="button" id="yellow"></span>
      <h2>
        Try clicking on one of the colors above
        <span>to change the background color of this page!</span>
      </h2>
    </div>
    <script src="chaiaurcode.js"></script>
  </body>
</html>


```

## Project 2

``` JavaScript
const form = document.querySelector('form');

form.addEventListener('submit', function (e) {
  e.preventDefault();
  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#results');

  if (height === '' || height < 0 || isNaN(height)) {
    results.innerHTML = `Please give valid height ${height}`;
  } else if (weight === '' || weight < 0 || isNaN(weight)) {
    results.innerHTML = `Please give valid weight ${weight}`;
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    if (bmi < 18.6) {
      results.innerHTML = `<span>${bmi}</span><br><span>Under Weight</span>`;
    } else if (bmi >= 18.6 && bmi <= 24.9) {
      results.innerHTML = `<span>${bmi}</span><br><span>Normal Range</span>`;
    } else {
      results.innerHTML = `<span>${bmi}</span><br><span>Over Weight</span>`;
    }
    //   const New = document.createElement('span')
    // New.innerHTML = 'Hello'
    // form.appendChild(New)
  }
});

```

## Project 3

```JavaScript
const clock = document.getElementById('clock')
// const clock = document.querySelector('#clock')

const arr = ['green', 'blue', 'red', 'black']


setInterval(function() {
  let date = new Date()
// console.log(date.toLocaleTimeString())

clock.innerHTML = date.toLocaleTimeString()
clock.style.backgroundColor = arr[Math.floor(Math.random() * arr.length)] 
}, 1000)


```

## Project 4

```JavaScript
// console.log(parseInt(Math.random()*100 + 1))

let randomNumber = parseInt(Math.random() * 100 + 1);

const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p');

let prevguess = [];
let numGuess = 1;

let playGame = true;
if (playGame) {
  submit.addEventListener('click', function (e) {
    e.preventDefault();
    const guess = parseInt(userInput.value);
    console.log(guess);
    validate(guess);
  });
}

function validate(guess) {
  if (isNaN(guess)) {
    alert('Please enter valid number');
  } else if (guess < 1) {
    alert('Please enter number more than 1');
  } else if (guess > 100) {
    alert('Please enter number less than 100');
  } else {
    prevguess.push(guess);
    if (guess === 10) {
      displayGuess(guess);
      displayMessage(`Game Over!!. Random Number was ${randomNumber}`);
      endGame();
    } else {
      displayGuess(guess);
      check(guess);
    }
  }
}

function check(guess) {
  if (guess === randomNumber) {
    displayMessage('You guessed it right!');
  } else if (guess < randomNumber) {
    displayMessage('Number is too low');
  } else if (guess > randomNumber) {
    displayMessage('Number is too high');
  }
}

function displayGuess(guess) {
  userInput.value = '';
  guessSlot.innerHTML += `${guess}, `;
  numGuess++;
  remaining.innerHTML = `${11 - numGuess}`;
}

function displayMessage(message) {
  lowOrHi.innerHTML = `<h2>${message}</h2>`;
}

function endGame() {
  userInput.value = '';
  userInput.setAttribute('disabled', '');
  p.classList.add('button');
  p.innerHTML = '<h2 id = "newGame">Start New Game</h2>';
  startOver.appendChild(p);
  playGame = false;
  NewGame();
}

function NewGame() {
  const newGameButton = document.querySelector('#newGame');
  newGameButton.addEventListener('click', function (e) {
    randomNumber = parseInt(Math.random() * 100 + 1);
    prevguess = [];
    numGuess = 1;
    guessSlot.innerHTML = '';
    remaining.innerHTML = `${11 - numGuess} `;
    userInput.removeAttribute('disabled');
    startOver.removeChild(p);

    playGame = true;
  });
}

```