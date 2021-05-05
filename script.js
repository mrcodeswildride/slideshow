let slider = document.getElementById(`slider`)
let currentSlide = document.getElementById(`slide1`)

slider.addEventListener(`input`, changeSlide)

function changeSlide() {
  currentSlide.style.display = `none`
  currentSlide = document.getElementById(`slide${slider.value}`)
  currentSlide.style.display = `block`
}
