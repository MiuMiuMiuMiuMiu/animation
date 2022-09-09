let box = document.querySelector(".animation-box");
let position = box.getBoundingClientRect().left;

let width = window.innerWidth;

let currentPos = position;

let requestAnimationFrame = window.requestAnimationFrame ||
                            window.mozRequestAnimationFrame ||
                            window.webkitRequestAnimationFrame ||
                            window.msRequestAnimationFrame;

function moveBox () {
    currentPos += 5;
    box.style.left = currentPos + "px";

    if (Math.abs(currentPos) >= width) {
        currentPos = -50;
    }

    requestAnimationFrame(moveBox);
}

moveBox();