const loginForm = document.getElementById("loginForm");
const inputLogin = document.getElementById("inputLogin");
const inputPassword = document.getElementById("inputPassword");
const togglePassword = document.querySelector("#togglePassword");
const loginBtn = document.querySelector(".logbtn");
const signBtn = document.querySelector(".sigbtn");

console.log(loginBtn, signBtn);

togglePassword.addEventListener("click", function () {
  const type =
    inputPassword.getAttribute("type") === "password" ? "text" : "password";
  inputPassword.setAttribute("type", type);
  this.classList.toggle("bi-eye");
});

let userInformation = JSON.parse(localStorage.getItem("login")) || [];

signBtn.addEventListener("click", (evt) => {
  evt.preventDefault();
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
  console.log(obj.id);
  let js = obj.id;
  localStorage.setItem("login", JSON.stringify(userInformation));
  localStorage.setItem("id", js);
  location.href = "../main.html";
});

loginBtn.addEventListener("click", (evt) => {
  evt.preventDefault();
  let inputLoginValue = inputLogin.value;
  let inputPasswordValue = inputPassword.value;

  let find = userInformation.find((user) => {
    return (
      user.username == inputLoginValue && user.password == inputPasswordValue
    );
  });
  if (find) {
    inputLogin.value = "";
    inputPassword.value = "";
    localStorage.setItem("id", find.id);
    location.href = "../main.html";
  } else {
    inputLogin.value = "";
    inputPassword.value = "";
    alert("Bunaqa foydalanuvchi topilmadi yoki malumotni hato kirittingiz");
  }
});
