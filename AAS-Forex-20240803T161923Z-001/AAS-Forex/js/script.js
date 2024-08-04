/*JS for gallery-AOD*/

/*Initialize slideIndex to keep track of the current slide*/
let slideIndex = 1;

/*Call the showSlides function with the initial slide index to display the first slide*/
showSlides(slideIndex);

/*Next/previous controls*/
function plusSlides(n) {
  slideIndex += n;
  showSlides(slideIndex);
}

/*Thumbnail image controls*/
function currentSlide(n) {
  slideIndex = n;
  showSlides(slideIndex);
}

/*Display slides and handle active thumbnail image*/
function showSlides(n) {
  let i;
  // Get all slide elements and thumbnail images
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("demo");
  // Get the element for displaying caption text
  let captionText = document.getElementById("caption");

  // Reset slideIndex to the first slide if it exceeds the number of slides
  if (n > slides.length) { 
    slideIndex = 1;
  }
  // Set slideIndex to the last slide if it goes below 1
  if (n < 1) {
    slideIndex = slides.length;
  }

  // Hide all slides
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  // Remove the "active" class from all thumbnail images
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }

  // Display the current slide and add the "active" class to the corresponding thumbnail image
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";

  // Update the caption text with the alternative text of the current image
  captionText.innerHTML = dots[slideIndex - 1].alt;
}

//JS for guessing game-AOD
let correctNumber = Math.floor(Math.random() * 10);
let firstAttempt = true;

function checkGuess() {
    let userGuess = parseInt(document.getElementById('userGuess').value);
    let result = document.getElementById('result');

    if (isNaN(userGuess) || userGuess < 0 || userGuess > 9) {
        result.textContent = 'Please enter a valid number between 0 and 9.';
        return;
    }

    if (userGuess === correctNumber) {
        if (firstAttempt) {
            result.textContent = 'Congratulations! You guessed correctly on your first try. You are entered into the draw!';
        } else {
            result.textContent = 'Congratulations! You guessed the correct number.';
        }
    } else {
        result.textContent = 'Try again!';
    }

    firstAttempt = false;
}

//Alert for Contact page
function response(event){
  event.preventDefault();
  alert('Thank you very contacting us');
}