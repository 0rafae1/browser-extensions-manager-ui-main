export function renderizarCards(extensoes, container) {
  container.innerHTML = "";
  extensoes.forEach((extensao) => {
    const card = document.createElement("div");
    card.className = "extensions-grid__extension";

    card.innerHTML = `<div class="extensions-grid__extension-icon-wrapper">
          <img src="${extensao.logo}" alt="Ícone da extensão ${extensao.name}">
          <div class="extensions-grid__extension-info">
            <h3 class="extensions-grid__extension-name">${extensao.name}</h3>
            <p class="extensions-grid__extension-description">${extensao.description}</p>
          </div>
        </div>
        <div class="extensions-grid__extension-actions">
          <button class="extensions-grid__extension-remove">Remove</button>
          <label class="extensions-grid__extension-toggle">
            <input type="checkbox" class="extensions-grid__extension-toggle-input" aria-label="Ativar ou desativar extensão ${extensao.name}">
            <span class="extensions-grid__extension-toggle-slider"></span>
          </label>
        </div>
        `;
    container.appendChild(card);
  });
}
