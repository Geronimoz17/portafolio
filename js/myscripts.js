const menu = document.querySelector(".menu");
const OpenMenuBtn = document.querySelector(".open-menu");
const CloseMenuBtn = document.querySelector(".close-menu");

function toggleMenu() {
  menu.classList.toggle("menu-opened");
}

OpenMenuBtn.addEventListener("click", toggleMenu);
CloseMenuBtn.addEventListener("click", toggleMenu);

const menuLinks = document.querySelectorAll('.menu a[href^="#"]');

menuLinks.forEach((menuLinks) => {
  menuLinks.addEventListener("click", function () {
    menu.classList.remove("menu-opened");
  });
});

const $form = document.querySelector("#form");

$form.addEventListener("submit", handleSubmit);
async function handleSubmit(e) {
  e.preventDefault();
  const formulario = new FormData(this);
  const response = await fetch(this.action, {
    method: this.method,
    body: formulario,
    headers: {
      Accept: "application/json",
    },
  });
  if (response.ok) {
    this.reset();
    alert(
      "Muchas gracias por contacarte, muy pronto recibiras una repuesta :)."
    );
  }
}
