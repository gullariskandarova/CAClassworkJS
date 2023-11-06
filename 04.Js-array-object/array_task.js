let arr = [];
let itCompanies = [
  "Facebook",
  "Google",
  "Microsoft",
  "APPLE",
  "IBM",
  "Oracle",
  "Amazon",
];
// console.log(itCompanies.length);

// for (i = 0; i < itCompanies.length; i++) {
//   console.log(itCompanies[i]);
// }

// console.log(itCompanies[0]);
// console.log(itCompanies[itCompanies.length - 1]);
// center = (itCompanies.length - 1) / 2;
// console.log(itCompanies[center]);

// let uppercase = [];
// for (i=0; i<itCompanies.length; i++){
//     // console.log(itCompanies[i].toLocaleUpperCase());
//     uppercase.push(itCompanies[i].toLocaleUpperCase())
// }
// console.log(uppercase);

// console.log(`${itCompanies.toString()} boyuk IT shirketleriidr`);

// for (i=0; i<itCompanies.length; i++){
//     console.log(itCompanies[i].length);
// }

for (i = 0; i < itCompanies.length; i++) {
  if (itCompanies[i] === itCompanies[i].toLocaleUpperCase())
    console.log(`${i}. ${itCompanies[i]}`);
}
