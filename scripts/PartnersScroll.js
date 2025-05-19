const partnersScroll = document.querySelector(
  "#partners .partners-list .scroll-container"
);
const partnerScrollItems = Array.from(partnersScroll.children);
partnerScrollItems.forEach((item) => {
  const duplicatedItem = item.cloneNode(true);
  duplicatedItem.setAttribute("aria-hidden", true);
  partnersScroll.appendChild(duplicatedItem);
});

let scrollEnableTimer;

partnersScroll.onpointerdown = () => {
  partnersScroll.style["animation-play-state"] = "paused";

  clearTimeout(scrollEnableTimer);
  scrollEnableTimer = setTimeout(() => {
    partnersScroll.style["animation-play-state"] = "running";
  }, 3000);
};
partnersScroll.onpointerup = () => {
  partnersScroll.style["animation-play-state"] = "running";
};
