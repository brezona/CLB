function mudar() {
    const html = document.documentElement
  
    if (html.classList.contains("claro")) {
      html.classList.remove("claro")
    }
    else {
      html.classList.add("claro")
    }
}

//variável que acessa o ".fa-eye"
let mostrarSenha = document.querySelector('.fa-eye')

mostrarSenha.addEventListener('click', ()=> {
    let inputSenha = document.querySelector('#senha')

    if(inputSenha.getAttribute('type') == 'password') {
    inputSenha.setAttribute ('type', 'text')
} else {
    inputSenha.setAttribute ('type', 'password')
}})