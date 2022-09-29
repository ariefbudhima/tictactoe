const cell = document.querySelectorAll('.cell');
const player1ScoreSpan = document.querySelector('.player1Score');
const player2ScoreSpan = document.querySelector('.player2Score');
const restartButton = document.querySelector('.restart');

const winCombination = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
]

let player1 = [];
let player2 = [];

let score = {
    player1: 0,
    player2: 0,
}

let flag = true;


for (let i = 0; i < cell.length; i++) {
    cell[i].addEventListener('click', () => {
        if(flag === true){
            addCellsPlayer1(i);
        }else{
            addCellsPlayer2(i);
        }
        defineWinner();
    })    
}

function addCellsPlayer1(i) {
    cell[i].innerHTML = "x";
    player1.push(i);
    flag = false;
}
function addCellsPlayer2(i) {
    cell[i].innerHTML = "o";
    player2.push(i);
    flag = true;
}

function defineWinner(){
    winCombination.find((item) => {
        if(item.filter((i) => player1.includes(i)).length === 3) {
            alert("Player 1 won");
            score.player1++;
            drawScore();
            clearField();
            return item;
        } else if(item.filter((i) => player2.includes(i)).length === 3) {
            alert("Player 2 won");
            score.player2++;
            drawScore();
            clearField();        
        }
        return
    })
}

function drawScore() {
    player1ScoreSpan.innerHTML = "Player 1: " + score.player1;
    player2ScoreSpan.innerHTML = "Player 2: " + score.player2;
}
drawScore();

function clearField() {
    for (let i = 0; i < cell.length; i++) {
        cell[i].innerHTML = "";        
    }
    player1 = [];
    player2 = [];
    flag = true;
}

restartButton.addEventListener('click', () => {
    clearField();
})