function add(a, b) {
    return +a + +b;   // numeric coercion
}

document.getElementById("result").textContent = add("24", 7);
