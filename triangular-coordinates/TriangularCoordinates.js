const coordinates = document.querySelector(".coordinates");
const circle = document.querySelector(".circle");
const result = document.querySelector(".result");
const numbers = document.querySelectorAll("p");
coordinates.addEventListener("click", e => {
    circle.style.setProperty('--x', `${e.clientX}px`);
    circle.style.setProperty('--y', `${e.clientY}px`);
    const X = e.clientX / 37.936267;
    const Y = e.clientY / 37.936267;
    const hypotenuse = Math.sqrt(X ** 2 + Y ** 2);
    const sin = Math.round(Y / hypotenuse * 100) / 100;
    const cos = Math.round(X / hypotenuse * 100) / 100;
    const tan = Math.round(Y / X * 100) / 100;
    const cot = Math.round(X / Y * 100) / 100;
    result.innerHTML = `
    <h1>result</h1>
    <h2>sin: ${sin}</h2>
    <h2>cos: ${cos}</h2>
    <h2>tan: ${tan}</h2>
    <h2>cot: ${cot}</h2>`
})
coordinates.addEventListener("mousemove", e => {
    mouseMoved(e);
})
numbers.forEach(number => {
    if(number.innerHTML.toString().length == 2) {
        number.classList = "two-digit-numbers-x";
    }
})

var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
ctx.strokeStyle = "rgb(215, 215, 215)"

function getMousePos (evt) {
    var rect = c.getBoundingClientRect(),
        scaleX = c.width / c.width,
        scaleY = c.height / rect.height;

    return {
        x: (evt.clientX - rect.left) * scaleX,
        y: (evt.clientY - rect.top) * scaleY
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