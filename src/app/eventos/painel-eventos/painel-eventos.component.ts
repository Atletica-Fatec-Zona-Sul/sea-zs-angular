import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router"
import { EventoService } from '../evento.service';
import { IEvento } from '../../model/IEvento';
import { IUsuario } from '../../model/IUsuario';

/**================= CLASSE RESPONSÁVEL PELO COMPONENT DO PAINEL DE EVENTOS DA PÁGINA INICAL ===================*/

@Component({
  selector: 'app-painel-eventos',
  templateUrl: './painel-eventos.component.html',
  styleUrls: ['./painel-eventos.component.css']
})
export class PainelEventosComponent implements OnInit {

  constructor(private router : Router, private eventoService : EventoService) { }

  // Array que simula (faz um mock) dados que serão recebidos pelo backend via rest
  eventos : IEvento[];
  usuario: IUsuario;

  ngOnInit() {
    this.usuario = new IUsuario();
    this.eventoService.getEventos().subscribe
    (data => {
      this.eventos = data;  
      console.log(data[0].id);
   
    });
    

  }

  // Chamada de navegação
  abrirEvento(id: number, nome: string) {
    this.router.navigate(['consulta-evento', id, nome]);
  }
}
