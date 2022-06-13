"use strict";
const content = document.querySelector(".content");
const container = document.querySelector(".container");
const btns = document.querySelector(".btns");
const blackBtn = document.querySelector(".btn-black");
const rainbowBtn = document.querySelector(".btn-rainbow");
const eraseBtn = document.querySelector(".btn-erasor");
const resizeBtn = document.querySelector(".resize");

//a function that creates any amount of divs based on given arguement value
const board = function (size) {
  for (let i = 0; i < size * size; i++) {
    const divs = document.createElement("div");
    container.style.gridTemplateRows = `repeat(${size}, 1fr)`;
    container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    container.appendChild(divs).classList.add("pixel");
    //divs.style.cssText = "border: 1px solid pink;";
  }
};

board(16);

const colorPicker = function (color) {
  const pixels = document.querySelectorAll(".pixel");
  pixels.forEach((pixel) =>
    pixel.addEventListener("mouseover", function () {
      if (color === "black") {
        pixel.style.background = "#000";
      } else if (color === "rainbow") {
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

const rainbow = function () {
  rainbowBtn.addEventListener("click", function () {
    colorPicker("rainbow");
  });
};

rainbow();

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

const resize = function () {
  resizeBtn.addEventListener("click", function () {
    const userInput = prompt("Enter a number");
    if (userInput >= 1 && userInput <= 100) {
      removeDivs();
      board(userInput);
      blackColor();
      rainbow();
      erase();
    }
  });
};

resize();
