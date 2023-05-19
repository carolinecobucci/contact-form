const form = document.getElementById("form");
const checkboxes = document.querySelectorAll("input[type=checkbox]");
const username = document.getElementById("username");
const email = document.getElementById("email");
const message = document.getElementById("message");
const submit = document.querySelectorAll("input[type=submit]");

const checkboxError = document.getElementById("checkbox-error-msg");
const checkboxUsernameError = document.getElementById("checkbox-error-name");
const checkboxEmailError = document.getElementById("checkbox-error-email");
const checkboxMessageError = document.getElementById("checkbox-error-message");

const errors = {
  "checkbox-error": false,
  "name-error": false,
  "email-error": false,
  "message-error": false,
};

form.addEventListener("submit", (event) => {
  event.preventDefault();

  if (!areCheckboxesSelected(checkboxes)) {
    errors["checkbox-error"] = true;
  } else errors["checkbox-error"] = false;

  if (username.value === "" || !isUsernameValid(username.value)) {
    errors["name-error"] = true;
  } else errors["name-error"] = false;

  if (email.value === "" || !isEmailValid(email.value)) {
    errors["email-error"] = true;
  } else errors["email-error"] = false;

  if (message.value === "" || !message.length > 20) {
    errors["message-error"] = true;
  } else errors["message-error"] = false;

  if (errors["checkbox-error"])
    checkboxError.classList.remove("checkbox-error");
  if (errors["name-error"])
    checkboxUsernameError.classList.remove("name-error");
  if (errors["email-error"]) checkboxEmailError.classList.remove("email-error");
  if (errors["message-error"])
    checkboxMessageError.classList.remove("message-error");

  if (!errors["checkbox-error"]) checkboxError.classList.add("checkbox-error");
  if (!errors["name-error"]) checkboxUsernameError.classList.add("name-error");
  if (!errors["email-error"]) checkboxEmailError.classList.add("email-error");
  if (!errors["message-error"])
    checkboxMessageError.classList.add("message-error");

  const booleanArray = Object.values(errors);
  const errorArray = booleanArray.filter((booleanValue) => booleanValue);

  if (errorArray.length > 0) {
    return;
  }

  form.onsubmit();
});

function areCheckboxesSelected(checkboxes) {
  const checkedCheckboxes = [];

  for (let i = 0; i < checkboxes.length; i++) {
    if (checkboxes[i].checked) {
      checkedCheckboxes.push(checkboxes[i]);
    }
  }

  return checkedCheckboxes.length > 0;
}

function isUsernameValid(username) {
  const words = username.split(" ");
  return words.length >= 2;
}

function isEmailValid(email) {
  const emailRegex = new RegExp(
    /^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]{2,}$/
  );
  return emailRegex.test(email);
}
