//===============" Thsi Script For Animation Of About Section ' Counter , Boxses And Images "================//

// Showing Images On By One By Scale Transform
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
// End Images Animation

// Counter From 0 To 1243
const counters = document.querySelectorAll(".about h2");
let started = false;

function runCounters() {
  counters.forEach((counter) => {
    counter.innerText = "0";
    let target = +counter.getAttribute("data-target");
    let count = 0;
    let step = Math.ceil(target / 200);

    let counterInterval = setInterval(() => {
      count += step;
      if (count >= target) {
        counter.innerText = target;
        clearInterval(counterInterval);
      } else {
        counter.innerText = count;
      }
    }, 20);
  });
}
// End Counter

// Starting Th Counter
window.addEventListener("scroll", () => {
  const aboutSection = document.querySelector(".about");
  const sectionTop = aboutSection.getBoundingClientRect().top;

  if (sectionTop < window.innerHeight && !started) {
    runCounters();
    started = true;
  }
});
//-----------------------------------------------" End "-----------------------------------------------------//
