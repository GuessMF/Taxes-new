// const header = document.querySelector("header");

// Successful Bussines
let windowWidth = window.innerWidth;

window.addEventListener("resize", () => {
  windowWidth = window.innerWidth;
});
window.addEventListener("scroll", () => {
  windowWidth = window.innerWidth;
});

const successfulWrapper = document.querySelector(
  ".successful-business__wrapper"
);
const successfulWrapperTitle = successfulWrapper.querySelector("h2");
const successfulWrapperUL = successfulWrapper.querySelector("ul");
const successfulBottom = document.querySelector(".successful-business__bottom");
const successfulBottomTitles = successfulBottom.querySelectorAll("h3");
const successfulBottomHR = successfulBottom.querySelector("hr");

gsap.to(successfulWrapperTitle, {
  scale: 1,
  scrollTrigger: {
    trigger: successfulWrapper,
    start: "top 75%",
    end: "top 95%",
    scrub: 2,
  },
});
gsap.to(successfulWrapperUL, {
  y: 0,
  scrollTrigger: {
    trigger: successfulWrapper,
    start: "top 65%",
    end: "top 85%",
    scrub: 2,
  },
});

windowWidth > 850
  ? gsap.to(successfulBottomTitles[0], {
      x: 0,
      scrollTrigger: {
        trigger: successfulWrapper,
        start: "top 55%",
        end: "top 75%",
        scrub: 2,
      },
    })
  : gsap.to(successfulBottomTitles[0], {
      scale: 1,
      scrollTrigger: {
        trigger: successfulBottomTitles[0],
        start: "top 85%",
        end: "top 85%",
        scrub: 2,
      },
    });

windowWidth > 850
  ? gsap.to(successfulBottomTitles[1], {
      x: 0,
      scrollTrigger: {
        trigger: successfulWrapper,
        start: "top 55%",
        end: "top 75%",
        scrub: 2,
      },
    })
  : gsap.to(successfulBottomTitles[1], {
      scale: 1,
      scrollTrigger: {
        trigger: successfulBottomTitles[1],
        start: "top 85%",
        end: "top 85%",
        scrub: 2,
      },
    });

windowWidth > 850
  ? gsap.to(successfulBottomHR, {
      y: 0,
      scrollTrigger: {
        trigger: successfulWrapper,
        start: "top 55%",
        end: "top 75%",
        scrub: 2,
      },
    })
  : gsap.to(successfulBottomHR, {
      scale: 1,
      scrollTrigger: {
        trigger: successfulBottomHR,
        start: "top 85%",
        end: "top 85%",
        scrub: 2,
      },
    });

// Our Services
const ourServices = document.querySelector(".our-services");
const ourServicesTitle = ourServices.querySelector("h2");
const ourServicesSubtitle = ourServices.querySelector("p");
const ourServicesTop = document.querySelector(".services__top");
const serviceBlocksTop = ourServicesTop.querySelectorAll(".service__block");
const ourServicesBottom = document.querySelector(".services__bottom");
const serviceBlocksBottom =
  ourServicesBottom.querySelectorAll(".service__block");

gsap.to(ourServicesTitle, {
  scale: 1,
  scrollTrigger: {
    trigger: ourServices,
    start: "top 85%",
    end: "top 85%",
    scrub: 2,
  },
});

gsap.to(ourServicesSubtitle, {
  y: 0,
  scrollTrigger: {
    trigger: ourServices,
    start: "top 75%",
    end: "top 75%",
    scrub: 2,
  },
});
//First block
windowWidth > 1060
  ? gsap.to(serviceBlocksTop[0], {
      x: 0,
      scrollTrigger: {
        trigger: ourServicesTop,
        start: "top 55%",
        end: "top 75%",
        scrub: 2,
      },
    })
  : gsap.to(serviceBlocksTop[0], {
      x: 0,
      scrollTrigger: {
        trigger: serviceBlocksTop[0],
        start: "top 75%",
        end: "top 75%",
        scrub: 2,
      },
    });
//Second block
windowWidth > 1060
  ? gsap.to(serviceBlocksTop[1], {
      y: 0,
      scrollTrigger: {
        trigger: ourServicesTop,
        start: "top 65%",
        end: "top 75%",
        scrub: 2,
      },
    })
  : gsap.to(serviceBlocksTop[1], {
      x: 0,
      scrollTrigger: {
        trigger: serviceBlocksTop[1],
        start: "top 75%",
        end: "top 75%",
        scrub: 2,
      },
    });

//Third block
windowWidth > 1060
  ? gsap.to(serviceBlocksTop[2], {
      x: 0,
      scrollTrigger: {
        trigger: ourServicesTop,
        start: "top 55%",
        end: "top 75%",
        scrub: 2,
      },
    })
  : gsap.to(serviceBlocksTop[2], {
      x: 0,
      scrollTrigger: {
        trigger: serviceBlocksTop[2],
        start: "top 75%",
        end: "top 75%",
        scrub: 2,
      },
    });

//Four block

windowWidth > 1060
  ? gsap.to(serviceBlocksBottom[0], {
      scale: 1,
      scrollTrigger: {
        trigger: ourServicesBottom,
        start: "top 70%",
        end: "top 75%",
        scrub: 2,
      },
    })
  : gsap.to(serviceBlocksBottom[0], {
      x: 0,
      scrollTrigger: {
        trigger: serviceBlocksBottom[0],
        start: "top 75%",
        end: "top 75%",
        scrub: 2,
      },
    });

//Fifth block

windowWidth > 1060
  ? gsap.to(serviceBlocksBottom[1], {
      scale: 1,
      scrollTrigger: {
        trigger: ourServicesBottom,
        start: "top 70%",
        end: "top 75%",
        scrub: 2,
      },
    })
  : gsap.to(serviceBlocksBottom[1], {
      x: 0,
      scrollTrigger: {
        trigger: serviceBlocksBottom[1],
        start: "top 75%",
        end: "top 75%",
        scrub: 2,
      },
    });

//Tariffs
const tariffsSection = document.querySelector(".tariff__section");
const tariffTitle = tariffsSection.querySelector("h2");
const tariffSubtitle = tariffsSection.querySelector("p");

const tarrifs = tariffsSection.querySelectorAll(".tariff");
const mainTarif = tarrifs[1];

gsap.to(tariffTitle, {
  scale: 1,
  scrollTrigger: {
    trigger: tariffsSection,
    start: "top 85%",
    end: "top 85%",
    scrub: 2,
  },
});

gsap.to(tariffSubtitle, {
  y: 0,
  scrollTrigger: {
    trigger: tariffsSection,
    start: "top 75%",
    end: "top 75%",
    scrub: 2,
  },
});

gsap.to(mainTarif, {
  opacity: 1,
  scrollTrigger: {
    trigger: mainTarif,
    start: "top 45%",
    end: "top 65%",
    scrub: 2,
  },
});
gsap.to(tarrifs[0], {
  opacity: 1,
  scrollTrigger: {
    trigger: mainTarif,
    start: "top 35%",
    end: "top 60%",
    scrub: 2,
  },
});

gsap.to(tarrifs[2], {
  opacity: 1,
  scrollTrigger: {
    trigger: mainTarif,
    start: "top 35%",
    end: "top 60%",
    scrub: 2,
  },
});

gsap.to(mainTarif, {
  y: -50,
  duration: 1,
  repeat: -1,
  yoyo: true,
});

// About US

const aboutUs = document.querySelector(".about-us__section");

const numbersBlock = document.querySelectorAll(".about-us__block");
const aboutUsPhoto = document.querySelector(".about-us__photo");

const firstNum = document.querySelector(".first-number b");
const secondNum = document.querySelector(".second-number b");
const thirdNum = document.querySelector(".third-number b");

const firstNumMobile = numbersBlock[1].querySelector(".first-number b");
const secondNumMobile = numbersBlock[1].querySelector(".second-number b");
const thirdNumMobile = numbersBlock[1].querySelector(".third-number b");

if (windowWidth > 630) {
  const counterFirstNumber = () => {
    let count = 0;
    let interval = setInterval(() => {
      firstNum.textContent = ++count;
      if (count >= 19) {
        clearInterval(interval);
      }
    }, 50);
  };

  const counterSecondNumber = () => {
    let count = 0;
    let interval = setInterval(() => {
      secondNum.textContent = ++count;
      if (count >= 10) {
        clearInterval(interval);
      }
    }, 50);
  };
  const counterThirdNumber = () => {
    let count = 0;
    let interval = setInterval(() => {
      thirdNum.textContent = ++count;
      if (count >= 99) {
        clearInterval(interval);
      }
    }, 20);
  };

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        // Если элемент полностью видим в окне просмотра
        if (entry.isIntersecting) {
          console.log("Элемент виден");
          counterFirstNumber();
          counterSecondNumber();
          counterThirdNumber();
        } else {
          console.log("Элемент скрыт");

          firstNum.textContent = 0;
          secondNum.textContent = 0;
          thirdNum.textContent = 0;
        }
      });
    },
    {threshold: 0.5}
  );

  // Начинаем наблюдение за целевым элементом
  observer.observe(numbersBlock[0]);

  gsap.to(numbersBlock, {
    scale: 1,
    scrollTrigger: {
      trigger: aboutUs,
      start: "top 50%",
      end: "top 50%",
      scrub: 1,
    },
  });
} else {
  const counterFirstNumber = () => {
    let count = 0;
    let interval = setInterval(() => {
      firstNumMobile.textContent = ++count;
      if (count >= 19) {
        clearInterval(interval);
      }
    }, 50);
  };

  const counterSecondNumber = () => {
    let count = 0;
    let interval = setInterval(() => {
      secondNumMobile.textContent = ++count;
      if (count >= 10) {
        clearInterval(interval);
      }
    }, 50);
  };
  const counterThirdNumber = () => {
    let count = 0;
    let interval = setInterval(() => {
      thirdNumMobile.textContent = ++count;
      if (count >= 99) {
        clearInterval(interval);
      }
    }, 20);
  };

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        // Если элемент полностью видим в окне просмотра
        if (entry.isIntersecting) {
          console.log("Элемент виден");
          counterFirstNumber();
          counterSecondNumber();
          counterThirdNumber();
        } else {
          console.log("Элемент скрыт");

          firstNumMobile.textContent = 0;
          secondNumMobile.textContent = 0;
          thirdNumMobile.textContent = 0;
        }
      });
    },
    {threshold: 0.5}
  );

  // Начинаем наблюдение за целевым элементом
  observer.observe(numbersBlock[1]);

  gsap.to(numbersBlock[1], {
    scale: 1,
    scrollTrigger: {
      trigger: numbersBlock[1],
      start: "top 70%",
      end: "top 70%",
      scrub: 1,
    },
  });
}

gsap.to(aboutUsPhoto, {
  opacity: 1,
  scrollTrigger: {
    trigger: aboutUs,
    start: "top 50%",
    end: "top 50%",
    scrub: 2,
  },
});

//Calculator
const calculatorSection = document.querySelector(".calculator__section");
const calculatorPhoto = document.querySelector(".calculator-image");
const calculatorTitle = document.querySelector(".calculator__title h2");
const calculatorSubTitle = document.querySelector(".calculator__title p");
const calculatorInputs = document.querySelectorAll(".calcualtor__input");

const calculatorButton = document.querySelector(".calculator_btn");

gsap.to(calculatorTitle, {
  scale: 1,
  scrollTrigger: {
    trigger: calculatorSection,
    start: "top 65%",
    end: "top 65%",
    scrub: 2,
  },
});

gsap.to(calculatorSubTitle, {
  y: 0,
  scrollTrigger: {
    trigger: calculatorSection,
    start: "top 60%",
    end: "top 60%",
    scrub: 2,
  },
});

if (windowWidth > 450) {
  gsap.to(calculatorInputs, {
    x: 0,
    scrollTrigger: {
      trigger: calculatorSection,
      start: "top 50%",
      end: "top 50%",
      scrub: 2,
    },
  });

  gsap.to(calculatorButton, {
    scale: 1,
    scrollTrigger: {
      trigger: calculatorSection,
      start: "top 40%",
      end: "top 40%",
      scrub: 2,
    },
  });
} else {
  gsap.to(calculatorInputs[0], {
    x: 0,
    scrollTrigger: {
      trigger: calculatorInputs[0],
      start: "top 70%",
      end: "top 70%",
      scrub: 2,
    },
  });

  gsap.to(calculatorInputs[1], {
    x: 0,
    scrollTrigger: {
      trigger: calculatorInputs[1],
      start: "top 70%",
      end: "top 70%",
      scrub: 2,
    },
  });

  gsap.to(calculatorInputs[2], {
    x: 0,
    scrollTrigger: {
      trigger: calculatorInputs[2],
      start: "top 70%",
      end: "top 70%",
      scrub: 2,
    },
  });

  gsap.to(calculatorInputs[3], {
    x: 0,
    scrollTrigger: {
      trigger: calculatorInputs[3],
      start: "top 70%",
      end: "top 70%",
      scrub: 2,
    },
  });

  gsap.to(calculatorButton, {
    scale: 1,
    scrollTrigger: {
      trigger: calculatorButton,
      start: "top 70%",
      end: "top 70%",
      scrub: 2,
    },
  });
}

gsap.to(calculatorPhoto, {
  opacity: 1,
  scrollTrigger: {
    trigger: calculatorSection,
    start: "top 50%",
    end: "top 40%",
    scrub: 2,
  },
});

//Reviews

const reviewsSectionTop = document.querySelector(".reviews__title");
const reviewsTitle = document.querySelector(".reviews__title h2");
const reviewsSubtitle = document.querySelector(".reviews__title p");

gsap.to(reviewsTitle, {
  scale: 1,
  scrollTrigger: {
    trigger: reviewsSectionTop,
    start: "top 70%",
    end: "top 70%",
    scrub: 2,
  },
});
gsap.to(reviewsSubtitle, {
  y: 0,
  scrollTrigger: {
    trigger: reviewsSectionTop,
    start: "top 70%",
    end: "top 70%",
    scrub: 2,
  },
});

const reviewsSection = document.querySelector(".reviews__section");
const reviewsWrapper = document.querySelector(".reviews__wrapper");
const reviewBlocks = document.querySelectorAll(".review");

gsap.to(reviewBlocks, {
  x: 0,
  scrollTrigger: {
    trigger: reviewsSection,
    start: "top 80%",
    end: "top 80%",
    scrub: 2,
  },
});

//LastNews

const lastNewsSection = document.querySelector(".last-news__section");
const lastNewsTitle = document.querySelector(".last-news__section h2");
const lastNewsBlock = document.querySelectorAll(".news__block");

gsap.to(lastNewsTitle, {
  scale: 1,
  scrollTrigger: {
    trigger: lastNewsSection,
    start: "top 70%",
    end: "top 70%",
    scrub: 2,
  },
});

if (windowWidth > 675) {
  gsap.to(lastNewsBlock[0], {
    opacity: 1,
    scrollTrigger: {
      trigger: lastNewsSection,
      start: "top 40%",
      end: "top 40%",
      scrub: 1,
    },
  });

  gsap.to(lastNewsBlock[1], {
    opacity: 1,
    scrollTrigger: {
      trigger: lastNewsSection,
      start: "top 40%",
      end: "top 40%",
      scrub: 3,
    },
  });

  gsap.to(lastNewsBlock[2], {
    opacity: 1,
    scrollTrigger: {
      trigger: lastNewsSection,
      start: "top 40%",
      end: "top 40%",
      scrub: 5,
    },
  });
  gsap.to(lastNewsBlock[3], {
    opacity: 1,
    scrollTrigger: {
      trigger: lastNewsSection,
      start: "top 40%",
      end: "top 40%",
      scrub: 7,
    },
  });
} else {
  gsap.to(lastNewsBlock[0], {
    opacity: 1,
    scrollTrigger: {
      trigger: lastNewsBlock[0],
      start: "top 70%",
      end: "top 70%",
      scrub: 2,
    },
  });

  gsap.to(lastNewsBlock[1], {
    opacity: 1,
    scrollTrigger: {
      trigger: lastNewsBlock[1],
      start: "top 70%",
      end: "top 70%",
      scrub: 2,
    },
  });

  gsap.to(lastNewsBlock[2], {
    opacity: 1,
    scrollTrigger: {
      trigger: lastNewsBlock[2],
      start: "top 70%",
      end: "top 70%",
      scrub: 2,
    },
  });
  gsap.to(lastNewsBlock[3], {
    opacity: 1,
    scrollTrigger: {
      trigger: lastNewsBlock[3],
      start: "top 70%",
      end: "top 70%",
      scrub: 2,
    },
  });
}
