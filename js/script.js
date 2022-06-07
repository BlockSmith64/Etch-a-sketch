"use strict";
const content = document.querySelector(".content");
const container = document.querySelector(".container");
const btns = document.querySelector(".btns");

//a function that creates any amount of divs based on given arguement value
const board = function (rows, columns) {
  for (let i = 0; i < rows * columns; i++) {
    const divs = document.createElement("div");
    container.style.gridTemplateRows = `repeat(${rows}, 1fr)`;
    container.style.gridTemplateColumns = `repeat(${columns}, 1fr)`;
    container.appendChild(divs).classList.add("pixels");
  }
};

board(16, 16);

const blackBtn = document.createElement("button");
const pixels = document.querySelectorAll(".pixels");

const blackColor = function () {
  blackBtn.textContent = "BLACK";
  blackBtn.addEventListener("click", function () {
    pixels.forEach((pixel) =>
      pixel.addEventListener("mouseover", function () {
        pixel.style.cssText = "background: #000;";
      })
    );
  });
  btns.appendChild(blackBtn);
};

blackColor();
