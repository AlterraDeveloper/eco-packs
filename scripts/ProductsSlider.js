class ProductItem {
  constructor(imgPath, text) {
    this.imgPath = imgPath;
    this.text = text;
  }
}

const productsBags = [
  new ProductItem(
    "../images/products_bags/55х70 (бел. с зав.).jpg",
    "White bags"
  ),
  new ProductItem(
    "../images/products_bags/55х70 (25pcs).jpg",
    "55 x 70 bags 25 pcs"
  ),
  new ProductItem(
    "../images/products_bags/55х70 (35pcs).jpg",
    "55 x 70 bags 35 pcs"
  ),
];

const productsGarbage = [
  new ProductItem(
    "../images/products_garbage/Photoroom_20250329_083627.jpeg",
    "ASIA 30L"
  ),
  new ProductItem(
    "../images/products_garbage/Photoroom_20250329_083648.jpeg",
    "ASIA 60L"
  ),
  new ProductItem(
    "../images/products_garbage/Photoroom_20250329_083748.jpeg",
    "IDEAL 30L"
  ),
  new ProductItem(
    "../images/products_garbage/Photoroom_20250329_083814.jpeg",
    "IDEAL 60L"
  ),
];

let products = [];

const sliderNextBtn = document.querySelector("#slider-nav-next");
const sliderPrevBtn = document.querySelector("#slider-nav-prev");
const slider = document.querySelector(".slider-inner");
const productDescription = document.querySelector(
  ".slider-footer .products-description"
);
const slidesPerPage = Number(getCssVar("--slides-per-page"));
let currentSlide = 0;

sliderNextBtn.onclick = () => {
  currentSlide = Math.min(slider.children.length, currentSlide + 1);
  slider.style.transform = `translateX(calc((100% / ${slidesPerPage}) * ${
    slidesPerPage - currentSlide - Math.floor(slidesPerPage / 2)
  }))`;
  const activeSlide = slider.querySelector(".active");
  activeSlide.classList.remove("active");
  slider.children[currentSlide - 1].classList.add("active");
  productDescription.textContent =
    slider.children[currentSlide - 1].dataset.text;
};

sliderPrevBtn.onclick = () => {
  currentSlide = Math.max(1, currentSlide - 1);
  slider.style.transform = `translateX(calc((100% / ${slidesPerPage}) * ${
    slidesPerPage - currentSlide - Math.floor(slidesPerPage / 2)
  }))`;
  const activeSlide = slider.querySelector(".active");
  activeSlide.classList.remove("active");
  slider.children[currentSlide - 1].classList.add("active");
  productDescription.textContent =
    slider.children[currentSlide - 1].dataset.text;
};

function updateSlider() {
  const slider = document.querySelector(".slider-inner");
  slider.innerHTML = "";
  for (const product of products) {
    const div = document.createElement("div");
    div.className = "slider-item";
    div.style.backgroundImage = `url("${product.imgPath}")`;
    div.dataset.text = product.text;
    slider.append(div);
  }
  currentSlide = Math.floor(slidesPerPage / 2) + 1;
  slider.style.transform = `translateX(calc((100% / ${slidesPerPage}) * ${
    slidesPerPage - currentSlide - Math.floor(slidesPerPage / 2)
  }))`;
  slider.children[currentSlide - 1].classList.add("active");
  productDescription.textContent =
    slider.children[currentSlide - 1].dataset.text;
}

function getCssVar(name) {
  const root = document.querySelector(":root");
  var rootStyle = getComputedStyle(root);
  return rootStyle.getPropertyValue(name);
}

const categoriesSwitches = Array.from(
  document.querySelectorAll(".categories-switcher .switches input[type=radio]")
);
categoriesSwitches.forEach((categorySwitch) => {
  categorySwitch.onchange = () => {
    switch (categorySwitch.id) {
      case "switch-category-1":
        products = productsBags;
        break;
      case "switch-category-2":
        products = productsGarbage;
        break;
      case "switch-category-3":
        products = [];
        break;
      case "switch-category-4":
        break;
      case "switch-category-5":
        break;
    }
    updateSlider();
  };
  if (categorySwitch.checked) {
    categorySwitch.onchange();
  }
});
