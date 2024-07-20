let car: string = 'subaru';
console.log("Is car == 'subaru'? I predict True.");
console.log(car === 'subaru');

console.log("Is car == 'toyota'? I predict False.");
console.log(car === 'toyota');

console.log("Is car.toLowerCase() == 'subaru'? I predict True.");
console.log(car.toLowerCase() === 'subaru');

console.log("Is car.toLowerCase() == 'SUBARU'? I predict False.");
console.log(car.toLowerCase() === 'SUBARU');

let age: number = 25;
console.log("Is age == 25? I predict True.");
console.log(age === 25);

console.log("Is age != 30? I predict True.");
console.log(age !== 30);

console.log("Is age > 20? I predict True.");
console.log(age > 20);

console.log("Is age < 30? I predict True.");
console.log(age < 30);

console.log("Is age >= 25? I predict True.");
console.log(age >= 25);

console.log("Is age <= 26? I predict True.");
console.log(age <= 26);

let fruits: string[] = ['apple', 'orange', 'banana'];
console.log("Does 'apple' exist in fruits? I predict True.");
console.log(fruits.includes('apple'));

console.log("Does 'grape' exist in fruits? I predict False.");
console.log(fruits.includes('grape'));

let person: { name: string; age: number } = { name: 'John', age: 30 };

console.log("Is person's age less than or equal to 30 and name is 'John'? I predict True.");
console.log(person.age <= 30 && person.name === 'John');

console.log("Is person's age less than or equal to 30 or name is not 'John'? I predict True.");
console.log(person.age <= 30 || person.name !== 'John');

let isAdmin: boolean = true;
let isUser: boolean = false;

console.log("Is isAdmin && isUser? I predict False.");
console.log(isAdmin && isUser);

console.log("Is !isAdmin && isUser? I predict False.");
console.log(!isAdmin && isUser);