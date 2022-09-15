import "./styles.css";

let btnTabla = document.getElementById("btnTabla");
let tabla1 = document.getElementById("tabla");
let limite1 = document.getElementById("limite");
let resultado: number = 0;

btnTabla.addEventListener("click", () => {
  let tabla: number = tabla1.value;
  let limite: number = limite1.value;
  for (let i = 1; i <= limite; i++) {
    resultado = i * tabla;
    //console.log(tabla);
    //console.log(limite);
    console.log(resultado);
  }
});
