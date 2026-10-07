document.getElementById("regForm").addEventListener("submit", function(e) {

  const fname = document.getElementById("fname").value.trim();
  const lname = document.getElementById("lname").value.trim();
  const email = document.getElementById("email").value.trim();
  const errorMsg = document.getElementById("errorMsg");

  let errors = [];

  if (fname === "") {
    errors.push("First name is required.");
  }

  if (lname === "") {
    errors.push("Last name is required.");
  }

  if (email === "") {
    errors.push("Email is required.");
  } else if (!email.includes("@") || !email.includes(".")) {
    errors.push("Email format is invalid.");
  }

  if (errors.length > 0) {
    e.preventDefault(); // stop form submission
    errorMsg.style.color = "red";
    errorMsg.style.marginTop = "10px";
    errorMsg.innerHTML = errors.join("<br>");
  } else {
    errorMsg.innerHTML = "";
  }
});
