import { Component, OnInit } from '@angular/core';
import { ICurso } from '../model/ICurso';
import { CursoService } from '../_service/curso.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form-curso',
  templateUrl: './form-curso.component.html',
  styleUrls: ['./form-curso.component.css']
})
export class FormCursoComponent implements OnInit {

  constructor(private router : Router, private cursoService : CursoService) { }

  cursos : ICurso[];

  ngOnInit() {
    this.cursoService.getCursos().subscribe
    (data => {
      this.cursos = data;  
      console.log(data[0].id);
   
    });
  }

}
