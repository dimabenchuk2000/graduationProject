const animate = ({ timing, draw, duration }) => {
  let start = performance.now();

  requestAnimationFrame(function animate(time) {
    // timeFraction изменяется от 0 до 1
    let timeFraction = (time - start) / duration;
    if (timeFraction > 1) timeFraction = 1;

    // вычисление текущего состояния анимации
    let progress = timing(timeFraction);

    draw(progress); // отрисовать её

    if (timeFraction < 1) {
      requestAnimationFrame(animate);
    }
  });
};

const validationForm = function (formElements) {
  let isError = false;

  formElements.forEach((input) => {
    if (input.name === "user_name" && /[^а-яА-Я]/g.test(input.value)) {
      isError = true;
    }

    if (input.name === "user_phone" && /[^\d-+()]/g.test(input.value)) {
      isError = true;
    }

    if (
      input.name === "user_message" &&
      /[^а-яА-Я\s\d-,.?]/g.test(input.value)
    ) {
      isError = true;
    }
  });

  return isError;
};

export { animate, validationForm };
