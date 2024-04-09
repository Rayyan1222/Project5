var slideIndex = 0;

function changeSlide(n) {
  showSlide(slideIndex += n);
}

// Function to display the current slide
function showSlide(n) {
  var slides = document.getElementsByClassName("slider-image");
  if (n >= slides.length) { 
    slideIndex = 0; 
  }
  if (n < 0) { 
    slideIndex = slides.length - 1; 
  }
  for (var i = 0; i < slides.length; i++) {
    slides[i].style.display = "none"; 
  }
  slides[slideIndex].style.display = "block"; 
}

showSlide(slideIndex);

changeSlide(0);
