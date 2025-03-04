listaProdutos = []

const btnInserir = document.getElementById("inserir")

btnInserir.addEventListener('click', function (event) {
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
    let htmlContent = '';
    const elementoListaProdutos = document.getElementById("listaProdutos");

    listaProdutos.forEach(produto => {
        htmlContent += `<div>${produto.produto} ${produto.categoria} ${produto.quantidade}</div>`;
    });

    elementoListaProdutos.innerHTML = htmlContent;
    

});
