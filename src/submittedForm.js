const checkboxSelection = document.getElementById("checkbox-selection");
const username = document.getElementById("username");
const email = document.getElementById("email");
const message = document.getElementById("message");

let formData = localStorage.getItem("formData");

formData = JSON.parse(formData);

function getChosenCheckboxes() {
  let checkboxesText = "";

  if (formData.checkboxes.length > 1) {
    checkboxesText = formData.checkboxes.join(", ");
  } else {
    return formData.checkboxes[0];
  }

  return checkboxesText;
}

checkboxSelection.innerText = getChosenCheckboxes();
username.innerText = formData.username;
email.innerText = formData.email;
message.innerText = formData.message;
