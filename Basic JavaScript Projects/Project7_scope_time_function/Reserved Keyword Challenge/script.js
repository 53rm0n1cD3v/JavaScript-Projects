// Task 1: Assign a variable the value of a reserved word
var reserved = "return";  // "return" is a reserved word, but allowed as a string


// Task 2: Object constructor function
function Vehicle(make, model, year, color) {
    this.make = make;
    this.model = model;
    this.year = year;
    this.color = color;
}

// Create an object from the constructor
var myCar = new Vehicle("Ford", "Focus", 2018, "Blue");


// Function to display both results in the browser
function showOutputs() {
    document.getElementById("reservedWordOutput").innerHTML =
        "Reserved word stored in variable: " + reserved;

    document.getElementById("constructorOutput").innerHTML =
        "My car is a " + myCar.color + " " + myCar.make + " " +
        myCar.model + " (" + myCar.year + ")";
}
