//variável que acessa o ".fa-eye"
let mostrarSenha = document.querySelector('.fa-eye')

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

function entrar() {
    let usuario = document.querySelector('#usuario')
    let labelUsuario = document.querySelector('#labelUsuario')

    let senha = document.querySelector('#senha')
    let labelSenha = document.querySelector('#labelSenha')

    let msgDeErro = document.querySelector('#msgDeErro')
    let listaUsuarios = []

    let validarUser = {
        nome: 'null',
        usuario: 'null',
        senha: 'null',
    }
    
    listaUsuarios = JSON.parse(localStorage.getItem('listaUsuarios')) 
    
    listaUsuarios?.forEach((item) => {
        if(usuario.value == item.usuariolista && senha.value == item.senhalista){
            validarUser = {
                nome: item.nome,
                usuario: item.usuariolista,
                senha: item.senhalista,
            }
        }
    })

    if (usuario.value == validarUser.usuario && senha.value == validarUser.senha) {
        window.location.href = './TelaInicial/Inicial.html'

        let token = Math.random().toString(16).substring(2) + Math.random().toString(16).substring(2)
        localStorage.setItem('token', token)
    }
    else {
        labelUsuario.setAttribute('style', 'color: red')
        usuario.setAttribute('style', 'border-color: red')
        labelSenha.setAttribute('style', 'color: red')
        senha.setAttribute('style', 'border-color: red')

        msgDeErro.setAttribute('style', 'display: block')
        msgDeErro.innerHTML = '<strong> Usuário ou Senha incorreta <strong>'
        usuario.focus() //quando errar, vai para o usuário novamente
    }
}