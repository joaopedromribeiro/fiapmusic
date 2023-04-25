document.querySelector("#qtde").addEventListener("change", calcularOrcamento)
document.querySelector("#js").addEventListener("change", calcularOrcamento)
document.querySelector("#maior_sim").addEventListener("change", calcularOrcamento)
document.querySelector("#maior_nao").addEventListener("change", calcularOrcamento)
document.querySelector("#Meses").addEventListener("change", calcularOrcamento)

function calcularOrcamento() {
    
    if (js.option) "Individual"
    let valor_plano = preco * (1.1 - Meses.value * 0.1)
    preco += taxaDeUrgencia

    label_prazo.innerHTML = `Prazo (${Meses.value} semanas)`

    output.innerHTML = "R$ " + preco.toFixed(2)
}