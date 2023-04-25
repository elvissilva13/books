let btnOrdenarPorPreco = document.getElementById('btnOrdenarPorPreco');
btnOrdenarPorPreco.addEventListener('click',ordenarPreco);


function ordenarPreco (){
    let livrosPorPreco = livros.sort((a,b) => a.preco -b.preco);
    exibirOsLivrosNaTela(livrosPorPreco);
}