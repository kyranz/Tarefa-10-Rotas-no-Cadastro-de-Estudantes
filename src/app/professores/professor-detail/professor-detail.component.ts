import { Component, Input, OnInit } from '@angular/core';

import { Professor } from './../../shared/professor';

@Component({
  selector: 'app-professor-detail',
  templateUrl: './professor-detail.component.html',
  styleUrls: ['./professor-detail.component.css']
})
export class ProfessorDetailComponent implements OnInit {

  @Input() professor?: Professor;

  constructor() { }

  ngOnInit(): void {
  }

}
