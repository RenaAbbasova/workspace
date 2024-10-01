// Pedir al usuario el diámetro y grosor de la rueda
let diameter = parseFloat(prompt("Introduce el diámetro de la rueda en metros:"));
let grosor = parseFloat(prompt("Introduce el grosor de la rueda en metros:"));

// validar si los datos son válidos
if (isNaN(diameter) || isNaN(grosor)) {
    console.log("Por favor, introduce valores numéricos validos.")
} else { 
    // Condición para el diámetro de la rueda
    if (diameter > 1.4) {
        console.log("La rueda es para un vehículo grande");
    } else if (diameter <= 1.4 && diameter > 0.8) {
        console.log("La rueda es para un vehículo mediano");
    } else {
        console.log("La rueda es para un vehículo pequeño");
    }; 

    // Condiciones para el grosor
    if ((diameter > 1.4 && grosor < 0.4) || (diameter <= 1.4 && diameter > 0.8 && grosor < 0.25)) {
    console.log("El grosor para esta rueda es inferior al recomendado");
    }
};



// 2. Write a JavaScript conditional statement to find the sign of the product of three numbers. Display an alert box with the specified sign.
// ample numbers : 3, -7, 2.   Output : The sign is -

function product(num1, num2, num3) {
    if (num1 === 0 || num2 === 0 || num3 === 0) {
        console.log("The sign is neutral (0)"); // Clarified message for zero case
    } else if (num1 < 0 && num2 < 0 && num3 < 0) {
        console.log("The sign is -");
    } else if (num1 > 0 && num2 > 0 && num3 > 0) {
        console.log("The sign is +");
    } else if (num1 > 0 && num2 < 0 && num3 < 0) {
        console.log("The sign is +");
    } else if (num1 < 0 && num2 < 0 && num3 > 0) {
        console.log("The sign is +");    
    } else {
        console.log("The sign is -");
    }
}

// Testing the function
product(3, -7, 2);   
product(-5, 0, 0);    
product(3, 7, -2); 
product(-3, -7, 2);   
product(5, -1, -2);    
product(-3, -7, -2);
product(1,4,5)
product(0, 0, 0);   
product(0,-5,1);


// 5. Write a JavaScript for loop that iterates from 0 to 15. For each iteration, it checks if the current number is odd or even, and displays a message on the screen.
// Sample Output : "0 is even", "1 is odd", "2 is even"

for (let i = 0; i <= 15; i++) {
    if(i %2 == 0) {
        console.log(`${i} is even`);

    } else {
        console.log(`${i} is odd`);
    }
}

class Rueda {
    constructor() {
        this.diameter = parseFloat(prompt("Introduce el diámetro de la rueda en metros:"));
        this.grosor = parseFloat(prompt("Introduce el grosor de la rueda en metros:"));
    }

    validar() {
        if (isNaN(this.diameter) || isNaN(this.grosor)) return console.log("Introduce valores numéricos válidos.");
        
        console.log(this.diameter > 1.4 ? "Vehículo grande" :
                    this.diameter > 0.8 ? "Vehículo mediano" :
                    "Vehículo pequeño");

        if ((this.diameter > 1.4 && this.grosor < 0.4) || 
            (this.diameter <= 1.4 && this.diameter > 0.8 && this.grosor < 0.25)) {
            console.log("Grosor inferior al recomendado");
        }
    }
}

new Rueda().validar();


// 6. Write a JavaScript program that computes the average marks of the following students. Then, this average is used to determine the corresponding grade.

function studentgrade() {
    let marks = [80, 77, 88, 95, 68];
    let names = ['David', 'Vinoth', 'Divya', 'Ishitha', 'Thomas']; 

    let totalMarks = marks.reduce((acc, mark) => acc + mark, 0);
    let average = totalMarks / marks.length; 

    let grade;

    // Determine grade based on average
    if (average < 60) {
        grade = 'Grade F';
    } else if (average < 70) {
        grade = 'Grade D';
    } else if (average < 80) {
        grade = 'Grade C';
    } else if (average < 90) {
        grade = 'Grade B';
    } else {
        grade = 'Grade A';
    }

    // Output the average and corresponding grade
    console.log(`Average Marks: ${average.toFixed(2)}`);
    console.log(`Grade: ${grade}`);
}

// Call the function 
studentgrade();


// 7. Write a JavaScript program that iterates integers from 1 to 100. But for multiples of three print "Fizz" instead of the number and for multiples of five print "Buzz".
// For numbers multiples of both three and five print "FizzBuzz".

for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz");
    } else if (i % 3 === 0) {
        console.log("Fizz");
    } else if (i % 5 === 0) {
        console.log("Buzz");
    } else {
        console.log(i);
    }
}

// 10. Write a JavaScript program to construct the following pattern, using a nested for loop.
for (let i = 1; i <= 5; i++) {
        console.log('*'.repeat(i))
    }

