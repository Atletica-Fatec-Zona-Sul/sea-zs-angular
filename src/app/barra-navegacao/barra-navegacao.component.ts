import { Component, OnInit } from '@angular/core';
import { IUsuario } from '../model/IUsuario';

@Component({
  selector: 'app-barra-navegacao',
  templateUrl: './barra-navegacao.component.html',
  styleUrls: ['./barra-navegacao.component.css']
})
export class BarraNavegacaoComponent implements OnInit {

  constructor() { }

  usuario : IUsuario;

  ngOnInit() {
    this.usuario = new IUsuario();
  }

}
