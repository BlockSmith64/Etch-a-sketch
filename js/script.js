"use strict";
const content = document.querySelector(".content");
const container = document.querySelector(".container");
const btns = document.querySelector(".btns");

//a function that creates any amount of divs based on given arguement value
const board = function (size) {
  for (let i = 0; i < size * size; i++) {
    const divs = document.createElement("div");
    container.style.gridTemplateRows = `repeat(${size}, 1fr)`;
    container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    container.appendChild(divs).classList.add("pixel");
    divs.style.cssText = "border: 1px solid pink;";
  }
};

board(16);

const pixels = document.querySelectorAll(".pixel");

const colorPicker = function (color) {
  if (color === "black") {
    pixels.forEach((pixel) =>
      pixel.addEventListener("mouseover", function () {
        pixel.style.cssText = "background: #000;";
      })
    );
  } else if (color === "rainbow") {
    console.log("rgb");
    pixels.forEach((pixel) =>
      pixel.addEventListener("mouseover", function () {
        let randomNum1 = Math.floor(Math.random() * 256);
        let randomNum2 = Math.floor(Math.random() * 256);
        let randomNum3 = Math.floor(Math.random() * 256);
        pixel.style.cssText = `background: rgb(${randomNum1}, ${randomNum2}, ${randomNum3});`;
      })
    );
  } else if (color === "erase") {
    console.log("erase");
    pixels.forEach((pixel) =>
      pixel.addEventListener("mouseover", function () {
        pixel.style.cssText = "background: #FFFFF;";
      })
    );
  }
};

const blackColor = function () {
  const blackBtn = document.querySelector(".btn-black");
  blackBtn.addEventListener("click", function () {
    colorPicker("black");
  });
};

blackColor();

const rainbow = function () {
  const rainbowBtn = document.querySelector(".btn-rainbow");
  rainbowBtn.addEventListener("click", function () {
    colorPicker("rainbow");
  });
};

rainbow();

const erase = function () {
  const eraseBtn = document.querySelector(".btn-erasor");
  eraseBtn.addEventListener("click", function () {
    colorPicker("erase");
  });
};

erase();
