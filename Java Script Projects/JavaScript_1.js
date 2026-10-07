function checkFruit() {
  const fruit = document.getElementById("fruitSelect").value;
  const result = document.getElementById("result");

  switch (fruit) {
    case "apple":
      result.textContent = "Apples are red or green.";
      break;

    case "banana":
      result.textContent = "Bananas are yellow.";
      break;

    case "orange":
      result.textContent = "Oranges are orange.";
      break;

    default:
      result.textContent = "Please choose a fruit.";
      break;
  }
}
