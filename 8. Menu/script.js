const breakfastBtn = document.getElementById("breakfast");
const listItems = document.querySelectorAll(".menu-list-container li");

function getAll() {
    listItems.forEach(li => {
        li.style.removeProperty("display");
    })
}

function getBreakfast() {
    listItems.forEach(li => {
        const item = li.querySelector(".menu-item");
        const isBreakfast = item && item.dataset.id == "breakfast";
        li.style.display = isBreakfast ? "" : "none";
    });
}

function getLunch() {
    listItems.forEach(li => {
        const item = li.querySelector(".menu-item");
        const isLunch = item && item.dataset.id == "lunch";
        li.style.display = isLunch ? "" : "none";
    });
}

function getShakes() {
    listItems.forEach(li => {
        const item = li.querySelector(".menu-item");
        const isShakes = item && item.dataset.id == "shakes";
        li.style.display = isShakes ? "" : "none";
    })
}

function getDinner() {
    listItems.forEach(li => {
        const item = li.querySelector(".menu-item");
        const isDinner = item && item.dataset.id == "dinner";
        li.style.display = isDinner ? "" : "none";
    })
}