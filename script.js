let text = "Jason Hayes"
let length = text.length
console.log(length);

let text1 = "Hello Word"
let char = text.charAt(0)
console.log(char);

let text2 = "Emin"
let text3 = "Muradov"
let text4 = text2.concat(" ", text3)
console.log(text4);

let text5 = "e.g., 'user@example.com'"
let part = text.slice(2, 10)
console.log(part);

let str = "ERROR: Disk not found"
let part1 = str.substring(3, 12)
console.log(part1); 

let text6 = "ERROR: Disk not found"
let part2 = text.slice(3, 8)
console.log(part2);

let text7 = "Hello guys"
let text8 = text7.toLocaleUpperCase(3, 5)
console.log(text8);

let text9 = "Hello guys"
let text10 = text7.toLocaleLowerCase(1, 3)
console.log(text10);

let text11 = "       class      "
let text12 = text11.trim()
console.log(text12);

let text13 = "     Hello World!     ";
let text14 = text13.trimStart();
console.log(text14);

let text15 = "     Hello World!     ";
let text16 = text15.trimEnd();
console.log(text16);

let text17 = "12"
let padded = text17.padStart(4, "10")
console.log(padded);

let text18 = "20"
let padded1 = text18.padEnd(2, "14")
console.log(padded1);

let text19 = "I hate resposive desing"
let result = text19.repeat(4)
console.log(result);

let text20 = "I love Java Script"
let newText = text20.replace("Love", "Java Script")
console.log(newText);

let text21 = "hello world" 
let text22 = text21.split("|")
console.log(text22);

let text23 = "Hello world, welcome to the universe."
let include = text23.includes("world")
console.log(include);

let text24 = "The sky turned golden as the sun slowly dipped behind the distant hills.";
let startsWith = text.startsWith("sky");
console.log(startsWith);

let text25 = "The sky turned golden as the sun slowly dipped behind the distant hills.";
let startsWith2 = text.startsWith("dipped");
console.log(startsWith2);

function getLastChar(path) {
    return path[path.length - 1];
  }

  const num = 5
  const numTostring = num.toString()
  console.log(num);
  console.log(num === numTostring);

  let x = "9.656"
  Number.parseInt(0)
  console.log(Number.parseInt(x));

const evenOROdd = (num) =>  num % 2 === 0 ? "even number" : "odd number"
console.log(evenOROdd(3));

const students = ["Esmiralda", "Resul", "Emin", "Turan", "Aqsin"]
console.log(students);

students.push("Ilkin")
console.log(students);

students.pop()
console.log(students);

const firstName = students.unshift("Ilkin")
console.log(firstName);
console.log(students);

const myGirls = ["Cecilie", "Lone"];
const myBoys = ["Emil", "Tobias", "Linus"];

const myChildren = myGirls.concat(myBoys);
const a = [...myBoys, ...myGirls]
console.log(a);

const  work = {
  title: "Fullstack Developer",
  slary: 7000
}

const person = {
  name: "Emin",
  surname: "Muradov"
}

const worker = {
  ...work,
  ...person
}
console.log(worker);

const fruits = ["Apple", "Orange", "Apple", "Mango"];
let itemIndex = fruits.indexOf("Apple")
fruits.splice(itemIndex, 1)
console.log(fruits);

// for(let i = 0; i < 4; i++){
//  console.log("loop run");
//  fruits.pop()
// }

fruits.map(value => {
  console.log(value);
})

console.log(fruits);

//const numbers = [1, 2, 3, 4, 5]
//const numbers2 = []
//numbers.map(number => {
  //numbers2.push(number * 2);
//})
//console.log(numbers2);

// yeni tapsiriq

function longWords(sentence){
  return sentence.split(" ").filter(word => word.length > 4)
}
console.log(longWords("I love java script but I hate responsive desing"));

function toUSD(arr) {
  return arr.map(n => n + "USD");
}
console.log(toUSD([10, 20, 30]));

function removeVowels(str) {
  return str.replace(/[aeiouy]/gi, "");
}
console.log(removeVowels("JavaScript is awesome"));

function capitalizeWord(arr){
  return arr.map(w => w.charAt(0).toLocaleUpperCase() + w.slice(1))
}
console.log(capitalizeWord(["hello", "how are you", "hey my best friend"]));

function multiples(arr){
  return arr.filter(n => n % 3 ===0 || n % 5 === 0)
}
console.log(multiples([2, 5, 6, 9, 12, 18, 23]));

function initals(name){
  return name.split(" ").map(w => w[0].toUpperCase()).join(".")
}
console.log(initals("Emin Muradov"));

function avg(arr){
  let sum = arr.reduce((a, b) => a + b, 0)
  return (sum / arr.length).toFixed(2)
}
console.log(avg([20, 40, 60, 80, 100]));

function longestWord(sentence){
  return sentence.split(" ").reduce((a , b) => a.length > b.length ? a : b)
}
console.log(longestWord("How amazing weadher good today"));

function onlynumbers(arr){
  return arr.filter(v => typeof v === "number")
}
console.log(onlynumbers([1, "Hello", 4, 7, "fruite", 23]));

function onlyGmail(arr) {
  return arr.filter(email => email.includes("@gmail.com"));
}
console.log(onlyGmail(["test@gmail.com", "hello@yahoo.com", "user@gmail.com", "test@cloud.com"]));

function nameLengths(arr){
  return arr.map(name => name.length)
}
console.log(nameLengths(["Emin", "Elshan", "Ali"]));

// 12 ci tapsirigi anlamadim
function isDigits(str){
  return 
}


function squaredOver20(arr) {
  return arr.map(n => n ** 2).filter(x => x > 20);
}
console.log(squaredOver20([2, 3, 5, 1, 12, 23]));

function format(str){
  return str.split(",").reverse().join("-")
}
console.log(format("b,t,r,g,h"));

function filterShort(arr){
  return arr.filter(  w => w.length >= 3)
}
console.log(filterShort(["hello", "hi", "class", "top", "genius", "IP"]));

function countChar(str, ch) {
  return str.split("").filter(c => c === ch).length;
}
console.log(countChar("Hello Boss", "IP", "master class"));

function sumEven(arr){
  return arr.filter(n => n % 2 === 0).reduce((a, b) => a + b, 0)
}
console.log(sumEven([2, 4, 7, 9, 12, 34]));

function mapTopObjects(arr){
  return arr.map(n => ({ value: n, isEven: n % 2 === 0}))
}
console.log(mapTopObjects([5, 7 , 9 , 1, 3, 2]));

// 19 cu sual da yaza bilmedim


function startsWithA(arr){
  return arr.filter(w => w[0].toLowerCase() === "a")
}
console.log(startsWithA(["Allow", "Hello", "Ametis", "Class"]));

// 21 ci tapsirigi anlamadim



function halfRounds(arr){
  return arr.map(n => Math.ceil(n / 2))
}
console.log(halfRounds([2, 5, 6, 8, 10]));

function underScore(str){
  return str.replace(/ /g, "_")
}
console.log(underScore("Hello how are you boss"));

function adults(arr) {
  return arr.filter(u => u.age > 18).map(u => u.name);
}
console.log(adults([
  { name: "Emin", age: 23 },
  { name: "Resul", age: 17 },
  { name: "Elshan", age: 20 }
]));


// 25 sual anlamadim