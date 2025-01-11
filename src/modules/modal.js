import { animate } from "./helpers";

const modal = () => {
  const callbackBtn = document.querySelector(".header .callback-btn");
  const closeModalBtn = document.querySelector(".modal-close");
  const buttonServices = document.querySelector(".button-services");
  const modalOverlay = document.querySelector(".modal-overlay");
  const modalCallback = document.querySelector(".modal-callback");

  const openModal = function () {
    modalOverlay.style.display = "block";
    modalCallback.style.display = "block";

    animate({
      duration: 300,
      timing(timeFraction) {
        return timeFraction;
      },
      draw(progress) {
        modalCallback.style.height = progress * 400 + "px";
      },
    });
  };

  const closeModal = () => {
    modalOverlay.style.display = "none";
    modalCallback.style.display = "none";
  };

  buttonServices.addEventListener("click", openModal);
  callbackBtn.addEventListener("click", openModal);
  modalOverlay.addEventListener("click", closeModal);
  closeModalBtn.addEventListener("click", closeModal);
};

export default modal;
