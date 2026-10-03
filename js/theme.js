export function configurarTema() {
  const botaoTema = document.querySelector(".header__theme");
  const iconeTema = document.querySelector(".header__theme-toggle");
  botaoTema.addEventListener("click", () => {
    const estaEscuro = document.body.classList.toggle("dark");

    iconeTema.classList.toggle("header__theme-toggle--moon", !estaEscuro);
    iconeTema.classList.toggle("header__theme-toggle--sun", estaEscuro);
  });
}
