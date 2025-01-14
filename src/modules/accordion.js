const accordion = () => {
  const accordeonSection = document.querySelector(".accordeon-section");

  accordeonSection.addEventListener("click", (e) => {
    if (e.target.closest(".title")) {
      const textContent = e.target.nextElementSibling;
      const element = e.target.parentElement;

      if (textContent.style.display === "none") {
        textContent.style.display = "block";
        element.classList.add("active");
      } else {
        textContent.style.display = "none";
        element.classList.remove("active");
      }
    }
  });
};

export default accordion;
