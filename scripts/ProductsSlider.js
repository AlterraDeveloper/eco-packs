class ProductItem {
  constructor(imgPath, text, tag = null) {
    this.imgPath = imgPath;
    this.text = text || "Требуется описание";
    this.tag = tag;
  }
}

const bioTag = "БИО разлагаемый";
const industrialTag = "Промышленная";
const domesticTag = "Пищевая";

const productsBags = [
  new ProductItem(
    "./images/products_bags/Freezer Bag 250.jpg",
    [
      "Пакеты для заморозки",
      "Размер: 25 * 35см",
      "В рулоне 250pcs, в коробке 20шт.",
    ].join("<br/><br/>"),
    bioTag
  ),
  new ProductItem(
    "./images/products_bags/Freezer Bag 500.jpg",
    [
      "Пакеты для заморозки",
      "Размер: 25 * 35см",
      "В рулоне 500pcs, в коробке 12шт.",
    ].join("<br/><br/>"),
    bioTag
  ),
  new ProductItem(
    "./images/products_bags/Пакет Клубничка.jpg",
    ['Пакет "Клубника"', "В упаковке 1320 шт."].join("<br/><br/>")
  ),
  new ProductItem(
    "./images/products_bags/Пакет Мк.png",
    ['Пакет с ручкой "М"', "В упаковке 2880 шт."].join("<br/><br/>")
  ),
  new ProductItem(
    "./images/products_bags/Пакет Шиваки.webp",
    ['Пакет "Шиваки"', "В упаковке 1320 шт."].join("<br/><br/>")
  ),
];

const productsGarbage = [
  new ProductItem(
    "./images/products_garbage/100х130.png",
    [
      "Мешки для мусора",
      "Размер: 100 * 130см",
      "В рулоне 10pcs, в коробке 10шт.",
      "Объём 250л",
    ].join("<br/><br/>"),
    bioTag
  ),
  new ProductItem(
    "./images/products_garbage/55х70 (бел. с зав.).png",
    [
      "Мешки для мусора",
      "Размер: 55 * 70см",
      "В рулоне 20pcs, в коробке 20шт.",
      "Объём 45л",
      "100% первичная пленка HDPE",
    ].join("<br/><br/>"),
    bioTag
  ),
  new ProductItem(
    "./images/products_garbage/65х80 (с зав.).png",
    [
      "Мешки для мусора",
      "Размер: 65 * 80см",
      "В рулоне 15pcs, в коробке 20шт.",
      "Объём 65л",
    ].join("<br/><br/>"),
    bioTag
  ),
  new ProductItem(
    "./images/products_garbage/90х130.png",
    [
      "Мешки для мусора",
      "Размер: 90 * 130см",
      "В рулоне 20pcs, в коробке 15шт.",
      "Объём 240л",
    ].join("<br/><br/>"),
    bioTag
  ),
  new ProductItem(
    "./images/products_garbage/50х60 (бел. с зав.).png",
    [
      "Мешки для мусора",
      "Размер: 50 * 60см",
      "В рулоне 25pcs, в коробке 20шт.",
      "Объём 35л",
      "100% первичная пленка HDPE",
    ].join("<br/><br/>"),
    bioTag
  ),
  new ProductItem(
    "./images/products_garbage/55х70 (с зав.).png",
    [
      "Мешки для мусора",
      "Размер: 55 * 70см",
      "В рулоне 20pcs, в коробке 24шт.",
      "Объём 45л",
    ].join("<br/><br/>"),
    bioTag
  ),
  new ProductItem(
    "./images/products_garbage/70х90.png",
    [
      "Мешки для мусора",
      "Размер: 70 * 90см",
      "В рулоне 10pcs, в коробке 20шт.",
      "Объём 85л",
    ].join("<br/><br/>"),
    bioTag
  ),
  new ProductItem(
    "./images/products_garbage/55х70 (25pcs).png",
    [
      "Мешки для мусора",
      "Размер: 55 * 70см",
      "В рулоне 25pcs, в коробке 30шт.",
      "Объём 45л",
    ].join("<br/><br/>"),
    bioTag
  ),
  new ProductItem(
    "./images/products_garbage/65х80.png",
    [
      "Мешки для мусора",
      "Размер: 65 * 80см",
      "В рулоне 25pcs, в коробке 20шт.",
      "Объём 65л",
    ].join("<br/><br/>"),
    bioTag
  ),
  new ProductItem(
    "./images/products_garbage/70х90 (с зав.).png",
    [
      "Мешки для мусора",
      "Размер: 70 * 90см",
      "В рулоне 10pcs, в коробке 20шт.",
      "Объём 85л",
    ].join("<br/><br/>"),
    bioTag
  ),
  new ProductItem(
    "./images/products_garbage/55х70 (35pcs).png",
    [
      "Мешки для мусора",
      "Размер: 55 * 70см",
      "В рулоне 35pcs, в коробке 20шт.",
      "Объём 45л",
    ].join("<br/><br/>"),
    bioTag
  ),
  new ProductItem(
    "./images/products_garbage/65х80 (бел. с зав.).png",
    [
      "Мешки для мусора",
      "Размер: 65 * 80см",
      "В рулоне 15pcs, в коробке 20шт.",
      "Объём 70л",
      "100% первичная пленка HDPE",
    ].join("<br/><br/>"),
    bioTag
  ),
  new ProductItem(
    "./images/products_garbage/80х110.png",
    [
      "Мешки для мусора",
      "Размер: 80 * 110см",
      "В рулоне 10pcs, в коробке 20шт.",
      "Объём 140л",
    ].join("<br/><br/>"),
    bioTag
  ),
  new ProductItem(
    "./images/products_garbage/asia_30.png",
    'Мешки для мусора без завязки "Азия" 30 л, в рулоне 30 шт.'
  ),
  new ProductItem(
    "./images/products_garbage/asia_60.png",
    'Мешки для мусора без завязки "Азия" 60 л, в рулоне 30 шт.'
  ),
  new ProductItem(
    "./images/products_garbage/ideal_30.png",
    'Мешки для мусора без завязки "Идеал" 30 л, в рулоне 20 шт.'
  ),
  new ProductItem(
    "./images/products_garbage/ideal_60.png",
    'Мешки для мусора без завязки "Идеал" 60 л, в рулоне 20 шт.'
  ),
];

const productsDishes = [
  new ProductItem(
    "./images/products_dish/3792.jpg",
    [
      "Тарелка пластиковая одноразовая",
      "d = 22,5 см",
      "в коробке 500 шт.",
    ].join("<br/><br/>")
  ),
  new ProductItem(
    "./images/products_dish/3793.jpg",
    [
      "Тарелка пластиковая одноразовая",
      "d = 17,5 см",
      "в коробке 1000 шт.",
    ].join("<br/><br/>")
  ),
  new ProductItem(
    "./images/products_dish/3801.jpg",
    [
      "Вилка пластиковая одноразовая белая",
      "длина 15 см",
      "в коробке 2000 шт.",
    ].join("<br/><br/>")
  ),
  new ProductItem(
    "./images/products_dish/3802.jpg",
    [
      "Ложка пластиковая одноразовая белая",
      "длина 15 см",
      "в коробке 2000 шт.",
    ].join("<br/><br/>")
  ),
  new ProductItem(
    "./images/products_dish/3803.jpg",
    [
      "Ложка пластиковая одноразовая прозрачная",
      "длина 15 см",
      "в коробке 2000 шт.",
    ].join("<br/><br/>")
  ),
  new ProductItem(
    "./images/products_dish/3805.jpg",
    [
      "Вилка пластиковая одноразовая прозрачная",
      "длина 15 см",
      "в коробке 2000 шт.",
    ].join("<br/><br/>")
  ),
];

const productsStretch = [
  new ProductItem(
    "./images/products_stretch/Photoroom_20250329_083722.png",
    ['Пленка пищевая "Multipak"', "Размеры: 20 м, 50 м и 100 м"].join(
      "<br/><br/>"
    ),
    domesticTag
  ),

  new ProductItem(
    "./images/products_stretch/product_stretch_1000x100px.png",
    [
      // "Промышленная (техническая) стрейч-пленка для ручной обмотки.",
      // "Промышленная стрейч-пленка первого сорта, предназначенная для ручной упаковки грузов на паллетах. Обеспечивает надежную фиксацию, защиту от пыли, влаги и механических повреждений при транспортировке и хранении.",
      // "Ширина: 500 мм",
      // "Толщина: 23 мкм",
      // "Вес брутто: 3,0 кг",
      // "Сорт: Первый",
      // "Материал: Полиэтилен (LLDPE)",
      // "Тип намотки: Ручная",
      // "Цвет: Прозрачный",
      // "Удлинение: до 500%",
      // "Назначение: упаковка паллет, защита промышленной продукции",
      "Промышленная (техническая) стрейч-пленка",
      "Вес (брутто): 3,0 кг",
      "Толщина: 23 мкм",
      "Сорт: Первый",
      "Вид: для ручной обмотки",
    ].join("<br/><br/>"),
    industrialTag
  ),

  new ProductItem(
    "./images/products_stretch/Strejch-plenka-mini-roll.png",
    [
      // "Промышленная (техническая) стрейч-пленка для паллетайзера.",
      // "Максимальная надежность для вашей упаковки.",
      // "Надежная и прочная стрейч-пленка первого сорта — идеальное решение для обмотки паллет и тяжелых грузов. Благодаря высокой эластичности и плотности, она надежно фиксирует продукцию, защищая от влаги, пыли и механических повреждений. Отличный выбор для логистики, складов и производственных предприятий.",
      // "Ширина: 500 мм",
      // "Толщина: 23 мкм",
      // "Вес брутто: 16,9 кг",
      // "Сорт: Первый",
      // "Материал: Полиэтилен (LLDPE)",
      // "Тип намотки: Машинная",
      // "Цвет: Прозрачный",
      // "Удлинение: до 300%",
      // "Назначение: упаковка паллет, защита промышленной продукции",

      "Промышленная (техническая) стрейч-пленка",
      "Вес (брутто): 16,9 кг",
      "Толщина: 23 мкм",
      "Сорт: Первый",
      "Вид: для паллетайзера",
    ].join("<br/><br/>"),

    industrialTag
  ),
];

const productsFoil = [
  new ProductItem("./images/products_foil/Photoroom_20250329_083448.jpeg", "Фольга для запекания \"Alufolie\", 10 м"),
  new ProductItem("./images/products_foil/Photoroom_20250329_083537.jpeg", "Фольга для запекания \"Alufolie\", 5 м"),
  new ProductItem("./images/products_foil/Photoroom_20250329_083557.jpeg", "Фольга для запекания \"Alufolie\", 7.5 м"),
  new ProductItem(
    "./images/products_dish/Перчатки.jpg",
    [
      "Одноразовые перчатки",
      "Универсальный размер.",
      "В пачке 100pcs, в коробке 60 пачек.",
    ].join("<br/><br/>"),
    bioTag
  ),
  new ProductItem(
    "./images/products_dish/Скатерть Кристалл .jpg",
    [
      "Скатерть Кристалл",
      "Размер: 10м * 120см, с перфорацией каждые 50 см.",
      "В рулоне 20pcs, в коробке 18шт.",
    ].join("<br/><br/>"),
    bioTag
  ),
  new ProductItem(
    "./images/products_dish/Скатерть Хлопок.jpg",
    [
      "Скатерть Хлопок",
      "Размер: 10м * 120см, с перфорацией каждые 50см.",
      "В рулоне 20pcs, в коробке 24шт.",
    ].join("<br/><br/>"),
    bioTag
  ),
  new ProductItem(
    "./images/products_dish/Скатерть Шелк.jpg",
    [
      "Скатерть Шелк",
      "Размер: 10м * 120см, с перфорацией каждые 50см.",
      "В рулоне 20pcs, в коробке 18шт.",
    ].join("<br/><br/>"),
    bioTag
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
  productDescription.innerHTML = slider.children[currentSlide - 1].dataset.text;
};

sliderPrevBtn.onclick = () => {
  currentSlide = Math.max(1, currentSlide - 1);
  slider.style.transform = `translateX(calc((100% / ${slidesPerPage}) * ${
    slidesPerPage - currentSlide - Math.floor(slidesPerPage / 2)
  }))`;
  const activeSlide = slider.querySelector(".active");
  activeSlide.classList.remove("active");
  slider.children[currentSlide - 1].classList.add("active");
  productDescription.innerHTML = slider.children[currentSlide - 1].dataset.text;
};

function updateSlider() {
  const slider = document.querySelector(".slider-inner");
  slider.innerHTML = "";
  for (const product of products) {
    const div = document.createElement("div");
    div.className = "slider-item";
    div.style.backgroundImage = `url('${product.imgPath}')`;
    div.dataset.text = product.text;

    if (product.tag) {
      const badge = document.createElement("span");
      badge.innerText = product.tag;
      badge.classList.add("badge");
      div.append(badge);
    }

    slider.append(div);
  }
  currentSlide = Math.floor(slidesPerPage / 2) + 1;
  slider.style.transform = `translateX(calc((100% / ${slidesPerPage}) * ${
    slidesPerPage - currentSlide - Math.floor(slidesPerPage / 2)
  }))`;
  slider.children[currentSlide - 1].classList.add("active");
  productDescription.innerHTML = slider.children[currentSlide - 1].dataset.text;
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
