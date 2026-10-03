function showButton() {
    const currentHour = new Date().getHours();

    let message = "";

    if (currentHour < 12) {
        message = "Good morning!";
    } else if (currentHour < 18) {
        message = "Good afternoon!";
    } else {
        message = "Good evening!";
    }

    document.getElementById("Button").textContent = message;
}

showButton();
