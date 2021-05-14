export default class ImpressaoComBind {
    constructor(){
        this._codigo = 11;
    }
    imprime(nomes){
        nomes.forEach( nome => {
            console.log(`${this._codigo}: ${nome}`);
        });
    }
}