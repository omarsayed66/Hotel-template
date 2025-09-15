// .............................For Auto Slide Every 4 Seconds And More Animation
const track = document.getElementById("sliderTrack");
const slides = document.querySelectorAll(".slides");
const nextBtn = document.getElementById("btn-next");
const prevBtn = document.getElementById("btn-prev");

const totalSlides = slides.length;
let counter = 0; // العداد المستمر
let index = 0; // مؤشر السلايد الفعلي

function updateSlide() {
  track.style.transition = "transform 0.5s ease";
  track.style.transform = `translateX(-${index * 100}%)`;
}

// الانتقال للأمام أو الخلف
function moveSlide(direction) {
  counter += direction; // العداد المستمر
  index = ((counter % totalSlides) + totalSlides) % totalSlides; // السلايد الفعلي
  updateSlide();
  console.log("Slide number:", counter + 1); // يظهر الرقم الحقيقي كعد مستمر
}

nextBtn.addEventListener("click", () => moveSlide(1));
prevBtn.addEventListener("click", () => moveSlide(-1));

// التشغيل التلقائي
let autoPlay = setInterval(() => moveSlide(1), 4000);
track.addEventListener("mouseover", () => clearInterval(autoPlay));
track.addEventListener(
  "mouseout",
  () => (autoPlay = setInterval(() => moveSlide(1), 4000))
);

// البداية
updateSlide();

// End ######################################################################################

// ...............................For Animation Whend Load And Click And Buttons
const sliderTrackEl = document.getElementById("sliderTrack");
const slideItems = Array.from(document.querySelectorAll(".slides"));
const btnNext = document.getElementById("btn-next");
const btnPrev = document.getElementById("btn-prev");

let currentIndex = 0;
const slidesCount = slideItems.length;

// إزالة animate من كل العناصر
function clearAllAnimate() {
  slideItems.forEach((slide) => {
    slide
      .querySelectorAll(
        ".h6-slide, .h1-slide, .link-slide-left, .link-slide-right"
      )
      .forEach((el) => el.classList.remove("animate"));
  });
}

// تفعيل الحركة للعناصر داخل الشريحة idx
function animateSlideElements(idx, initial = false) {
  const els = slideItems[idx].querySelectorAll(
    ".h6-slide, .h1-slide, .link-slide-left, .link-slide-right"
  );
  void slideItems[idx].offsetWidth;

  if (initial) {
    // عند التحميل: كل العناصر تتحرك معًا بدون تأخير
    els.forEach((el) => el.classList.add("animate"));
  } else {
    // باقي التنقلات: تسلسل طبيعي
    els.forEach((el, i) => {
      setTimeout(() => el.classList.add("animate"), i * 100);
    });
  }
}

// الانتقال لشريحة رقم n
function goTo(n, initial = false) {
  currentIndex = (n + slidesCount) % slidesCount;
  sliderTrackEl.style.transform = `translateX(-${currentIndex * 100}%)`;
  clearAllAnimate();
  animateSlideElements(currentIndex, initial);
}

// أزرار التنقل
btnNext.addEventListener("click", () => goTo(currentIndex + 1));
btnPrev.addEventListener("click", () => goTo(currentIndex - 1));

// تشغيل تلقائي
let auto = setInterval(() => goTo(currentIndex + 1), 4000);
sliderTrackEl.addEventListener("mouseenter", () => clearInterval(auto));
sliderTrackEl.addEventListener(
  "mouseleave",
  () => (auto = setInterval(() => goTo(currentIndex + 1), 4000))
);

// البداية عند تحميل الصفحة (كل العناصر تتحرك معًا)
window.addEventListener("load", () => goTo(0, true));
// End $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$

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

// .......................................For Animation With Click On Buttons For Slides And When Load
