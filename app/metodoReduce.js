function calcularValorTotallivrosDisponivel(livro){
 const valorTotal = livro.reduce((acc, livro) => acc + livro.preco, 0);
 return valorTotal;
}