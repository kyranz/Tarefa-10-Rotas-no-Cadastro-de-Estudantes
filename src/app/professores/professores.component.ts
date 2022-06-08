import { Professor } from './../shared/professor';
import { EstudanteService } from './../shared/estudante.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-professores',
  templateUrl: './professores.component.html',
  styleUrls: ['./professores.component.css']
})
export class ProfessoresComponent implements OnInit {

  professores: Professor[] = [];
  selectedProfessor?: Professor;

  constructor(private estudanteService: EstudanteService) { }

  ngOnInit(): void {
    this.getProfessores();
  }

  onSelect(professor: Professor): void {
    this.selectedProfessor = professor;
  }

  getProfessores(): void {
    this.estudanteService.getProfessores()
      .subscribe(professores => this.professores = professores);
  }

}
