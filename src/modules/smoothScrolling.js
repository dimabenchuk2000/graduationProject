const smoothScrolling = () => {
  const linksMenu = document.querySelectorAll(".top-menu>ul>li>a");

  const scroll = function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  };

  linksMenu.forEach((link) => link.addEventListener("click", scroll));
};

export default smoothScrolling;
