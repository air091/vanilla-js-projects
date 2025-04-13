const btns = document.querySelectorAll(".tab-btn");
const btnContainer = document.querySelector(".article")
const contents = document.querySelectorAll(".content")

const toggleBtns = event => {
    const id = event.target.dataset.id;
    if (id) {
        btns.forEach((btn) => {
            btn.classList.remove("active");
        });
        event.target.classList.add("active");
        contents.forEach((content) => {
            content.classList.remove("active");
        });
        document.getElementById(id).classList.add("active");
    }
}