import { Component, OnInit } from '@angular/core';
import { EventoService } from '../eventos/evento.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IEvento } from '../model/IEvento';
import { IAgendamento } from '../model/IAgendamento';
import { IAtividade } from '../model/IAtivdade';

@Component({
  selector: 'app-form-evento',
  templateUrl: './form-evento.component.html',
  styleUrls: ['./form-evento.component.css']
})
export class FormEventoComponent implements OnInit {

  constructor(private eventoService: EventoService, private formBuilder: FormBuilder, private router: Router) {
    this.inserirEvento = this.formBuilder.group({
      nome: ['', Validators.required],
      descricao: ['', Validators.required],
      cursoEvento: ['', Validators.required],
      inicio: ['', Validators.required],
      fim: ['', Validators.required],
  
  });
   }

  eventos: IEvento[];
  agendamentos: IAgendamento[];
  atividades: IAtividade[]; 

  ngOnInit() {
    this.eventoService.getEventos().subscribe
    (data => {
      this.eventos = data;  
      console.log(data[0].id);
    });
    
  }
  submitted = false;
  inserirEvento: FormGroup;

  onSubmit() {
    this.submitted = true;
    console.log(this.inserirEvento.value);
    this.eventoService.inserirEvento(this.inserirEvento.value).subscribe();
  }
}
