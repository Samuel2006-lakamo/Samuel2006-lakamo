import {PI, test} from './modile.js';

console.log(PI);
const mothod = test(2, 3);
console.log(mothod)

function passwordGenerator(length, useUppercase, useLowercase, useNumbers, useSymbols) {
  const lowercaseChar = 'abcdefghijklmnopqrstuvwxyz'
  const uppercaseChar = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  const numberChar = '1234567890'
  const symbolChar = '@#$_&-()/'
  
  
  let allowChar = '';
  let password = ''
  
  allowChar += useLowercase? lowercaseChar: '' ;
  allowChar += useUppercase? uppercaseChar: '' ;
  allowChar += useNumbers? numberChar: '' ;
  allowChar += useSymbols? symbolChar: '' ;
  
  if (length === 0 ) {
    console.log('password must be a longer than 0 ')
 }
 if (allowChar.length === 0) {
   console.log('atleast select one character')
 }
 for (let i = 0; i < length; i++) {
       const randomIndex =Math.floor(Math.random() * allowChar.length); 
       password += allowChar[randomIndex];
 }
  return password;
  // Tab to edit
}

const passwordLength = 12;
const useUppercase = true;
const useLowercase = true;
const useNumbers = true;
const useSymbols = true;
let password = passwordGenerator(passwordLength, useUppercase, useLowercase, useNumbers, useSymbols);
console.log(`Generated password is: ${password}`);

/*numbers = ['apple','orange','mango'];
numbers.forEach(capitalize);
function capitalize(value, index, array) {
  array[index] = value.charAt(0).toUpperCase() + value.slice(2);
  console.log(array) 
  // Tab to edit
}*/

/*const date = ['2024-1-23','2024-3-5'];
const formatedDate = date.map(updateDate);
console.log(formatedDate);
function updateDate(element) {
    const part = element.split('-')
  return `${part[1]}/${part[2]}/${part[0]}`;
}*/

/*function Car(name, model, price) {
  this.name = name,
  this.model = model,
  this.price = price
}
const car1 = new Car('golf', 'latest', 199);
console.log(car1.name);
console.log(car1.model);
console.log(car1.price);*)
/*const person1 = {
  name:'samuel',
  age: 16,
  sayHello: function () {
    console.log(`${this.name} say hello`)
    // Tab to edit
  }
}
person1.sayHello()*/
/*class product {
  constructor( name, price) {
    this.name = name,
    this.price = price
  }
  displayGreeting(){
    console.log(`hello ${this.price }ask me t0 greet you`);
  }
}
const product1 = new product('hey', 165);
console.log(product1.name);
product1.displayGreeting()*/
/*class user{
  static userCount = 0;
  
  constructor(username) {
    this.username = username;
    user.userCount++;
  }
  static getUsercount(){
    console.log(user.userCount)
  }
}
const user1 = new user('samuel');

console.log(user1.username);
user.getUsercount();*/

/*class Animal{
static alive = true;
      eat(){
        console.log(`the ${this.name} is eating`)
      }
}
class rabbit extends Animal{
  name = 'rabbit'
  run() {
    console.log(`the ${this.name} is running`)
  }
}
class Bird extends Animal {
  name = 'bird';
}
class fish extends Animal {
  name = 'fish';
}
const rabbit1 = new rabbit()
const fish1 = new fish()
const bird = new Bird()
console.log(Animal.alive);
console.log(Animal.alive);
rabbit1.eat();
rabbit1.run();
bird.eat();
bird.run();*/


/*class Animal {
  constructor(name){
    this.name = name;
  }
  eat() {
    console.log(`the ${this.name} is eating`)
  }
}
class rabbit extends Animal {
  constructor(name){
    super(name);
  }
  run(){
    console.log(`the ${this.name} is running`)
  }
}
class Bird extends Animal {
}
class fish extends Animal {
  name = 'fish';
}
const rabbit1 = new rabbit('rabbit');
rabbit1.run()*/

/*class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }
  
  set width(newWidth){
    if (newWidth > 0) {
     this.$width = newWidth;
    }
    else{
      console.log('number must be a positive one')
    }
  }

 set height(newHeight) {
    if (newHeight > 0) {
     this.$height = newHeight;
    }
    else {
      console.log('number must be a positive one')
    }
  }
  get area(){
    return `${this.$width * this.$height}`
  }
  get width(){
    return this.$width;
  }
    get height() {
    return this.$height;
  }
  
}
const rectangle = new Rectangle(099,11)
console.log(rectangle.area)*/
/* 
let a = 1;
let b = 2;
console.log([a, b] = [b, a])
*/

/*let array = [1,2,3,5, 7];
let [array1,array2,array3,array4,array5,array6,array7,array8] = array;
console.log(array5)*/

/*function displayPerson({name,rel ,job = 'employee'}) {
  console.log(`my name is ${name} am ${job}`)
}
let person1 = {
  name: 'samuel',
  rel: 'single'
}
displayPerson(person1)
const { name, rel, job = 'unemployed' } = person1;
console.log(rel, name, job)*/

/*const person = {
  name: 'samuel',
  age: 17,
  hobbies: ['playing', 'singing','coding'],
  address:{
    street: 'ecwa church',
    num: 7,
    country: 'Nigeria'
  }
}
console.log(person.hobbies[0])
console.log(person.address.num);
for (const property in person.address){
  console.log(person.address[property]);
}*/

/*class person{
  constructor(name, age, ...address){
    this.name = name;
    this.age = age;
    this.address = new Address(...address);
  }
}
class Address{
  constructor(street, country, num){
    this.street = street;
    this.country = country;
    this.num = num;
  }
}
const person1 = new person('samuel',18,'tufa','ecwa church',15)
console.log(person1)*/

const fruit = [{name:'apple', color:'red', calories: 302},
               {name:'orange', color:'orange', calories: 33},
               {name:'grapes', color:'blue', calories: 40}];

 const num = [1,2,3,4,5,6,7,8,9,10,11,'hello','boy','apple'];
let numSort = num.sort(() => Math.random() - 0.5);
console.log(numSort);
/* const filter = fruit.filter(fruit => fruit.calories < 30)
 console.log(filter)

fruit.forEach(fruit => console.log(fruit.calories));
const map = fruit.map(fruit => fruit.name);
const calories = fruit.map(fruit => fruit.calories);
const color = fruit.map(fruit => fruit.color);

console.log(map)
console.log(color)
console.log(calories)*/

/*const reduce = fruit.reduce( (max,fruit) => fruit.calories > 
max.calories ? fruit : max)
console.log(reduce)*/

const cards = [1,2,3,-3,4,5,6,7,8,9,'k','q','p'];
//array.sort(() => Math.random() - 0.5);
shuffle(cards);
console.log(cards)
function shuffle(array) { 
  for (let i = array.length - 1; i  > 0 ; i--) {
    const random = Math.floor(Math.random() * (i + 1 ));
    
 [array[i], array[random]] = [array[random], array[i]];
  }
  
}

let timeoutId;
function startTimeout() {
  // Tab to edit
  timeoutId = setTimeout(() => alert('hello world'),3000)
  console.log('started')
  
}
function resetTimeout() {
  // Tab to edit
  clearTimeout(timeoutId);
  console.log('ended')
}



function task1(callback) {
  setTimeout(() => {console.log('task 1'); callback(),3000})
}
function func2() {
  console.log('task 2')
console.log('task 3')
console.log('task 4')
  // Tab to edit
}

task1(func2);