const burger = document.querySelector(".burger");
const nav = document.querySelector(".header__list");
const headerDropdown = document.querySelector(".header__dropdown");
const headerLink = document.querySelector("header__link");
const arrow = document.querySelector(".header__link-arrow");
// const portfolioItem = document.querySelector(".header__list > li:nth-child(3)");

burger.addEventListener("click", () => {
  burger.classList.toggle("active");
  nav.classList.toggle("open");

  if (arrow) {
    arrow.remove();
  }

  document
    .querySelectorAll(".header__dropdown li")
    .forEach((li) => li.remove());
});

headerLink.addEventListener("click", (event) => {
  event.preventDefault();
  event.stopPropagation();

  headerDropdown.classList.toggle("active");
  arrow.classList.toggle("active");

  //   if(headerDropdown) {
  //     headerDropdown.remove('li');
  //   } //   не правильно сделал ну ладно
});
