import { Component, OnInit } from '@angular/core';
import { IAtividade } from '../../model/IAtivdade';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-consulta-atividade',
  templateUrl: './consulta-atividade.component.html',
  styleUrls: ['./consulta-atividade.component.css']
})
export class ConsultaAtividadeComponent implements OnInit {

  constructor(private route : ActivatedRoute) { }

  atividade : IAtividade;
  ngOnInit() {
    this.route.params.subscribe((objeto : any) => {
      this.atividade = objeto;
    });
  }

}
