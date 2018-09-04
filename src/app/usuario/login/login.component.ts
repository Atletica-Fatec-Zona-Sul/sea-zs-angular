import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login/login.service';
import { IUsuario } from '../../model/IUsuario';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private loginService : LoginService, private formBuilder: FormBuilder, private router: Router) { }
  
  usuario : IUsuario;
  loginForm: FormGroup;
  submitted = false;

   get f() { return this.loginForm.controls; }

  onSubmit() {
    this.submitted = true;
    console.log(this.loginForm.value);
    
    this.loginService.getUsuario(this.loginForm.value).subscribe(
      data => {
        this.usuario = data;  
        console.log(this.usuario);
        if(this.usuario != null) {
          sessionStorage.setItem("usuario.id", this.usuario.id.toString());
          sessionStorage.setItem("usuario.email", this.usuario.email.toString());
          sessionStorage.setItem("usuario.nome", this.usuario.nome.toString());
          sessionStorage.setItem("usuario.adm", this.usuario.adm.toString());
          sessionStorage.setItem("usuario.rg", this.usuario.rg.toString());
          sessionStorage.setItem("usuario.endereco", this.usuario.endereco.toString());
          sessionStorage.setItem("usuario.celular", this.usuario.celular.toString());
          sessionStorage.setItem("usuario.dataNasc", this.usuario.dataNasc.toString());
         // sessionStorage.setItem("usuario.semestre", this.usuario.semestre.toString());
          sessionStorage.setItem("usuario.turno", this.usuario.turno.toString());
          sessionStorage.setItem("usuario.genero", this.usuario.genero.toString());
          sessionStorage.setItem("usuario.tipoUsuario", this.usuario.tipoUsuario.toString());
        
          this.router.navigate(['/usuario-inicio']);
        
        }
      });
      console.log(this.usuario);
  }

  ngOnInit() {
    this.usuario = new IUsuario();
    if(this.usuario.id) {
      this.router.navigate(['/usuario-inicio']);
    }
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      senha: ['', Validators.required]
  });
  }

}
