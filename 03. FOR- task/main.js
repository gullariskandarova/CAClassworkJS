//---I

// for(i=1; i<=100; i++){
//     if(i%2===0) console.log(`${i} cut ededdir`);
// }

//---II

// let str = "Gullar";
// let strlength = str.length;
// for(i=0; i<strlength; i++){
//     console.log(str[i]);
// }

//---III

// let a = 0;
// while (a < 100) {
//   a++;
//   if (a % 10 === 7) console.log(a);
// }

//---IV

// for (i = 0; i < 100; i++) {
//   if (i % 11 === 0) console.log(i);
// }

// ---v

// let a = 88;
// for (i = 0; i < 89; i++) {
//   if (a % i === 0) console.log(i);
// }

//---VI

let i = 0;

while (i < 120) {
  if (i % 3 == 0 && i % 5 == 0) console.log(`fizzbuzz`);
  else if (i % 3 == 0) console.log("Fizz");
  else if (i % 5 ==0) console.log("Buzz");


  i++;
}
