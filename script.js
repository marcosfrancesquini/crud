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
        htmlContent += `<div>${produto.produto} ${produto.categoria} ${produto.quantidade} Edit  Delete</div>`;
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
        li.textContent = `${produto.produto} - ${produto.categoria} - ${produto.quantidade}  Edit  Delete`;
        elementoListaProdutos.appendChild(li);
    });
    
});

// Variável para saber se estamos em modo de edição
let modoEdicao = false;

// Função para preencher o formulário com dados do produto
function preencherFormulario(produto) {
    document.getElementById('produtoNome').value = produto.produto;
    document.getElementById('produtoCategoria').value = produto.categoria;
    document.getElementById('produtoQuantidade').value = produto.quantidade;
    modoEdicao = true;
}

// No evento de inserir, verificar se está inserindo ou editando
btnInserir.addEventListener('click', function(event) {
    event.preventDefault();
    const produto = document.getElementById('produtoNome').value;
    const categoria = document.getElementById('produtoCategoria').value;
    const quantidade = document.getElementById('produtoQuantidade').value;

    if (produto) {
        if (modoEdicao) {
            // Implemente a lógica para editar o item na lista
            const index = parseInt(document.querySelector('.editar').getAttribute('data-index'));
            listaProdutos[index] = { produto, categoria, quantidade };
            modoEdicao = false;
        } else {
            // Adicionar o produto à lista
            listaProdutos.push({ produto, categoria, quantidade });
        }

        // Limpa a lista e adiciona todos os produtos novamente
        elementoListaProdutos.innerHTML = "";
        listaProdutos.forEach(produto => {
            const li = criarElementoLista(produto);
            elementoListaProdutos.appendChild(li);
        });
    }
});
