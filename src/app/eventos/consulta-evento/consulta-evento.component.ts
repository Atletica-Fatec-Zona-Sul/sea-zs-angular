import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EventoService } from '../evento.service';
import { IAtividade } from '../../model/IAtivdade';
import { IAgendamento } from '../../model/IAgendamento';

// TODO: COMENTAR @DANIEL SOARES
@Component({
  selector: 'app-consulta-evento',
  templateUrl: './consulta-evento.component.html',
  styleUrls: ['./consulta-evento.component.css']
})
export class ConsultaEventoComponent implements OnInit {

  id: number;
  nome : string;
  descricao : string;
  agendamentos : IAgendamento[];


  constructor(private route : ActivatedRoute, private eventoService : EventoService) { }

  ngOnInit() {
    this.route.params.subscribe((objeto : any) => {
      this.id = objeto['id'];
      this.nome = objeto['nome'];
      this.descricao = objeto['descricao'];
    });
    this.eventoService.getEvento(this.id).subscribe
    (data => {
      console.log(data);
      this.agendamentos = data;  
    });
  }
}
