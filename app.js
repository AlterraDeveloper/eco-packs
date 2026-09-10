const LanguageStorageKey = "Language";

function getCurrentLang(){
    return localStorage.getItem(LanguageStorageKey) || "ru";
}

const currentLang = getCurrentLang();
document.querySelector(`#lang-switch option[value=${currentLang}]`).selected = true;
switchLanguage(currentLang)

const langSwitch = document.querySelector("#lang-switch");
langSwitch.onchange = (event) => {
    switchLanguage(event.target.value);
}

function switchLanguage(targetLang) {
    localStorage.setItem(LanguageStorageKey, targetLang);
    const translatableItems = [...document.querySelectorAll("*")].filter(x => x.dataset.translate);
    translatableItems.forEach(item => {
        item.innerText = translations[item.dataset.translate][targetLang] || "?";
    });
}

document.querySelector('#get-price').onclick = () => {
    const text = translations["WhatsAppMessage"][getCurrentLang()];
    const textQuery = encodeURIComponent(text)
    const whatsAppUrl = `https://wa.me/996501720006?text=${textQuery}`
    window.open(whatsAppUrl, "_blank");
}
