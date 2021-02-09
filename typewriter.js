"use strict";

startTypewriter();

function startTypewriter() {
    const content = document.querySelector("h1");
    content.style.display = "none";
    divideLetters();
}

function divideLetters() {
    const sentence = document.querySelector("h1").textContent;
    console.log(sentence);
    const separateLetters = sentence.split("");
    console.log(separateLetters);
}