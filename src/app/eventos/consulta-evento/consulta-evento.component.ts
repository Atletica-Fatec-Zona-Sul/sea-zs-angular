import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EventoService } from '../evento.service';

@Component({
  selector: 'app-consulta-evento',
  templateUrl: './consulta-evento.component.html',
  styleUrls: ['./consulta-evento.component.css']
})
export class ConsultaEventoComponent implements OnInit {

  id: number;
  evento;

  constructor(private route : ActivatedRoute, private eventoService : EventoService) { }

  ngOnInit() {
    this.route.params.subscribe((objeto : any) => {
      this.id = objeto['id'];
    });
    this.evento = this.eventoService.getEvento();
  }

}
