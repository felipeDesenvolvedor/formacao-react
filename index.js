import {ContaCorrente} from './ContaCorrente.js';
import {Cliente} from './Cliente.js';

let clienteFelipe = new Cliente();
clienteFelipe.nome = "Felipe";
clienteFelipe.cpf = "461.208.488-86";

let contaCorrenteFelipe = new ContaCorrente();
contaCorrenteFelipe.agencia = 10001;
contaCorrenteFelipe.conta = 14212;
contaCorrenteFelipe.cliente = clienteFelipe;
contaCorrenteFelipe.depositar(100);

let clienteNubia = new Cliente();
clienteNubia.nome = "Nubia";
clienteNubia.cpf = "461.208.488-89";

let contaCorrenteNubia = new ContaCorrente();
contaCorrenteNubia.agencia = 10001;
contaCorrenteNubia.conta = 14213;
contaCorrenteNubia.cliente = clienteNubia;
contaCorrenteNubia.depositar(500);
contaCorrenteNubia.transferir(250, contaCorrenteFelipe);


console.log(contaCorrenteFelipe);
console.log(contaCorrenteFelipe.saldo);
console.log("/n");
console.log("------------------");
console.log("/n");
console.log(contaCorrenteNubia);
console.log(contaCorrenteNubia.saldo);
