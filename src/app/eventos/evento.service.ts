import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IEvento } from '../model/IEvento';
import { IAgendamento } from '../model/IAgendamento';

@Injectable({
  providedIn: 'root'
})
export class EventoService {

  constructor(private http:HttpClient) { }

  
  public getEventos() {
    
    return this.http.post<IEvento[]>("http://localhost:8080/evento/listar", null);

  }

  getEvento(id : number) {
    return this.http.post<IAgendamento[]>("http://localhost:8080/agendamento/listarEvento/", {
      "id": id
    });
  }
}
