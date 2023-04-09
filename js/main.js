const levelSection = document.getElementById("level");
const buttonsLvl = document.querySelectorAll(".level-btn");
const gamee = document.getElementById("gamee");

buttonsLvl.forEach((button) => {
  button.addEventListener("click", (e) => {
    e.preventDefault();
    let level = e.target.dataset.id;
    levelSection.classList.add("levelAnimation");
    setTimeout(() => {
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
      gamee.classList.add("gameAnimation");
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
