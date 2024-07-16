import "./styles.css";
import myImage from "./images/imagen.jpg"

const miArray = [1, 2, 3, 4, 5, 6]
const nuevoArray = miArray.map(item => item * 3);
console.log(nuevoArray);

const saludo = () => {
  console.log("¡Hola, mundo!");
};

saludo();

const img = document.createElement("img");
img.src = myImage;
document.body.appendChild(img);
