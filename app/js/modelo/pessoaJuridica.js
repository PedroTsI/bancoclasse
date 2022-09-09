class PessoaJuridica extends Pessoa {
    _cnpj;
    get cnpj() {
        return this._cnpj;
    }
    get nome() {
        return this._nome + '-Juridica';
    }
}
