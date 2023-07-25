import { ListaNegociacao } from "../models/listaNegociacoes.js";
import { Negociacao } from "../models/negociacao.js";
export class NegociacaoController {
    constructor() {
        this.listaNegociacao = new ListaNegociacao();
        this.inputData = document.querySelector("#data");
        this.inputQuantidade = document.querySelector("#quantidade");
        this.inputValor = document.querySelector("#valor");
    }
    adicionar() {
        const negociacao = this.criarNegociacao();
        this.listaNegociacao.addNegociacao(negociacao);
        const exibirNegociacao = this.listaNegociacao.lista();
        console.log(exibirNegociacao);
        this.limparFormulario();
    }
    criarNegociacao() {
        const exp = /-/g;
        const date = new Date(this.inputData.value.replace(exp, ',')); // "REPLACE / Substituir" retorna uma nova string com algumas ou todas as correspondências de um padrão substituídas por um determinado caractere (ou caracteres)
        const quantidade = parseInt(this.inputQuantidade.value);
        const valor = parseFloat(this.inputValor.value);
        return new Negociacao(date, quantidade, valor);
    }
    limparFormulario() {
        this.inputData.value = '';
        this.inputQuantidade.value = '';
        this.inputValor.value = '';
        this.inputData.focus();
        //ao enviar o formulario o input Date é selecionado com a propriedade (FOCUS). 
    }
}
