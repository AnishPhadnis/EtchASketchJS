const container = document.querySelector('.container');
let width = 16;
let containerWidth;
let containerHeight;


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
        }
    
    }

    setContainerDimension();
    container.style.height = containerHeight.toString() + 'px';
    container.style.width = containerWidth.toString() + 'px';

    console.log(container.style.height);

}

function setContainerDimension() {
    containerHeight = 24 * Number(width);
    containerWidth = 24 * Number(width);
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
