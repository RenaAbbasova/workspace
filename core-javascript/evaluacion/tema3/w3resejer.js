
//1. Write a JavaScript program that displays the largest integer among two integers.

function largestInteger(num1, num2) {
    if (num1 > num2) {
        console.log(num1);
    } else {
        console.log(num2);
    }
}

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


// 3. Write a JavaScript conditional statement to sort three numbers. Display an alert box to show the results. Sample numbers : 0, -1, 4. Output : 4, 0, -1

function descending(num1, num2, num3) {

    let numbers = [num1, num2, num3];
    
    // Sort numbers in descending order
    numbers.sort(function(a, b) {
        return b - a;
    });

    alert(numbers.join(', '));
}

descending(0, -1, 4);
descending(1,-3,0);
descending(8,-8,10);


// 5. Write a JavaScript for loop that iterates from 0 to 15. For each iteration, it checks if the current number is odd or even, and displays a message on the screen.
// Sample Output : "0 is even", "1 is odd", "2 is even"

for (let i = 0; i <= 15; i++) {
    if(i %2 == 0) {
        console.log(`${i} is even`);

    } else {
        console.log(`${i} is odd`);
    }
}




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


// 9. Write a JavaScript program to find the Armstrong numbers of 3 digits.
// Note : An Armstrong number of three digits is an integer such that the sum of the cubes of its digits is equal to the number itself. For example, 371 is an Armstrong number since 3**3 + 7**3 + 1**3 = 371.

function findthreedigitarmstrongnum() {
    const armstrongNum = []; 

    // Loop through all three-digit numbers
    for (let num = 100; num < 1000; num++) {
        let sum = 0; 
        let numStr = num.toString(); 

        // Loop through each digit in the number
        for (let i = 0; i < numStr.length; i++) { 
            let digit = parseInt(numStr[i]); 
            sum += digit ** 3; 
        }

        // Check if the sum of the cubes of the digits is equal to the original number
        if (sum === num) {
            armstrongNum.push(num); 
        }
    }

    
    console.log("print armstrong numbers:", armstrongNum);
}

findthreedigitarmstrongnum();


// 10. Write a JavaScript program to construct the following pattern, using a nested for loop.
for (let i = 1; i <= 5; i++) {
        console.log('*'.repeat(i))
    }

// 12. Write a JavaScript program to sum 3 and 5 multiples under 1000.

function sumMultiplesFiveAndThree() {
    let sum = 0; 

    for (let i = 1; i < 1000; i++) { 

        if (i % 3 === 0 || i % 5 === 0) {
            sum += i;
        }
    }

    console.log('sum of 3 and 5 multiples under 1000', sum);
}

sumMultiplesFiveAndThree();

