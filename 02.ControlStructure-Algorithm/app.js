// ...TASK 1...

// let weather = 17;
// if (weather > 22) {
//   console.log("Nazik geyin");
// } else if(weather > 15){
//   console.log("Pencek geyin");
// }else {
//     console.log("Qalin geyin");
// }

// ...TASK 2...

// let letter = "E";
// switch (letter) {
//     case "A":
//     case "E":
//     case "I":
//     case "O":
//     case "U":
//         console.log("herf saitdir");
//         break;
//     default:
//         console.log("herf sait deyil");
//         break;
// }

// let letter = "d"

// if( letter == "a" || letter == "e" || letter == "i"){
//     console.log("herf saitdir");
// }else {
//     console.log("herf samitdir");
// }

// ...TASK 3...

// let a = 25;
// let b = 52;
// let c = 88;

// if(a>b && a>c){
//     console.log(`Max number ${a}`);
// }else if(b>a && b>c){
//     console.log(`Max number ${b}`);
// }else {
//     console.log(`Max number ${c}`);
// }

// ...TASK 4...

// let grade = 45;
//  if(grade > 90){
//     console.log("Exam grade: A");
//  }else if(grade > 80){
//     console.log("Exam grade: B");
//  }else if(grade > 70){
//     console.log("Exam grade: C");
//  }else if(grade > 60){
//     console.log("Exam grade: D");
//  }else if(grade > 50){
//     console.log("Exam grade: F");
//  }else{
//     console.log("You are failed");
//  }

let firstName = "isgandarova";
console.log(firstName.length);
if(firstName.length<5){
    console.log("Qisa adiniz var");
}else if(firstName.length < 10){
    console.log("Orta uzunluglu adiniz var");
}else {
    console.log("Adiniz cox uzundur");
}