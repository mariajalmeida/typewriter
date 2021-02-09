"use strict";

startTypewriter();

function startTypewriter() {
    const content = document.querySelector("h1");
    content.style.display = "none";
    divideLetters();
}

function divideLetters() {
    const sentence = document.querySelector("h1").textContent;

    let i = 0;
    let speed = 100;

    let timer = setInterval(function () {
        i++
        if (i <= sentence.length) {
            document.querySelector("h1").style.display = "block";
            document.querySelector("h1").textContent = sentence.substring(0, i);
        } else {
            console.log("done");
            clearInterval(timer);
        }
    }, speed);
}