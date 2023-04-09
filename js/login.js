const loginForm = document.getElementById("loginForm");
const inputLogin = document.getElementById("inputLogin");
const inputPassword = document.getElementById("inputPassword");
const togglePassword = document.querySelector("#togglePassword");

togglePassword.addEventListener("click", function () {
  const type =
    inputPassword.getAttribute("type") === "password" ? "text" : "password";
  inputPassword.setAttribute("type", type);
  this.classList.toggle("bi-eye");
});

let userInformation = JSON.parse(localStorage.getItem("login")) || [];

loginForm.addEventListener("submit", function () {
  let inputLoginValue = inputLogin.value;
  let inputPasswordValue = inputPassword.value;
  let obj = {
    id: userInformation.length + 1,
    username: inputLoginValue,
    password: inputPasswordValue,
    levels: {
      easy: [],
      medium: [],
      hard: [],
    },
  };
  userInformation.push(obj);
  localStorage.setItem("login", JSON.stringify(userInformation));
  location.href = "main.html";
});
