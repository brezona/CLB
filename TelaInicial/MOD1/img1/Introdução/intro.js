function mudar() {
    const html = document.documentElement //no HTML, o documento vai acessar todos os elementos de documento
  
    //Se na lista de classe no html conter claro, vai remover a classe claro
    if (html.classList.contains("claro")) {
      html.classList.remove("claro")
    }
    //Senão conter claro na lista de classe do html, vai adicionar a classe claro
    else {
      html.classList.add("claro")
    }
}