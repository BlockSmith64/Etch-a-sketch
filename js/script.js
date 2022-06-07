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

const rgbBtn = document.createElement("button");

const rgbColor = function () {
  rgbBtn.textContent = "RGB";
  rgbBtn.addEventListener("click", function () {
    pixels.forEach((pixel) =>
      pixel.addEventListener("mouseover", function () {
        let r = Math.floor(Math.random() * 256);
        let g = Math.floor(Math.random() * 256);
        let b = Math.floor(Math.random() * 256);
        pixel.style.cssText = `background: rgb(${r}, ${g}, ${b});`;
      })
    );
  });
  btns.appendChild(rgbBtn);
};

rgbColor();

const eraseBtn = document.createElement("button");

const erase = function () {
  eraseBtn.textContent = "ERASE";
  eraseBtn.addEventListener("click", function () {
    pixels.forEach((pixel) =>
      pixel.addEventListener("mouseover", function () {
        pixel.style.cssText = "background: #FFFFFF;";
      })
    );
  });
  btns.appendChild(eraseBtn);
};

erase();
