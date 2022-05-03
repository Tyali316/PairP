// EASY(1)


// Write a JavaScript function that takes in a random array and outputs two new arrays of odd numbers and even
// numbers.
// Example:
// Input: [2, 4, 7, 11, 15, 16]
// Output: Even numbers: [2, 4, 16]
// Odd Numbers: [7, 11, 15]

// function Ty(x) {
//  let list1 = [];
//  let list2 = [];

//  for (let i = 0; i <= x.length; i++) {
//     if (x[i]%2 == 0){
//       list1.push(x[i]);
//     }
//     else if (x[i]%2 != 0){
//         list2.push(x[i])
//     }
// }
// let a = console.log(`even numbers: ${list1}`);
// let b = console.log(`odd numbers: ${list2}`);
// return a, b;

// };
// let y = [2, 4, 7, 11, 15, 16];
// Ty(y);



// EASY(2)
// Create a function that checks an array for prime numbers then inserts any primes into a new array.
// Example 1:
// Input: numArray = [1,2,3,4,5,6,7,8,9,10]
// Output: primeArray = [2,3,5,7]
// Example 2:
// Input: numArray = [10, 18, 19, 29, 33, 35, 47, 66, 83]
// Output: primeArray = [19 ,29 ,47 , 83]

// function numbers(a) {
//  let group1 = [];
 

// // 
// //}
// return console.log(group1); 

let numArray = [1,2,3,4,5,6,7,8,9,10];
// numbers(numArray);
let group1 = [];

for (i = 0; i <= numArray.length; i++){
     if (numArray[i] > 0){
       group1.push(numArray[i]);
    }
    else {
        console.log(`error`);
    }
}
console.log(group1);

// MEDIUM(1)
// Create a Function Called “vowelChecker” that takes in a single argument (x) and logs weather or not the input
// is a vowel
// Example 1:
// Input: vowelChecker(‘b’)
// Output: ‘This is not a vowel’
// Example 2:
// Input: vowelChecker(‘a’)
// Output: ‘This is a vowel’

function vowelChecker(x){
    const newArry = [`a`,`e`,`i`,`o`,`u`,`y`];
 if (newArry.includes(x)){
     console.log(`This is a vowel.`);
 }
 else {
     console.log(`This is not a vowel.`);
 }
}
vowelChecker(`i`);
console.log();