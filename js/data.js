export async function buscarExtensoes() {
  try {
    const response = await fetch("../data.json");
    const extensoes = await response.json();
    return extensoes;
  } catch (error) {
    console.log("Erro ao buscar", error);
  }
}
