let livros = [];
const endpointDaApi = 'https://guilhermeonrails.github.io/casadocodigo/livros.json';

 getBuscarlivrosDaApi();
 


async function getBuscarlivrosDaApi() {
    const resposta = await fetch(endpointDaApi);
    livros = await resposta.json();
    const livrosComDesconto = aplicarDesconto(livros);
    exibirOsLivrosNaTela(livrosComDesconto);
}


