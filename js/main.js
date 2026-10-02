import { buscarExtensoes } from "./data.js";
import { renderizarCards } from "./render.js";
import { configurarFiltros } from "./filters.js";

const container = document.querySelector('.extensions-grid');

async function iniciar() {
    let extensoes = await buscarExtensoes();
    renderizarCards(extensoes, container);
    configurarFiltros(extensoes, container, renderizarCards);
}

iniciar();
