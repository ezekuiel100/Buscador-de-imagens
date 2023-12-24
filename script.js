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
  busca = pesquisa.value;
  searchImg();
});

function searchImg() {
  fetch(
    `https://api.unsplash.com/search/photos?page=${pagina}&query=${busca}&client_id=${key}`
  )
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      createImages(data.results);
    });
}

function createImages(data) {
  data.map((data) => {
    const div = document.createElement("div");
    div.innerHTML = `<img src=${data.urls.small} />`;
    galeria.append(div);
  });

  if (!botaoMostrarMiasCriado) {
    const button = document.createElement("button");
    button.innerHTML = "Mostrar mais";
    mostrarMais.append(button);
    botaoMostrarMiasCriado = true;
  }
}

mostrarMais.addEventListener("click", () => {
  pagina += 1;
  console.log(pagina);
  searchImg();
});
