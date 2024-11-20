/* const fs = require('fs').promises; // points extra if you fix this ;)

const filePath = './file.txt';

// `async` before the parent function
async function main() {

try {
  // `await` before the async method
  const data = await fs.readFile(filePath, 'utf-8');
  console.log(data);
  console.log('Done!');
} catch (error) {
  console.log('An error occurred...: ', error);
}
console.log("I'm the last line of the file!");
} */

// Call the async function
/* main(); */


/* import { promises as fs } from 'fs';

const filePath = './file.txt';

try {
  const data = await fs.readFile(filePath, 'utf-8');
  console.log(data);
  console.log('Done!');
} catch (error) {
  console.log('An error occurred...: ', error);
}
console.log("I'm the last line of the file!"); */


// Callbacks

/* 
import fs from 'fs';

// relative path to file
const filePath = './file.txt';

// callback
const callback = (error, data) => {
  if (error) {
    console.log('An error occurred...: ', error);
  } else {
    console.log(data); 
    console.log('Done!');
  }
};
 */
// async request to read a file

// parameter 1: filePath
// parameter 2: encoding of utf-8
// parmeter 3: callback function
/* fs.readFile(filePath, 'utf-8', callback);

console.log("I'm the last line of the file!"); */



// callback asynchronous example

// file system module from Node.js
import fs from 'fs';

// relative path to file
const filePath = './file.txt';

// async request to read a file
//
// parameter 1: filePath
// parameter 2: encoding of utf-8
// parmeter 3: callback function () => {}
fs.readFile(filePath, 'utf-8', (error, data) => {
  if (error) {
    console.log('An error occurred...: ', error);
  } else {
    console.log(data); // Hi, developers!
    console.log('Done!');
  }
});

console.log("I'm the last line of the file!");


