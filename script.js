const container = document.querySelector('.container');
containerHeight = 384;
containerWidth = 384;

let width = 16;
let squareWidth;
let squareHeight;


createGrid();



function getWidth(){
    width = document.getElementById('userWidth').value;
    clearGrid();
}


function createGrid() {


    for(let j = 0; j < width; j++){

        for(let i = 0; i < width; i++){

            let divSquare = document.createElement('div');
            divSquare.classList.add('divSquare');
            container.appendChild(divSquare);
    
            divSquare.addEventListener('mouseenter', function () {
                divSquare.style.backgroundColor = 'red';
            });

            setSquareDimension();
            divSquare.style.height = squareHeight.toString() + "px";
            divSquare.style.width = squareWidth.toString() + "px";
        }
    
    }


}

function setSquareDimension() {
    squareHeight = (containerHeight / Number(width)) - 4;
    squareWidth = (containerWidth / Number(width)) - 4;


}

function resetGrid () {
    while (container.firstChild){
        container.removeChild(container.firstChild);
    }

    width = prompt('How many squares do you want?');

    createGrid();
}

function clearGrid() {

    while (container.firstChild){
        container.removeChild(container.firstChild);
    }

    createGrid();
}
