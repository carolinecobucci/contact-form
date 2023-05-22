const form = document.getElementById("form");
const checkboxes = document.querySelectorAll("input[type=checkbox]");
const username = document.getElementById("username");
const email = document.getElementById("email");
const message = document.getElementById("message");
const submitButton = document.getElementById("submitButton");
const checkboxError = document.getElementById("checkbox-error-msg");
const usernameError = document.getElementById("error-name");
const emailError = document.getElementById("error-email");
const messageError = document.getElementById("error-message");

const errors = {
  "checkbox-error": false,
  "name-error": false,
  "email-error": false,
  "message-error": false,
};

function areCheckboxesSelected(checkboxes) {
  const checkedCheckboxes = [];

  for (let i = 0; i < checkboxes.length; i++) {
    if (checkboxes[i].checked) {
      checkedCheckboxes.push(checkboxes[i]);
    }
  }

  return checkedCheckboxes.length > 0;
}

function getCheckboxesValues() {
  const checkboxesValues = [];

  for (let i = 0; i < checkboxes.length; i++) {
    if (checkboxes[i].checked) {
      checkboxesValues.push(checkboxes[i].value);
    }
  }

  return checkboxesValues;
}

function isUsernameValid(username) {
  const usernameRegex = new RegExp(/\b\w+\b(?:\s+\b\w+\b)+/);
  return usernameRegex.test(username);
}

function isEmailValid(email) {
  const emailRegex = new RegExp(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]{2,}$/);
  return emailRegex.test(email);
}

function checkError() {
  const booleanArray = Object.values(errors);
  const errorArray = booleanArray.filter((booleanValue) => booleanValue);

  return errorArray.length > 0;
}

function setError() {
  if (!areCheckboxesSelected(checkboxes)) {
    errors["checkbox-error"] = true;
  } else errors["checkbox-error"] = false;

  if (username.value === "" || !isUsernameValid(username.value)) {
    errors["name-error"] = true;
  } else errors["name-error"] = false;

  if (email.value === "" || !isEmailValid(email.value)) {
    errors["email-error"] = true;
  } else errors["email-error"] = false;

  if (message.value === "" || message.value.length < 20) {
    errors["message-error"] = true;
  } else errors["message-error"] = false;

  if (errors["checkbox-error"]) checkboxError.classList.remove("checkbox-error");
  if (errors["name-error"]) usernameError.classList.remove("name-error");
  if (errors["email-error"]) emailError.classList.remove("email-error");
  if (errors["message-error"]) messageError.classList.remove("message-error");

  if (!errors["checkbox-error"]) checkboxError.classList.add("checkbox-error");
  if (!errors["name-error"]) usernameError.classList.add("name-error");
  if (!errors["email-error"]) emailError.classList.add("email-error");
  if (!errors["message-error"]) messageError.classList.add("message-error");
}

form.addEventListener("input", function () {
  let allFieldsFilled = true;

  for (let i = 0; i < form.elements.length; i++) {
    const field = form.elements[i];

    if (checkError()) setError();

    if (field.type !== "submit" && (field.value === "" || !areCheckboxesSelected(checkboxes))) {
      allFieldsFilled = false;
      break;
    }
  }

  submitButton.disabled = !allFieldsFilled;
});

form.addEventListener("submit", (event) => {
  event.preventDefault();

  setError();

  if (checkError()) return;

  const formData = {
    checkboxes: getCheckboxesValues(),
    username: username.value,
    email: email.value,
    message: message.value,
  };

  const jsonData = JSON.stringify(formData);

  localStorage.setItem("formData", jsonData);

  window.location.href = "submittedForm.html";
});
