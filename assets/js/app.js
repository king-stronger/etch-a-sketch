let container = document.querySelector(".container");

let reset = document.querySelector(".reset");

reset.addEventListener("click", humanChoice);

function createGrid(number){
    container.innerHTML = "";

    const containerStyle = getComputedStyle(container);
    const gap = parseInt(containerStyle.gap);
    const paddingLeft = parseInt(containerStyle.paddingLeft);
    const paddingRight = parseInt(containerStyle.paddingRight);
    const squareWidth = ((container.clientWidth - paddingLeft - paddingRight) / number) - gap;

    for(let i = 0; i < number * number; i++){

        let square = createSquare(squareWidth);
        container.appendChild(square);
    }


    let squares = document.querySelectorAll(".container div");

    squares.forEach(square => {
        square.addEventListener("mouseover", event => {
            changeColor(square);
            changeOpacity(square);
        });

        square.addEventListener("mouseleave", event => {
            square.style.backgroundColor = "white";
        });
    })
}

function createSquare(width){
    const square = document.createElement("div");

    square.style.width = Math.floor(width) + "px";
    square.style.aspectRatio = "1/1";
    square.style.border = "1px solid #333";
    return square;
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