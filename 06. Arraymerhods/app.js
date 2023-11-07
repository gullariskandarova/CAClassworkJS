//----------TASK1
// const number = [1, 2, 3, 4, 5, 6, 7, 8];

// // # tek ededleri filter methodu vasitesi ile yeni bir deyisene menimset

// let odd = number.filter((elem, i, array) => elem % 2 !== 0);
// console.log(odd);

//---------------------------------------------------------------------------------------------------

// const array = [-3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

// // # 1 və 10 aralığındakı rəqəmləri consol-a çıxart

// let newArr = array.filter((elem) => elem > 1 && elem < 10);
// console.log(newArr);

//------------------TASK 2
// const users = [
//   {
//     first_name: "Mike",
//     last_name: "Sheridan",
//   },
//   {
//     first_name: "Tim",
//     last_name: "Lee",
//   },
//   {
//     first_name: "John",
//     last_name: "Carte",
//   },
// ];

// //  # Verilmiş array-də objectlərin first_name və last_name dəyişkənin aşağıdaki kimi göstərin.

// //   =====> ["Mike Sheridan", "Tim Lee", "John Carte"]

// let username = users.map(
//   (elem, i) => (fullname = `${elem.first_name} ${elem.last_name}`)
// );
// console.log(username);

//------------------------------TASK 3
// const persons = [
//   { name: "Akif", age: 25 },
//   { name: "Aysu", age: 32 },
//   { name: "Ali", age: 35 },
// ];

// // find metodu vasitəsilə array-in içindəki, yaşı 30-dan yuxarı olan ilk şəxsi "firstPerson" adlı dəyişkənə
// // mənimsədib console-a çıxardın. ====> { name: 'Aysu', age: 32 }

// let firstPerson = persons.find((elem, i) => {
//     console.log(i);
//   return elem.age > 30;
// });
// console.log(firstPerson);

//------------------------------TASK 4

// const array1 = [1, 4, 9, 16];

// // # Verilmiş array-in hər bir elementini qüvvətə yüksəldin.   ======> [ 1, 16, 81, 256 ]

// let square = array1.map((elem, i) => elem ** 2);
// console.log(square);

//-------------------------TASK 5
// const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];

// // // Verilmiş animals array-ni slice metodu vasitəsilə aşağıdaki kimi yazmağa çalışın.

// // console.log(animals.slice());
// // // Gözlənilən çıxış: ["camel", "duck", "elephant"]

// // console.log(animals.slice());
// // // Gözlənilən çıxış: ["camel", "duck"]

// // console.log(animals.slice());
// // // Gözlənilən çıxış: ["bison", "camel", "duck", "elephant"]

// // console.log(animals.slice());
// // // Gözlənilən çıxış: ["duck", "elephant"]

// // console.log(animals.slice());
// // // Gözlənilən çıxış: ["camel", "duck"]

// // console.log(animals.slice());
// // // Gözlənilən çıxış: ["ant", "bison", "camel", "duck", "elephant"]

// console.log(animals.slice(2));
// console.log(animals.slice(2, 4));
// console.log(animals.slice(1));
// console.log(animals.slice(3));
// console.log(animals.slice());

//------------------------------TASK 6

// const months = ['Jan', 'March', 'April', 'June'];
// months.splice(1, 0, 'Feb');
// console.log(months);
// // Expected output: ["Jan", "Feb", "March", "April", "June"]

// months.splice(4, 1, 'May');
// console.log(months);
// // Gözlənilən çıxış: ["Jan", "Feb", "March", "April", "May"]

//------------------------------TASK 7
const company = [
  { firstName: "John", lastName: "Doe", salary: 50000, yearsWorked: 5 },
  { firstName: "Alice", lastName: "Johnson", salary: 60000, yearsWorked: 8 },
  { firstName: "Bob", lastName: "Smith", salary: 75000, yearsWorked: 3 },
  { firstName: "Eve", lastName: "Williams", salary: 55000, yearsWorked: 7 },
];

// console-a belə çıxsın  =========>
// [
//   'John Doe illik 50000$ maaş alır və 5 ildir çalışır',
//   'Alice Johnson illik 60000$ maaş alır və 8 ildir çalışır',
//   'Bob Smith illik 75000$ maaş alır və 3 ildir çalışır',
//   'Eve Williams illik 55000$ maaş alır və 7 ildir çalışır'
// ]

let info = company.map((elem, i) => 
    `${elem.firstName} ${elem.lastName} illik ${elem.salary} maas alir ve ${elem.yearsWorked} ildir calisir`
);
console.log(info);