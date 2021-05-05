class Cliente{
    nome;
    cpf;
}

class ContaCorrente{
    agencia;
    _saldo = 0;

    sacar(valor){
        if (this._saldo >= valor){
            this._saldo -= valor;
            console.log("Sacou: ", valor, "| Saldo atual: ", this._saldo);
            return "Saque realizado! Saldo ficou: ", this._saldo;
        } else {
            console.log("Saldo insuficiente, não foi possivel sacar!");
        }
    }

    depositar(valor){
        if (valor > 0){
            this._saldo += valor;
            console.log("Deposito realizado! Saldo ficou: ", this._saldo);
        } else {
            console.log("Deposito não realizado, o valor tem que ser maior que 0!");
        }
    }

}

const cliente1 = new Cliente();
cliente1.nome = "Jamilly";
cliente1.cpf = "00011122233"

const cliente2 = new Cliente();
cliente2.nome = "Cristiane";
cliente2.cpf = "00011122244"

const contaCorrenteJamilly = new ContaCorrente();
contaCorrenteJamilly.agencia = 1001;

contaCorrenteJamilly.depositar(350);
contaCorrenteJamilly.sacar(120);

console.log(contaCorrenteJamilly);

