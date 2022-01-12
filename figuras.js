//Codigo del cuadrado
console.group("Cuadrados");

const ladocuadrado = 5;
console.log("Los lados del cuadrado miden:" + ladocuadrado + "cm");

const perimetroCuadrado = ladocuadrado * 4;
console.log("El perimetro del cuadrado mide:" + perimetroCuadrado + "cm");

const areacuadrado = ladocuadrado * ladocuadrado;
console.log("El área del cuadrado mide:" + areacuadrado + "cm ala 2");

console.groupEnd();

//Codigo del triángulo

console.group("Triángulos");

const ladotriangulo1 = 6;
const ladotriangulo2 = 6;
const basetriangulo = 4;


console.log("Los lados del triángulo miden: " 
+ ladotriangulo1 
+ "cm," 
+ ladotriangulo2 
+ "cm," 
+ basetriangulo 
+ "cm."
);

const alturatriangulo = 5.5;
console.log("La altura del triángulo mide: " + alturatriangulo + "cm");

const perimetroTriángulo = ladotriangulo1 * 2 + basetriangulo ;
console.log("El perimetro del triángulo mide: " + perimetroTriángulo + "cm");

const areatriangulo = (basetriangulo * alturatriangulo) / 2;
console.log("El área del triángulo mide: " + areatriangulo + "cm ala 2");

console.groupEnd();

//Codigo de circulos

console.group("Círculo");

const radioCirculo = 4;
const diametroCirculos = radioCirculo * 2;
const PI = Math.PI;

const perimetroCirculo = (diametroCirculos * PI);
console.log("El perimetro del círculo mide : " + perimetroCirculo + "cm");

const areaCirculo = (PI * (radioCirculo * radioCirculo));
console.log("El área del círculo mide : " + areaCirculo + "cm ala 2");



console.groupEnd();