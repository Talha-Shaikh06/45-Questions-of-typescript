var guestList = ["Talha", "Raza", "Dawood", "Azeem"];
var host = "Talha";
console.log("\n################");
console.log("Original Guest List");
for (var _i = 0, guestList_1 = guestList; _i < guestList_1.length; _i++) {
    var guest = guestList_1[_i];
    console.log("Dear ".concat(guest, ", ") +
        "\nI would like to invite you for a dinner. " +
        "\nYours sincerely, " +
        "\n".concat(host));
}
console.log("\n################");
console.log("Updated Guest List");
var addGuest1 = "Taha";
var addGuest2 = "Rafi";
var addGuest3 = "Lata";
guestList.splice(0, 0, addGuest1);
guestList.splice(3, 0, addGuest2);
guestList.push(addGuest3);
console.log("\n################");
console.log("Updated Guest List");
for (var _a = 0, guestList_2 = guestList; _a < guestList_2.length; _a++) {
    var updatedGuest = guestList_2[_a];
    console.log("Dear ".concat(updatedGuest, ", ") +
        "\nI would like to invite you for a dinner. " +
        "\nYours sincerely, " +
        "\n".concat(host));
}
var remainingGuests = guestList.length - 2;
while (remainingGuests > 0) {
    var removeGuest = guestList.pop();
    console.log("Sorry ".concat(removeGuest, ", the dinner table won't arrive in time, and I can only invite two guests."));
    remainingGuests--;
}
console.log("\nInvitations to the two remaining guests");
console.log("\n*** Remaining Invitations ***");
for (var _b = 0, guestList_3 = guestList; _b < guestList_3.length; _b++) {
    var remainingGuest = guestList_3[_b];
    console.log("Dear ".concat(remainingGuest, ", ") +
        "\nYou're still invited to dinner. Looking forward to seeing you!" +
        "\n\nSincerely, ".concat(host));
}
console.log("Empty the list");
guestList.length = 0;
// Print to make sure the list is empty
console.log("\n*** Empty Guest List ***");
console.log(guestList);
var numGuests = guestList.length;
console.log(numGuests);
