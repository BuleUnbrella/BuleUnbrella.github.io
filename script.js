const year = document.querySelector("#year");
const backToTop = document.querySelector(".back-to-top");

if (year) {
  year.textContent = new Date().getFullYear();
}

if (backToTop) {
  backToTop.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });
}
