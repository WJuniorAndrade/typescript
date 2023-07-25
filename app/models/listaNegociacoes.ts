import { Negociacao } from "./negociacao.js";

export class ListaNegociacao {

    /* 1° forma */
    private listNegociacao: Array <Negociacao> = [];

    /* 2° formar abreviada (mesmo retorno)
    private listNegociacao: negociacao[] = [];
    */

    addNegociacao (negocio : Negociacao) {
        this.listNegociacao.push(negocio);
    }
    

    //  1° SINTAXE
    lista(): ReadonlyArray<Negociacao> { // apaenas adiciona dados, não os modifica e nem os apagam. 
        return this.listNegociacao;
    }

   /*  2° SINTAXE DIFERENTE (mesmo retorno)
   
   lista(): readonly Negociacao[] { 
        return this.listNegociacao;

    } */
}
