var guests = [
    { name: 'Alice' },
    { name: 'Bob' },
    { name: 'Charlie' },
    { name: 'David' },
    { name: 'Eve' },
];
console.log('You can invite only two people for dinner.');
while (guests.length > 2) {
    var guest = guests.pop();
    console.log("Sorry, ".concat(guest.name, ", you're not invited to dinner."));
}
guests.forEach(function (guest) {
    console.log("".concat(guest.name, ", you're still invited to dinner."));
});
while (guests.length > 0) {
    guests.pop();
}
console.log(guests); // prints an empty array
