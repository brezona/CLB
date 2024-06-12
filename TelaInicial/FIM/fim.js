function mudar() {
    const html = document.documentElement
  
    if (html.classList.contains("claro")) {
      html.classList.remove("claro")
    }
    else {
      html.classList.add("claro")
    }
}

let mostrarSenha = document.querySelector('.fa-eye')
let mostrarConfirme = document.querySelector('#confirme')

let nome = document.querySelector('#nome')
let labelNome = document.querySelector('#labelNome')
let validNome = false

let email = document.querySelector('#email')
let labelEmail = document.querySelector('#labelEmail')
let validEmail = false

let whats = document.querySelector('#whats')
let labelWhats = document.querySelector('#labelWhats')
let validWhats = false

let usuario = document.querySelector('#usuario')
let labelUsuario = document.querySelector('#labelUsuario')
let validUsuario = false

let senha = document.querySelector('#senha')
let labelSenha = document.querySelector('#labelSenha')
let validSenha = false

let msgDeErro = document.querySelector('#msgDeErro')
let msgSucesso = document.querySelector('#msgSucesso')


nome.addEventListener('keyup', ()=> {
    if(nome.value.length <= 2) {
        labelNome.setAttribute('style', 'color: red')
        nome.setAttribute('style', 'border-color: red')

        labelNome.innerHTML = '*Insira no mínimo 3 caracteres'
        validNome = false
    }
    else {
        labelNome.setAttribute('style', 'color: #00bb00')
        nome.setAttribute('style', 'border-color: #00bb00')

        labelNome.innerHTML = 'Nome Completo'
    }
    validNome = true
})
email.addEventListener('keyup', ()=> {
    let regexEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(!regexEmail.test(email.value)) {
        labelEmail.setAttribute('style', 'color: red')
        email.setAttribute('style', 'border-color: red')

        validEmail = false
    }
    else {
        labelEmail.setAttribute('style', 'color: #00bb00')
        email.setAttribute('style', 'border-color: #00bb00')
    }
    validEmail = true
})
whats.addEventListener('keyup', ()=> {
  let regexWhats = /^\+?[1-9]\d{1,14}$/;
  if(!regexWhats.test(whats.value)) {
      labelWhats.setAttribute('style', 'color: red')
      whats.setAttribute('style', 'border-color: red')

      validWhats = false
  }
  else {
      labelWhats.setAttribute('style', 'color: #00bb00')
      whats.setAttribute('style', 'border-color: #00bb00')
  }
  validWhats = true
})
usuario.addEventListener('keyup', ()=> {
    if(usuario.value.length < 1) {
        labelUsuario.setAttribute('style', 'color: red')
        usuario.setAttribute('style', 'border-color: red')

        labelUsuario.innerHTML = '*Crie seu Usuário'
        validUsuario = false
    }
    else {
        labelUsuario.setAttribute('style', 'color: #00bb00')
        usuario.setAttribute('style', 'border-color: #00bb00')

        labelUsuario.innerHTML = 'Usuário'
        validUsuario = true
    }
})
senha.addEventListener('keyup', ()=> {
    if(senha.value.length < 1) {
        labelSenha.setAttribute('style', 'color: red')
        senha.setAttribute('style', 'border-color: red')

        labelSenha.innerHTML = '*Coloque a senha'
        validSenha = false
    }
    else {
        labelSenha.setAttribute('style', 'color: #00bb00')
        senha.setAttribute('style', 'border-color: #00bb00')

        labelSenha.innerHTML = 'Senha'
        validSenha = true
    }
})


function certificado() {
    if(validNome&&validEmail&&validWhats&&validUsuario&&validSenha) {
        msgSucesso.setAttribute('style', 'display: block')
        msgSucesso.innerHTML = '<strong> Em breve você receberá uma mensagem <strong>'
        msgDeErro.setAttribute('style', 'display: none')
    }
    else {
        msgDeErro.setAttribute('style', 'display: block')
        msgDeErro.innerHTML = '<strong> Tem algo errado <strong>'
        msgSucesso.setAttribute('style', 'display: none')
    }
}


mostrarSenha.addEventListener('click', ()=> {
    let inputSenha = document.querySelector('#senha')

    if(inputSenha.getAttribute('type') == 'password') {
    inputSenha.setAttribute ('type', 'text')
} else {
    inputSenha.setAttribute ('type', 'password')
}})