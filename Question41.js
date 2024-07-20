// Function to show magicians
function show_magicians(magicians) {
    console.log("Magicians:");
    for (var _i = 0, magicians_1 = magicians; _i < magicians_1.length; _i++) {
        var magician = magicians_1[_i];
        console.log(magician);
    }
}
// Array of magician's names
var magicianNames = ["Merlin", "Houdini", "David Copperfield", "Penn", "Teller"];
// Call the function to show magicians
show_magicians(magicianNames);
