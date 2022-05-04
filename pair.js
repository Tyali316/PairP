// EASY(1)


// Write a JavaScript function that takes in a random array and outputs two new arrays of odd numbers and even
// numbers.
// Example:
// Input: [2, 4, 7, 11, 15, 16]
// Output: Even numbers: [2, 4, 16]
// Odd Numbers: [7, 11, 15]

function Ty(x) {
 let list1 = [];
 let list2 = [];

 for (let i = 0; i <= x.length; i++) {
    if (x[i]%2 == 0){
      list1.push(x[i]);
    }
    else if (x[i]%2 != 0){
        list2.push(x[i])
    }
}
let a = console.log(`even numbers: ${list1}`);
let b = console.log(`odd numbers: ${list2}`);
return a, b;
};

let ray = [2, 4, 7, 11, 15, 16];
Ty(ray);



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
     if (numArray[i] != 0){
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

// MEDIUM(2)
// Create a function that accepts two strings, then determines whether or not the first string is an anagram of the
// second string by returning a boolean.
// Example:
// Input: String 1: So dark the con of man
// String 2: Madonna of the Rocks
// Output: True
// Input: String 1: Things are good
// String 2: Dogs eat ants
// Output: False



function twoStrang(p1, p2){
    let u = p1.length; 
    let t = p2.length;
    let e = p1.slice(0,u);
    let p = p2.slice(0,t);
  
  for (i = 0; i <= 0; p2.length){
      if (p1.includes(p2[i])) {
       return true;
    }
      else {
          return false;
      }
}
}

let w = x.length;
// console.log(twoStrang(x,y));
console.log(y.includes(x.slice(0,w)));



// MEDIUM(3)
// Write a function that takes in two numbers and determines the largest positive integer that divides the two
// numbers without a remainder.
// Example 1:
// Input: gcd_two_numbers(336,360)
// Output: 24
// Example 2:
// Input: gcd_two_numbers(78,126)
// Output: 6

function gcd(x, y) {
while(y) {
    var t = y;
    y = x % y;
    x = t;
  }
  return x;
};
 
 console.log(gcd(336,360));
console.log(gcd(78,126));



// Medium(4)
// Create a car object with the items: Make, Model, Year, Milage, and Color. Then create 3 methods in the object;
// A driveToWorkmethod, driveAroundTheWorldmethod, and runErrandsmethod. Each of these methods
// should affect the car’s mileage adding to it each time and console logging the old mileage and the new
// mileage.
// driveToWork = 33 miles
// driveAroundTheWorld = 24,000 miles
// runErrands = 30 miles
// Example 1:
// car.driveToWork();
// Output: old mileage: 2000 | new mileage: 2033
// Explanation: 2000 + 33 = 2033
// Example 2:
// car.driveAroundTheWorld();
// Output: old mileage: 2033 | new mileagea: 26033
// Example 2:
// car.runErrands();
// Output: old mileage: 26033 | new mileagea: 26063


let car = {
   make: `Honda`,
   model: `LX`,
   year:`2020`,
   color: `black`,
   mileage: 0,
   updateMileage: function() {
       let a = this.mileage;
        return `The old mileage: ${this.mileage} and the new mileage: ${++this.mileage}`;
 },
   driveToWork: function(){
    return `The old mileage: ${this.mileage} and the new mileage: ${+33} miles`;
   }, 
   driveAroundTheWorld: function(){
    return ("The old mileage: 33 miles and the new mileage: this.mileage +24000");
   },
   runErrands: function(){
       
   }
}
// console.log(car.driveToWork());
// console.log(car.driveAroundTheWorld());





// Hard(1)
// Write a function that takes in a string and returns a boolean value whether or not the string contains a pair of
// matching brackets ({}, [], ()). These brackets must be nested appropriately in order to return a true value
// Example 1:
// Input: str = “{hello world}” brackets(srt)
// Output: True
// Example 2:
// Input: str = “{hello world]” brackets(srt)

