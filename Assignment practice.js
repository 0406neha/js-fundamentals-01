// // Assignment practice-1
// let country = "India";
// let continent = "Asia";
// let population = "1,428.6";
// let indiaIsAReligiousCountry = true;

// console.log(country);
// console.log(continent);
// console.log(population);
// console.log(indiaIsAReligiousCountry);

// console.log(typeof true);
// console.log(typeof indiaIsAReligiousCountry);
// console.log(typeof "India");
// console.log(typeof "Asia");
// console.log(typeof 1428.6);

// let isIsland = false;
// let language;

// console.log(typeof isIsland);
// console.log(typeof population);
// console.log(typeof country);
// console.log(typeof language);

// //Assignment practice-2
// const massMark = 78;
// const heightMark = 1.69;
// const massJohn = 92;
// const heightJohn = 1.95;

// const bmiMark = massMark / heightMark ** 2;
// const bmiJohn = massJohn / heightJohn ** 2;

// const markHigherBMI = bmiMark > bmiJohn;

// console.log(bmiMark, bmiJohn);

// // Assignment practice-03

// if (bmiMark > bmiJohn) {
//   console.log(`Mark's BMI (${bmiMark}) is higher than John's! (${bmiJohn})`);
// } else {
//   console.log(`John's BMI (${bmiJohn}) is higher than Mark's! (${bmiMark})`);
// }

// // Assignment practice-04
// let scoreDolphins = (96 + 108 + 89) / 3;
// let scoreKoalas = (88 + 91 + 110) / 3;

// console.log(scoreDolphins, scoreKoalas);

// if (scoreDolphins > scoreKoalas && scoreDolphins >= 100) {
//   console.log("Team Dolphins wins the trophy 🏆!");
// } else if (scoreKoalas > scoreDolphins && scoreKoalas >= 100) {
//   console.log("Team Koalas wins the trophy 🏆!");
// } else if (
//   scoreDolphins === scoreKoalas &&
//   scoreDolphins >= 100 &&
//   scoreKoalas >= 100
// ) {
//   console.log("Match is draw!!! :) Both wins the trophy🏆😀!");
// } else {
//   console.log("No one wins the trophy😔");
// }

// // Assignment practice-05

const bill = 270;
const tip = bill <= 300 && bill >= 50 ? bill * 0.15 : bill * 0.2;
console.log(
  `The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`
);
