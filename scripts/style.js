function styles() {
    document.body.style = `
        background: #000;
        margin: 0;
        padding: 0;
        color: white;
        font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
    `;
    document.querySelector(".container").style = `
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
    `;

    document.querySelector(".match-status").style = `
        display: flex;
        justify-content: center;
        align-items: center;
        letter-spacing: 1.5px;
        color: blueviolet;
        text-decoration: underline;
        text-underline-offset: 6px;
    `;

    let ctr = document.querySelector(".control");
    ctr.style = `
        width: 100%;
        display: flex;
        justify-content: space-evenly;
        margin-top: 20px;
    `;

    document.querySelectorAll(".ctrl-btn, #reset").forEach((Element) => {
        Element.style = `
            background: transparent;
            color: blueviolet;
            border: 2px solid blueviolet;
            font-weight: bolder;
            text-transform: uppercase;
            letter-spacing: 1px;
            border-radius: 5px;
            padding: 5px 3px;
            box-shadow: 0 0 5px 0px blueviolet;
            transition: all 0.3s ease;
        `;
    })

    ctr.querySelectorAll("button").forEach((Element) => {
        Element.addEventListener("mousedown", () => {
            Element.style.color = "red";
            Element.style.border = "2px solid red";
            Element.style.boxShadow = "0 0 5px 0 red";
        });

        Element.addEventListener("mouseup", () => {
            Element.style.color = "blueviolet";
            Element.style.border = "2px solid blueviolet";
            Element.style.boxShadow = "0 0 5px 0 blueviolet";
        });
    });

    document.querySelector(".scores").style = `
        padding: 20px 0 0 25px;
        color: blueviolet;
        text-transform: uppercase;
        letter-spacing: 2px;
    `;
}
styles();