document
  .querySelector(".create-character")
  .addEventListener("click", function () {
    document.querySelector(".game-screen").classList.remove("hide");
    document.querySelector(".stat-wrapper").classList.add("hide");
  });

document.querySelector(".btn-play").addEventListener("click", function () {
  document.querySelector(".stat-wrapper").classList.remove("hide");
});

document.querySelector(".btn-play").addEventListener("click", function () {
  document.querySelector(".decisions-wrapper").classList.remove("hide");
});
