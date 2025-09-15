//===================" This Script Make nav Active When Click On It Or Going To The Page "================== //
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
//-----------------------------------------------" End "-----------------------------------------------------//
//===================" This Script Active When Click On Page Nav To Visiable The Drop Menu "=================//
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
//-----------------------------------------------" End "-----------------------------------------------------//
//=" This Script Work When Going To Before 992 Px And When Cick On The Three Arrow The Figure Will Be 'X' "=//
const menuToggle = document.getElementById("menu-toggle-id");
const nav = document.getElementById("nav");

menuToggle.addEventListener("click", () => {
  menuMedia();
});
function menuMedia() {
  menuToggle.classList.toggle("change");
  nav.classList.toggle("change-visibility");
}
//-----------------------------------------------" End "-----------------------------------------------------//
//=============" This Script For 'Back To Top' Arrow When Click On It Will Scroll To Top Smooth "============//

//  Back To Top Button
const btnTop = document.getElementById("top");

window.addEventListener("scroll", () => {
  if (window.scrollY > window.innerHeight) {
    btnTop.classList.add("show");
  } else {
    btnTop.classList.remove("show");
  }
});

btnTop.addEventListener("click", (e) => {
  e.preventDefault();
  window.scrollTo({ top: 0, behavior: "smooth" });
});
//-----------------------------------------------" End "-----------------------------------------------------//

//=============" This Script For Animation Of ' Booking , Newsletter And Footer ' When Reload "==============//
document.addEventListener("DOMContentLoaded", () => {
  const boxInput = document.querySelector(".box-input");
  const newsletter = document.querySelector(".newsletter");
  const footer = document.querySelector("footer");

  function checkVisibility(element) {
    if (!element) return;
    const rect = element.getBoundingClientRect();
    const windowHeight = window.innerHeight;

    if (rect.top < windowHeight && rect.bottom > 0) {
      element.classList.add("show");
    }
  }

  function checkAll() {
    checkVisibility(boxInput);
    checkVisibility(newsletter);
    checkVisibility(footer);
  }

  checkAll();

  window.addEventListener("scroll", checkAll);
});
//-----------------------------------------------" End "-----------------------------------------------------//
//=========" This Script For Animation Of Header Of ' Room , Service And Team ' Section When Reload "========//
document.addEventListener("DOMContentLoaded", () => {
  const headRoom = document.querySelectorAll(".head-room");

  function contactHeader() {
    const headRoomBottom = window.innerHeight * 0.9; // متى تظهر قبل الوصول للعنصر
    headRoom.forEach((headRoom) => {
      const headRoomTop = headRoom.getBoundingClientRect().top;
      if (headRoomTop < headRoomBottom) {
        headRoom.classList.add("animate");
      }
    });
  }

  window.addEventListener("scroll", contactHeader);
  contactHeader();
});
//-----------------------------------------------" End "-----------------------------------------------------//
//=========================" This Script For Animation Of Boxses Of Team Section "===========================//
document.addEventListener("DOMContentLoaded", () => {
  const boxes = document.querySelectorAll(".boxses");

  function checkBoxes() {
    const triggerBottom = window.innerHeight * 1;
    boxes.forEach((box) => {
      const boxTop = box.getBoundingClientRect().top;
      if (boxTop < triggerBottom) {
        box.classList.add("animate");
      }
    });
  }

  window.addEventListener("scroll", checkBoxes);
  checkBoxes();
});
//-----------------------------------------------" End "-----------------------------------------------------//
