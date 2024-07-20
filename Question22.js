// Define an array of numbers
var numbers = [1, 2, 3, 4, 5];
// Intentionally access an invalid array index
// This will produce an "Index out of range" error
var invalidIndexValue = numbers[10];
// Correct the error by checking the array length before accessing the index
if (invalidIndexValue !== undefined) {
    console.log("Value at index 10:", invalidIndexValue);
}
else {
    console.log("Index 10 is out of range. Please correct the program.");
}
