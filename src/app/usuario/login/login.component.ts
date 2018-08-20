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
          localStorage.setItem("usuario.id", this.usuario.id.toString());
          localStorage.setItem("usuario.email", this.usuario.email.toString());
          localStorage.setItem("usuario.nome", this.usuario.nome.toString());
          localStorage.setItem("usuario.adm", this.usuario.adm.toString());
          localStorage.setItem("usuario.tipoUsuario", this.usuario.tipoUsuario.toString());
          this.router.navigate(['/usuario-inicio']);
        }
      });
      console.log(this.usuario);
  }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      senha: ['', Validators.required]
  });
  }

}
