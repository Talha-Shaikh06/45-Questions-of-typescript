var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var placesToVisit = [
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
console.log(__spreadArray([], placesToVisit, true).sort().reverse().join(", "));
console.log("Original order:");
console.log(placesToVisit);
placesToVisit = placesToVisit.reverse();
console.log("Reverse order:");
console.log(placesToVisit);
placesToVisit.sort(function (a, b) { return a.localeCompare(b); });
console.log("Alphabetical order (sorted):");
console.log(placesToVisit);
placesToVisit.sort(function (a, b) { return b.localeCompare(a); });
console.log("Reverse in alphabetical order (sorted):");
console.log(placesToVisit);
