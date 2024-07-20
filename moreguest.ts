enum Gender {
    Male,
    Female
}

class Person {
    name: string;
    gender: Gender;

    constructor(name: string, gender: Gender) {
        this.name = name;
        this.gender = gender;
    } 
}
let guests: Person[] = [
    new Person("Talha", Gender.Male),
    new Person("Jacob", Gender.Female)
];

console.log("you are already invite to dinner:");
for (let i = 0; i < guests.length; i++) {
    console.log(`${guests[i].name}`);
}
// Add new guest
guests.unshift(new Person("Alice", Gender.Female));
// Add new guest in mid of array
guests.splice(1,0, new Person("Bob", Gender.Male));
// Add new guest end of array
guests.push(new Person("Talha", Gender.Male));

console.log("\nYou found bigger dinner table!");
console.log("You are cordially invited to dinner:");
for (let i = 0; i < guests.length; i++) {
    console.log(`${guests[i].name}`);
}