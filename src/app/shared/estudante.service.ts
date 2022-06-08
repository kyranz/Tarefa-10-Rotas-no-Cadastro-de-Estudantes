import { Professor } from './professor';
import { PROFESSORES } from './mock-professores';
import { Estudante } from './estudante';
import { Injectable } from '@angular/core';
import { ESTUDANTES } from './mock-estudantes';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class EstudanteService {

  constructor(private messageService: MessageService) { }

  getEstudantes(): Observable<Estudante[]> {
    const estudantes = of(ESTUDANTES);
    this.messageService.add('Alunos encontrados!');
    return estudantes;
  }

  getProfessores(): Observable<Professor[]> {
    const professores = of(PROFESSORES);
    this.messageService.add('Professores encontrados!');
    return professores;
  }
  
}
