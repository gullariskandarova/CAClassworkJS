//----------------------------------------------------- TASK 1 -----------------------------------------------------

// findFirstNotRepeatedChar adlı bir function yaradın. Bu function göndərdiyiniz string-in ilk təkrarlanmayan
// hərfini qaytarsın. Nəticə =====>> "e"

// let findFirstNotRepeatedChar = (string) => {
//   let newStr = "";
//   for (let i = 0; i < string.lenght; i++) {
//     string.indexOf(string[i]) === string.lastIndexOf(string[i]) ? (newStr += string[i]) : null;
//   }

//   return newStr[0];
// }

// console.log(findFirstNotRepeatedChar("abacddbecz"));

// ----------------------------------------------------- TASK 2 -----------------------------------------------------

// charCount adlı function yaradın. Bu function 2 ədəd argument qəbul edir. 2-ci göndərdiyiniz hərf 1-cinin içərisində
// neçə dəfə təkrarlanıbsa onun sayısını göstərin.
// Nəticə: 3

// let charCount = (str, letter) => {
//   let countLetter = 0;
//   for (let i = 0; i < str.length; i++) {
//     if (str[i].toLocaleLowerCase() === letter.toLocaleLowerCase())
//       countLetter++;
//   }
//   return countLetter;
// };

// console.log(charCount('w3rescource.com', 'c'));

//----------------------------------------------------- TASK 3 -----------------------------------------------------

// makeId adlı function yaradın. Bu function qəbul etdiyi rəqəm uzunluğunda random ID verməlidir.
// Məsələn =====>> 4SGqCfrz

var charList = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
let newStr = "";
let makeId = (len) => {
  let temp = charList.length;
  for (let i = 0; i <= len; i++) {
    
  }
};

console.log(makeId(8));
