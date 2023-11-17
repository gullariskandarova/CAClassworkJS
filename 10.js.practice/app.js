// ------------------------------------------------------- TASK 1 -------------------------------------------------------

// Write a JavaScript function that reverse a number.
// Sample Data and output:

// Example x = 32243;
// Expected Output : 34223

// let x = 32243;
// let string = x.toString();

// let reverse = Number( string.split("").reverse().join(""));
// console.log(reverse);

// ------------------------------------------------------- TASK 2 -------------------------------------------------------

// Write a JavaScript function that returns a passed string with letters in
// alphabetical order.
// Example string : 'webmaster'
// Expected Output : 'abeemrstw'

// let str = "webmaster";
// let reverse = str.split("").reverse("").sort().join("");
// console.log(reverse);

// ------------------------------------------------------- TASK 3 -------------------------------------------------------

// Write a JavaScript function that accepts a string as a parameter and converts the
// first letter of each word of the string in upper case.
// Example string : 'the quick brown fox'
// Expected Output : 'The Quick Brown Fox '

// let firstLetter = (str) => {
//   let arr = str.split(" ");
//   let result = arr.map((item) => item[0].toLocaleUpperCase() + item.slice(1));
//   return result.join(" ");
// };
// console.log(firstLetter("the quick brown fox"));

// ------------------------------------------------------- TASK 4 -------------------------------------------------------

const person = {
  firstName: "John",
  lastName: "Doe",
  city: "Ganja",
  website: "code.edu.az",
  languageInfo: {
    eng: "Advance",
    aze: "Fluenty",
    rus: "Intermediate",
  },
};

person adlı object-dən firstName-i, languageInfo-dan eng və rus property-ni destructing edin, əlavə olaraq 
personda yerdə qalan bütün property-ləri otherInfo adı altında rest operatoru ilə bir dəyişənə çıxarın.

console.log(eng); // "Advance"
console.log(otherInfo); // {lastName: 'Doe', city: 'Ganja', website: 'code.edu.az'}