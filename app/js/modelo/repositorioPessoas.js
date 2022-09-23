class RepositorioPessoas {
    _pessoas;
    constructor() {
        this._pessoas = new Array();
    }
    get pessoas() {
        return this._pessoas;
    }
    add(pessoa) {
        this._pessoas.push(pessoa);
    }
    remove(nome) {
        this._pessoas.splice(this._pessoas.findIndex(pessoa => pessoa.nome === nome), 1);
    }
    search(nome) {
        return this._pessoas.find(pessoa => pessoa.nome === nome);
    }
}
