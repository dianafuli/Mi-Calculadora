const prompt = require ("prompt-sync")();
let num1 = parseFloat(prompt("ingrese el primer numero:"));
let num2 = parseFloat(prompt("ingrese el segundo numero:"));
let caracter = prompt("ingrese la operacion: (+, -, *, /, ): ");
switch (caracter) {
    case "+":
        console.log ("la suma es:" + (num1+num2));
        break;
    case "-":
        console.log ("la diferencia es:" + (num1-num2));
        break;
    case "*":
        console.log ("el producto es:" + (num1*num2));
        break;
    case "/":
        if (num2 !==0) {
        console.log ("el cociente es:" + (num1/num2));
    } else {
        console.log ("no se puede dividir entre 0")
    }
        break;
    
    default:
        console.log ("caracter invalido");
}  
