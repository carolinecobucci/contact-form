const form = document.getElementById('form')
const username = document.getElementById('username')
const email = document.getElementById('email')
const message = document.getElementById('message')

form.addEventListener('submit', (event) => {
    event.preventDefault()

    // verificar se um dos botões está selecionado


    // verificar se o input nome tem pelo menos dois valores
    if (username.value === '') {
        // colocar a classe error no input
        return
    }

    // verificar se o email está na forma correta
    if (email.value === '' || !isEmailValid(email.value)) {
        // colocar a classe error no input
        return
    }

    // a mensagem precisa ter no mínimo 20 letras
    if (username.value === '' || message.length > 20) {
        // colocar a classe error no input
        return
    }

    form.onsubmit();
})

function isEmailValid(email) {
    const emailRegex = new RegExp(
        '/^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]{2,}$/'
    )

    if(emailRegex.test(email)) {
        return true
    }

    return false
}