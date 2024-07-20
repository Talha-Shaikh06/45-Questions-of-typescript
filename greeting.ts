interface Person {
    name: string;
    age: number;
}
const people: Person[] = [
    {name: "Dawood", age:25 },
    {name: "Yahya", age:23 },
    {name: "Ali", age:22 },
    {name: "Hassan", age:21 },
    {name: "Hussain", age:20 },
];

for (const Person of people) {
    const message = `Hello! you coders ${Person.name}`;
    console.log(message);
}