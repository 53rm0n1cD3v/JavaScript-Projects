/* ------------------ COUNTDOWN ------------------ */
let slideshowRunning = true;   // NEW — controls slideshow loop

function countdown() {
  let seconds = document.getElementById("seconds").value;
  let timer = document.getElementById("timer");

  function tick() {
    seconds--;
    timer.innerHTML = seconds;

    if (seconds > 0) {
      setTimeout(tick, 1000);
    } else {
      timer.innerHTML = "Time's up!";
      slideshowRunning = false;   // STOP slideshow
    }
  }

  tick();
}

/* ------------------ SLIDESHOW ------------------ */
let slideIndex = 0;
showSlides();

function showSlides() {
  if (!slideshowRunning) return;   // NEW — stops slideshow completely

  let slides = document.getElementsByClassName("mySlides");

  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  slideIndex++;

  if (slideIndex > slides.length) {
    slideIndex = 1;
  }

  slides[slideIndex - 1].style.display = "block";

  setTimeout(showSlides, 2000); // Change image every 2 seconds
}

/* Manual controls */
function plusSlides(n) {
  slideIndex += n - 1;
  showSlides();
}

function currentSlide(n) {
  slideIndex = n - 1;
  showSlides();
}
