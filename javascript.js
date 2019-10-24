
/******** EJERCICIO CIRCUITO CORTO JS (Clase 33 de ADA) *********/


let añoActual = 2019;

const nombre = prompt("Indique su nombre");

const año = prompt("Escriba su año de nacimiento - Formato AAAA");

const mes = prompt("Escriba su mes de nacimiento - Formato MM");


mes <= 10 && alert(`Su edad es ${añoActual - año}`);

mes > 10 && alert(`Su edad es ${añoActual - año - 1}`);
