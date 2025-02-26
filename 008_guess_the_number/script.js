//TRY TO BREAK THE CODE IN DIFFERENT FUNCTIONS

let random = Math.round(Math.random() * 1000 + 1)

let noOfGuesses = 8

const input = document.getElementById('guessField')
const submit = document.getElementById('subt')
const previousGuesses = document.querySelector('.guesses')
const remainingGuesses = document.querySelector('.lastResult')
const statusScreen = document.querySelector('.status')
const resultSection = document.querySelector('.resultParas')

//creating new button to be displayed after game won
const playAgainBtn = document.createElement('button')
playAgainBtn.innerText = 'Play Again'
playAgainBtn.id = 'playAgainBtn'
playAgainBtn.style.color = 'white'
playAgainBtn.style.backgroundColor = 'green'
playAgainBtn.style.borderRadius = '8px'

submit.addEventListener('click',(event)=>{
    event.preventDefault()
    const number = parseInt(input.value)
    if(validation(number) == true){
        if(noOfGuesses > 0){
            compareAgainstRandom(number,random)
            previousGuesses.innerText += `${input.value}, `
            remainingGuesses.innerText = `${--noOfGuesses}`
            if(noOfGuesses === 0) endGame()
        }
    }
})

playAgainBtn.addEventListener('click',()=>{
    startGame()
})

function validation(number){
    if(isNaN(number)){
        displayMsg(statusScreen, `Please enter a valid number`,'darkred')
        return false
    }else if(number < 1 || number > 1000){
        displayMsg(statusScreen, `Enter a number in range 1 to 1000 only`,'darkred')
        return false
    }else{
        return true
    }
}

function displayMsg(element, message, bgColor = 'transparent'){
    element.style.backgroundColor = bgColor
    element.innerText = message
}

function compareAgainstRandom(number, random){
    if(number === random){        
        wonGame()
    }else if(number > random){
        displayMsg(statusScreen,`Number is HIGH`)
    }else if(number < random){
        displayMsg(statusScreen,`Number is LOW`)
    }
}

function endGame(){
    input.disabled = 'true'
    submit.disabled = 'true'
    displayMsg(statusScreen, `GAME IS OVER`,'darkblue')
    resultSection.appendChild(playAgainBtn)
}

function startGame(){
    random = Math.round(Math.random() * 1000 + 1)
    playAgainBtn.remove()
    noOfGuesses = 8
    remainingGuesses.innerText = 8
    previousGuesses.innerText = ''
    statusScreen.innerText = ''
    input.value = ''
    input.removeAttribute('disabled')
    submit.removeAttribute('disabled')
}

function wonGame(){
    document.querySelector('#instructions').innerHTML = ''
    endGame()
    displayMsg(statusScreen,`You guessed it right. It was ${random}`,'green')
}