function describe_city(city, country) {
    if (country === void 0) { country = "England"; }
    console.log("".concat(city, " is in ").concat(country, "."));
}
// Call the function for three different cities
describe_city("Karachi", "Pakistan");
describe_city("Paris"); // Using the default country
describe_city("New York", "USA");
