const content = document.querySelector(".content");
const container = document.querySelector(".container");
const btnsContainer = document.querySelector(".btns");

//a function that creates any amount of divs based on given arguement value
const board = function (rows, columns) {
  for (let i = 0; i < rows * columns; i++) {
    const divs = document.createElement("div");
    container.style.gridTemplateRows = `repeat(${rows}, 1fr)`;
    container.style.gridTemplateColumns = `repeat(${columns}, 1fr)`;
    container.appendChild(divs).classList.add("pixels");
    divs.style.cssText = "border: 1px solid black";
  }
};

board(16, 16);
