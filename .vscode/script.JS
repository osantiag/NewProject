function toggleMode () {
 const html = document.documentElement
 html.classList.toggle("light")
 
// pegar a tag img 

const img = document.querySelector("#profile img")

//substituir a imagem

 if (html.classList.contains ("light")) {

  //se tiver light mode, adicionar a imagem light

  img.setAttribute("src", "./assets/foto 2.jpeg")
 } else {

  //se tiver sem light mode, manter a imagem normal

  img.setAttribute("src", "./assets/Captura de tela 2026-02-17 203902.png")
 }
}