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

const numbers = [1, 2, 3, 4, 5]
const numbers2 = []
numbers.map(number => {
  numbers2.push(number * 2);
})
console.log(numbers2);