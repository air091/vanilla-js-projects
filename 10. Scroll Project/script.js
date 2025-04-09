// ********** SET DATE **********
const date = document.getElementById("date");
date.textContent = new Date().getFullYear();

// ********** HEADER WHEN SCROLLED **********
const header = document.querySelector("header");
const links = document.querySelectorAll("header ul li a");


window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
        header.classList.add("scrolled");

        links.forEach(e => {
            e.classList.add("scrolled");
        });

    } else {
        header.classList.remove("scrolled");
        links.forEach(e => {
            e.classList.remove("scrolled");
        });
    }
});