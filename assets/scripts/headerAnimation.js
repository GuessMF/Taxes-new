gsap.registerPlugin(ScrollTrigger);

const header = document.querySelector("header");
const headerWrapper = document.querySelector(".header__wrapper");
const socialIcons = document.querySelector(".social-links__bottom ul");
const socialLinks = document.querySelector(".social-links");

const socialLinksBottom = document.querySelector(".social-links__bottom .tel");

const workingTime = socialLinksBottom.querySelector("span");
const mobile = socialLinksBottom.querySelector("a");

const headerNav = document.querySelector(".desktop__nav");

let lastScrollTop = window.pageYOffset || document.documentElement.scrollTop;

window.addEventListener("scroll", function () {
  let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  let scrollDirection = scrollTop > lastScrollTop ? "down" : "up";

  lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;

  if (window.innerWidth >= 450) {
    if (scrollDirection === "down") {
      gsap.to(header, {opacity: 0.3, duration: 1});
    } else {
      gsap.to(header, {opacity: 1, duration: 1});
    }
  }
});

header.addEventListener("mouseenter", () => {
  gsap.to(header, {opacity: 1, duration: 1});
});
header.addEventListener("mouseover", () => {
  gsap.to(header, {opacity: 1, duration: 1});
});
window.innerWidth >= 450 &&
  window.addEventListener("resize", () => {
    if (window.innerWidth <= 1400) {
      workingTime.style.display = "none";
    } else {
      workingTime.style.display = "block";
    }
    if (window.innerWidth <= 1260) {
      mobile.style.display = "none";
    } else {
      mobile.style.display = "inherit";
    }
    if (window.innerWidth <= 1160) {
      socialIcons.style.display = "none";
    } else {
      socialIcons.style.display = "flex";
    }
  });

// const section1 = document.querySelector(".successful-business");

const aboutUSSection = document.getElementById("about-us__desktop");

const navLinks = headerNav.querySelectorAll("li");

const section1 = document.getElementById("slider");
const section2 = document.getElementById("our-services");
const section3 = document.getElementById("about-us__desktop");
const section4 = document.getElementById("calculator");
const section5 = document.getElementById("last-news");
// const section6 = document.getElementById("contacts");

// const sections = [section1, section2, section3, section4, section5, section6];

const sections = [section1, section2, section3, section4, section5];
const mobileNavigations = header.querySelectorAll(".mobile__links li");

let currentCardIndex = 1;
function updateMenuActive(index) {
  navLinks.forEach((menuItem, i) => {
    if (i === index) {
      menuItem.classList.add("menu-active");
    } else {
      menuItem.classList.remove("menu-active");
    }
  });
}

sections.forEach((section, index) => {
  ScrollTrigger.create({
    trigger: section,
    // start: "top center",
    // end: "bottom center",
    start: "top 30%",
    end: "top 30%",
    onEnter: () => {
      currentCardIndex = index;
      updateMenuActive(currentCardIndex);
    },
    onLeaveBack: () => {
      currentCardIndex = index - 1;
      updateMenuActive(currentCardIndex);
    },
  });
});
updateMenuActive(currentCardIndex);
