function slidesSelected(activeSlide = 0) {
  const slides = document.querySelectorAll(".slide");

  slides[activeSlide].classList.add('active')

  for (const slide of slides) {
    slide.addEventListener("click", () => {
      clearActive();
      slide.classList.add("active");
    });
  }
  
  function clearActive() {
    slides.forEach((slide) => {
      slide.classList.remove("active");
    });
  }
}

slidesSelected(0)

