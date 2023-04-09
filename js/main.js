const levelSection = document.getElementById('level');
const buttons = document.querySelectorAll(".level-btn");

buttons.forEach((button) => {
    button.addEventListener("click", (e) => {
        e.preventDefault();
        let level = e.target.dataset.id;
        levelSection.classList.add("animation");
        setTimeout(() => {
            levelSection.classList.add("d-none");
        }, 1000);
    });
});
