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