let operador = '';
let primerNumero = '';
let segundoNumero = '';
let resultado = '';

function ingresarnumero(numero) {
    resultado += numero;
    document.getElementById('resultado').value = resultado;
}

function operacion(op) {
    if (resultado === '') return;
    primerNumero = resultado;
    operador = op;
    resultado = '';
}

function calcular() {
    if (resultado === '' || primerNumero === '') return;
    segundoNumero = resultado;

    let res = 0;
    const num1 = Number(primerNumero);
    const num2 = Number(segundoNumero);

    switch (operador) {
        case '+':
            res = num1 + num2;
            break;
        case '-':
            res = num1 - num2;
            break;
        case '*':
            res = num1 * num2;
            break;
        case '/':
            res = num2 !== 0 ? num1 / num2 : 'Error: No se puede dividir entre 0';
            break;
        default:
            return;
    }

    document.getElementById('resultado').value = res;
    resultado = res.toString();
    primerNumero = '';
    segundoNumero = '';
    operador = '';
}

function limpiar() {
    resultado = '';
    primerNumero = '';
    segundoNumero = '';
    operador = '';
    document.getElementById('resultado').value = '';
}