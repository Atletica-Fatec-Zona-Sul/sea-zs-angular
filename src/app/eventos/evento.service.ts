import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IEvento } from '../model/IEvento';
import { IAgendamento } from '../model/IAgendamento';
import { IUsuario } from '../model/IUsuario';

@Injectable({
  providedIn: 'root'
})
export class EventoService {
  usuarioLogado = new IUsuario();
  public inserirEvento(evento: IEvento) {
    
    evento.usuarioCriador = this.usuarioLogado; 
    return this.http.post<void>("http://localhost:8080/evento/inserir", evento);
    }

  constructor(private http:HttpClient) { }

  
  public getEventos() {
    
    return this.http.post<IEvento[]>("http://localhost:8080/evento/listar", null);

  }

  getEvento(id : number) {
    return this.http.post<IAgendamento[]>("http://localhost:8080/agendamento/listarEvento/", {
      "id": id
    });
  }

  public getNumeroInscritos(id : number, nome: string) {
    return this.http.post<IAgendamento[]>("http://localhost:8080/atividade/inscricao/listarAtividade/", {
      "id": id,
      "nome": nome
    });
  }
}
