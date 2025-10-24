import displayComputerMove from "./display.js"
function status_model() {
    let obj = {
        win: 0,
        loss: 0,
        tie: 0
    };
    return obj
}

if (!localStorage.getItem("scores")) {
    let scores = JSON.stringify(status_model());
    localStorage.setItem("scores", scores);
}

export default function logic(choice) {
    let rando_num = displayComputerMove();
    if ((choice === "rock" && rando_num === 1) || (choice === "paper" && rando_num === 2) ||
        (choice === "scissor" && rando_num === 3)) {
        const parsed_score = JSON.parse(localStorage.getItem('scores'));
        parsed_score.tie++;
        const tie_html = document.querySelector(".tie");
        tie_html.innerHTML = parsed_score.tie;
        localStorage.setItem("scores", JSON.stringify(parsed_score))
    }
    else if ((choice === "rock" && rando_num === 3) || (choice === "scissor" && rando_num === 2) ||
        (choice === "paper" && rando_num === 1)) {
        const parsed_score = JSON.parse(localStorage.getItem('scores'));
        parsed_score.win++;
        const win_html = document.querySelector(".win");
        win_html.innerHTML = parsed_score.win;
        localStorage.setItem("scores", JSON.stringify(parsed_score))
    }
    else {
        const parsed_score = JSON.parse(localStorage.getItem('scores'));
        parsed_score.loss++;
        const loss_html = document.querySelector(".loss");
        loss_html.innerHTML = parsed_score.loss;
        localStorage.setItem("scores", JSON.stringify(parsed_score))
    }
}

let reset = document.querySelector("#reset").addEventListener("click", () => {
    const parsed_score = JSON.parse(localStorage.getItem('scores'));
    parsed_score.win = 0;
    parsed_score.loss = 0;
    parsed_score.tie = 0;

    const loss_html = document.querySelector(".loss");
    const win_html = document.querySelector(".win");
    const tie_html = document.querySelector(".tie");

    tie_html.innerHTML = parsed_score.win;
    win_html.innerHTML = parsed_score.win;
    loss_html.innerHTML = parsed_score.win;
    localStorage.setItem("scores", JSON.stringify(parsed_score));
})


window.onload = function () {
    const savedScores = JSON.parse(localStorage.getItem("scores"));
    if (savedScores) {
        const loss_html = document.querySelector(".loss");
        const win_html = document.querySelector(".win");
        const tie_html = document.querySelector(".tie");

        tie_html.innerHTML = savedScores.tie;
        win_html.innerHTML = savedScores.win;
        loss_html.innerHTML = savedScores.loss;

    }
};
