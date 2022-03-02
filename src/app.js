const form = document.getElementById("signup-form");
const firstName = document.getElementById("firstname");
const firstNameError = document.getElementById("firstname-error");
const lastName = document.getElementById("lastname");
const lastNameError = document.getElementById("lastname-error");
const email = document.getElementById("email");
const emailError = document.getElementById("email-error");
const password = document.getElementById("password");
const passwordError = document.getElementById("password-error");
const filter =
  /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;

form.addEventListener("submit", validateInput);

function validateInput(event) {
  event.preventDefault();
  validateFirstName();
  validateLastName();
  validateEmail();
  validatePassword();
}

function validateFirstName() {
  if (firstName.value === "") {
    firstName.classList.add("error");
    firstNameError.innerHTML = "First Name cannot be empty";
  }
}

function validateLastName() {
  if (lastName.value === "") {
    lastName.classList.add("error");
    lastNameError.innerHTML = "Last Name cannot be empty";
  }
}

function validateEmail() {
  if (email.value.match(filter)) {
  } else {
    email.classList.add("error");
    emailError.innerHTML = "Looks like this is not an email";
  }
}

function validatePassword() {
  if (password.value.length === 0) {
    password.classList.add("error");
    passwordError.innerHTML = "Password cannot be empty";
  }
}
