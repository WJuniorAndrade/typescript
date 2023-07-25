export class Negociacao {
    /* 1° FORMA DE INICIAR UMA CLASSE (não está errada porém, podemos fazer de uma forma mais performatica que economiza linhas de códigos) */
    /*  private _data : Date;
     private _quantidade : number;
     private _valor : number;
 
     constructor(data: Date, quantidade: number, valor: number) { // inicializção dos atributos já tipados
         this._data = data;
         this._quantidade = quantidade;
         this._valor = valor;
     } */
    /* 2° FORMA DE INICIALIZAR UMA CLASSA (mais simples porém sem diferença alguma da primeira forma)*/
    constructor(_data, _quantidade, _valor) {
        this._data = _data;
        this._quantidade = _quantidade;
        this._valor = _valor;
    }
    /* Métodos/Assessores GET (exibe) e SET(altera)*/
    get data() {
        return this._data;
    }
    get quantidade() {
        return this._quantidade;
    }
    get valor() {
        return this._valor;
    }
    get volume() {
        return this._quantidade * this._valor;
    }
}
