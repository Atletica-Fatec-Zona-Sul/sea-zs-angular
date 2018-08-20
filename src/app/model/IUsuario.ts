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
        tipoUsuario: string; /*	VISITANTE(1), PROFESSOR(2),	FUNCIONARIO(3),	ALUNO(4);  no JSON vc manda a palavra, e no banco vai guardar o Id*/
        
    }