"use strict";

// Random Guessing section code //

let guessVariable = Math.floor(Math.random()*101);
let Score = 10;
let highScore =0;
let currInput;
let finalWhistle = false;

let Click = document.querySelector('.check');
let textMessage = document.querySelector('.text');
let playAgain = document.querySelector('.again');


// when player lost the game
function gameLost(){
    textMessage.textContent = "💥 Game Lost !" ;
    document.querySelector('#score').textContent = '0';
}

// when player wins the game , but still try to click and enter values
function startAgain(){
    textMessage.textContent = "🤍 Play Again !";
}

// When player clicks on check button
Click.addEventListener('click', function(){
    currInput = Number(document.querySelector('#number').value);
    if(!currInput){
        textMessage.textContent = "⛔ No number...";
    }
    else if(currInput === guessVariable){
        if(Score>1){
            document.querySelector('#question').textContent = guessVariable;
            textMessage.textContent = "🎁 Correct number !";
            document.body.style.backgroundColor = 'Green';
            finalWhistle = true;  // to check whether player has won game or not
            if(highScore<Score){
                highScore = Score;
                document.querySelector('#high').textContent = highScore;
            }
            }
        else{
                gameLost();
            }
    }

    else if(currInput < guessVariable){
        if(finalWhistle === true){  // if player has already won
            startAgain();
        }

        else if(Score>1 ){
        textMessage.textContent = "⚠ Too Low !" ;
        Score--;
        document.querySelector('#score').textContent = Score;
        }

        else{
            gameLost();
        }
    }

    else if(currInput > guessVariable){
        if(finalWhistle === true){
            startAgain();
        }

        else if(Score>1 ){
            textMessage.textContent = '⚠ Too High !';
            Score--;
            document.querySelector('#score').textContent = Score;
            }

        else{
               gameLost();
            }
    }

})


  // When player clicks on again button 
playAgain.addEventListener('click', function(){
    document.body.style.backgroundColor = '#222';
    document.querySelector('#question').textContent = '?';
    document.querySelector('#number').value = '';
    textMessage.textContent = "Start Guessing..." ;
    Score = 10;
    document.querySelector('#score').textContent = Score;
    guessVariable = Math.floor(Math.random()*101);
    console.log(guessVariable);
    finalWhistle = false;
})

