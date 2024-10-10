/* // suma.js
function suma(a, b) {
    return a + b;
}





function myFunction(input) {
    if(typeof input !== 'number') {
        throw new Error('Invalid Input')
    }
}


function fetchdata(callback) {
    setTimeout(() => {
        callback('peanut butter');
    }, 1000);
}


//promises

 function fetchpromise() {
    return new Promise((resolve, reject) => {
        setTimeout(()=> resolve('peanut butter'), 1000)
    });
 }

 module.exports = {suma, myFunction, fetchdata, fetchpromise};


 // mock function
 */