function highlightItems() {
  const elements = document.getElementsByClassName("item");

  // Loop through the HTMLCollection
  for (let i = 0; i < elements.length; i++) {
    elements[i].style.backgroundColor = "yellow";
    elements[i].style.padding = "10px";
  }
}
