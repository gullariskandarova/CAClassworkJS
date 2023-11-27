let fullName = "Gullar";
let age = 19;
let skills = ["piano", "code", "eat", "sleep"];

localStorage.setItem("fullName", fullName);
localStorage.setItem("skills", skills);
console.log(localStorage.getItem("skills"));
localStorage.clear();
