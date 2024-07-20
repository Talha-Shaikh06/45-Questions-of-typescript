var people = [
    { name: "Dawood", age: 25 },
    { name: "Yahya", age: 23 },
    { name: "Ali", age: 22 },
    { name: "Hassan", age: 21 },
    { name: "Hussain", age: 20 },
];
for (var _i = 0, people_1 = people; _i < people_1.length; _i++) {
    var Person = people_1[_i];
    var message = "Hello! you coders ".concat(Person.name);
    console.log(message);
}
