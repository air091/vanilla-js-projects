let menu = document.getElementsByClassName("bx-menu")[0];
let links = document.getElementById("links");

menu.addEventListener("click", function () {
    if (window.matchMedia("(max-width: 767px)").matches) {
        links.classList.toggle("active");
    }
});


