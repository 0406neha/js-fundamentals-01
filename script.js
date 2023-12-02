/*
let js = "amazing";
console.log(40 + 8 + 23 - 10);

console.log("Genie");
console.log(23);

let firstName = "Berry";

console.log(firstName);
console.log(firstName);
console.log(firstName);


// Assignment practice-1
let country = "India";
let continent = "Asia";
let population = "1,428.6";
let indiaIsAReligiousCountry = true;

console.log(country);
console.log(continent);
console.log(population);
console.log(indiaIsAReligiousCountry);

console.log(typeof true);
console.log(typeof indiaIsAReligiousCountry);
console.log(typeof "India");
console.log(typeof "Asia");
console.log(typeof 1428.6);

let isIsland = false;
let language;

console.log(typeof isIsland);
console.log(typeof population);
console.log(typeof country);
console.log(typeof language);


// MATH OPERATORS
const now = 2023;
const ageNeha = now - 2004;
const ageIsha = now - 2006;
console.log(ageNeha, ageIsha);

console.log(ageNeha + 2, ageIsha / 10, 2 ** 4);
// 2**4 means 2 to the power of 4 = 2 * 2 * 2 * 2

const firstName = "Neha";
const lastName = "Boyar";
console.log(firstName + " " + lastName);

// ASSIGNMENT OPERATORS
let x = 10 + 5; //15
x += 10; // x = x + 10 = 25
x *= 4; // x = x * 4 = 100
x++; // x = x + 1
x--;
x--;
console.log(x);

//COMPARISON OPERATORS
console.log(ageNeha > ageIsha); // < , > >= , <=
console.log(ageIsha >= 18);

const isFullAge = ageIsha >= 18;

console.log(now - 2004 > now - 2006);

//OPERATORS PRECEDENCE
const now = 2023;
const ageNeha = now - 2004;
const ageIsha = now - 2006;

console.log(now - 2004 > now - 2006);

let x, y;
x = y = 25 - 10 - 5; // x = y = 10, x = 10
console.log(x, y);

const averageAge = (ageNeha + ageIsha) / 2;
console.log(ageNeha, ageIsha, averageAge);
*/

// Assignment practice-2
const massMark = 78;
const heightMark = 1.69;
const massJohn = 92;
const heightJohn = 1.95;

const bmiMark = massMark / heightMark ** 2;
const bmiJohn = massJohn / heightJohn ** 2;

const markHigherBMI = bmiMark > bmiJohn;

console.log(bmiMark, bmiJohn);

// Assignment practice-03

if (bmiMark > bmiJohn) {
  console.log(`Mark's BMI (${bmiMark}) is higher than John's! (${bmiJohn})`);
} else {
  console.log(`John's BMI (${bmiJohn}) is higher than Mark's! (${bmiMark})`);
}

/*
// Sol-01
// const age = 15;
// const isOldEnough = age >= 18;

// if (isOldEnough) {
//   console.log("Isha can start driving 🚗");
// }

// Sol-02
const age = 15;

if (age >= 18) {
  console.log("Isha can start driving 🚗");
} else {
  const yearsLeft = 18 - age;
  console.log(`Isha is too young, Wait another ${yearsLeft} years :)`);
}

const birthYear = 1991;

let century;
if (birthYear <= 2000) {
  century = 20;
} else {
  century = 21;
}

console.log(century);
*/
