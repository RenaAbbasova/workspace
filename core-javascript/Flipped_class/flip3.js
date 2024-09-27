/* function product(num1, num2, num3) {
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
 */
/* // Testing the function
product(3, -7, 2);   
product(-5, 0, 0);    
product(3, 7, -2); 
product(-3, -7, 2);   
product(5, -1, -2);    
product(-3, -7, -2);
product(1,4,5)
product(0, 0, 0);   
product(0,-5,1); */




function descending(num1,num2,num3) {
   
    return sample.sort((a, b) => b - a);  // Sort array in descending order
}

console.log(descending([5, 2, 9, 1, 7])); // Output: [9, 7, 5, 2, 1]
console.log(descending([]));              // Output: []
console.log(descending("test"));          // Output: Input is not an array



let num1 = 0;
let num2 = -1;
let num3 = 4;

function descending (num1, num2, num3) {
    if (num1 > num2 && num2 > num3) {
        console.log(num1 + ',' + num2 + ',' + num3)

    } else if (num2 > num1 && num1 > num3) {
        console.log(num2 + ',' + num1 + ',' + num3)

    } else if (num3 > num1 && num1 > num2) {
        console.log(num3 + ',' + num1 + ',' + num2)

    } else if (num3 > num2 && num2 > num1) {
        console.log(num3 + ',' + num2 + ',' + num1)
    
     } else if (num2 > num3 && num3 > num1) {
        console.log(num2 + ',' + num3 + ',' + num1)    
    
    } else {
        console.log(num1 + ',' + num3 + ',' + num2)
    }

}

descending(4,-4,0)


