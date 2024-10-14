// 5. Pedirle al usuario que ingrese un dígito y un número, después llamar a una función que diga el número de veces que aparece el dígito en el número.

let digit = window.prompt('Introduce one digit');
let number = window.prompt('Introduce one number');
digit = digit.toString();
number = number.toString();

function digitcount() {
    let count = 0;
    for (let i = 0; i < number.length; i++) {
        if(number[i] === digit) {
            count ++;
        }
    
    }
    alert(`The digit ${digit} appears ${count} times in the number ${number}`);
}
digitcount()