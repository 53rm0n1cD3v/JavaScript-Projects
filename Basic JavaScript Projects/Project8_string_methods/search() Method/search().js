function runSearch() {
    const text = document.getElementById("textInput").value;
    const term = document.getElementById("searchInput").value;

    // Convert user input into a RegExp safely
    const regex = new RegExp(term, "i"); // "i" = case-insensitive

    const index = text.search(regex);

    const resultElement = document.getElementById("result");

    if (index === -1) {
        resultElement.textContent = `No match found.`;
    } else {
        resultElement.textContent = `Match found at index: ${index}`;
    }
}
