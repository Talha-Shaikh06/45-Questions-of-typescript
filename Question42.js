// Function to show magicians
function show_magicians1(magicians) {
    console.log("Magicians:");
    for (var _i = 0, magicians_1 = magicians; _i < magicians_1.length; _i++) {
        var magician = magicians_1[_i];
        console.log(magician);
    }
}
// Function to make magicians great
function make_great(magicians) {
    var greatMagicians = [];
    for (var _i = 0, magicians_2 = magicians; _i < magicians_2.length; _i++) {
        var magician = magicians_2[_i];
        greatMagicians.push("the Great ".concat(magician));
    }
    return greatMagicians;
}
// Array of magician's names
var magicianNames1 = ["Merlin", "Houdini", "David Copperfield", "Penn", "Teller"];
// Call make_great to modify the array
var greatMagicians = make_great(magicianNames1);
// Call show_magicians to see the modified list
show_magicians1(greatMagicians);
