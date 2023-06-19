const hamburgesa = document.querySelector(".hamburgesa");
const menu = document.querySelector(".nav-navegacion");
/* console.log(menu);
console.log(hamburgesa); */

hamburgesa.addEventListener("click", () => {
  menu.classList.toggle("spread");
});

window.addEventListener("click", (e) => {
  console.log(e.target);
});
