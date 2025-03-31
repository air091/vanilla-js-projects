document.addEventListener("DOMContentLoaded", function () {
    const numberCount = document.getElementById("number");
    const decButton = document.getElementById("decrease");
    const resetButton = document.getElementById("reset");
    const incButton = document.getElementById("increase");

    let count = 0;

    decButton.addEventListener("click", function () {
        count--;
        numberCount.textContent = count;
    });

    resetButton.addEventListener("click", function () {
        count = 0;
        numberCount.textContent = count;
    });

    incButton.addEventListener("click", function () {
        count++;
        numberCount.textContent = count;
    });

});