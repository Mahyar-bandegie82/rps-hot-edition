function display_screens() {
    const body = document.body;
    const container = document.createElement('div')
    container.classList.add('container')
    body.append(container)

    // const rock_pic = '../assets/rock.png'
    // const scissors_pic = '../assets/scissors.png'
    // const papers_pic = '../assets/papers.png'

    container.innerHTML = `
        <div class="user-move"></div>
        <p> vs </p>
        <div class="computer-move"></div>`;
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
        <button class="ctrl-btn" id="rock">rock</button>
        <button class="ctrl-btn" id="paper">paper</button>
        <button class="ctrl-btn" id="scissor">scissor</button>
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