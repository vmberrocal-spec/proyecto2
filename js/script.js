document.addEventListener("DOMContentLoaded", function(){
  const boton = document.getElementById("mi-boton");
  boton.addEventListener("click", changeTitle);
});

function changeTitle(){
  const title = document.getElementById("main-title");
  title.textContent = "Aprendimos GitHub";
}
