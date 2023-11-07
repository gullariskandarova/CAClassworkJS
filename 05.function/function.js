//---------------Question 1

// function printFullName(firstname = "Lorem", lastname = "Ipsum") {
//   console.log(`I am ${firstname} ${lastname}`);
// }
// printFullName("Gullar", "Isgandarova");

//----------------Question 2

// let sum = function (num1 = 0, num2 = 0) {
//   let sumNum = num1 + num2;
//   return sumNum;
// };
// console.log(sum(2,3));

// let multipy = (num1=0, num2=0) => {
//   let multipyNum = num1 * num2;
//   return multipyNum;
// };
//  console.log(multipy(2,3));

// let subtruct = function (num1 = 0, num2 = 0) {
//   let subtructNum = num1 - num2;
//   return subtructNum;
// };
// console.log(subtruct(2,3));

// let divide = function (num1 = 0, num2 = 0) {
//   let divideNum = num1 / num2;
//   return divideNum;
// };

// console.log(divide(2,3));

//------------Question 3
// function sum(num1, num2, opt) {
//   if (opt === "+") {
//     let sumNum = num1 + num2;
//     return sumNum;
//   } else if (opt === "-") {
//     let subtructNum = num1 - num2;
//     return subtructNum;
//   } else if (opt === "*") {
//     let multiplyNum = num1 * num2;
//     return multiplyNum;
//   } else if (opt === "/") {
//     let divideNum = num1 / num2;
//     return divideNum;
//   } else console.log(`Bele emeliyyat movcud deyil `);
// }
// console.log(sum(2,3, "+"));
// console.log(sum(2,3, "-"));
// console.log(sum(2,3, "*"));
// console.log(sum(2,3, "/"));

//----------TASK 4

// const employees = [
//   { name: "Jamil", salary: 50000, department: "IT" },
//   { name: "Jale", salary: 60000, department: "HR" },
//   { name: "Bayram", salary: 55000, department: "IT" },
//   { name: "Sahil", salary: 75000, department: "HR" },
//   { name: "Maryam", salary: 65000, department: "IT" },
//   { name: "Elnara", salary: 80000, department: "HR" },
//   { name: "Davud", salary: 70000, department: "IT" },
// ];

// function filterEmployees(array) {
//   let arr = [];

//   for (i = 0; i < array.length; i++) {
//     array[i].salary > 60000 && arr.push(array[i]);
//   }

//   return arr;
// }
// console.log(filterEmployees(employees));

//-------------TASK 5

// function reverseString(word) {
//   let str = "";
//   for (let i = word.length - 1; i >= 0; i--) {
//     str += word[i];
//   }
//   return str;
// }

// console.log(reverseString("Guller"));

//------------TASK 6

// let sentence =
//   "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in 2222 22222 22222";
// let count = 0;
// function letters(string) {
//   for (i = 0; i < string.length; i++) {
//     if (string[i] !== " " && string[i] !== "." && string[i] !== ",") {
//       count++;
//     }
//   }

//   return count;
// }

// console.log(letters(sentence));

function isPolindron(str){
     
}