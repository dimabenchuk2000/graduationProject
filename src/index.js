import modal from "./modules/modal";
import smoothScrolling from "./modules/smoothScrolling";
import slider from "./modules/slider";

modal();
smoothScrolling();
slider({
  sliderBlockClass: "top-slider",
  slideClass: "item",
  dotsBlockClass: "top-slider-dots",
  dotClass: "dot",
  activeSlideClass: "item-active",
  activeDotClass: "dot-active",
  buttonClass: "none",
  buttonRight: "none",
  buttonLeft: "none",
});
