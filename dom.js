// Template Litreal
const btn = document.querySelector('button')
const message = `We are please to inform you that your application has been accepted. Welcome to the team!, your account number is 1234567890. Please let us know if you need anything.`;
console.log(message)

// arrow function : is also  a return function

const addTwo = (num, num1) => {
  num + num
  const sum = num + num1
   return sum >= 100 ? 'sum is greater than 100' : 'sum is less than 100'
}
console.log(addTwo(9))


// array function

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const odd = arr.filter(i => i % 2 !== 0)
console.log(odd)

btn.addEventListener('click', () => {
  btn.classList.toggle('btn')
})

const students = [{
    name: "hannah",
    age: 19,
    level: "college",
    score: 75,
    grade: "A"
  },
  {
    name: "messi",
    age: 19,
    level: "college",
    score: 75,
    grade: "B"
  },
  {
    name: "love",
    age: 19,
    level: "college",
    score: 75,
    grade: "C"
  },
];

const adult = students.filter(item => item.age >= 18)
console.log(adult)

const gradeA = students.filter(item => item.grade === "A")


const surname = ["Apaokogi", "abag", "Micheal", "Rebecca", "klaus", "Mikealson", "Audu", "obiuun"]

const flogLine = surname.sort()
console.log(flogLine)


const randoNum = [24, 43, 56, 76, 12, 67, 32, 3, 90]


const sortedNum = randoNum.sort((a, b) => a - b)

sortedNum.forEach(item => console.log(item * 2))

const byTwo = sortedNum.map(item => item + 2)

const hasA = surname.map(name => name.includes("A"))
console.log(hasA)

console.log(sortedNum)


const sum = sortedNum.reduce((acc, curr) => acc + curr, 0)
console.log(sum)

const products = [{
    brand: "Apple",
    name: "iPhone 13",
    price: 999,
  },
  {
    brand: "Apple",
    name: "MacBook Air",
    price: 1299,
  },
  {
    brand: "Apple",
    name: "AirPods Pro",
    price: 249,
  },
  {
    brand: "Samsung",
    name: "Galaxy S21",
    price: 799,
  },
  {
    brand: "Samsung",
    name: "Galaxy Watch 4",
    price: 299,
  },
  {
    brand: "Samsung",
    name: "Galaxy Buds Pro",
    price: 199,
  },
  {
    brand: "Sony",
    name: "PlayStation 5",
    price: 499,
  },
  {
    brand: "Sony",
    name: "WH-1000XM4 Headphones",
    price: 349,
  },
  {
    brand: "Sony",
    name: "BRAVIA OLED TV",
    price: 1999,
  },
];

console.log(products);

const pttp = products.filter(item => item.brand === 'Sony').map(item => item.price).reduce((acc, curr) => acc + curr, 0);
console.log(`Total amount of sony product is $${pttp}`)



const num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const naw = [...randoNum, ...num]
console.log(naw)

const niii = naw.sort((a, b) => a - b)
console.log(niii)

const newArr = randoNum.concat(num)


console.log("Random Number Array", randoNum)
console.log("Array with Random Number and Number", newArr)


// spreading obect

const obj = {
  name: "John",
  age: 30,
  country: "USA",
  skill: "JavaScript",
  hobby: "womanizing"
}
const copyObj = {...obj,
location: "Lagos",
state:"Lagos",
habbit: "viewing view-once"
}

console.log(copyObj)


// destructuring object

const {name, age, country, ...others }= obj;
console.log(`${name}, ${age }, ${country}`)
console.log(others)


const user =[]
// async
const response = "https://jsonplaceholder.typicode.com/users"
// console.log(response)
fetch(response)
 .then(response => response.json())
 .then(data => console.log(data))
  .catch(err => console.log(err))

 const fetchData = async () => {
   const response = await fetch("https://jsonplaceholder.typicode.com/users")
   const data = await response.json();
   user.push(...data)
 }
 fetchData()
 setTimeout(() => {
  console.log(user)
 }, 3000)
  console.log(user)