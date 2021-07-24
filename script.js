let gridContainer = document.querySelector("#grid-container");
let gridItem;
let numberOfSquares = 16;
let gridSize = numberOfSquares * numberOfSquares;
let clearButton = document.querySelector("#btn-clear");
let rubberButton = document.querySelector("#btn-rubber");
let pencilButton = document.querySelector("#btn-pencil");
let saveButton = document.querySelector("#btn-save");
let color = document.querySelector("#pencil-color").value;
let isRubberOn = false;
let isDrawing = false;
clearButton.addEventListener("click", clearField);
rubberButton.addEventListener("click", erase);
pencilButton.addEventListener("click", setPencil);
document.addEventListener("mousedown", setMousedown);
document.addEventListener("mouseup", finishDrawing);
gridContainer.addEventListener("mouseover", draw);
// saveButton.addEventListener("click", saveImage);

createGrid(16);
document.querySelector("#pencil-color").addEventListener('input', (e) => {
    color = e.target.value;
})

function setMousedown() {
    isDrawing = true;
    draw();
}

function draw() {
    if (isDrawing) {
        if (event.target.classList.contains("grid-item")) {
            if (isRubberOn) {
                event.target.style.backgroundColor = "white";
            } else {
                event.target.style.backgroundColor = color;
            }
        }
    }
}

function finishDrawing() {
    isDrawing = false;
}

function createGrid(size) {
    numberOfSquares = size;
    gridSize = size * size;
    for (let index = 0; index < gridSize; index++) {
        gridItem = document.createElement("div");
        gridItem.classList.add("grid-item");
        gridItem.setAttribute("style", `height: ${600/(numberOfSquares)}px;`);
        gridContainer.appendChild(gridItem);
    }
    gridContainer.setAttribute("style", `grid-template-columns: repeat(${numberOfSquares}, ${600/numberOfSquares}px);`);
}

function clearField() {
    while (gridContainer.firstChild) {
        gridContainer.removeChild(gridContainer.firstChild);
    }
    let customSize = prompt("Enter the size");
    if (customSize > 100) {
        customSize = 100;
    }
    if (customSize === "" || customSize === NaN || customSize === 16) {
        customSize = 16;
    }
    createGrid(customSize);
}

function erase() {
    return isRubberOn = true;
}

function setPencil() {
    isRubberOn = false;
}

// saveButton.addEventListener('click', function(e) {
//     const link = document.createElement('a');
//     link.download = 'download.png';
//     link.href = gridContainer.toDataURL("image/png");
//     link.click();
//     link.delete;
// });