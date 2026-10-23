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
const btnModoClaro = document.getElementById('ModoClaro');
const btnModoÍndigo = document.getElementById('ModoÍndigo');
const btnModoLilás = document.getElementById('ModoLilás');
const btnModoEscuro = document.getElementById('ModoEscuro');

const todosOsTemas = ['tema-claro', 'tema-índigo', 'tema-lilás','tema-escuro'];

function mudarTema(temaNovo) {
   document.body.classList.remove(...todosOsTemas);
  document.body.classList.add(temaNovo);
}
btnModoClaro.addEventListener('click', () => mudarTema('tema-claro'));
btnModoÍndigo.addEventListener('click', () => mudarTema('tema-índigo'));
btnModoLilás.addEventListener('click', () => mudarTema('tema-lilás'));
btnModoEscuro.addEventListener('click',() => mudarTema('tema-escuro'))