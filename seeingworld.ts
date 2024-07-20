let placesToVisit: string[] = [
    "Paris",
    "USA",
    "Tokyo",
    "Australia",
    "Germany"
];

console.log("Original order:");
console.log(placesToVisit);

console.log("Alphabetical order:");
console.log(placesToVisit);

console.log("Reverse in alphabetical order:");
console.log([...placesToVisit].sort().reverse().join(", "));

console.log("Original order:");
console.log(placesToVisit);

placesToVisit = placesToVisit.reverse();
console.log("Reverse order:");
console.log(placesToVisit);

placesToVisit.sort((a,b) => a.localeCompare(b));
console.log("Alphabetical order (sorted):");
console.log(placesToVisit);

placesToVisit.sort((a,b) => b.localeCompare(a));
console.log("Reverse in alphabetical order (sorted):");
console.log(placesToVisit);