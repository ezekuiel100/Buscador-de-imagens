let galeria = document.querySelector(".galeria");
let pesquisa = document.querySelector("#pesquisa");
let botao = document.querySelector("button");
let mostrarMais = document.querySelector(".mostrarMais");
let botaoMostrarMiasCriado = false;
let busca;
let pagina = 1;

const key = "4t1ZXKz6Ux4GMtPnGTwg98CC3COpY3lQLL1VuALkfvQ";

botao.addEventListener("click", (event) => {
  event.preventDefault();
  galeria.innerHTML = "";
  busca = pesquisa.value;
  mostrarMais.style.display = "block";
  buscarImagens();
});

function buscarImagens() {
  fetch(
    `https://api.unsplash.com/search/photos?page=${pagina}&query=${busca}&client_id=${key}`
  )
    .then((res) => res.json())
    .then((data) => {
      criarImagens(data.results);
    });
}

function criarImagens(data) {
  data.map((data) => {
    const img = document.createElement("img");
    img.src = data.urls.small;
    galeria.append(img);
  });
}

mostrarMais.addEventListener("click", () => {
  pagina += 1;
  buscarImagens();
});
