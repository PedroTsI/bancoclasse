class PessoaJuridica extends Pessoa{
    private readonly _cnpj: string;
    
    get cnpj(){
        return this._cnpj;
    }

    get nome(){
        return this._nome + '-Juridica'
    }
}
