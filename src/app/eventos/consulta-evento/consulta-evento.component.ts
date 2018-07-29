import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-consulta-evento',
  templateUrl: './consulta-evento.component.html',
  styleUrls: ['./consulta-evento.component.css']
})
export class ConsultaEventoComponent implements OnInit {

  id: number;
  agendamento = {
    "id":1,
    "inicio": "06/07/2018 - 07:00",
    "fim": "06/07/2018 - 12:00",
    "usuarioOrganizador": "Daniel Soares",
    "atividades": [{
      "id": 1,
      "nome": "Inovação no século XXI",
      "descricao": "A inovação no século XXI é muito importante por que bla bla bla bla bla bla bla bla bla bla bla bla",
      "categoriaAtividade": "Palestra",
      "localAtividade": "Auditório",
      "inicioAtividade": "06/07/2018 - 07:00",
      "fimAtividade":"06/07/2018 - 09:00",
      "cargaHoraria": 3,
      "qtdVagas": 60,
      "pontuacaoParticipante": 60,
      "flagContinua": false,
      "flagCumulativa": true
    },
    {
      "id": 2,
      "nome": "Inovação no século XXI",
      "descricao": "A inovação no século XXI é muito importante por que bla bla bla bla bla bla bla bla bla bla bla bla",
      "categoriaAtividade": "Palestra",
      "localAtividade": "Auditório",
      "inicioAtividade": "06/07/2018 - 07:00",
      "fimAtividade":"06/07/2018 - 09:00",
      "cargaHoraria": 3,
      "qtdVagas": 60,
      "pontuacaoParticipante": 60,
      "flagContinua": false,
      "flagCumulativa": true
    }]
  };
  constructor(private route : ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe((objeto : any) => {
      this.id = objeto['id'];
    }) 
  }

}
