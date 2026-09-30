function my_Dictionary() {
	var Animal = { /We create KVPs here.
	Species:"Cat",
	Color:"Ginger",
	Age:3,
	Sound:"Meow"
	};
	delete Animal.Sound; //It will delete one KVP, and the HTML file will not display any values as a result.
	document.getElementById("Dictionary") .innerHTML = Animal.Sound;
}
