//variável que acessa o ".fa-eye"
let mostrarSenha = document.querySelector('.fa-eye')
//tem duas opções de senha, mas só o primeiro funciona, pois o confirme senha tem outro ID
let mostrarConfirme = document.querySelector('#confirme')

let nome = document.querySelector('#nome')
let labelNome = document.querySelector('#labelNome')
let validNome = false //os campos de validação estão vazios; já começão vazios (false)

let email = document.querySelector('#email')
let labelEmail = document.querySelector('#labelEmail')
let validEmail = false

let usuario = document.querySelector('#usuario')
let labelUsuario = document.querySelector('#labelUsuario')
let validUsuario = false

let senha = document.querySelector('#senha')
let labelSenha = document.querySelector('#labelSenha')
let validSenha = false

let confirmarSenha = document.querySelector('#confirmarSenha')
let labelConfir = document.querySelector('#labelConfir')
let validConfirmarSenha = false

let msgDeErro = document.querySelector('#msgDeErro')
let msgSucesso = document.querySelector('#msgSucesso')

const servidor = 'devcursoclb@gmail.com';


// "keyup" quer dizer que quando o clique do mouse sair de "nome" vai executar a função
nome.addEventListener('keyup', ()=> {
    // se o tamanho de nome for igual ou menor que 2, a label será vermelha
    if(nome.value.length <= 2) {
        labelNome.setAttribute('style', 'color: red')
        nome.setAttribute('style', 'border-color: red')

        labelNome.innerHTML = '*Insira no mínimo 3 caracteres'
        validNome = false
    }
    // se o tamanho de nome não for igual ou menor que 2, a label será verde
    else {
        labelNome.setAttribute('style', 'color: #00bb00')
        nome.setAttribute('style', 'border-color: #00bb00')

        labelNome.innerHTML = 'Nome Completo'
    }
    validNome = true
})
email.addEventListener('keyup', ()=> {
    if(email.value.length < 2) {
        labelEmail.setAttribute('style', 'color: red')
        email.setAttribute('style', 'border-color: red')

        labelEmail.innerHTML = '*Coloque 3 digitos ou mais'
        validEmail = false
    }
    else {
        labelEmail.setAttribute('style', 'color: #00bb00')
        email.setAttribute('style', 'border-color: #00bb00')

        labelEmail.innerHTML = 'Email'
    }
    validEmail = true
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
confirmarSenha.addEventListener('keyup', ()=> {
    if(senha.value != confirmarSenha.value) {
        labelConfir.setAttribute('style', 'color: red')
        confirmarSenha.setAttribute('style', 'border-color: red')

        labelConfir.innerHTML = '*Senhas são diferentes'
        validConfirmarSenha = false
    }
    else {
        labelConfir.setAttribute('style', 'color: #00bb00')
        confirmarSenha.setAttribute('style', 'border-color: #00bb00')

        labelConfir.innerHTML = 'Confirmar Senha'
        validConfirmarSenha = true
    }
})


function cadastrar() {
    if(validNome&&validEmail&&validUsuario&&validSenha&&validConfirmarSenha) {

        let listaUsuarios = JSON.parse(localStorage.getItem('listaUsuarios') || '[]')
        listaUsuarios.push(
            {
                nomelista: nome.value,
                emailLista: email.value,
                usuariolista: usuario.value,
                senhalista: senha.value,
            }
        )
        localStorage.setItem('listaUsuarios', JSON.stringify(listaUsuarios))
        // fetch(servidor, {
        //     method: 'POST',
        //     headers: {
        //         'content-type': 'aplication/json'
        //     },
        //     body: JSON.stringify(listaUsuarios)
        // })


        msgSucesso.setAttribute('style', 'display: block')
        msgSucesso.innerHTML = '<strong> Suas informações serão verificadas, e poderá demorar alguns minutos até horas <strong>'
        msgDeErro.setAttribute('style', 'display: none')

    
        setTimeout(() => {
            window.location.href = './index.html'
        }, 4000)
    }
    else {
        msgDeErro.setAttribute('style', 'display: block')
        msgDeErro.innerHTML = '<strong> Tem algo errado <strong>'
        msgSucesso.setAttribute('style', 'display: none')
    }
}



//quando a variável for clicada vai adicionar um evento
mostrarSenha.addEventListener('click', ()=> {
    //se no 'id senha' for do tipo senha vai mudar para texto, senão vai mudar para senha
    let inputSenha = document.querySelector('#senha')

    //"get" pega um atributo
    if(inputSenha.getAttribute('type') == 'password') {
    //"set" atribui um atributo  
    inputSenha.setAttribute ('type', 'text')
} else {
    inputSenha.setAttribute ('type', 'password')
}})


mostrarConfirme.addEventListener('click', ()=> {
    let inputConfirme = document.querySelector('#confirmarSenha')

    if(inputConfirme.getAttribute('type') == 'password') {
    inputConfirme.setAttribute ('type', 'text')
} else {
    inputConfirme.setAttribute ('type', 'password')
}})
