import logic from "./logic.js";
function getRandomInt(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled);
}

const rock = document.querySelector("#rock");
const scissor = document.querySelector("#scissor");
const paper = document.querySelector("#paper");
rock.addEventListener('click', () => display("rock"));
paper.addEventListener('click', () => display("paper"));
scissor.addEventListener('click', () => display("scissor"));


export default function displayComputerMove() {
    const rock_pic = "assets/rock.png"
    const scissor_pic = "assets/scissors.png"
    const paper_pic = "assets/papers.png"

    const computer_move = document.querySelector(".computer-move")

    let randomNum = getRandomInt(1, 4)

    if (randomNum === 1) {
        computer_move.innerHTML = `<img src="${rock_pic}" alt="">`
        return randomNum
    } else if (randomNum === 2) {
        computer_move.innerHTML = `<img src="${paper_pic}" alt="">`
        return randomNum
    } else if (randomNum === 3) {
        computer_move.innerHTML = `<img src="${scissor_pic}" alt="">`
        return randomNum
    }
}

function userMove(choice) {
    const rock_pic = "assets/rock.png"
    const scissor_pic = "assets/scissors.png"
    const paper_pic = "assets/papers.png"

    const user_move = document.querySelector(".user-move");

    if (choice === "rock") {
        user_move.innerHTML = `<img class="rock" src="${rock_pic}" alt="">`
    }
    else if (choice === "paper") {
        user_move.innerHTML = `<img class="paper" src="${paper_pic}" alt="">`
    }
    else if (choice === "scissor") {
        user_move.innerHTML = `<img class="scissors" src="${scissor_pic}" alt="">`
    }
    displayComputerMove();
}


function display(userchoice) {
    userMove(userchoice);
    logic(userchoice);
}

