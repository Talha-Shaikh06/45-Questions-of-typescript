interface Guest {
    name: string;
    attends: boolean;
  }
  
  class Invitation {
    private guests: Guest[];
  
    constructor() {
      this.guests = [
        { name: 'Alice', attends: true },
        { name: 'Bob', attends: true },
        { name: 'Charlie', attends: false },
        { name: 'David', attends: true },
        { name: 'Eve', attends: true }
      ];
    }
  
    getGuests(): Guest[] {
      return this.guests;
    }
  
    inviteNewGuest(newGuestName: string): void {
      const newGuest = { name: newGuestName, attends: true };
      this.guests.push(newGuest);
    }
  
    sendInvitations(): void {
      this.guests.forEach((guest) => {
        if (guest.attends) {
          console.log(`Inviting ${guest.name} to dinner.`);
        } else {
          console.log(`${guest.name} cannot attend dinner.`);
        }
      });
    }
  }
  
  const invitation = new Invitation();
  invitation.sendInvitations(); // Output:
  invitation.inviteNewGuest('Frank');
  invitation.sendInvitations(); // Output:
