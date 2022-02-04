const coordinates = document.querySelector(".coordinates");
const circle = document.querySelector(".circle");
const result = document.querySelector(".result");
const numbers = document.querySelectorAll("p");
const informationIcon = document.querySelector(".informationIcon");
const information = document.querySelector(".information");
const layout = document.querySelector(".layout");
const closeBtn = document.querySelector(".close");
coordinates.addEventListener("mousedown", e => {
    const X = e.clientX;
    const Y = e.clientY;
    circle.style.setProperty('--x', `${X}px`);
    circle.style.setProperty('--y', `${Y}px`);
    const hypotenuse = Math.sqrt(X ** 2 + Y ** 2);
    const angle = Math.round(Math.atan2(Y, X) * 180 / Math.PI);
    const sin = Math.round(Y / hypotenuse * 100) / 100;
    const cos = Math.round(X / hypotenuse * 100) / 100;
    const tan = Math.round(Y / X * 100) / 100;
    const cot = Math.round(X / Y * 100) / 100;
    result.innerHTML = `
    <h1 class="resultItems">result</h1>
    <h2 class="resultItems">angle: ${angle}°</h2>
    <h2 class="resultItems">sin: ${sin}</h2>
    <h2 class="resultItems">cos: ${cos}</h2>
    <h2 class="resultItems">tan: ${tan}</h2>
    <h2 class="resultItems">cot: ${cot}</h2>`
})
coordinates.addEventListener("mousemove", e => {
    mouseMoved(e);
})
numbers.forEach(number => {
    if(number.innerHTML.toString().length == 2) {
        number.classList = "two-digit-numbers-x";
    }
})

const c = document.getElementById("myCanvas");
const ctx = c.getContext("2d");
var width;
window.onresize = window.onload = function() {
    width = this.innerWidth;
    c.width = window.innerWidth;
    c.height = window.innerHeight;
    ctx.strokeStyle = "rgb(215, 215, 215)"
}

function getMousePos (e) {
    var rect = c.getBoundingClientRect(),
        scaleX = c.width / c.width,
        scaleY = c.height / rect.height;

    return {
        x: (e.clientX - rect.left) * scaleX,
        y: (e.clientY - rect.top) * scaleY
    }
}

function mouseMoved(e) {
    ctx.save();
    ctx.beginPath();

  
    let mousepos = getMousePos(e);
    ctx.clearRect(0,0, c.width, c.height)

    ctx.moveTo(0, 0);
    ctx.lineTo(mousepos.x, mousepos.y);
    
    ctx.moveTo(mousepos.x, 0);
    ctx.lineTo(mousepos.x, mousepos.y);

    ctx.moveTo(0 ,mousepos.y);
    ctx.lineTo(mousepos.x, mousepos.y);

    ctx.closePath(); 
    ctx.stroke();
    ctx.restore();
}
informationIcon.addEventListener("mouseenter", e => {
    ctx.clearRect(0,0, c.width, c.height)
})
informationIcon.addEventListener("click", e => {
    information.style.display = "flex";
    layout.style.display = "flex";
})
closeBtn.addEventListener("click", e => {
    information.style.display = "none";
    layout.style.display = "none";
})