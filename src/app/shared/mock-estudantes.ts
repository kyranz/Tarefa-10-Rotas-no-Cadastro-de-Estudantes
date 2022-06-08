import { Estudante } from './estudante';

let id = 0;

export const ESTUDANTES: Estudante[] = [
  { id: ++id, nome: 'Kyran Armelin Brunelli', curso: "Análise e Desenvolvimento de Sistemas", matricula: 300, nota:8, materia:"Programação Linear e Aplicações", semestre: 3 },
  { id: ++id, nome: 'Rogério Ferreira de Souza', curso: "Análise e Desenvolvimento de Sistemas", matricula: 201, nota:10, materia:"Linguagem de Programação IV INTERNET", semestre: 3 },
  { id: ++id, nome: 'Jessica Tayane da Silva Gomes', curso: "Análise e Desenvolvimento de Sistemas", matricula: 899, nota:7, materia:"Estatística Aplicada", semestre: 2 },
  { id: ++id, nome: 'Sandro Roberto Zovadelli', curso: "Análise e Desenvolvimento de Sistemas", matricula: 199, nota:8, materia:"Linguagem de Programação IV INTERNET", semestre: 3 },
  { id: ++id, nome: 'Bruno Henrique dos Santos', curso: "Análise e Desenvolvimento de Sistemas", matricula: 299, nota:8, materia:"Linguagem de Programação IV INTERNET", semestre: 3 },
  { id: ++id, nome: 'André Santos Alckmin de Carvalho', curso: "Análise e Desenvolvimento de Sistemas", matricula: 189, nota:9, materia:"Engenharia de Software II", semestre: 3},
  { id: ++id, nome: 'Kevin Cassio Alves Hilgert', curso: "Análise e Desenvolvimento de Sistemas", matricula: 187, nota:8, materia:"Linguagem de Programação IV INTERNET", semestre: 3 },
  { id: ++id, nome: 'Alessandro', curso: "Análise e Desenvolvimento de Sistemas", matricula: 403, nota:8, materia:"Sistemas Operacionais II", semestre: 3 },
  { id: ++id, nome: 'Fabio Canudo Leão', curso: "Análise e Desenvolvimento de Sistemas", matricula: 224, nota:4, materia:"Linguagem de Programação IV INTERNET", semestre: 3 },
  { id: ++id, nome: 'Gabriel Pires Franceschini', curso: "Mecatrônica Industrial", matricula: 238, nota:7, materia:"Desenho Técnico", semestre: 2 }
];