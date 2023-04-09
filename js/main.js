const levelSection = document.getElementById("level");
const buttonsLvl = document.querySelectorAll(".level-btn");


buttonsLvl.forEach((button) => {
  button.addEventListener("click", (e) => {
    e.preventDefault();
    let level = e.target.dataset.id;
    if(level == "easy"){
        createBtn(easyLvl);
        timm()
    }else if(level == "medium"){
        createBtn(mediumLvl);
        timm()
    }else{
        createBtn(hardLvl);
        timm()
    }

    levelSection.classList.add("animation");
    setTimeout(() => {
      levelSection.classList.add("d-none");
    }, 1000);
     gameSection.classList.add("d-block");
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

const container = document.querySelector(".box");
const score = document.querySelector(".score");
const time = document.querySelector(".time");

function createBtn(arr) {
  arr.forEach((elem) => {
    let btn = document.createElement("button");

    btn.textContent = elem.uzbek;
    btn.dataset.id = elem.id;
    btn.setAttribute("class", "btn btn-danger random-element button");

    btn.style.zIndex = Math.floor(Math.random() * 100) + 1;
    btn.style.position = "absolute";
    btn.style.left = Math.random() * container.offsetWidth + "px";
    btn.style.top = Math.random() * container.offsetHeight + "px";

    container.appendChild(btn);
    setButtonPosition(btn);
  });

  arr.forEach((elem) => {
    let btn = document.createElement("button");

    btn.textContent = elem.english;
    btn.dataset.id = elem.id;
    btn.setAttribute("class", "btn btn-primary random-element button");

    btn.style.position = "absolute";
    btn.style.zIndex = Math.floor(Math.random() * 100) + 1;
    btn.style.left = Math.random() * container.offsetWidth + "px";
    btn.style.top = Math.random() * container.offsetHeight + "px";

    container.appendChild(btn);
    setButtonPosition(btn);
  });
}

function setButtonPosition(button) {
  const containerRect = container.getBoundingClientRect();
  const buttonRect = button.getBoundingClientRect();
  const buttonSize = 75; // Размер кнопки

  let top = getRandomInt(containerRect.height - buttonSize);
  let left = getRandomInt(containerRect.width - buttonSize);

  while (checkOverlap(top, left, buttonSize)) {
    top = getRandomInt(containerRect.height - buttonSize);
    left = getRandomInt(containerRect.width - buttonSize);
  }

  button.style.top = top + "px";
  button.style.left = left + "px";

  function checkOverlap(top, left, size) {
    const rect1 = { top, left, bottom: top + size, right: left + size };

    return Array.from(container.children)
      .filter((child) => child !== button && child.classList.contains("button"))
      .some((child) => {
        const rect2 = child.getBoundingClientRect();
        return (
          rect1.left < rect2.right &&
          rect1.right > rect2.left &&
          rect1.top < rect2.bottom &&
          rect1.bottom > rect2.top
        );
      });
  }

  if (
    top + buttonSize > containerRect.height ||
    left + buttonSize > containerRect.width
  ) {
    setButtonPosition(button);
  }
}

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

const buttons = document.querySelectorAll(".button");
let selectedButtons = [];
let dataid = "";

buttons.forEach((button) => {
  button.addEventListener("click", (evt) => {
    dataid = evt.target.dataset.id;
    console.log(dataid);
    selectedButtons.push(button);
    if (selectedButtons.length == 2) {
      if (selectedButtons[0] == selectedButtons[1]) {
        selectedButtons = [];
        console.log(selectedButtons);
      } else if (
        selectedButtons[0].dataset.id == dataid &&
        selectedButtons[1].dataset.id == dataid
      ) {
        selectedButtons.forEach((btn) => {
          btn.disabled = true;
          console.log(btn);
        });
        score.innerHTML++;
        selectedButtons = [];
      } else {
        selectedButtons = [];
        console.log(selectedButtons);
      }
    }
  });
});

function timm(){
    let timer = 20;
    let timmer = setInterval(() => {
  time.innerHTML = timer;
  console.log(123);
  timer--;
  if (timer == -1) {
    clearInterval(timmer);
  }
  if (timer == 4) {
    time.style.color = "red";
  }
}, 1000);

setTimeout(() => {
  container.innerHTML = null;
  alert("Vaqt tugadi!");
  time.style.color = "black";
}, 22000);
}

