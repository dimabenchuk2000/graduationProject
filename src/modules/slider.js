const slider = ({
  sliderBlockClass,
  slideClass,
  dotsBlockClass,
  dotClass = "dot",
  activeSlideClass,
  activeDotClass,
  buttonClass,
  buttonRight,
  buttonLeft,
}) => {
  const sliderBlock = document.querySelector(`.${sliderBlockClass}`);
  const slides = sliderBlock.querySelectorAll(`.${slideClass}`);
  const dotsBlock = sliderBlock.querySelector(`.${dotsBlockClass}`);

  let dots;
  let currentSlide = 0;
  let interval;

  const createDot = () => {
    slides.forEach(() => {
      dotsBlock.innerHTML += `<li class=${dotClass}></li>`;
    });
    dots = sliderBlock.querySelectorAll(`.${dotClass}`);
    dots[0].classList.add(activeDotClass);
  };

  const prevSlide = (elems, index, strClass) => {
    elems[index].classList.remove(strClass);
  };

  const nextSlide = (elems, index, strClass) => {
    elems[index].classList.add(strClass);
  };

  const autoSlide = () => {
    prevSlide(slides, currentSlide, activeSlideClass);
    prevSlide(dots, currentSlide, activeDotClass);
    currentSlide++;

    if (currentSlide >= slides.length) {
      currentSlide = 0;
    }

    nextSlide(slides, currentSlide, activeSlideClass);
    nextSlide(dots, currentSlide, activeDotClass);
  };

  const startSlide = () => {
    interval = setInterval(autoSlide, 3000);
  };

  const stopSlide = () => {
    clearInterval(interval);
  };

  sliderBlock.addEventListener("click", (e) => {
    e.preventDefault();

    if (
      !e.target.matches(`.${dotClass}`) &&
      !e.target.matches(`.${buttonClass}`)
    ) {
      return;
    }

    prevSlide(slides, currentSlide, activeSlideClass);
    prevSlide(dots, currentSlide, activeDotClass);

    if (e.target.matches(`#${buttonRight}`)) {
      currentSlide++;
    } else if (e.target.matches(`#${buttonLeft}`)) {
      currentSlide--;
    } else if (e.target.classList.contains(dotClass)) {
      dots.forEach((dot, index) => {
        if (e.target === dot) {
          currentSlide = index;
        }
      });
    }

    if (currentSlide >= slides.length) {
      currentSlide = 0;
    }

    if (currentSlide < 0) {
      currentSlide = slides.length - 1;
    }

    nextSlide(slides, currentSlide, activeSlideClass);
    nextSlide(dots, currentSlide, activeDotClass);
  });

  sliderBlock.addEventListener(
    "mouseenter",
    (e) => {
      if (
        e.target.matches(`.${dotClass}`) ||
        e.target.matches(`.${buttonClass}`)
      ) {
        stopSlide();
      }
    },
    true
  );

  sliderBlock.addEventListener(
    "mouseleave",
    (e) => {
      if (
        e.target.matches(`.${dotClass}`) ||
        e.target.matches(`.${buttonClass}`)
      ) {
        startSlide();
      }
    },
    true
  );

  createDot();
  startSlide();
};

export default slider;
