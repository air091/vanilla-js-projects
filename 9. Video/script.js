const video = document.querySelector(".video-container");
const switchBtn = document.querySelector(".switch-btn");

switchBtn.addEventListener("click", function () {
    if (!switchBtn.classList.contains("slide")) {
        switchBtn.classList.add("slide");
        video.pause();
    } else {
        switchBtn.classList.remove("slide");
        video.play();
    }
});

