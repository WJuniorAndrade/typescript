import { ListaNegociacao } from "../models/listaNegociacoes.js";
import { Negociacao } from "../models/negociacao.js";


export class NegociacaoController{

    private inputData : HTMLInputElement;
    private inputQuantidade : HTMLInputElement;
    private inputValor: HTMLInputElement;
    private listaNegociacao = new ListaNegociacao();





    constructor(){
        this.inputData = document.querySelector ("#data");
        this.inputQuantidade = document.querySelector("#quantidade");
        this.inputValor = document.querySelector("#valor");
        }

    
    adicionar() :  void {
        const negociacao = this.criarNegociacao();

        this.listaNegociacao.addNegociacao(negociacao)

        const exibirNegociacao = this.listaNegociacao.lista()

        console.log(exibirNegociacao);

        this.limparFormulario();
        
    }

    criarNegociacao() : Negociacao {
        const exp = /-/g;
        const date = new Date(this.inputData.value.replace(exp, ',')); // "REPLACE / Substituir" retorna uma nova string com algumas ou todas as correspondências de um padrão substituídas por um determinado caractere (ou caracteres)

        const quantidade = parseInt(this.inputQuantidade.value)
        const valor = parseFloat(this.inputValor.value)

        return new Negociacao(date, quantidade, valor); 
    }

    limparFormulario() : void { 
        this.inputData.value = '';
        this.inputQuantidade.value = '';
        this.inputValor.value = '';
        this.inputData.focus();   
        //ao enviar o formulario o input Date é selecionado com a propriedade (FOCUS). 
    }

}