//Declaracion de variable del menu de navegacion
const $menu = document.getElementById("menu")
const $back = document.getElementById("back");
const $circulo = document.getElementById("circulo");
const $cuadrado = document.getElementById("cuadrado");
const $triangulo = document.getElementById("triangulo");
const $rectangulo = document.getElementById("rectangulo");

//Declaracion de variables para los menus de cada figura
const $mCirculo = document.getElementById("mCirculo");
const $mCuadrado = document.getElementById("mCuadrado");
const $mTriangulo = document.getElementById("mTriangulo");
const $mRectangulo = document.getElementById("mRectangulo");

//Listener para la selecion de la fugra a eleguir
$circulo.addEventListener("click", circulo);
$cuadrado.addEventListener("click", cuadrado);
$triangulo.addEventListener("click", triangulo);
$rectangulo.addEventListener("click", rectangulo);
$back.addEventListener("click", regresar)

function circulo(){
    $menu.classList.add("menu-circle");
    $mCirculo.classList.add("active");
}

function cuadrado(){
    $menu.classList.add("menu-square");
    $mCuadrado.classList.add("active");
}

function triangulo(){
    $menu.classList.add("menu-triangle");
    $mTriangulo.classList.add("active");
}

function rectangulo(){
    $menu.classList.add("menu-rectangle");
    $mRectangulo.classList.add("active");
}

function regresar(){
    $menu.classList.remove("menu-circle","menu-square","menu-triangle","menu-rectangle");
    $mCirculo.classList.remove("active");
    $mCuadrado.classList.remove("active");
    $mTriangulo.classList.remove("active");
    $mRectangulo.classList.remove("active");
}

//Declaracion de variables para la operacion del circulo
let radioArea = function(){
    let radio = document.getElementById("radio").value;
    radio = (Math.PI*Math.pow(radio,2)).toFixed(2);
    resultadoRadio.innerHTML = `El área de tu círculo es ${radio}`;
}
const radioBTN = document.getElementById("radio-btn");
const resultadoRadio = document.getElementById("resultado-radio")
radioBTN.addEventListener("click", radioArea);


//Declaracion de variables para la operacion del cuadrado
let cuadradoArea = function(){
    let lado = document.getElementById("lado").value;
    lado = (lado * lado).toFixed(2);
    resultadoCuadrado.innerHTML = `El área de tu cuadrado es ${lado}`
}
const cuadradoBTN = document.getElementById("cuadardo-btn")
const resultadoCuadrado = document.getElementById("resultado-cuadrado");
cuadradoBTN.addEventListener("click", cuadradoArea);


//Declaracion de variables para la operacion del triangulo
let triangleArea = function(){
    let base = document.getElementById("baseT").value;
    let altura = document.getElementById("alturaT").value;
    let area = ((base * altura)/2).toFixed(2);
    resultadoTriangle.innerHTML = `El área de tu triangulo es ${area}`;
}

const triangleBTN = document.getElementById("triangle-btn");
const resultadoTriangle = document.getElementById("resultado-triangle");
triangleBTN.addEventListener("click", triangleArea);


//Declaracion de variables para la operacion del rectangulo
let rectangleArea = function(){
    let base = document.getElementById("baseR").value;
    let altura = document.getElementById("alturaR").value;
    let area = (base * altura).toFixed(2);
    resultadoRectangle.innerHTML = `El área de tu triangulo es ${area}`;
}

const rectangleBTN = document.getElementById("rectangle-btn");
const resultadoRectangle = document.getElementById("resultado-rectangle");
rectangleBTN.addEventListener("click", rectangleArea);