class ProductItem {
  constructor(imgPath, text) {
    this.imgPath = imgPath;
    this.text = text || "Требуется описание";
  }
}

const productsBags = [
  new ProductItem("./images/products_bags/100х130.jpg", "100 x 130"),
  new ProductItem("./images/products_bags/55х70 (бел. с зав.).jpg", "55 x 70"),
  new ProductItem("./images/products_bags/65х80 (с зав.).jpg", "65 x 80"),
  new ProductItem("./images/products_bags/90х130.jpg", "90 x 130"),
  new ProductItem("./images/products_bags/50х60 (бел. с зав.).jpg", "50 x 60"),
  new ProductItem("./images/products_bags/55х70 (с зав.).jpg", "55 x 70"),
  new ProductItem("./images/products_bags/70х90.jpg", "70 x 90"),
  new ProductItem("./images/products_bags/Freezer Bag 250.jpg", " freezer 250"),
  new ProductItem("./images/products_bags/55х70 (25pcs).jpg", "55 x 70"),
  new ProductItem("./images/products_bags/65х80.jpg", "65 x 80"),
  new ProductItem("./images/products_bags/70х90 (с зав.).jpg", "70 x 90"),

  new ProductItem("./images/products_bags/Freezer Bag 500.jpg", "freezer 500"),
  new ProductItem("./images/products_bags/55х70 (35pcs).jpg", "55 x 70"),
  new ProductItem("./images/products_bags/65х80 (бел. с зав.).jpg", "65 x 80"),
  new ProductItem("./images/products_bags/80х110.jpg", "80 x 110"),
];

const productsGarbage = [
  new ProductItem(
    "./images/products_garbage/Photoroom_20250329_083627.jpeg",
    "ASIA 30L"
  ),
  new ProductItem(
    "./images/products_garbage/Photoroom_20250329_083648.jpeg",
    "ASIA 60L"
  ),
  new ProductItem(
    "./images/products_garbage/Photoroom_20250329_083748.jpeg",
    "IDEAL 30L"
  ),
  new ProductItem(
    "./images/products_garbage/Photoroom_20250329_083814.jpeg",
    "IDEAL 60L"
  ),
];

const productsDishes = [
  new ProductItem("./images/products_dish/Перчатки.jpg", "Перчатки"),

  new ProductItem(
    "./images/products_dish/Скатерть Кристалл .jpg",
    "Скатерть Кристалл"
  ),

  new ProductItem(
    "./images/products_dish/Скатерть Хлопок.jpg",
    "Скатерть Хлопок"
  ),

  new ProductItem("./images/products_dish/Скатерть Шелк.jpg", "Скатерть Шелк"),
];

const productsStretch = [
  new ProductItem(
    "./images/products_stretch/Photoroom_20250329_083722.jpeg",
    ""
  ),

  new ProductItem(
    "./images/products_stretch/product_stretch_1000x100px.jpg",
    ""
  ),

  new ProductItem("./images/products_stretch/Strejch-plenka-mini-roll.jpg", ""),
];


const productsFoil = [
  new ProductItem("./images/products_foil/Photoroom_20250329_083448.jpeg", ""),
  new ProductItem("./images/products_foil/Photoroom_20250329_083537.jpeg", ""),
  new ProductItem("./images/products_foil/Photoroom_20250329_083557.jpeg", ""),
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
    div.style.backgroundImage = `url('${product.imgPath}')`;
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
        products = productsDishes;
        break;
      case "switch-category-4":
        products = productsStretch;
        break;
      case "switch-category-5":
        products = productsFoil;
        break;
    }
    updateSlider();
  };
  if (categorySwitch.checked) {
    categorySwitch.onchange();
  }
});
