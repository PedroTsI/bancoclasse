class RepositorioPessoas{
    readonly _pessoas: Array<Pessoa>;

    constructor() {
        this._pessoas = new Array<Pessoa>();
    }

    get pessoas(): Array<Pessoa>{
        return this._pessoas;
    }

    add(pessoa: Pessoa){
        this._pessoas.push(pessoa);
    }

    remove(nome: string){
        this._pessoas.splice(
            this._pessoas.findIndex(pessoa => pessoa.nome === nome),
            1
        );
    }

    search(nome: string): Pessoa{
        return this._pessoas.find(pessoa => pessoa.nome === nome);
    }
}