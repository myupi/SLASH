const levelSection = document.getElementById("level");
const buttons = document.querySelectorAll(".level-btn");
const gameSection = document.getElementById("game");
buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    e.preventDefault();

    let level = e.target.dataset.id;

    localStorage.setItem("level", level);

    levelSection.classList.add("levelAnimation");
    setTimeout(() => {
      levelSection.classList.add("d-none");
    }, 1000);
    gameSection.classList.remove("d-none");
    gameSection.classList.add("gameAnimation");
  });
});
