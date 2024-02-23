const openMenuBtn = document.querySelector(".open-mobile-menu__btn");
const closeMenuBtn = document.querySelector(".close-mobile-menu__btn");
const mobileNav = document.querySelector(".mobile__nav");

const headerTitle = document.querySelector(".social-links");
const tinting = document.querySelector(".tinting");

openMenuBtn.addEventListener("click", () => {
  tinting.style.display = "block";
  gsap.to(tinting, {opacity: "1", duration: 0.5});
  mobileNav.style.transform = "translateX(30%)";
  document.documentElement.style.overflow = "hidden";
  document.body.style.overflow = "hidden";
  gsap.to(headerTitle, {opacity: "0", duration: 0.5});
});
closeMenuBtn.addEventListener("click", () => {
  gsap.to(tinting, {opacity: "0", duration: 0.5});
  tinting.style.display = "none";
  mobileNav.style.transform = "translateX(100%)";
  document.documentElement.style.overflow = "inherit";
  document.body.style.overflow = "inherit";
  gsap.to(headerTitle, {opacity: "1", duration: 0.5});
});

mobileNav.addEventListener("click", (e) => {
  console.log(e.target.tagName);
  if (e.target.tagName === "A") {
    gsap.to(tinting, {opacity: "0", duration: 0.5});
    tinting.style.display = "none";
    gsap.to(headerTitle, {opacity: "1", duration: 0.5});
    mobileNav.style.transform = "translateX(100%)";
    document.documentElement.style.overflow = "inherit";
    document.body.style.overflow = "inherit";
  }
});

//CALCULATOR
const popUpSection = document.querySelector(".pop-up");
const popUpContent = document.querySelector(".pop-up__content");

const calculatorBtn = document.querySelector(".calculator_btn");
const closePopUp = document.querySelector(".close-pop-up");

const toEmailBtn = document.getElementById("to-email");
const toPhoneBtn = document.getElementById("to-phone");

const buttonsBlock = document.querySelector(".pop-up__buttons");
const toEmailForm = document.querySelector(".to-email__form");
const toPhoneForm = document.querySelector(".to-phone__form");
const closeEmailForm = toEmailForm.querySelector(".close-form__btn");
const closePhoneForm = toPhoneForm.querySelector(".close-form__btn");

closeEmailForm.addEventListener("click", () => {
  toEmailForm.style.display = "none";
  gsap.to(toEmailForm, {opacity: "0", duration: 0.5});
  buttonsBlock.style.display = "flex";
  gsap.to(buttonsBlock, {opacity: "1", duration: 0.5});
});
closePhoneForm.addEventListener("click", () => {
  toPhoneForm.style.display = "none";
  gsap.to(toPhoneForm, {opacity: "0", duration: 0.5});
  buttonsBlock.style.display = "flex";
  gsap.to(buttonsBlock, {opacity: "1", duration: 0.5});
});

toEmailBtn.addEventListener("click", () => {
  gsap.to(buttonsBlock, {opacity: "0", duration: 0.5});
  buttonsBlock.style.display = "none";
  toEmailForm.style.display = "flex";
  gsap.to(toEmailForm, {opacity: "1", duration: 0.5});
});

toPhoneBtn.addEventListener("click", () => {
  gsap.to(buttonsBlock, {opacity: "0", duration: 0.5});
  buttonsBlock.style.display = "none";
  toPhoneForm.style.display = "flex";
  gsap.to(toPhoneForm, {opacity: "1", duration: 0.5});
});

calculatorBtn.addEventListener("click", () => {
  popUpSection.style.display = "block";
  gsap.to(openMenuBtn, {opacity: "0", duration: 0.5});
  gsap.to(popUpContent, {opacity: "1", duration: 0.5});
  document.documentElement.style.overflow = "hidden";
  document.body.style.overflow = "hidden";
});

closePopUp.addEventListener("click", () => {
  gsap.to(popUpContent, {opacity: "0", duration: 0.5});
  popUpSection.style.display = "none";
  gsap.to(openMenuBtn, {opacity: "1", duration: 0.5});
  document.documentElement.style.overflow = "inherit";
  document.body.style.overflow = "inherit";
});

//Reviews slider

const radioBtns = document.querySelectorAll(".controls input");
const reviewWrapper = document.querySelector(".reviews__wrapper");
const reviewSlides = document.querySelectorAll(".review_slide");

let prevSliderIndex = 0;
let currentSliderIndex = 0;

radioBtns.forEach((btn, index) => {
  btn.addEventListener("change", () => {
    if (btn.checked) {
      currentSliderIndex = index;
      changeSlide(currentSliderIndex);
    }
  });
});

function changeSlide(index) {
  const visionNewSlides = () => {
    gsap.to(reviewSlides[index], {
      display: "flex",
      ease: "Power1.easeInOut",
      onComplete: () => {
        gsap.to(reviewWrapper, {
          height: `${reviewSlides[index].offsetHeight}px`,
          duration: 0.5,
        });
        gsap.to(reviewSlides[index], {
          opacity: 1,
          duration: 0.5,
          ease: "Power1.easeInOut",
        });
      },
    });
  };

  gsap.to(reviewSlides[prevSliderIndex], {
    duration: 0.5,
    opacity: 0,
    ease: "Power1.easeInOut",
    onComplete: () => {
      gsap.to(reviewSlides[prevSliderIndex], {display: "none"});
      visionNewSlides();
    },
  });

  prevSliderIndex = index;
}

setInterval(() => {
  if (currentSliderIndex >= 0 && currentSliderIndex < 2) {
    currentSliderIndex++;
    changeSlide(currentSliderIndex);
    radioBtns[currentSliderIndex].checked = true;
  } else if (currentSliderIndex == 2) {
    currentSliderIndex = 0;
    changeSlide(currentSliderIndex);
    radioBtns[currentSliderIndex].checked = true;
  }
}, 5000);

//Footer
const currentYear = new Date().getFullYear();
const currentYearSpan = document.getElementById("current-year");
currentYearSpan.textContent = currentYear;
console.log(currentYear);
