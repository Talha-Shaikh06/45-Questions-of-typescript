var dinnerGuests = [
    { name: 'Albert', profession: 'Scientist' },
    { name: 'Bob', profession: 'Engineer' },
    { name: 'Cindy', profession: 'Teacher' }
];
function inviteToDinner(guest) {
    console.log("Dear ".concat(guest.name, ","));
    console.log("I would be honor if you could join me for dinner.");
    console.log("As a renowned ".concat(guest.profession, ", I'm sure you will bring amazing stories on our dinner"));
    console.log("Please let me know if you can attend, and we can discuss the details");
    console.log("Best regards, [Talha]");
    console.log();
}
dinnerGuests.forEach(function (guest) {
    inviteToDinner(guest);
});
