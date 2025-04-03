const questionBtns = document.querySelectorAll(".question-btn");
const questionText = document.getElementsByClassName("question-text")[0];
const showQuestionIcon = document.getElementsByClassName("bi")[0];

window.addEventListener("DOMContentLoaded", function () {
    questionBtns.forEach((btn) => {
        btn.addEventListener("click", function () {
            const questionText = this.parentElement.nextElementSibling;
            const icon = this.querySelector("i");

            questionText.classList.toggle("show-text");

            if (questionText.classList.contains("show-text")) {
                icon.classList.replace("bi-plus", "bi-dash");
            } else {
                icon.classList.replace("bi-dash", "bi-plus");
            }
        });
    });

});

console.log(typeof questionBtns);