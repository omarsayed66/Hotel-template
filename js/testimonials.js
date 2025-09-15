//==" This Script For Animation Of ' Booking , Video , Testimonials , Newsletter And Footer ' When Reload "==//
document.addEventListener("DOMContentLoaded", () => {
  const testimonial = document.querySelector(".testimonial");

  function checkVisibility(element) {
    if (!element) return;
    const rect = element.getBoundingClientRect();
    const windowHeight = window.innerHeight;

    if (rect.top < windowHeight && rect.bottom > 0) {
      element.classList.add("show");
    }
  }

  function checkAll() {
    checkVisibility(testimonial);
  }

  checkAll();

  window.addEventListener("scroll", checkAll);
});
//-----------------------------------------------" End "-----------------------------------------------------//
//=====================" This Script To Slide In This Section By The Two Buttons Arrow "=====================//
document.addEventListener("DOMContentLoaded", () => {
  const widthBox = document.querySelector(".width-box");
  const boxes = document.querySelectorAll(".all-box");
  const prevBtn = document.querySelector(".button-one");
  const nextBtn = document.querySelector(".button-two");

  let index = 0;

  function getVisibleCount() {
    return window.innerWidth <= 768 ? 1 : 2;
  }

  function updateSlide() {
    const visibleCount = getVisibleCount();
    const boxWidth = boxes[0].offsetWidth + 25;
    const maxIndex = boxes.length - visibleCount;

    if (index > maxIndex) index = maxIndex;
    if (index < 0) index = 0;

    const translateX = -(index * boxWidth);
    widthBox.style.transform = `translateX(${translateX}px)`;

    nextBtn.disabled = index === maxIndex;
    nextBtn.classList.toggle("disabled", index === maxIndex);
  }

  nextBtn.addEventListener("click", () => {
    index++;
    updateSlide();
  });

  prevBtn.addEventListener("click", () => {
    index--;
    updateSlide();
  });

  window.addEventListener("resize", updateSlide);

  updateSlide();
});
//-----------------------------------------------" End "-----------------------------------------------------//
