import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-consulta-evento',
  templateUrl: './consulta-evento.component.html',
  styleUrls: ['./consulta-evento.component.css']
})
export class ConsultaEventoComponent implements OnInit {

  id: number;

  constructor(private route : ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe((objeto : any) => {
      this.id = objeto['id'];
    }) 
  }

}
