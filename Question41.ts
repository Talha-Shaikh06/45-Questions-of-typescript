// Function to show magicians
function show_magicians(magicians: string[]): void {
    console.log("Magicians:");
    for (let magician of magicians) {
        console.log(magician);
    }
}

// Array of magician's names
let magicianNames = ["Merlin", "Houdini", "David Copperfield", "Penn", "Teller"];

// Call the function to show magicians
show_magicians(magicianNames);
