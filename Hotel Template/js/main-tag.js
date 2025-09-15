// Slider The Diffrent Try
const track = document.getElementById("sliderTrack");
const slides = document.querySelectorAll(".slides");
const nextBtn = document.getElementById("btn-next");
const prevBtn = document.getElementById("btn-prev");
const dotsContainer = document.getElementById("dots");

let index = 0;
const totalSlides = slides.length;

// إنشاء النقط
slides.forEach((_, i) => {
  const dot = document.createElement("span");
  dot.addEventListener("click", () => goToSlide(i));
  dotsContainer.appendChild(dot);
});
const dots = dotsContainer.querySelectorAll("span");

function updateSlide() {
  track.style.transform = `translateX(-${index * 100}%)`;
  dots.forEach((dot, i) => {
    dot.classList.toggle("active", i === index);
  });
}

function nextSlide() {
  index = (index + 1) % totalSlides;
  updateSlide();
}

function prevSlide() {
  index = (index - 1 + totalSlides) % totalSlides;
  updateSlide();
}

function goToSlide(i) {
  index = i;
  updateSlide();
}

nextBtn.addEventListener("click", nextSlide);
prevBtn.addEventListener("click", prevSlide);

// Auto play
let autoPlay = setInterval(nextSlide, 4000);

// إيقاف التشغيل التلقائي عند المرور بالماوس
track.addEventListener("mouseover", () => clearInterval(autoPlay));
track.addEventListener(
  "mouseout",
  () => (autoPlay = setInterval(nextSlide, 4000))
);

updateSlide();
//.............................................................................................Trying........

// For Page Button Popup
const btnPages = document.getElementById("page");
const menu = document.getElementById("menu");
const arrow = document.getElementById("arrow");
btnPages.addEventListener("click", () => {
  pages();
});
function pages() {
  menu.classList.toggle("active");
  btnPages.classList.toggle("active");
  arrow.classList.toggle("active");
  menu.classList.toggle("active-rot");
}

// .........................................................................................................//

// For Menu Button Befroe 990px

// Changing The Figure Of Borders
const menuToggle = document.getElementById("menu-toggle-id");
const nav = document.getElementById("nav");

menuToggle.addEventListener("click", () => {
  menuMedia();
});
function menuMedia() {
  menuToggle.classList.toggle("change");
  nav.classList.toggle("change-visibility");
}

// Hidden And Display THe Navigation Bar

// .........................................................................................................//

window.addEventListener("load", function () {
  // Add the animate class after a small delay for effect
  setTimeout(function () {
    document.getElementById("h-1").classList.add("animate");
  }, 200);
});

window.addEventListener("load", function () {
  // Add the animate class after a small delay for effect
  setTimeout(function () {
    document.getElementById("h-about").classList.add("animate");
  }, 200);
});

window.addEventListener("load", function () {
  // Add the animate class after a small delay for effect
  setTimeout(function () {
    document.getElementById("link-1").classList.add("animate");
  }, 200);
});
window.addEventListener("load", function () {
  // Add the animate class after a small delay for effect
  setTimeout(function () {
    document.getElementById("link-2").classList.add("animate");
  }, 200);
});

// ........................................................................................................//
// .........................................................................................................//

// window.addEventListener("load", function () {
//   // Add the animate class after a small delay for effect
//   setTimeout(function () {
//     document.getElementById("h-2").classList.add("animate");
//   }, 200);
// });

// window.addEventListener("load", function () {
//   // Add the animate class after a small delay for effect
//   setTimeout(function () {
//     document.getElementById("h-about").classList.add("animate");
//   }, 200);
// });

// window.addEventListener("load", function () {
//   // Add the animate class after a small delay for effect
//   setTimeout(function () {
//     document.getElementById("link-1-2").classList.add("animate");
//   }, 200);
// });
// window.addEventListener("load", function () {
//   // Add the animate class after a small delay for effect
//   setTimeout(function () {
//     document.getElementById("link-2-2").classList.add("animate");
//   }, 200);
// });

// ........................................................................................................//
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// const btnRight = document.getElementById("btn-1");
// const btnLeft = document.getElementById("btn-2");

// const slideOne = document.getElementById("slide-1");
// const slideTwo = document.getElementById("slide-2");

// btnLeft.addEventListener("click", () => {
//   leftClick();
// });

// function leftClick() {
//   slideOne.classList.toggle("non-active");
//   slideTwo.classList.toggle("active");
// }

// btnRight.addEventListener("click", () => {
//   righClick();
// });

// function righClick() {
//   slideOne.classList.toggle("non-active");
//   slideTwo.classList.toggle("active");

//   document.getElementById("h-2").classList.add("animate-2");
//   document.getElementById("link-1-2").classList.add("animate-2");
//   document.getElementById("link-2-2").classList.add("animate-2");
// }
// <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

// ............................

// For Booking Part And Video Part Animation When Load And Scroll
// document.addEventListener("DOMContentLoaded", () => {
//   const boxInput = document.querySelector(".box-input");
//   const video = document.querySelector(".video");
//   const testimonial = document.querySelector(".testimonial");
//   const newsletter = document.querySelector(".newsletter");
//   const footer = document.querySelector("footer");

//   function checkVisibility() {
//     const boxTop = boxInput.getBoundingClientRect().top;
//     const boxBottom = boxInput.getBoundingClientRect().bottom;
//     const videoTop = video.getBoundingClientRect().top;
//     const videoBottom = video.getBoundingClientRect().bottom;
//     const testimonialTop = testimonial.getBoundingClientRect().top;
//     const testimonialBottom = testimonial.getBoundingClientRect().bottom;
//     const newsletterTop = newsletter.getBoundingClientRect().top;
//     const newsletterBottom = newsletter.getBoundingClientRect().bottom;
//     const footerTop = footer.getBoundingClientRect().top;
//     const footerBottom = footer.getBoundingClientRect().bottom;
//     const windowHeight = window.innerHeight;

//     // لو أي جزء من العنصر ظاهر في الشاشة
//     if (boxTop < windowHeight && boxBottom > 0) {
//       boxInput.classList.add("show");
//     }

//     // لو أي جزء من العنصر ظاهر في الشاشة
//     else if (videoTop < windowHeight && videoBottom > 0) {
//       video.classList.add("show");
//     }
//     // لو أي جزء من العنصر ظاهر في الشاشة
//     else if (testimonialTop < windowHeight && testimonialBottom > 0) {
//       testimonial.classList.add("show");
//     }
//     // لو أي جزء من العنصر ظاهر في الشاشة
//     else if (newsletterTop < windowHeight && newsletterBottom > 0) {
//       newsletter.classList.add("show");
//     }
//     // لو أي جزء من العنصر ظاهر في الشاشة
//     else if (footerTop < windowHeight && footerBottom > 0) {
//       footer.classList.add("show");
//     }
//   }

//   // فحص عند تحميل الصفحة
//   checkVisibility();

//   // فحص عند النزول بالسكرول
//   window.addEventListener("scroll", checkVisibility);

// });

document.addEventListener("DOMContentLoaded", () => {
  const boxInput = document.querySelector(".box-input");
  const video = document.querySelector(".video");
  const testimonial = document.querySelector(".testimonial");
  const newsletter = document.querySelector(".newsletter");
  const footer = document.querySelector("footer");

  function checkVisibility(element) {
    if (!element) return; // لو العنصر مش موجود مايحصلش خطأ
    const rect = element.getBoundingClientRect();
    const windowHeight = window.innerHeight;

    // لو أي جزء من العنصر ظاهر في الشاشة
    if (rect.top < windowHeight && rect.bottom > 0) {
      element.classList.add("show");
    }
  }

  function checkAll() {
    checkVisibility(boxInput);
    checkVisibility(video);
    checkVisibility(testimonial);
    checkVisibility(newsletter);
    checkVisibility(footer);
  }

  // فحص عند تحميل الصفحة
  checkAll();

  // فحص عند النزول بالسكرول
  window.addEventListener("scroll", checkAll);
});

// .....................End...................................................................................

// This For Imags To Show Smooth When Scroll And Load
const imgs = document.querySelectorAll(".about .cont .img");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.classList.add("show");
        }, i * 200); // ← تأخير تدريجي
        observer.unobserve(entry.target); // عشان ميتكررش
      }
    });
  },
  { threshold: 0.2 }
); // يشتغل لما 20% من العنصر يدخل الشاشة

imgs.forEach((img) => observer.observe(img));
// .....................End...................................................................................

// For Counter
// جلب كل العدادات
const counters = document.querySelectorAll(".about h2");
let started = false; // علشان ما يتكررش العد

function runCounters() {
  counters.forEach((counter) => {
    counter.innerText = "0"; // يبدأ من صفر
    let target = +counter.getAttribute("data-target");
    let count = 0;
    let step = Math.ceil(target / 200); // سرعة العد

    let counterInterval = setInterval(() => {
      count += step;
      if (count >= target) {
        counter.innerText = target; // يوصل للرقم النهائي
        clearInterval(counterInterval);
      } else {
        counter.innerText = count;
      }
    }, 20); // كل 20ms يحدث الرقم
  });
}
// End Counter
// .....................End...................................................................................
// نشغل العد أول ما نوصل للقسم
window.addEventListener("scroll", () => {
  const aboutSection = document.querySelector(".about");
  const sectionTop = aboutSection.getBoundingClientRect().top;

  if (sectionTop < window.innerHeight && !started) {
    runCounters();
    started = true; // مره واحدة بس
  }
});

// End...................................
// .....................End...................................................................................

// For Animation About Boxses
document.addEventListener("DOMContentLoaded", () => {
  const boxes = document.querySelectorAll(".boxses");

  function checkBoxes() {
    const triggerBottom = window.innerHeight * 1; // متى تظهر قبل الوصول للعنصر
    boxes.forEach((box) => {
      const boxTop = box.getBoundingClientRect().top;
      if (boxTop < triggerBottom) {
        box.classList.add("animate");
      }
    });
  }

  window.addEventListener("scroll", checkBoxes);
  checkBoxes(); // تنفيذ عند التحميل مباشرة
});

// End // For Animation About Boxses

// For Animation About Boxses
document.addEventListener("DOMContentLoaded", () => {
  const headRoom = document.querySelectorAll(".head-room");

  function amr() {
    const headRoomBottom = window.innerHeight * 0.9; // متى تظهر قبل الوصول للعنصر
    headRoom.forEach((headRoom) => {
      const headRoomTop = headRoom.getBoundingClientRect().top;
      if (headRoomTop < headRoomBottom) {
        headRoom.classList.add("animate");
      }
    });
  }

  window.addEventListener("scroll", amr);
  amr(); // تنفيذ عند التحميل مباشرة
});
// End // For Animation About Boxses

document.addEventListener("DOMContentLoaded", () => {
  const formBooking = document.querySelectorAll(".form-booking");

  function checkBoxes() {
    const triggerBottom = window.innerHeight * 1; // متى تظهر قبل الوصول للعنصر
    formBooking.forEach((formBooking) => {
      const formBookingTop = formBooking.getBoundingClientRect().top;
      if (formBookingTop < triggerBottom) {
        formBooking.classList.add("animate");
      }
    });
  }

  window.addEventListener("scroll", checkBoxes);
  checkBoxes(); // تنفيذ عند التحميل مباشرة
});
// .....................End...................................................................................

// For Testimonials Slide After Hard Days

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
    const boxWidth = boxes[0].offsetWidth + 25; // البوكس + المسافة
    const maxIndex = boxes.length - visibleCount;

    if (index > maxIndex) index = maxIndex;
    if (index < 0) index = 0;

    const translateX = -(index * boxWidth);
    widthBox.style.transform = `translateX(${translateX}px)`;

    // تعطيل / تفعيل الزرار اليمين فقط
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

// For Back To Top Button................................................................................
const btnTop = document.getElementById("top");

// إظهار / إخفاء الزرار حسب مكان السكرول
window.addEventListener("scroll", () => {
  if (window.scrollY > window.innerHeight) {
    btnTop.classList.add("show");
  } else {
    btnTop.classList.remove("show");
  }
});

// عند الضغط يعمل سكرول لفوق بسلاسة
btnTop.addEventListener("click", (e) => {
  e.preventDefault();
  window.scrollTo({ top: 0, behavior: "smooth" });
});
// ....................................................................................................
// For Active Nav When tranlate to any page
document.addEventListener("DOMContentLoaded", () => {
  const current = window.location.pathname.split("/").pop() || "index.html";
  const navLinks = document.querySelectorAll("#nav a[href]");
  const pageBtn = document.getElementById("page");
  const arrow = document.getElementById("arrow");

  navLinks.forEach((link) => {
    if (link.getAttribute("href").endsWith(current)) {
      link.classList.add("active");
      if (link.classList.contains("dropdown-item")) {
        pageBtn.classList.add("active");
        arrow.classList.add("active");
      }
    }
  });
});

// .......................................For Booking Date

// const btnNext = document.getElementById("btn-next");
// const btnPrev = document.getElementById("btn-prev");

// // نجيب كل العناصر اللي ليها الكلاسات دي
// const headerSix = document.querySelectorAll(".h6-slide");
// const headerOne = document.querySelectorAll(".h1-slide");
// const linkSlideLeft = document.querySelectorAll(".link-slide-left");
// const linkSlideRight = document.querySelectorAll(".link-slide-right");

// function btnSlider() {
//   headerSix.classList.add("animate");
//   headerOne.classList.add("animate");
//   linkSlideLeft.classList.add("animate");
//   linkSlideRight.classList.add("animate");
// }

// btnNext.addEventListener("click", () => {
//   btnSlider();
//   alert("Hello! I am an alert box!!");
// });
