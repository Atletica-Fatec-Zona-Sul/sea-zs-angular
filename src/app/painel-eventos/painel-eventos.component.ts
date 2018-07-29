import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-painel-eventos',
  templateUrl: './painel-eventos.component.html',
  styleUrls: ['./painel-eventos.component.css']
})
export class PainelEventosComponent implements OnInit {

  constructor() { }

  eventos = [{
        "id": 1,
    "nome": "Semana de Técnologia",
    "descricao": "Serão feitas diversas atividades com os alunos da Fatec Zona Sul, entre elas palestras, workshops e treinamentos.",
    "dataInicio": "06/09/2018",
    "dataFim": "11/09/2018"
  },
  {
    "id": 2,
    "nome": "Atlética Fatec Zona Sul",
    "descricao": "Atividades esportivas e campeonatos para os alunos da Fatec Zona Sul participarem durante o semestre",
    "dataInicio": "01/08/2018",
    "dataFim": "10/12/2018"
  },
  {
    "id": 3,
    "nome": "Atlética Fatec Zona Sul",
    "descricao": "Atividades esportivas e campeonatos para os alunos da Fatec Zona Sul participarem durante o semestre",
    "dataInicio": "01/08/2018",
    "dataFim": "10/12/2018"
  },
  {
    "id": 4,
    "nome": "Atlética Fatec Zona Sul",
    "descricao": "Atividades esportivas e campeonatos para os alunos da Fatec Zona Sul participarem durante o semestre",
    "dataInicio": "01/08/2018",
    "dataFim": "10/12/2018"
  }]

  ngOnInit() {
  }

}
