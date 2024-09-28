/* for (let i = 1; i <=100; i++) {
    alert(i);
} */


/* for (let i = 1; i <= 100; i++) {
    if (i % 2 === 0) {
        console.log(i)
} 
} */

/* for (let i = 20; i <= 1000; i += 20) {
    console.log(i);
} */

/* function square(size) {
    for(let i = 0; i < size; i++) {
        let row = "";
        for (let k = 0; k < size; k++) {
            row += "# ";
        }
        console.log(row);
    }
}
square(5) */

/* function multiplicationtaable() {
    for (let i = 0; i <= 9; i++) {
        console.log(`tabla de ${i}:`)
        for (let k = 0; k <= 9; k++) {
            console.log(`${i} x ${k} = ${i * k}`)
        }
        console.log('')

    }
}
multiplicationtaable(); */



/* let respuesta = confirm("¿Te gusta JavaScript?")
console.log(respuesta) */

/* for (let i = 5; i >= 0; i--) {
    if (i === 0) {
        console.log("stop")
    } else {
        console.log('#'.repeat(i));
    }
}

for (let i = 1; i <= 5; i++) {
    console.log('*'.repeat(i))
} */
/* for (let i = 0, j = 1; i < 5; i++, j++) {
  console.log('#'.repeat(i)  +  '#'.repeat(j));
 */
/* class AgeError extends Error {
    constructor(value) {
        super(`"${value}" is  not a valid age`);
        this.name = 'AgeError';
        this.value = value;
    }
}


// throw statement to throw a user-defined exception.

function checkage(age) {
    if (age < 18) {
        throw new AgeError(age)
    }
    return 'Access granted';
}

try {
    const result = checkage(15);
    console.log(result);
} catch (e) {
    console.log(e.name, ':', e.message);
    console.log('Invalid age:', e.value);
} */


// try ... catch....finally

/* let rest = (num1,num2) => num1 - num2;
let result = 0
try {
    result = rest(9,7);
} catch (e) {
    console.log(e.message ,': please define the function');
} finally {
    console.log({result})
} 
 */