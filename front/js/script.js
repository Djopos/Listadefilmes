const protocolo = 'http://'
const baseURL = 'localhost:3000'
const filmesEndpoint = '/filmes'
async function obterFilmes() {
 const URLCompleta = `${protocolo}${baseURL}${filmesEndpoint}`
 const filmes = (await axios.get(URLCompleta)).data    
 let tabela = document.querySelector('.filmes')
 let corpoTabela = tabela.getElementsByTagName('tbody')[0]
 for (let filme of filmes) {
 //insertRow(0) para adicionar sempre na primeira linha
 //se quiser adicionar na última, chame insertRow sem argumentos
    let linha = corpoTabela.insertRow(0)
    let celulaTitulo = linha.insertCell(0)
    let celulaSinopse = linha.insertCell(1)
    celulaTitulo.innerHTML = filme.titulo
    celulaSinopse.innerHTML = filme.sinopse
 }
}
