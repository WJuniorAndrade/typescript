import { NegociacaoController } from "./controllers/negocicao-controllers.js";

const controllers = new NegociacaoController();

const form = document.querySelector('.form');
form.addEventListener('submit', event => {
    event.preventDefault();

    controllers.adicionar()
})
