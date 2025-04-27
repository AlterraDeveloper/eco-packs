const sliderNextBtn = document.querySelector("#slider-nav-next");
const sliderPrevBtn = document.querySelector("#slider-nav-prev");
const slider = document.querySelector(".slider-inner");

const slidesPerPage = Number(getCssVar("--slides-per-page"));
let currentSlide = Math.ceil(slidesPerPage / 2);
slider.children[currentSlide - 1].classList.add("active");

sliderNextBtn.onclick = () => {
  currentSlide = Math.min(slider.children.length, currentSlide + 1);
  slider.style.transform = `translateX(calc((100% / ${slidesPerPage}) * ${
    slidesPerPage - currentSlide - Math.floor(slidesPerPage / 2)
  }))`;
  const activeSlide = slider.querySelector(".active");
  activeSlide.classList.remove("active");
  slider.children[currentSlide - 1].classList.add("active");
};

sliderPrevBtn.onclick = () => {
  currentSlide = Math.max(1, currentSlide - 1);
  slider.style.transform = `translateX(calc((100% / ${slidesPerPage}) * ${
    slidesPerPage - currentSlide - Math.floor(slidesPerPage / 2)
  }))`;
  const activeSlide = slider.querySelector(".active");
  activeSlide.classList.remove("active");
  slider.children[currentSlide - 1].classList.add("active");
};

function getCssVar(name) {
  const root = document.querySelector(":root");
  var rootStyle = getComputedStyle(root);
  return rootStyle.getPropertyValue(name);
}

const partnersScroll = document.querySelector(
  "#partners .partners-list .scroll-container"
);
const partnerScrollItems = Array.from(partnersScroll.children);
partnerScrollItems.forEach((item) => {
  const duplicatedItem = item.cloneNode(true);
  duplicatedItem.setAttribute("aria-hidden", true);
  partnersScroll.appendChild(duplicatedItem);
});
