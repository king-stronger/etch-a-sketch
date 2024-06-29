let container = document.querySelector(".container");

let reset = document.querySelector(".reset");

reset.addEventListener("click", humanChoice);

function createGrid(number){
    container.innerHTML = "";

    const containerStyle = getComputedStyle(container);
    const gap = parseInt(containerStyle.gap);
    const paddingLeft = parseInt(containerStyle.paddingLeft);
    const paddingRight = parseInt(containerStyle.paddingRight);

    const divWidth = ((container.clientWidth - paddingLeft - paddingRight) / number) - gap;

    for(let i = 0; i < number * number; i++){

        let div = createDiv(divWidth);
        container.appendChild(div);
    }


    let divs = document.querySelectorAll(".container div");

    divs.forEach(div => {
        div.addEventListener("mouseover", event => {
            changeColor(div);
            changeOpacity(div);
        });

        div.addEventListener("mouseleave", event => {
            div.style.backgroundColor = "white";
        });
    })
}

function createDiv(width){
    const div = document.createElement("div");

    div.style.width = Math.floor(width) + "px";
    div.style.aspectRatio = "1/1";
    div.style.border = "1px solid #333";
    return div;
}

function changeOpacity(element){
    let opacity = parseFloat(getComputedStyle(element).getPropertyValue("opacity")) ;
    element.style.opacity = opacity - 0.1;
}


function changeColor(element){
    element.style.backgroundColor = randomColor();
}

function randomColor(){
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);

    return `rgb(${r}, ${g}, ${b})`
}

function humanChoice(){
    let number = parseInt(prompt("Entrer le nombre de carrés par côté pour une nouvelle grille"));

    if(number > 100 || number < 0){
        humanChoice();
    } else {
        createGrid(number);
    }
}

createGrid(16);