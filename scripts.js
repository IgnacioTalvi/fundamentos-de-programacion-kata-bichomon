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
