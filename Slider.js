const left = document.querySelector(".left");
const right = document.querySelector(".right");
const slider = document.querySelector(".slider");

let sliderNumber = 1;

right.addEventListener("click", () =>{
    slider.style.transform = `translateX(-${sliderNumber * 800}px)`
})