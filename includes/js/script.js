const buttons = document.querySelectorAll("[data-carousel-button]")
console.log(buttons);

buttons.forEach(button => {
  button.addEventListener("click", () => {
    const offset = button.dataset.carouselButton === "next" ? 1 : -1
    
    const slides = button
      .closest("[data-carousel]")
      .querySelector("[data-slides]")

    const activeSlide = slides.querySelector("[data-active]")
    let newIndex = [...slides.children].indexOf(activeSlide) + offset
    console.log(activeSlide);
    console.log(newIndex);

    if (newIndex < 0) newIndex = slides.children.length - 1
    if (newIndex >= slides.children.length) newIndex = 0
    
    console.log(newIndex);

    let newindexes = slides.children[newIndex];
    
    console.log(newindexes);
    
    slides.children[newIndex].dataset.active = true
    delete activeSlide.dataset.active
  })
  
})



