const form = document.getElementById('form')
const username = document.getElementById('username')
const email = document.getElementById('email')
const message = document.getElementById('message')

form.addEventListener('submit', (event) => {
    event.preventDefault()

    // verificar se um dos botões está selecionado

    if (username.value === '' || !isUsernameValid(username.value)) {
        // colocar a classe error no input
        console.log("erro no nome!");
        return
    } 

    if (email.value === '' || !isEmailValid(email.value)) {
        // colocar a classe error no input
        console.log("erro no email!");
        return
    }

    if (username.value === '' || !message.length > 20) {
        // colocar a classe error no input
        console.log("erro na mensagems!")
        return
    }

    form.onsubmit();
})

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