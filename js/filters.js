export function configurarFiltros(extensoes, container, renderizarCards) {
    const botoesFiltro = document.querySelectorAll('.extensions-list__filters-filter')

    botoesFiltro.forEach((botao) => {
        botao.addEventListener('click', () => {
            botoesFiltro.forEach((btn) => btn.classList.remove('extensions-list__filters-filter--active'));
            botao.classList.add('extensions-list__filters-filter--active')
        })
    })
}