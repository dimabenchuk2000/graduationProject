const smoothScrolling = () => {
  const linksMenu = document.querySelectorAll(".top-menu>ul>li>a");
  const btnToTop = document.querySelector(".btnToTop");

  const scroll = function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  };

  linksMenu.forEach((link) => link.addEventListener("click", scroll));
  btnToTop.addEventListener("click", scroll);
};

export default smoothScrolling;
