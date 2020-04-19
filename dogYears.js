# dog-years
const myAge = 28;

//myAge = human age input

let earlyYears = 2;

//early dog years; first 2=10.5 in dog years

earlyYears = earlyYears * 10.5;

let laterYears = myAge - 2;

//later dog years after first 2 years 

laterYears = laterYears * 4;

/*human years after first 2 years = 4 dog years */

console.log(earlyYears);

console.log(laterYears);

let myAgeInDogYears = earlyYears + laterYears

//total sum of human age in dog years

const myName = 'Ayo'.toLowerCase();

console.log(`my name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years.`)
