//=====================" This Script For Animation Of Slide Of Home Page When load "=========================//
const track = document.getElementById("sliderTrack");
const slides = document.querySelectorAll(".slides");
const nextBtn = document.getElementById("btn-next");
const prevBtn = document.getElementById("btn-prev");

const totalSlides = slides.length;
let counter = 0;
let index = 0;

function updateSlide() {
  track.style.transition = "transform 0.5s ease";
  track.style.transform = `translateX(-${index * 100}%)`;
}

function moveSlide(direction) {
  counter += direction;
  index = ((counter % totalSlides) + totalSlides) % totalSlides;
  updateSlide();
  console.log("Slide number:", counter + 1);
}

nextBtn.addEventListener("click", () => moveSlide(1));
prevBtn.addEventListener("click", () => moveSlide(-1));

let autoPlay = setInterval(() => moveSlide(1), 4000);
track.addEventListener("mouseover", () => clearInterval(autoPlay));
track.addEventListener(
  "mouseout",
  () => (autoPlay = setInterval(() => moveSlide(1), 4000))
);

updateSlide();

//-----------------------------------------------" End "-----------------------------------------------------//
//==========" This Is Script For Animation Of Header When And background When Click on Anu button "=========//
const sliderTrackEl = document.getElementById("sliderTrack");
const slideItems = Array.from(document.querySelectorAll(".slides"));
const btnNext = document.getElementById("btn-next");
const btnPrev = document.getElementById("btn-prev");

let currentIndex = 0;
const slidesCount = slideItems.length;

function clearAllAnimate() {
  slideItems.forEach((slide) => {
    slide
      .querySelectorAll(
        ".h6-slide, .h1-slide, .link-slide-left, .link-slide-right"
      )
      .forEach((el) => el.classList.remove("animate"));
  });
}

function animateSlideElements(idx, initial = false) {
  const els = slideItems[idx].querySelectorAll(
    ".h6-slide, .h1-slide, .link-slide-left, .link-slide-right"
  );
  void slideItems[idx].offsetWidth;

  if (initial) {
    els.forEach((el) => el.classList.add("animate"));
  } else {
    els.forEach((el, i) => {
      setTimeout(() => el.classList.add("animate"), i * 100);
    });
  }
}

function goTo(n, initial = false) {
  currentIndex = (n + slidesCount) % slidesCount;
  sliderTrackEl.style.transform = `translateX(-${currentIndex * 100}%)`;
  clearAllAnimate();
  animateSlideElements(currentIndex, initial);
}

btnNext.addEventListener("click", () => goTo(currentIndex + 1));
btnPrev.addEventListener("click", () => goTo(currentIndex - 1));

let auto = setInterval(() => goTo(currentIndex + 1), 4000);
sliderTrackEl.addEventListener("mouseenter", () => clearInterval(auto));
sliderTrackEl.addEventListener(
  "mouseleave",
  () => (auto = setInterval(() => goTo(currentIndex + 1), 4000))
);

window.addEventListener("load", () => goTo(0, true));
//-----------------------------------------------" End "-----------------------------------------------------//
//==" This Script For Animation Of ' Booking , Video , Testimonials , Newsletter And Footer ' When Reload "==//
document.addEventListener("DOMContentLoaded", () => {
  const video = document.querySelector(".video");

  function checkVisibility(element) {
    if (!element) return;
    const rect = element.getBoundingClientRect();
    const windowHeight = window.innerHeight;

    if (rect.top < windowHeight && rect.bottom > 0) {
      element.classList.add("show");
    }
  }

  function checkAll() {
    checkVisibility(video);
  }

  checkAll();

  window.addEventListener("scroll", checkAll);
});
//-----------------------------------------------" End "-----------------------------------------------------//
