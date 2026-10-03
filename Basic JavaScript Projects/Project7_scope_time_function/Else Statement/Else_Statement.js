function Age_Function() {
	Age = document.getElementById("Age").value;
if (Age >= 18) {
	Drive = "You are old enough to drive";
	}
else {
	Drive = "You are too young to drive";
	}
	document.getElementById("How_old_are_you?").innerHTML = Drive;
}