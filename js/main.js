import { buscarExtensoes } from "./data.js";
import { renderizarCards } from "./render.js";
import { configurarFiltros } from "./filters.js";
import { configurarTema } from "./theme.js";

const container = document.querySelector(".extensions-grid");

async function iniciar() {
  let extensoes = await buscarExtensoes();
  renderizarCards(extensoes, container);
  configurarFiltros(extensoes, container, renderizarCards),
  configurarTema();
}

iniciar();
