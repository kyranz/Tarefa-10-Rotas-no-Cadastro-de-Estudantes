import { Component, OnInit } from '@angular/core';

import { EstudanteService } from '../shared/estudante.service';
import { Estudante } from './../shared/estudante';

@Component({
  selector: 'app-estudantes',
  templateUrl: './estudantes.component.html',
  styleUrls: ['./estudantes.component.css']
})
export class EstudantesComponent implements OnInit {
  
  estudantes: Estudante[] = [];
  selectedEstudante?: Estudante;

  constructor(private estudanteService: EstudanteService) { }

  ngOnInit(): void {
    this.getEstudantes();
  }

  onSelect(estudante: Estudante): void {
    this.selectedEstudante = estudante;
  }

  getEstudantes(): void {
    this.estudanteService.getEstudantes()
        .subscribe(estudantes => this.estudantes = estudantes);
  }
}
