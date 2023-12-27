let galeria = document.querySelector(".galeria");
let pesquisa = document.querySelector("#pesquisa");
let botao = document.querySelector("button");
let mostrarMais = document.querySelector(".mostrarMais");

let busca;
let pagina = 1;

const key = "4t1ZXKz6Ux4GMtPnGTwg98CC3COpY3lQLL1VuALkfvQ";

botao.addEventListener("click", (event) => {
  event.preventDefault();
  galeria.innerHTML = "";
  busca = pesquisa.value;
  buscarImagens();
});

async function buscarImagens() {
  const res = await fetch(
    `https://api.unsplash.com/search/photos?page=${pagina}&query=${busca}&client_id=${key}`
  );
  const data = await res.json();
  criarImagens(data.results);
}

function criarImagens(data) {
  data.map((data) => {
    const img = document.createElement("img");
    img.src = data.urls.small;
    galeria.append(img);
  });

  if (busca) {
    mostrarMais.style.display = "block";
  }
}

mostrarMais.addEventListener("click", () => {
  pagina++;
  buscarImagens();
});
