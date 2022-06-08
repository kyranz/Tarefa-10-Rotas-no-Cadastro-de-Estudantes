import { Component, Input, OnInit } from '@angular/core';

import { Estudante } from './../../shared/estudante';

@Component({
  selector: 'app-estudante-detail',
  templateUrl: './estudante-detail.component.html',
  styleUrls: ['./estudante-detail.component.css']
})
export class EstudanteDetailComponent implements OnInit {

  @Input() estudante?: Estudante;

  constructor() { }

  ngOnInit(): void {
  }

}
