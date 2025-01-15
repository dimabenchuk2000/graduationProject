const btnToTop = () => {
  const btnUp = document.querySelector(".btnToTop");
  const servicesSection = document.querySelector(".services-section");

  window.addEventListener("scroll", () => {
    if (window.scrollY >= servicesSection.offsetTop) {
      btnUp.style.display = "block";
    } else {
      btnUp.style.display = "none";
    }
  });
};

export default btnToTop;
