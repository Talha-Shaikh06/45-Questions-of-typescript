// Function to show magicians
function show_magicians1(magicians: string[]): void {
    console.log("Magicians:");
    for (let magician of magicians) {
        console.log(magician);
    }
}

// Function to make magicians great
function make_great0(magicians: string[]): string[] {
    let greatMagicians: string[] = [];

    for (let magician of magicians) {
        greatMagicians.push(`the Great ${magician}`);
    }

    return greatMagicians;
}

// Array of magician's names
let magicianNames0 = ["Merlin", "Houdini", "David Copperfield", "Penn", "Teller"];

// Call make_great to modify the array
let greatMagicians = make_great(magicianNames0);

// Call show_magicians to see the modified list
show_magicians1(greatMagicians);
