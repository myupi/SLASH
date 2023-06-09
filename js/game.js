const container = document.querySelector(".container");
const score = document.querySelector(".score");
const time = document.querySelector(".time");
const startBtn = document.getElementById("start");
const box = document.querySelector(".boxxx");
const gamee = document.getElementById("gamee");
gamee.classList.add("gameAnimation");

let userId = localStorage.getItem("id");
let user = JSON.parse(localStorage.getItem("login"));
let findedUser = user.find((e) => e.id == userId);
let parsed = localStorage.getItem("level");

setTimeout(() => {
  box.classList.add("opacity-0");

  startBtn.addEventListener("click", (e) => {
    e.preventDefault();
    box.classList.remove("opacity-0");
    box.classList.add("gameAnimation");
    timm();
    startBtn.disabled = true;
  });
  if (parsed == "easy") {
    createBtn(easyLvl);
  } else if (parsed == "medium") {
    createBtn(mediumLvl);
  } else {
    createBtn(hardLvl);
  }
  function createBtn(arr) {
    arr.forEach((elem) => {
      let btn = document.createElement("button");
      btn.textContent = elem.uzbek;
      btn.dataset.id = elem.id;
      btn.setAttribute("class", "button-20 random-element button");
      btn.style.zIndex = Math.floor(Math.random() * 100) + 1;
      btn.style.position = "absolute";
      btn.style.left = Math.random() * container.offsetWidth + "px";
      btn.style.top = Math.random() * container.offsetHeight + "px";
      let randomColor = Math.floor(Math.random() * 16777215).toString(16);
      btn.style.backgroundColor = "#" + randomColor;
      container.appendChild(btn);
      setButtonPosition(btn);
    });

    arr.forEach((elem) => {
      let btn = document.createElement("button");
      btn.textContent = elem.english;
      btn.dataset.id = elem.id;
      btn.setAttribute("class", "button-19  random-element button");
      btn.style.position = "absolute";
      btn.style.zIndex = Math.floor(Math.random() * 100) + 1;
      btn.style.left = Math.random() * container.offsetWidth + "px";
      btn.style.top = Math.random() * container.offsetHeight + "px";

      let randomColor = Math.floor(Math.random() * 16777215).toString(16);
      btn.style.backgroundColor = "#" + randomColor;

      container.appendChild(btn);
      setButtonPosition(btn);
    });
  }

  function setButtonPosition(button) {
    const containerRect = container.getBoundingClientRect();
    const buttonRect = button.getBoundingClientRect();
    const buttonSize = 75;

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
        .filter(
          (child) => child !== button && child.classList.contains("button")
        )
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
  const confetti = document.querySelectorAll(".confetti");
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
            //
            confetti.forEach((con) => {
              con.classList.add("con-animation");
            });
          });
          setInterval(() => {
            confetti.forEach((con) => {
              con.classList.remove("con-animation");
            });
          }, 1000);
          setInterval(() => {
            confetti.forEach((con) => {
              con.classList.remove("con-animation");
            });
          }, 3000);
          score.innerHTML++;

          selectedButtons = [];
        } else {
          selectedButtons = [];
          console.log(selectedButtons);
        }
      }
    });
  });

  function timm() {
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
      let confirmBtn = confirm("Do you want to play again ?");
      score.innerHTML = 0;
      if (confirmBtn) {
        if (parsed == "easy") {
          createBtn(easyLvl);
        } else if (parsed == "medium") {
          createBtn(mediumLvl);
        } else {
          createBtn(hardLvl);
        }
        timm();
      } else {
        location.href = "../main.html";
      }
      startBtn.disabled = false;
      time.style.color = "black";
    }, 22000);
  }
}, 2000);

window.addEventListener("beforeunload", () => {
  localStorage.removeItem("level");
});
