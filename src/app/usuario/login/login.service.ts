import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IUsuario } from '../../model/IUsuario';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http:HttpClient) { }

  
  public getUsuario(usuario : IUsuario) {
    
    return this.http.post<IUsuario>("http://localhost:8080/usuario/login", usuario);

  }

 
}
