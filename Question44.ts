// Function to make a sandwich
function make_sandwich(...items: string[]): void {
    console.log("Sandwich Order:");
    if (items.length === 0) {
        console.log("No items selected. Please choose some ingredients for your sandwich.");
    } else {
        console.log(`You ordered a sandwich with: ${items.join(', ')}`);
    }
    console.log("---------------------");
}

// Call the function with different numbers of arguments
make_sandwich("Turkey", "Cheese", "Lettuce");
make_sandwich("Ham", "Swiss");
make_sandwich();
