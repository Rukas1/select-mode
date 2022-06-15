"use strict";

const rad1 = document.getElementById("radio1");
const rad2 = document.getElementById("radio2");

document.querySelector(".txt2").classList.add("active");

let typeContent = false;

rad1.addEventListener("click", () => {
    document.querySelectorAll(".active").forEach(el => {
        el.classList.remove("active");
    })
    document.querySelector(".txt1").classList.add("active");
    typeContent = true;
})

rad2.addEventListener("click", () => {
    document.querySelectorAll(".active").forEach(el => {
        el.classList.remove("active");
    })
    document.querySelector(".txt2").classList.add("active");
    typeContent = false;
})

document.querySelector("#pull").addEventListener("click", () => {
    if (typeContent) {
        alert("nsfw content");
    } else if (!typeContent) {
        alert("sfw content");
    }
})
