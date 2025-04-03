document.addEventListener("DOMContentLoaded", function () {
    const openModalBtn = document.getElementsByClassName("btn-modal")[0];
    const modal = document.getElementsByClassName("modal-overlay")[0];
    const closeModalBtn = document.getElementsByClassName("close-btn")[0];

    openModalBtn.addEventListener("click", openModal);
    closeModalBtn.addEventListener("click", closeModal);

    function openModal() {
        modal.classList.add("modal-open");
    }
    function closeModal() {
        modal.classList.remove("modal-open");
    }
});

