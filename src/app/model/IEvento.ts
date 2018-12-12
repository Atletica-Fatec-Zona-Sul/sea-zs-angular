import { IUsuario } from "./IUsuario";

export interface IEvento {
    id : number,
    nome : string,
    descricao : string,
    inicio : Date,
    fim : Date,
    usuarioCriador : IUsuario
}