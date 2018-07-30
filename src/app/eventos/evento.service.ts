import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EventoService {

  constructor() { }

  evento = {
    "id": 1,
    "nome": "Semana de Técnologia",
    "descricao": "Serão feitas diversas atividades com os alunos da Fatec Zona Sul, entre elas palestras, workshops e treinamentos.",
    "dataInicio": "06/09/2018",
    "dataFim": "11/09/2018",
    "agendamentos":[{
      "id":1,
      "inicio": "2018-08-06T07:00:00",
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
    },
  {
    "id":1,
      "inicio": "2018-08-06T07:00:00",
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
    },
  {
    "id":1,
      "inicio": "2018-08-06T07:00:00",
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
    },
  {
    "id":1,
      "inicio": "2018-08-06T07:00:00",
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
  }]
  };
  
  getEvento() {
    return this.evento;
  }
}
