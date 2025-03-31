document.addEventListener("DOMContentLoaded", function () {
    let appContainer = document.getElementsByClassName("app")[0];
    let button = document.getElementsByTagName("button")[0];

    button.addEventListener("click", function () {
        // RGB
        appContainer.style.backgroundColor = getRandomRGBColor();
    });

    function getRandomRGBColor() {
        let r = Math.floor(Math.random() * 256);
        let g = Math.floor(Math.random() * 256);
        let b = Math.floor(Math.random() * 256);
        return `rgb(${r}, ${g}, ${b})`;
    }

    appContainer.style.backgroundColor = getRandomRGBColor();

});