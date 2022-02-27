const form = document.getElementById("signup-form");
const firstName = document.getElementById("firstname");
const firstNameError = document.getElementById("firstname-error");
const lastName = document.getElementById("lastname");
const lastNameError = document.getElementById("lastname-error");
const email = document.getElementById("email");
const userEmail = document.getElementById("email").value;
const emailError = document.getElementById("email-error");
const password = document.getElementById("password");
const passwordError = document.getElementById("password-error");
const pattern = /^[^ ]+@[^ ]+\.[A-Z]{2,3}$/;

form.addEventListener("submit", validateInput);

function validateInput(event) {
  event.preventDefault();
  validateFirstName();
  validateLastName();
  validateEmail();
  validatePassword();
}

function validateFirstName() {
  if (firstName.value) {
  } else {
    firstName.classList.add("error");
    firstNameError.innerHTML = "First Name cannot be empty";
  }
}

function validateEmail() {
  if (userEmail.match(pattern)) {
  } else {
    emailError.innerHTML = "First Name cannot be empty";
  }
}

function validateLastName() {
  if (lastName.value) {
  } else {
    lastName.classList.add("error");
    lastNameError.innerHTML = "Last Name cannot be empty";
  }
}

function validatePassword() {
  if ((password.value = "")) {
    password.classList.add("error");
    passwordError.innerHTML = "Password cannot be empty";
  }
}
