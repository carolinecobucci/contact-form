const form = document.getElementById('form');
const checkboxes = document.querySelectorAll('input[type=checkbox]');
const username = document.getElementById('username');
const email = document.getElementById('email');
const message = document.getElementById('message');
const submit = document.querySelectorAll('input[type=submit]');

const checkboxError = document.getElementById('checkbox-error-msg');
const checkboxUsernameError = document.getElementById('checkbox-error-name');
const checkboxEmailError = document.getElementById('checkbox-error-email');
const checkboxMessageError = document.getElementById('checkbox-error-message');

// const errors = {
//     checkboxes: false,
//     username: false,
//     email: false,
//     message: false
// }

form.addEventListener('submit', (event) => {
    event.preventDefault()

    if (!areCheckboxesSelected(checkboxes)) {
        checkboxError.classList.remove('checkbox-error');
        return
    }

    checkboxError.classList.add('checkbox-error');

    if (username.value === '' || !isUsernameValid(username.value)) {
        checkboxUsernameError.classList.remove('name-error');
        return
    } 

    checkboxUsernameError.classList.add('name-error');

    if (email.value === '' || !isEmailValid(email.value)) {
        checkboxEmailError.classList.remove('email-error');
        return
    }

    checkboxEmailError.classList.add('email-error');

    if (message.value === '' || !message.length > 20) {
        checkboxMessageError.classList.remove('message-error');
        return
    }

    checkboxMessageError.classList.add('message-error');

    form.onsubmit();
})

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
    )
    return emailRegex.test(email);
}