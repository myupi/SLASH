const levelSection = document.getElementById("level");
const buttonsLvl = document.querySelectorAll(".level-btn");

buttonsLvl.forEach((button) => {
  button.addEventListener("click", (e) => {
    e.preventDefault();
    let level = e.target.dataset.id;
    if (level == "easy") {
      localStorage.setItem("level", level);
      location.href = "../game.html";
    } else if (level == "medium") {
      localStorage.setItem("level", level);
      location.href = "../game.html";
    } else {
      localStorage.setItem("level", level);
      location.href = "../game.html";
    }

    levelSection.classList.add("animation");
    setTimeout(() => {
      levelSection.classList.add("d-none");
    }, 1000);
  });
});

const gameSection = document.getElementById("game");
buttonsLvl.forEach((button) => {
  button.addEventListener("click", (e) => {
    e.preventDefault();
    levelSection.classList.add("levelAnimation");
    setTimeout(() => {
      levelSection.classList.add("d-none");
    }, 1000);
    gameSection.classList.remove("d-none");
    gameSection.classList.add("gameAnimation");
  });
});
