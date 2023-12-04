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
