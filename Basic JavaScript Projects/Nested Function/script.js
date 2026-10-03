function outerFunction() {

    function innerFunction() {
        return "This text comes from the INNER function.";
    }

    document.getElementById("nestedOutput").innerHTML =
        "Outer function ran successfully. " + innerFunction();
}
