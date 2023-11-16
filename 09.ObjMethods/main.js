let myInfo = {
  firsName: "Gullar",
  lastName: "Isgandarova",
  age: 19,
  skills: ["HTML", "CSS", "JS"],
  university: "GDU",
};

myInfo["phone number"] = 999999999;
myInfo.city = "Ganja";
// console.log(myInfo);

// console.log(Object.keys(myInfo));
// console.log(Object.values(myInfo));
// console.log(Object.entries(myInfo));
// let arr = Object.values(myInfo);
// let maxValue = "";
// for (i = 0; i < arr.length; i++) {
//   if (arr[i].length > maxValue.length) {
//     maxValue = arr[i];
//   }
// }

// console.log(maxValue)
// delete myInfo.age
// console.log(myInfo);

///=============== TASK 2

var library = [
  {
    title: "The Road Ahead",
    author: "Bill Gates",
    readingStatus: true,
  },
  {
    title: "Walter Isaacson",
    author: "Steve Jobs",
    readingStatus: true,
  },
  {
    title: "Suzanne Collins",
    author: "Mockingjay: The Final Book",
    readingStatus: false,
  },
];

//   Nəticə ====>>
// Already read 'The Road Ahead' by Bill Gates.
// Already read 'Walter Isaacson' by Steve Jobs.
// You still need to read 'Suzanne Collins' by Mockingjay: The Final Book.

// library.forEach((item) => {
//   if (item.readingStatus === true)
//     console.log(`Alreade read '${item.title}' by ${item.author}`);
//   else if (item.readingStatus === false)
//     console.log(`You still need to read '${item.title}' by ${item.author}`);
// });

// "employee" adlı object yaradın. Object-in name, jobTitle, salary və promote adında key-ləri var.
// promote bir anonim function-dır, 2 parametr qəbul edir. jobTitle-in value-ı ilk dəfə "Software Developer" 
// salary isə 75000.
// Ən sonda employee.promote-a bir yeni vəzifə və yeni maaş göndərin.

// employee.promote('Senior Software Engineer', 90000);

// Nəticə: Promotion: Alice is now Senior Software Engineer with a salary of $90000

let employee = {
  name: "Gullar",
  jobTitle: "Software Developer",
  salary:75000,
  promote: function(a,b){
    this.jobTitle = a;
    this.salary = b;
    console.log(`${this.name} is now ${a} with a salary of $${b} `);
  }

};
 employee.promote('Senior Software Engineer', 90000);

 console.log(employee);