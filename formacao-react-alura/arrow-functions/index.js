import ModuloDeImpressao from './ModuloDeImpressao.js';
import ImpressaoComBind from './ImpressaoComBind.js';

const professores = ['Elias', 'Yuri', 'Rita', 'Milly', 'Roberta', 'Yan' ];
const impressao = new ModuloDeImpressao();
impressao.imprime(professores);

const professoresNoite = ['Joana', 'Maria Darc', 'Augusto', 'Ana', 'Talita', 'Yana' ];
const impressaoBind = new ImpressaoComBind();
impressaoBind.imprime(professoresNoite);