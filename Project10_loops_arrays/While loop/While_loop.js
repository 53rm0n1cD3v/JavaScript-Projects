function count_To_Ten() {
	var A = "";
	var X = 1;
	while (X < 11) {
		A += "<br>" + X;
		X++;
	}
	document.getElementById("Counting_To_Ten").innerHTML = A;
}