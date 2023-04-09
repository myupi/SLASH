const levelSection = document.getElementById("level");
const buttonsLvl = document.querySelectorAll(".level-btn");


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
    }, 1000);
  });
});

buttonsLvl.forEach((button) => {
  button.addEventListener("click", (e) => {
    e.preventDefault();
    levelSection.classList.add("levelAnimation");
    setTimeout(() => {
      levelSection.classList.add("d-none");
    }, 1000);
  });
});

