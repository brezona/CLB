function mudar() {
    const html = document.documentElement
  
    if (html.classList.contains("claro")) {
      html.classList.remove("claro")
    }
    else {
      html.classList.add("claro")
    }
}