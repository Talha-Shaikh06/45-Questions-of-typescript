var Invitation = /** @class */ (function () {
    function Invitation() {
        this.guests = [
            { name: 'Alice', attends: true },
            { name: 'Bob', attends: true },
            { name: 'Charlie', attends: false },
            { name: 'David', attends: true },
            { name: 'Eve', attends: true }
        ];
    }
    Invitation.prototype.getGuests = function () {
        return this.guests;
    };
    Invitation.prototype.inviteNewGuest = function (newGuestName) {
        var newGuest = { name: newGuestName, attends: true };
        this.guests.push(newGuest);
    };
    Invitation.prototype.sendInvitations = function () {
        this.guests.forEach(function (guest) {
            if (guest.attends) {
                console.log("Inviting ".concat(guest.name, " to dinner."));
            }
            else {
                console.log("".concat(guest.name, " cannot attend dinner."));
            }
        });
    };
    return Invitation;
}());
var invitation = new Invitation();
invitation.sendInvitations(); // Output:
// Inviting Alice to dinner.
// Inviting Bob to dinner.
// David cannot attend dinner.
// Eve cannot attend dinner.
// Someone cancels
invitation.inviteNewGuest('Frank');
invitation.sendInvitations(); // Output:
