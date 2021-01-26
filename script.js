//challenge 1: Your Age in Day

function ageInDays() {
    var birthYear = prompt('What year were you born?');
    var d = new Date();
    var daysOfLife = ( d.getFullYear()- birthYear) * 365;
    var h1 = document.createElement('h1');
    var textAnswer = document.createTextNode('You are' + daysOfLife + 'days old.');
    h1.setAttribute('id', 'ageInDays');
    h1.appendChild(textAnswer);
    document.getElementById('flex-box-result').appendChild(h1);
}

function reset() {
    document.getElementById('ageInDays').remove();
}

//challenge 2: Cat Generator

function generateCat() {
    var image = document.createElement('img');
    var div = document.getElementById('flex-container-2');
    image.src = "https://cdn2.thecatapi.com/"
    div.appendChild(image);
}


function clean() {
    document.getElementById('flex-container-2').remove();
}

//challenge 3: Rock Paper Scissors

function rpsGame(yourChoice) {
console.log(yourChoice);
var humanChoice , botChoice;
humanChoice = yourChoice.id;
botChoice = numberToChoice(randomRps());
console.log('Computer choice:',botChoice);
results = decideWinner(humanChoice, botChoice);
console.log(results);
message = finalMessage(results);
console.log(message); 
rpsFrontEnd(yourChoice.id, botChoice, message);
}


function randomRps() {
  return Math.floor(Math.random() * 3 )
}
function numberToChoice(number) {
  return ['rock' , 'paper' , 'scissors'][number];
}


function decideWinner(yourChoice , computerChoice){
    var rpsDatabase = {
    'rock':{'scissors': 1, 'rock': 0.5, 'paper':0},
    'paper':{'rock':1, 'paper':0.5, 'scissors':0},
    'scissors':{'paper':1, 'scissors':0.5, 'rock':0}
    };
var yourScore = rpsDatabase [yourChoice][computerChoice];
var computerScore = rpsDatabase[computerChoice][yourChoice];

return [yourScore, computerScore];
}

function finalMessage([yourScore, computerScore]){
    if (yourScore===0) {
        return {'message': 'You lost!', 'color':'red'};
    }
    else if (yourScore===0.5) {
        return {'message': 'You tied!', 'color':'yellow'};
    }

    else{
        return {'message': 'You won!', 'color':'green'};
    }
    
}

function rpsFrontEnd (humanImageChoice, botImageChoice, finalMessage) {
    var imageDatabase = {
        'rock': document.getElementById('rock').src,
        'paper': document.getElementById('paper').src,
        'scissors': document.getElementById('scissors').src
    }

//to remove all the images

document.getElementById('rock').remove();
document.getElementById('paper').remove();
document.getElementById('scissors').remove();


var humanDiv = document.createElement('div');
var botDiv = document.createElement('div');
var messageDiv = document.createElement('div');



humanDiv.innerHTML = "<img src='" + imageDatabase[humanImageChoice] + "' width=150 height=150 style='box-shadow: 0 0 30px blue'>"
messageDiv.innerHTML ="<h1 style='color:"+finalMessage['color']+"; font-size:60px; padding:30px'>"+finalMessage["message"]+"</h1>"
botDiv.innerHTML = "<img src='" + imageDatabase[botImageChoice] + "' width=150 height=150 style='box-shadow: 0 0 30px red'>"
 

document.getElementById('flex-container').appendChild(humanDiv);
document.getElementById('flex-container').appendChild(messageDiv);
document.getElementById('flex-container').appendChild(botDiv);


}

// Challenge 4:
var all_buttons = document.getElementsByTagName('button');
console.log(all_buttons);
var copyAllButtons = [];
for (let i=0; i < all_buttons.length; i++) {
    copyAllButtons.push(all_buttons[i].classList[1]);
}
function buttonColorChange(buttonThingy) {
    if (buttonThingy.value === 'red') {
        buttonsRed();
    }
    else if (buttonThingy.value === 'green') {
        buttonsGreen();
    }
    else if (buttonThingy.value === 'reset') {
        buttonColorReset();
    }
    else if (buttonThingy.value === 'random') {
        randomColors();
    }
    
}

function buttonsRed() {
 for (let i=0; i < all_buttons.length; i++) {
     all_buttons[i].classList.remove(all_buttons[i].classList[1]);
     all_buttons[i].classList.add('btn-danger');
 }
}

function buttonsGreen() {
    for (let i=0; i < all_buttons.length; i++) {
        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
        all_buttons[i].classList.add('btn-success');
    }
   }

   function buttonColorReset() {
    for (let i=0; i < all_buttons.length; i++) {
        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
        all_buttons[i].classList.add(copyAllButtons[i]);
    }
   }
 
   function randomColors() {
    let choices = ['btn-primary', 'btn-success', 'btn-warning', 'btn-danger']
   
    for (let i=0; i < all_buttons.length; i++) {
        let randomNumber = Math.floor(Math.random() * 4);
        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
        all_buttons[i].classList.add(choices[randomNumber]);
    }
   }

   //challenge 5: Blackjack

   let blackjackGame = {
       'you': {'scoreSpan':'#your-blackjack-result', 'div': '#your-box', 'score': 0},
       'dealer': {'scoreSpan': '#dealer-blackjack-result', 'div': '#dealer-box', 'score': 0},
   };

  const YOU = blackjackGame['you']
   const DEALER = blackjackGame['dealer']

   document.querySelector('#blackjack-hit-button').addEventListener('click', blackjackHit);

   function blackjackHit() {
       let cardImage = document.createElement('img');
       cardImage.src = 'Images\2.png';
       document.querySelector(YOU['div']).appendChild(cardImage);
   }