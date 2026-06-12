/* Slides */

const slides =
  document.querySelectorAll(".slide");

/* Button */

const nextBtn =
  document.getElementById("nextBtn");

/* Current Slide */

let currentSlide = 0;

/* Next Slide */

nextBtn.addEventListener("click", () => {

  slides[currentSlide]
    .classList.remove("active");

  currentSlide++;

  if(currentSlide >= slides.length){

    currentSlide = 0;

  }

  slides[currentSlide]
    .classList.add("active");

});