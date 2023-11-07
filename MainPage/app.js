console.log("Hello")

const rock = document.querySelector(".rock")
const paper = document.querySelector(".paper")
const scissors = document.querySelector(".scissors")

const removeClss = document.querySelectorAll(".rem")

const playerImage = document.querySelector(".player-image")

const computerImage = document.querySelector("#computerImage")

const playerScoreDisplay = document.querySelector(".player-score")
const computerScoreDisplay = document.querySelector(".computer-score")

const playAgain = document.querySelector(".play-again-button")

const buttons = document.querySelector(".player-button-area")

const result = document.querySelector(".result")

let playerScore = 0
let computerScore = 0 

let playerOption = 0
let computerOption = 0

function imageVisible() {
    removeClss.forEach(element => {
        element.classList.remove('remove');
    });
}

function computerChance(){
    let ran = Math.round(Math.random()*3)
    if(ran==1 && playerOption!=1){
        computerOption=1
        computerImage.src = `../assets/rock-hand.png`
    }
    else if(ran==2 && playerOption!=2){
        computerOption=2
        computerImage.src = `../assets/paper-hand.png`
    }
    else if(ran==3 && playerOption!=3){
        computerOption=3
        computerImage.src = `../assets/scissors-hand.png`
    }
    else{
        computerChance()
    }

    checkWin()
}

function checkWin(){
    if(playerOption==1)
    {
        if(computerOption==2)
        {
            comWin()
        }
        else
        {
            playerWin()
        }
    }
    else if(playerOption==2)
    {
        if(computerOption==3)
        {
            comWin()
        }
        else
        {
            playerWin()
        }
    }
    if(playerOption==3)
    {
        if(computerOption==1)
        {
            comWin()
        }
        else
        {
            playerWin()
        }
    }
}

function playerWin(){
    playerScore++
    playerScoreDisplay.innerHTML=playerScore
    res()
}

function comWin(){
    computerScore++
    computerScoreDisplay.innerHTML=computerScore
    res()
}

function res(){
    computerOption=0
    playerOption=0

    if(playerScore==5)
    {
        result.classList.toggle("remove")
        buttons.classList.toggle("remove")
    }
    if(computerScore==5)
    {
        result.classList.toggle("remove")
        buttons.classList.toggle("remove")
    }
}

rock.onclick = () => {
    playerImage.src = `../assets/rock-hand.png`
    imageVisible()
    playerOption = 1
    computerChance()
}

paper.onclick = () => {
    playerImage.src = `../assets/paper-hand.png`
    imageVisible()
    playerOption = 2
    computerChance()
}

scissors.onclick = () => {
    playerImage.src = `../assets/scissors-hand.png`
    imageVisible()
    playerOption = 3
    computerChance()
}

playAgain.onclick = () => {
    window.location.href = "./index.html"
}