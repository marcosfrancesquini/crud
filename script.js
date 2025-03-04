listaProdutos = []

const btnInserir = document.getElementById("inserir")
const btnOrdenar = document.getElementById("ordenar")

btnInserir.addEventListener('click', function(event) {
    event.preventDefault();
    const produto    = document.getElementById('produtoNome').value;
    const categoria  = document.getElementById('produtoCategoria').value;
    const quantidade = document.getElementById('produtoQuantidade').value;
    
    if (produto) {
       listaProdutos.push( {
           produto: produto,
           categoria: categoria,
           quantidade: quantidade
       })
    };


   // console.log(listaProdutos)
    let htmlContent = "";
    const elementoListaProdutos = document.getElementById("listaProdutos");

    listaProdutos.forEach(produto => {
        htmlContent += `<div>${produto.produto} ${produto.categoria} ${produto.quantidade}</div>`;
    });

    elementoListaProdutos.innerHTML = htmlContent;
    
});

btnOrdenar.addEventListener("click", function(event){
    event.preventDefault();
    listaProdutos.sort((a, b) => {
        if (a.categoria < b.categoria) {
            return -1;
        }
        if (a.categoria > b.categoria) {
            return 1;
        }
        return 0;
    });
    console.log(listaProdutos.categoria);
    let ordemContent = "";
    const elementoListaProdutos = document.getElementById("listaProdutos");
    elementoListaProdutos.innerHTML = ""; // Limpa a lista antes de adicionar os itens

    listaProdutos.forEach(produto => {
        const li = document.createElement('li');
        li.textContent = `${produto.produto} - ${produto.categoria} - ${produto.quantidade}`;
        elementoListaProdutos.appendChild(li);
    });
    
});

