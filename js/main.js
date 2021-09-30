const button = document.querySelector(".goup-container");

button.onclick = function () {
  window.scrollTo(scrollY, 0);
};

window.addEventListener("scroll", function () {
  if (scrollY < document.documentElement.clientHeight / 2) {
    button.style.opacity = 0;
    button.style.zIndex = -1;
  } else {
    button.style.opacity = 1;
    button.style.zIndex = 1;
  }
});
