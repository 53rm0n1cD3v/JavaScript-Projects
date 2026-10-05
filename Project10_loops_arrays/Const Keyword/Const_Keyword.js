const Car = {
    make: "Toyota",
    model: "Corolla",
    color: "Blue"
};

function constant_function() {
    document.getElementById("Constant").innerHTML =
        "This car is a " + Car.color + " " + Car.make + " " + Car.model + ".";
}
