import { Cliente } from "./Cliente.js";
import { Gerente } from './Funcionario/Gerente.js';
import { Diretor } from './Funcionario/Diretor.js';
import { SistemaAutenticacao } from './SistemaAutenticacao.js';

const gerente = new Gerente("Leticia", 5000, 78945612301);
gerente.cadastrarSenha("123");
const diretor = new Diretor("Cristiane", 10000, 12345678900);
diretor.cadastrarSenha("123456");

const cliente = new Cliente("Pedro Sampaio", 45678912300, "582");
const gerenteEstaLogado = SistemaAutenticacao.login(gerente, "123");
const diretorEstaLogado = SistemaAutenticacao.login(diretor, "123456");

const clienteEstaLogado = SistemaAutenticacao.login(cliente, "582");

console.log(gerenteEstaLogado, diretorEstaLogado, clienteEstaLogado);