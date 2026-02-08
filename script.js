let gastos = JSON.parse(localStorage.getItem("gastos")) || [];

function adicionarGasto() {
  const nome = document.getElementById("nome").value;
  const valor = parseFloat(document.getElementById("valor").value);

  if (nome === "" || isNaN(valor)) return;

  gastos.push({ nome, valor });
  salvar();
  atualizarTela();

  document.getElementById("nome").value = "";
  document.getElementById("valor").value = "";
}

function removerGasto(index) {
  gastos.splice(index, 1);
  salvar();
  atualizarTela();
}

function salvar() {
  localStorage.setItem("gastos", JSON.stringify(gastos));
}

function atualizarTela() {
  const lista = document.getElementById("lista");
  const totalSpan = document.getElementById("total");

  lista.innerHTML = "";
  let total = 0;

  gastos.forEach((gasto, index) => {
    total += gasto.valor;

    const li = document.createElement("li");
    li.innerHTML = `
      ${gasto.nome} - R$ ${gasto.valor.toFixed(2)}
      <button onclick="removerGasto(${index})">❌</button>
    `;
    lista.appendChild(li);
  });

  totalSpan.innerText = total.toFixed(2);
}

atualizarTela();
