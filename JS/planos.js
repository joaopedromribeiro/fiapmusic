// Captura os elementos por seus ids
const selectPlanos = document.getElementsByName("Planos")[0];
const rangeMeses = document.getElementById("Meses");
const output = document.getElementById("output");


// Adiciona um evento de inicialização ao range
rangeMeses.addEventListener("load", () => {
  // Define o valor do range com o seu valor mínimo
  rangeMeses.value = rangeMeses.min;

  // Seleciona o valor "Individual" no select
  selectPlanos.value = "Individual";

  // Calcula o valor total com base no plano inicial
  calcularValorTotal();
});

// Adiciona um evento de mudança ao range
rangeMeses.addEventListener("change", calcularValorTotal);

// Adiciona um evento de mudança ao select
selectPlanos.addEventListener("change", calcularValorTotal);

// Função de cálculo de valor total
function calcularValorTotal() {
  // Obtém o valor selecionado no range
  const meses = rangeMeses.value;

  // Obtém o preço atual do plano selecionado no select
  let preco = 0;

  switch (selectPlanos.value) {
    case "Individual":
      preco = 15.9;
      break;
    case "Familiar":
      preco = 29.9;
      break;
    case "Universitário":
      preco = 9.9;
      break;
    default:
      preco = 0;
  }

  // Calcula o valor total baseado no preço do plano e no número de meses
  const valorTotal = preco * meses;

  // Atualiza o valor do output com o valor total formatado
  output.value = `R$ ${valorTotal.toFixed(2)}`;
}
