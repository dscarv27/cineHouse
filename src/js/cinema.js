const dados = require('./data/filmes.json')

//ADICIONAR FILME

function adicionarFilme(filmeCodigo){
    catalogo.push(filmeCodigo);
}

//BUSCAR FILME

function buscarFilme(identificador){
    const achou = nulll
    for(let i = 0; i < catalogo.length; i++){
        if(catalogo[i].codigo === identificador){
            achou = catalogo[i];
            break;
        }
        return achou;
    }
}

//ALTERAR STATUS DO FILME EM CARTAZ

function alterarStatusEmCartaz(identificador){
    const filme = buscarFilme(identificador);
    if (filme === null){
        filme.emCartaz = !filme.emCartaz;
        return filme;
    }
}

//LISTAR TODOS OS FILMES

function listarTodosFilmes(catalogo){
    console.log("Os filmes disponíveis são:");{
    catalogo.forEach(catalogo)
        codigo: 
        titulo: 
        duracao: 
        atores: 
        anoDeLancamenmento:
        emCartaz: emCartaz === true ? "Sim" : "Não"
    }
};

//LISTAR FILMES EM CARTAZ
 function listarFilmesEmCartaz (catalogo){
        for (var i = 0; i < catalogo.length; i++){
            if (catalogo[i].emCartaz === true){
                console.log(catalogo)
                    codigo: {catalogo[i].codigo}
                    titulo: {titulo[i].codigo}
                    duracao: {duracao[i].codigo}
                    atores: {atores[i].codigo}
                    anoDeLançamento: {anoDeLancamento[i].codigo}
                    emCartaz: {catalogo[i].emCartaz === true ? "Sim" : "Não"};
             }
        }
    }