class Pessoa {
    _nome;
    _idade;
    _dataNasc;
    constructor(nome, idade, dataNasc) {
        this._nome = nome;
        this._idade = idade;
        this._dataNasc = dataNasc;
    }
    get nome() {
        return this._nome + '-Física';
    }
    set nome(novoNome) {
        this._nome = novoNome;
    }
    get idade() {
        return this._idade;
    }
    set idade(novaIdade) {
        this._idade = novaIdade;
    }
    get dataNasc() {
        return this._dataNasc;
    }
    set dataNasc(novaData) {
        this._dataNasc = novaData;
    }
}
