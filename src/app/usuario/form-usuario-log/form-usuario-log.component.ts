import { Component, OnInit } from '@angular/core';
import { IUsuario } from '../../model/IUsuario';

@Component({
  selector: 'app-form-usuario-log',
  templateUrl: './form-usuario-log.component.html',
  styleUrls: ['./form-usuario-log.component.css']
})
export class FormUsuarioLogComponent implements OnInit {

  constructor() { }
  usuario : IUsuario;

  ngOnInit() {
    this.usuario = new IUsuario();
  }

}
