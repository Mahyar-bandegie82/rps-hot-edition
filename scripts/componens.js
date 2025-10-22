function display_screens() {
    const body = document.body;
    const container = document.createElement('div')
    container.classList.add('container')
    body.append(container)

    const rock_pic = '../assets/rock.png'
    const scissors_pic = '../assets/scissors.png'
    const papers_pic = '../assets/papers.png'

    container.innerHTML = `
        <div class="user-move">
            <img src="${rock_pic}" alt="">
        </div>
        <p> vs </p>
        <div class="computer-move">
            <img src="${papers_pic}" alt="">
        </div>`;
}


function match_status(){
    const body = document.body;
    const container = document.createElement('div')
    container.classList.add('match-status')
    body.append(container)

    const text = document.createElement('p')
    text.innerText = "match is won"
    container.append(text)
}


function controls(){
    const body = document.body;
    const container = document.createElement('div')
    container.classList.add('control')
    body.append(container)

    container.innerHTML = `
        <button id="rock">rock</button>
        <button id="paper">paper</button>
        <button id="scissor">scissor</button>
        <button id="reset">reset</button>
    `;
}

function match_score(){
    const body = document.body;
    const container = document.createElement('div')
    container.classList.add('scores')
    body.append(container)

    container.innerHTML = `
        <p>wins : <span></span></p>
        <p>ties : <span></span></p>
        <p>losses : <span></span></p>
    `;
}

display_screens();
match_status();
controls();
match_score();