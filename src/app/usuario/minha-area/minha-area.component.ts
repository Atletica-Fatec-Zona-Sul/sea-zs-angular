import { Component, OnInit } from '@angular/core';
import { IUsuario } from '../../model/IUsuario';

@Component({
  selector: 'app-minha-area',
  templateUrl: './minha-area.component.html',
  styleUrls: ['./minha-area.component.css']
})
export class MinhaAreaComponent implements OnInit {

  constructor() { }

  usuario : IUsuario;
  ngOnInit() {
    this.usuario = new IUsuario();
  }

}
