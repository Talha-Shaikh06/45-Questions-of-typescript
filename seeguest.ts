let guestList: string[] = ["Talha", "Raza", "Dawood", "Azeem"];
let host: string = "Talha";

console.log("\n################");
console.log("Original Guest List");

for (let guest of guestList) {
  console.log(`Dear ${guest}, ` +
    `\nI would like to invite you for a dinner. ` +
    `\nYours sincerely, ` +
    `\n${host}`);
}

console.log("\n################");
console.log("Updated Guest List");

let addGuest1: string = "Taha";
let addGuest2: string = "Rafi";
let addGuest3: string = "Lata";
guestList.splice(0, 0, addGuest1);
guestList.splice(3, 0, addGuest2);
guestList.push(addGuest3);

console.log("\n################");
console.log("Updated Guest List");

for (let updatedGuest of guestList) {
  console.log(`Dear ${updatedGuest}, ` +
    `\nI would like to invite you for a dinner. ` +
    `\nYours sincerely, ` +
    `\n${host}`);
}

let remainingGuests = guestList.length - 2;
while (remainingGuests > 0) {
  let removeGuest: string = guestList.pop()!;
  console.log(`Sorry ${removeGuest}, the dinner table won't arrive in time, and I can only invite two guests.`);
  remainingGuests--;
}

console.log("\nInvitations to the two remaining guests");

console.log("\n*** Remaining Invitations ***");
for (let remainingGuest of guestList) {
  console.log(`Dear ${remainingGuest}, ` +
    `\nYou're still invited to dinner. Looking forward to seeing you!` +
    `\n\nSincerely, ${host}`);
}

console.log("Empty the list");
guestList.length = 0;

// Print to make sure the list is empty
console.log("\n*** Empty Guest List ***");
console.log(guestList);

let numGuests: number = guestList.length;
console.log(numGuests);