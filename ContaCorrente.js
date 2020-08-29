export class ContaCorrente {
    agencia;
    conta;
    #saldo = 0;
    cliente;

    sacar(valor) {
        if(this.#saldo < valor) {
            return;
        }

        this.#saldo -= valor;

        return  this.#saldo;
    }

    depositar(valor) {
        if(valor <= 0) {
            return;
        }
        
        this.#saldo += valor 
    }

    transferir(valor, conta) {
        let valorSacado = this.sacar(valor);
        
        conta.depositar(valorSacado);
    }

    get saldo () {
        return this.#saldo;
    }
}