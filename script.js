// NAV

const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const links = document.querySelectorAll(".nav-link-a");
// const LinksA = document.querySelectorAll("nav-link-a");

hamburger.addEventListener("click", function () {
  navLinks.classList.toggle("active");
});

links.forEach((link) => {
  link.addEventListener("click", function () {
    navLinks.classList.remove("active");
    links.classList.remove("active");
    console.log("removed");
  });
});

// GSAP;
// SCROLL PAGES
const tlIntro = gsap.timeline({
  scrollTrigger: {
    trigger: ".first-page",
    start: "50%",
    end: "100%",
    pin: true,
    pinSpacing: false,
    scrub: true,
    onUpdate: (self) => {
      const opacity = 1 - self.progress;
      gsap.to(".first-page", { opacity: opacity });
    },
  },
});

const tlH = gsap.timeline({
  scrollTrigger: {
    trigger: ".second-page",
    scrub: true,
    start: "-40%",
    end: "40%",
  },
});

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
  { yPercent: -10, opacity: 0 },
  { yPercent: 0, opacity: 1, duration: 0.1, ease: "power4.out" },
  "<90%"
);
