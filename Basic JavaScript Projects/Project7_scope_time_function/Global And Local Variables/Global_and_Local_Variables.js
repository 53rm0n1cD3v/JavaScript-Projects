function Multiply_Numbers_1() {
    var A = 11;                 // A is LOCAL on purpose
    document.write(7 * A + "<br>");
}

function Multiply_numbers_2() {
    document.write(A * 3);      // This WILL cause an error (A is not defined here)
}

Multiply_Numbers_1();
Multiply_numbers_2();           // ERROR happens here
