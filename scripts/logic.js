function getRandomInt(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled); 
}

function status_model() {
    let obj = {
        win: 0,
        loss: 0,
        tie: 0
    };
    return obj
}
let scores = status_model();
let local_model = JSON.stringify(scores);
localStorage.setItem('scores', local_model);

function displayComputerMove() {
    const rock_pic = '../assets/rock.png'
    const scissors_pic = '../assets/scissors.png'
    const papers_pic = '../assets/papers.png'

    const computer_move = document.querySelector(".computer-move")

    let randomNum = getRandomInt(1, 4)

    if (randomNum === 1) {
        computer_move.innerHTML = `<img src="${rock_pic}" alt="">`
    } else if (randomNum === 2) {
        computer_move.innerHTML = `<img src="${papers_pic}" alt="">`
    } else if (randomNum === 3) {
        computer_move.innerHTML = `<img src="${scissors_pic}" alt="">`
    }
}

function userMove(){
    //define user move here
    return null
}
const rock = document.querySelector("#rock");
const scissor = document.querySelector("#scissor");
const paper = document.querySelector("#paper");
rock.addEventListener('click', display);
paper.addEventListener('click', display);
scissor.addEventListener('click', display);

function display(ki) {
    console.log('h')
    displayComputerMove();
    userMove();
}