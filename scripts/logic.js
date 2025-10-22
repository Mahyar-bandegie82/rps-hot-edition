function getRandomInt(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled); // The maximum is exclusive and the minimum is inclusive
}

function status_model(){
    let obj = {
        win : 0,
        loss : 0,
        tie : 0
    };
    return obj
}
let scores = status_model();

let local_model = JSON.stringify(scores);
localStorage.setItem('scores', local_model);


const rock = document.querySelector("#rock");
const scissor = document.querySelector("#scissor");
const paper = document.querySelector("#paper");

rock.addEventListener('click', display);
paper.addEventListener('click', display);
scissor.addEventListener('click', display);

function display(ki){
    console.log(ki)
}