const $signin = document.querySelector("#signin");
const $signup = document.querySelector("#signup");
const $btnSignin = document.querySelector("#btnSignin");
const $btnSignup = document.querySelector("#btnSignup");

$btnSignin.addEventListener("click", openSignin);
$btnSignup.addEventListener("click", openSignup);

function openSignin() {
  $signin.style.display = "block";
  $signup.style.display = "none";
  $btnSignin.classList = "menu-link";
  $btnSignup.classList = "menu-link noselected";
}

function openSignup() {
  $signup.style.display = "block";
  $signin.style.display = "none";
  $btnSignup.classList = "menu-link";
  $btnSignin.classList = "menu-link noselected";
}
