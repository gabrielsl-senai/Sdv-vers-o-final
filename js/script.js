function abrir(){
    document.getElementById("capa").style.display = "none";
    document.getElementById("principal").style.display = "flex";

}

function trocarAba(idSecao){
const secoes = document.querySelectorAll('.conteudo-aba');
secoes.forEach(secao =>{
secao.style.display = 'none';
});

const secaoAtiva = document.getElementById(idSecao);
  if (secaoAtiva) {
    secaoAtiva.style.display = 'block';
  }
}