var favoriteVehicles = [
    { make: "Honda", model: "CBR600RR" },
    { make: "Ducati", model: "Monster 797" },
    { make: "Kawasaki", model: "Z900" },
    { make: "Yamaha", model: "FZ-6R" },
    { make: "Suzuki", model: "GSX-R600" }
];
favoriteVehicles.forEach(function (vehicle) {
    console.log("I would like to own a ".concat(vehicle.make, " ").concat(vehicle.model, "."));
});
