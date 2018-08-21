import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioService } from '../usuario.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-usuario',
  templateUrl: './form-usuario.component.html',
  styleUrls: ['./form-usuario.component.css']
})
export class FormUsuarioComponent implements OnInit {

  constructor(private usuarioService : UsuarioService, private formBuilder: FormBuilder, private router: Router) { }

 

  submitted = false;
  inserirUsuario: FormGroup;

  onSubmit() {
    this.submitted = true;
    console.log(this.inserirUsuario.value);
    this.usuarioService.inserirUsuario(this.inserirUsuario.value).subscribe();
  }

  ngOnInit() {
    this.inserirUsuario = this.formBuilder.group({
      nome: ['', Validators.required],
      rg: ['', Validators.required],
      celular: ['', Validators.required],
      email: ['', Validators.required],


  });
  }

}
