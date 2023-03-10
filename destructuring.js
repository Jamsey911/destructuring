/**
 * To run this file in Gitpod, use the 
 * command node destructuring.js in the terminal
 */

// Destructuring arrays
let ages = [30, 26, 27];
// let John = ages[0];
// let Mary = ages[1];
// let Joe = ages[2];
let [John, Mary, Joe] = ages
console.log(John, Mary, Joe)
// Destructuring objects
let jobs = {
    Mike: "Postman",
    Gill: "Barman",
    Alicia: "Spaceman",
};
let {Mike, Gill, Alicia} = jobs 
console.log(Mike, Gill, Alicia)
// Destructuring subsets
let languages = ["english", "japenese", "french", "irish", "bollox"];
let [johnNative, johnSecondary] = languages;
console.log(johnNative, johnSecondary)

let [, , maryNative, marySecondary] = languages;
console.log(maryNative, marySecondary);

let [, , , , jim] = languages;
console.log(jim);

let languages2 = {
    firstLanguage: "english",
    secondLanguage: "japenese",
    thirdLanguage: "french",
    fourthLanguage: "irish",
};

let {firstLanguage, thirdLanguage} = languages2;
console.log(firstLanguage, thirdLanguage)
// Using rest parameter syntax
let fruits = ["apple", "banana", "orange", "peach", "cherry"]
let [fave, secondFave, ...others] = fruits;
console.log(fave);
console.log(secondFave);
console.log(...others );

let favouirteFoods = {
    brian: "pizza",
    anna: "pasta",
    sarah: "vegiterian",
    andrea: "steak",
};
let {brian, anna, ...rest} = favouirteFoods;
console.log(brian);
console.log(anna);
console.log(rest);

