const burger = document.querySelector(".burger");

const navigation = document.querySelector(".header__navigation");

console.log(navigation);

burger.addEventListener("click", () => {
  navigation.classList.toggle("active");
});
