"use strict";
const content = document.querySelector(".content");
const container = document.querySelector(".container");
const btns = document.querySelector(".btns");
const blackBtn = document.querySelector(".btn-black");
const randomColorBtn = document.querySelector(".btn-random");
const eraseBtn = document.querySelector(".btn-erasor");
const resizeBtn = document.querySelector(".btn-size");
const resetBtn = document.querySelector(".btn-reset");

let defaultSize = 16;

//a function that creates any amount of divs based on given arguement value
const board = function (size) {
  for (let i = 0; i < size * size; i++) {
    const divs = document.createElement("div");
    container.style.gridTemplateRows = `repeat(${size}, 1fr)`;
    container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    container.appendChild(divs).classList.add("pixel");
  }
};

board(defaultSize);

const colorPicker = function (color) {
  const pixels = document.querySelectorAll(".pixel");
  pixels.forEach((pixel) =>
    pixel.addEventListener("mouseover", function () {
      if (color === "black") {
        pixel.style.background = "#000";
      } else if (color === "random") {
        let num1 = Math.floor(Math.random() * 256);
        let num2 = Math.floor(Math.random() * 256);
        let num3 = Math.floor(Math.random() * 256);
        pixel.style.cssText = `background: rgb(${num1}, ${num2}, ${num3});`;
      } else if (color === "erase") {
        pixel.style.background = "#FFF";
      }
    })
  );
};

const blackColor = function () {
  blackBtn.addEventListener("click", function () {
    colorPicker("black");
  });
};

blackColor();

const randomColor = function () {
  randomColorBtn.addEventListener("click", function () {
    colorPicker("random");
  });
};

randomColor();

const erase = function () {
  eraseBtn.addEventListener("click", function () {
    colorPicker("erase");
  });
};

erase();

const removeDivs = function () {
  const pixels = document.querySelectorAll(".pixel");
  pixels.forEach((pixel) => pixel.remove());
};

const resize = function (userInput) {
  resizeBtn.addEventListener("click", function () {
    userInput = prompt(
      "Enter a number. Size is calculated using the square of the number."
    );
    defaultSize = Number(userInput);
    if (userInput >= 1 && userInput <= 100) {
      removeDivs();
      board(userInput);
      blackColor();
      randomColor();
      erase();
    } else {
      alert("Enter a number between 1-100!");
    }
  });
};

resize(defaultSize);

const reset = function () {
  resetBtn.addEventListener("click", function () {
    removeDivs();
    board(defaultSize);
    blackColor();
    randomColor();
    erase();
    if (defaultSize !== 16) {
      removeDivs();
      board(defaultSize);
      blackColor();
      randomColor();
      erase();
    }
  });
};

reset();
