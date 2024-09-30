function sumar(sum1, sum2) {
    return sum1 + sum2;
}

let soluction = sumar(5, 3);
console.log(soluction);


function larg(num1, num2) {
    if (num1 > num2) {
        return num1
    } else {
        return num2
    }

}
s = larg(1,2)
console.log(s)



let sample = [3,-7,2];
for (let i in sample) {
    console.log(`The sigh is - ${sample[i]}`)
}



 
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
