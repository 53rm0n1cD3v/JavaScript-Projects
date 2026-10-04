
document.getElementById("convertBtn").addEventListener("click", function () {
    const value = document.getElementById("userInput").value;
    document.getElementById("result").innerHTML = value.toUpperCase();
});
