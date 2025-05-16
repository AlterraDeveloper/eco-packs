const partnersScroll = document.querySelector(
  "#partners .partners-list .scroll-container"
);
const partnerScrollItems = Array.from(partnersScroll.children);
partnerScrollItems.forEach((item) => {
  const duplicatedItem = item.cloneNode(true);
  duplicatedItem.setAttribute("aria-hidden", true);
  partnersScroll.appendChild(duplicatedItem);
});

partnersScroll.onpointerdown = () => {
  partnersScroll.style["animation-play-state"] = "paused";
};
partnersScroll.onpointerup = () => {
  partnersScroll.style["animation-play-state"] = "running";
};
