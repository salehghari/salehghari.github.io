const menuIcon = document.querySelector("#check");
const sideMenu = document.querySelector(".sideMenu");
const label = document.querySelector("#label");
const myName = document.querySelector("#myName");
const myProfession = document.querySelector("#myProfession");
const body = document.querySelector("body");

body.classList = "disableScrolling"; // For loading effect

function loading() {
    const loading = document.querySelector("#loading");
    loading.style.display = "none";
    body.classList = "";
}
window.addEventListener("load", e => {
    loading()
});

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

window.onscroll = () => {
    var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    var scrolled = (winScroll / height) * 100;
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
        scrolled = 100;
        // for fixing bug, because of mobile Chrome search bar
    }
    document.getElementById("myBar").style.width = scrolled + "%";
};

if (window.scrollY) {
    window.scroll(0, 0);  // reset the scroll position to the top left of the document.
}

var i = 0;
var txt = "Saleh Ghari";
var j = 0;
var Profession = "Web Developer";

function typeMyName() {
  if (i < txt.length) {
    myName.innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeMyName, 150);
    if(txt.charAt(i) == "i") {
        function typeMyProfession() {
          if (j < Profession.length) {
            myProfession.innerHTML += Profession.charAt(j);
            j++;
            setTimeout(typeMyProfession, 80);
          }
        }
        typeMyProfession()
    }
  }
}
typeMyName()

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


let active = 0
let timer = 3000
let slideshow = document.querySelector(".slideShow")
let slides = document.querySelectorAll(".slide")
let points = document.querySelectorAll(".points > span")
let prev = document.querySelector(".prev")
let next = document.querySelector(".next")


let runSlideshow = setInterval(goNext, timer)


points.forEach((point, index) => {
    point.addEventListener("click", e => {
        active = index
        classSwitcher()
    })
})


next.addEventListener("click", e => goNext())

prev.addEventListener("click", e => goPrev())


slideshow.addEventListener("mouseover", e => clearInterval(runSlideshow))

slideshow.addEventListener("mouseleave", e => runSlideshow = setInterval(goNext, timer))
classSwitcher()