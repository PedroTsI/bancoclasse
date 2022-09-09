const c1 = new Conta('1', 100);
const c2 = new Conta('2');


console.log(c1.numero);
const contaController = new ContaController();
contaController.adicionarConta(c1);
contaController.adicionarConta(c2);
contaController.listar();

const contaBonificada = new ContaBonificada('10', 100);
contaBonificada.creditar(10);
console.log(contaBonificada.getSaldo());

const p1 :Pessoa= new Pessoa("Rita", 21, new Date('30/02/1999'));
const p2 :PessoaJuridica= new PessoaJuridica("Pedro", 19, new Date('04/04/2003'));
console.log(p1.nome);
console.log(p2.nome);
