const menuIcon = document.querySelector("#check");
const sideMenu = document.querySelector(".sideMenu");

menuIcon.addEventListener("click", e => {
    if (menuIcon.checked == true){
        sideMenu.style.left = "0";
    } else {
        sideMenu.style.left = "-100%";
    }
});