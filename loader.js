const loader = document.querySelector("#loader");
const loaderImg = document.querySelector("#loaderImg");
const body = document.querySelector("body");

window.addEventListener("load", () => {
  setTimeout(function () {
    body.style.overflowY = "hidden !important";
    loader.classList.remove("loader-bg");
    loader.innerHTML = "";
  }, 3000);
});
