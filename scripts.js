console.log(document.title);

// Ejercicio 1 - Cambia el título "Generation 1 Pokémon" por "Generasión 1 Pokimon".
const titulo = document.getElementById("gen-1");
titulo.innerHTML = "Generasión 1 Pokimon";

// Ejercicio 2 - Cambia el color de fondo de la primera generación de Pokimon.
const fondoGeneracionUno = document.getElementsByClassName(
  "infocard-list infocard-list-pkmn-lg"
);

fondoGeneracionUno[0].style.backgroundColor = "yellow";

// Ejercicio 3 - Imprime por consola la URL de la página.
console.log(document.URL);

// Ejercicio 4 - Imprime por consola el dominio de la página.
console.log(window.location.hostname);

// Ejercicio 5 - Imprime todos los nodos de imagen.
console.log(document.querySelectorAll("img"));

// Ejercicio 6 - Sustituye el atributo "src" de todas las imágenes por este "https://media.giphy.com/media/2v170e71aanfi/giphy.gif"
const allImages = document.querySelectorAll("img");

for (let i = 0; i < allImages.length; i++) {
  allImages[i].src = "https://media.giphy.com/media/2v170e71aanfi/giphy.gif";
}

console.log(allImages.src);
