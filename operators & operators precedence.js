// MATH OPERATORS
const now = 2023;
const ageNeha = now - 2004;
const ageIsha = now - 2006;
console.log(ageNeha, ageIsha);

console.log(ageNeha + 2, ageIsha / 10, 2 ** 4);
// 2**4 means 2 to the power of 4 = 2 * 2 * 2 * 2

const myName = "Neha";
const lastName = "Boyar";
console.log(myName + " " + lastName);

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
// const now = 2023;
// const ageNeha = now - 2004;
// const ageIsha = now - 2006;

console.log(now - 2004 > now - 2006);

let X, y;
X = y = 25 - 10 - 5; // X = y = 10, X = 10
console.log(X, y);

const averageAge = (ageNeha + ageIsha) / 2;
console.log(ageNeha, ageIsha, averageAge);

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
