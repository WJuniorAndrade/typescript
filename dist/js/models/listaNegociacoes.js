export class ListaNegociacao {
    constructor() {
        this.listNegociacao = [];
    }
    addNegociacao(negocio) {
        this.listNegociacao.push(negocio);
    }
    lista() {
        return this.listNegociacao;
    }
}
