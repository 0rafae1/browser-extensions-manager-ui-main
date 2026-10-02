export function configurarFiltros(extensoes, container, renderizarCards) {
    const botoesFiltro = document.querySelectorAll('.extensions-list__filters-filter')
    const botaoAll = document.querySelector('[data-filter="all"]')
    const botaoActive = document.querySelector('[data-filter="active"]')
    const botaoInactive = document.querySelector('[data-filter="inactive"]')

    botoesFiltro.forEach((botao) => {
        botao.addEventListener('click', () => {
            botoesFiltro.forEach((btn) => btn.classList.remove('extensions-list__filters-filter--active'));
            botao.classList.add('extensions-list__filters-filter--active')
        })
    })

    botaoAll.addEventListener('click', () => {
        renderizarCards(extensoes, container)
    })

    botaoActive.addEventListener('click', () => {
        const filtradas = extensoes.filter((extensao) => extensao.isActive === true)
        renderizarCards(filtradas, container)
    })

    botaoInactive.addEventListener('click', () => {
        const filtradas = extensoes.filter((extensao) => extensao.isActive === false)
        renderizarCards(filtradas, container)
    })
}