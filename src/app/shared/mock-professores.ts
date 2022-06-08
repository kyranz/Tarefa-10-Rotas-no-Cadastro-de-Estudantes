import { Professor } from './professor';

let id = 0;

export const PROFESSORES: Professor[] = [
  { id: ++id, nome: 'Pedro Pedrada Pedroso', curso: "Análise e Desenvolvimento de Sistemas", matricula: 563 },
  { id: ++id, nome: 'Jorge Amado', curso: "Análise e Desenvolvimento de Sistemas", matricula: 221 },
  { id: ++id, nome: 'Marquinhos da Silva', curso: "Análise e Desenvolvimento de Sistemas", matricula: 171 },
  { id: ++id, nome: 'Maria Antonieta', curso: "Análise e Desenvolvimento de Sistemas", matricula: 300 },
  { id: ++id, nome: 'Bruna Melare', curso: "Análise e Desenvolvimento de Sistemas", matricula: 438 },
  { id: ++id, nome: 'Thiago Silva', curso: "Mecatrônica Industrial", matricula: 816 },
  { id: ++id, nome: 'Vitor Oliveira', curso: "Mecatrônica Industrial", matricula: 219 },
  { id: ++id, nome: 'Rafaela Anciã', curso: "Mecatrônica Industrial", matricula: 138 },
  { id: ++id, nome: 'Paula Tejando', curso: "Mecatrônica Industrial", matricula: 993 }
];