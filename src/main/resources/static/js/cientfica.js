const display = document.getElementById('display');

//  añadir números y operadores basicos al display
function addValue(value) {
    display.value += value;
}

// limpiar la pantalla
function clearDisplay() {
    display.value = '';
}

//  eval() para expresiones automaticas
function calculate() {
    try {
        // eval evalua el string como una operacion directamente (magia)
        display.value = eval(display.value);
    } catch (error) {
        alert("Expresión inválida");
        clearDisplay();
    }
}

// math.log para hacer los logaritmos (los hace solos)
function calculateLog() {
    if (display.value !== "") {
        const val = parseFloat(display.value);
        display.value = Math.log(val);
    }
}

// math.pow y el prompt para manejar las potencias
function calculatePower() {
    if (display.value !== "") {
        const base = parseFloat(display.value);
        //  exponente escrito por el usuario mediante prompt
        const exponente = prompt("Introduce el valor de n (exponente):");

        if (exponente !== null) {
            display.value = Math.pow(base, parseFloat(exponente));
        }
    }
}

//  raíz cuadrada
function calculateSqrt() {
    if (display.value !== "") {
        display.value = Math.sqrt(parseFloat(display.value));
    }
}