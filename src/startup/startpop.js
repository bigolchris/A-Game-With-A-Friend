function fadeOut() {
  let fadeTarget = document.querySelector(".modal-container");
  let fadeEffect = setInterval(function () {
    if (!fadeTarget.style.opacity) {
      fadeTarget.style.opacity = 1;
    }
    if (fadeTarget.style.opacity > 0) {
      fadeTarget.style.opacity -= 0.1;
    } else {
      clearInterval(fadeEffect);
    }
    if (fadeTarget.style.opacity <= 0) {
      fadeTarget.remove();
    }
  }, 100);
}

document.querySelector(".btn-play").addEventListener("click", fadeOut);

document.querySelector(".btn-play").addEventListener("click", function () {
  document.querySelector(".inv-container").classList.remove("hide");
});

document.querySelector(".btn-play").addEventListener("click", function () {
  document.querySelector(".placeholder").classList.remove("hide");
});
