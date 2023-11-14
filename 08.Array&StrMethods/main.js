/////=========== Task 1=============/////
const text = "Java is awesome. Java is fun";
let javascript = text.replaceAll("Java", "Javascript");
// console.log(javascript);

////============ Task 2=============////

// mixUp adlı function yaradın. function 2 parametr qəbul edir. Ən sonda aşağıdakı kimi
// nəticə çıxardın.
function mixUp(a, b) {
  return b.slice(0, 2) + a.slice(2) + " " + a.slice(0, 2) + b.slice(2);
}
// console.log(mixUp("val", "pur")); //'pul var'
// console.log(mixUp("donce", "gevlet")); //'gence dovlet'

/////==========TASK 3 =============////

// verbing adlı function yaradın. Bu function bir parametr(feil) qəbul edir. Bu feil əgər 3 hərfdən
// kiçikdirsə sözün özün return edin. Əgər sonu "ing" ilə bitirsə sonuna "ly" əlavə edin. Digər
// hallarda sözün sonuna "ing" əlaavə edin.
function verbing(word) {
  if (word.length < 3) {
    return word;
  } else if (word.endsWith("ing")) {
    return word + "ly";
  } else {
    return word + "ing";
  }
}

// console.log(verbing('go')); // go
// console.log(verbing('swim')); //swiming
// console.log(verbing('swiming')); //swimingly

////==============TASK 4==============/////

// Sözün palindrom olub olmadığını yoxlayın.
let result;
function isPalindrome(string) {
  if (string === string.split("").reverse().join("")) {
    result = "is polindrom";
  } else {
    result = "is not polindrom";
  }
  return result;
}

// console.log(isPalindrome("radar"));

const array = [1, 2, 3, 4, 5, 6, 7, 8];
const length = 4;
let newArr = [];
function splitIntoChunk(arr, len) {
 console.log( arr.slice(0, len));
  console.log(arr.slice(arr[len - 1])); 
}

console.log(splitIntoChunk(array, length)); // [ [ 1, 2, 3, 4 ], [ 5, 6, 7, 8 ] ]
