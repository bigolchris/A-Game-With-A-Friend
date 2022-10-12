function fadeOut() {
  let fadeTarget = document.querySelector(".modal-container");
  fadeTarget.classList.add("fade-out");
  // if (!fadeTarget.style.opacity) {
  //   fadeTarget.style.opacity = 1;
  // }
  // if (fadeTarget.style.opacity > 0) {
  //   fadeTarget.style.opacity -= 0.1;
  // } else {
  //   clearInterval(fadeEffect);
  // }
  setTimeout(() => {
    fadeTarget.remove();
  }, 1000);
}

document.querySelector(".btn-play").addEventListener("click", fadeOut);

document.querySelector(".btn-play").addEventListener("click", function () {
  document.querySelector(".inv-container").classList.remove("hide");
});

document.querySelector(".btn-play").addEventListener("click", function () {
  document.querySelector(".placeholder").classList.remove("hide");
});
