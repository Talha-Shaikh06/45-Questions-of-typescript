var Gender;
(function (Gender) {
    Gender[Gender["Male"] = 0] = "Male";
    Gender[Gender["Female"] = 1] = "Female";
})(Gender || (Gender = {}));
var Person = /** @class */ (function () {
    function Person(name, gender) {
        this.name = name;
        this.gender = gender;
    }
    return Person;
}());
var guests = [
    new Person("Talha", Gender.Male),
    new Person("Jacob", Gender.Female)
];
console.log("you are already invite to dinner:");
for (var i = 0; i < guests.length; i++) {
    console.log("".concat(guests[i].name));
}
// Add new guest
guests.unshift(new Person("Alice", Gender.Female));
// Add new guest in mid of array
guests.splice(1, 0, new Person("Bob", Gender.Male));
// Add new guest end of array
guests.push(new Person("Talha", Gender.Male));
console.log("\nYou found bigger dinner table!");
console.log("You are cordially invited to dinner:");
for (var i = 0; i < guests.length; i++) {
    console.log("".concat(guests[i].name));
}
