const menuIcon = document.querySelector("#check");
const sideMenu = document.querySelector(".sideMenu");
const label = document.querySelector("#label");

menuIcon.addEventListener("click", e => {
    if (menuIcon.checked == true){
        sideMenu.style.left = "0";
    } else {
        sideMenu.style.left = "-100%";
    }
});
var width;
window.onresize = window.onload = function() {
    width = this.innerWidth;
    if (width >= 901) {
        sideMenu.style.left = "-100%";
    }
}
// functions
function classSwitcher() {
    // slides
    slides.forEach(slide => slide.classList.remove("active"))
    slides[active].classList.add("active")
    // points
    points.forEach(point => point.classList.remove("active"))
    points[active].classList.add("active")
}

let goNext = () => {
    active = (active == slides.length - 1) ? 0 : active + 1
    classSwitcher()
}

let goPrev = () => {
    active = (active == 0) ? slides.length - 1 : active - 1
    classSwitcher()
}

// variables
let active = 0
let timer = 3000
let slideshow = document.querySelector(".slideShow")
let slides = document.querySelectorAll(".slide")
let points = document.querySelectorAll(".points > span")
let prev = document.querySelector(".prev")
let next = document.querySelector(".next")

// setInterval
let runSlideshow = setInterval(goNext, timer)

// point event
points.forEach((point, index) => {
    point.addEventListener("click", e => {
        active = index
        classSwitcher()
    })
})

// next event
next.addEventListener("click", e => goNext())
// previous event
prev.addEventListener("click", e => goPrev())

// mouseover
slideshow.addEventListener("mouseover", e => clearInterval(runSlideshow))
// mouseleave
slideshow.addEventListener("mouseleave", e => runSlideshow = setInterval(goNext, timer))
classSwitcher()