import { Component, OnInit } from '@angular/core';
import { IUsuario } from '../../model/IUsuario';

@Component({
  selector: 'app-usuario-inicio',
  templateUrl: './usuario-inicio.component.html',
  styleUrls: ['./usuario-inicio.component.css']
})
export class UsuarioInicioComponent implements OnInit {

  constructor() { }

 
  ngOnInit() {
    console.log(sessionStorage.getItem("usuario.nome"));
  }

}
