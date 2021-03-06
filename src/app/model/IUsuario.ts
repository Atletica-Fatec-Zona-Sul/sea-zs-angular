import { Injectable } from '@angular/core';

@Injectable()
export class IUsuario  {
        id: number;
        email: string;
        senha: number;
        nome: string;
        endereco: string;
        celular: string;
        dataNasc: Date;
        semestre: number;
        turno: string; /* MANHA('M'), TARDE('T'), NOITE('N'); no JSON vc manda a palavra, e no banco vai guardar o Id (char)*/
        adm: boolean;
        rg: string;
        genero: string;
        matricula: string;
        tipoUsuario: number; /*	VISITANTE(1), PROFESSOR(2),	FUNCIONARIO(3),	ALUNO(4);  no JSON vc manda a palavra, e no banco vai guardar o Id*/
        
        constructor () {
            this.id = Number.parseInt(sessionStorage.getItem("usuario.id"));
            this.nome = sessionStorage.getItem("usuario.nome");
            this.email = sessionStorage.getItem("usuario.email");
            this.adm = "true" == sessionStorage.getItem("usuario.adm");
            this.tipoUsuario = Number.parseInt(sessionStorage.getItem("usuario.tipoUsuario"));
            this.rg = sessionStorage.getItem("usuario.rg");
            this.endereco = sessionStorage.getItem("usuario.endereco");
            this.celular = sessionStorage.getItem("usuario.celular");
            this.dataNasc = new Date( Date.parse(sessionStorage.getItem("usuario.dataNasc")));
            console.log(this.dataNasc);
            this.turno = sessionStorage.getItem("usuario.turno");
            this.genero = sessionStorage.getItem("usuario.genero");
            this.matricula = sessionStorage.getItem("usuario.matricula");
        }
    }
