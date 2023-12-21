// NAV

const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const links = document.querySelectorAll(".link-container");
const navLink = document.querySelector(".nav-link");
const body = document.body;

hamburger.addEventListener("click", function () {
  navLinks.classList.toggle("open");
  links.forEach((link) => {
    link.classList.toggle("fade");
  });
});

navLinks.querySelectorAll(".nav-link").forEach((link) => {
  link.addEventListener("click", function () {
    // Close the navigation menu
    navLinks.classList.remove("open");
    links.forEach((link) => {
      link.classList.remove("fade");
    });
  });
});

// SCROLL
let lastScroll = 0;

window.addEventListener("scroll", () => {
  // console.log(window.pageYOffset);
  const currentScroll = window.pageYOffset;

  if (currentScroll <= 0) {
    body.classList.remove("scroll-up");
  }

  if (currentScroll > lastScroll && !body.classList.contains("scroll-down")) {
    body.classList.remove("scroll-up");
    body.classList.add("scroll-down");
  }

  if (currentScroll < lastScroll && body.classList.contains("scroll-down")) {
    body.classList.remove("scroll-down");
    body.classList.add("scroll-up");
  }

  // define this in bottom
  lastScroll = currentScroll;
});

// GSAP
// HEADER GALLERY
// const tlIntro = gsap.timeline({
//   scrollTrigger: {
//     trigger: ".first-page",
//     start: "0%",
//     end: "100%",
//     pin: true,
//     pinSpacing: false,
//     scrub: true,
//     onUpdate: (self) => {

//       const opacity = 1 - self.progress;
//       gsap.to(".first-page", { opacity: opacity });
//     },
//   },
// });

// const tlH = gsap.timeline({
//   scrollTrigger: {
//     trigger: ".second-page",
//     scrub: true,
//     start: "-40%",
//     end: "40%",
//   },
// });

const timeline = gsap.timeline({
  defaults: { ease: "power4.out", duration: 5 },
});

// gsap.set("body", {
//   autoAlpha: 1,
// });

gsap.fromTo(
  ".logo",
  { scale: 0, opacity: 0 },
  { scale: 1, duration: 2, opacity: 1 }
);

gsap.fromTo(
  "nav",
  { yPercent: -50, opacity: 0 },
  { yPercent: 0, opacity: 1, duration: 0.5 },
  "<"
);

gsap.fromTo(
  ".header-content",
  { scale: 1.1 },
  { scale: 0.95, duration: 5, paddingTop: 20 },
  "<"
);

//HEADER TITLE
const logo = document.querySelector(".header-title-h2");
const letters = logo.textContent.split("");

logo.textContent = "";

letters.forEach((letter) => {
  logo.innerHTML += '<span class="letter">' + letter + "</span>";
});

gsap.set(".letter", { display: "inline-block" });
gsap.fromTo(logo, { opacity: 0 }, { opacity: 1 });
gsap.fromTo(
  ".letter",
  { y: "100%", opacity: 0 },
  { y: 0, opacity: 1, delay: 2, stagger: 0.05, ease: "back.out(3)" },
  "<"
);
//

gsap.fromTo(
  ".header-text-p",
  { opacity: 0 },
  { opacity: 1, duration: 3, stagger: 0.03 },
  "<50%"
);

// GALLERY
// const galleryDiv = document.querySelector(".header-gallery div");

gsap.fromTo(
  ".header-image",
  { yPercent: -50, opacity: 0 },
  { yPercent: 0, stagger: 0.3, skewY: 0, opacity: 1, duration: 0.05 },
  "<"
);

gsap.fromTo(
  ".btn",
  { yPercent: -100, opacity: 0 },
  { yPercent: 0, opacity: 1, duration: 3, ease: "power4.out" },
  "<90%"
);
