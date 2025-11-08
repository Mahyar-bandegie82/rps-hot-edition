import { display } from './display.js';


const auto = document.querySelector('.auto-play')

function getRandomInt(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled);
}

let switcher = false;
let intervalId = null;

auto.addEventListener('click', () => {
    if (!switcher) {
        switcher = true;
        intervalId = setInterval(() => {
            const random = getRandomInt(1, 4)
            if (random === 1) {
                display("rock")
            }
            else if (random === 2) {
                display("paper")
            }
            else if (random === 3) {
                display("scissor")
            }
        },1000)
        console.log(switcher);
        
    }
    else {
        switcher = false;
        clearInterval(intervalId)
        intervalId = null;
        console.log(switcher);
    }
})