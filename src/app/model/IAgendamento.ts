import { IAtividade } from './IAtivdade';

export interface IAgendamento {
    usuarioOrganizador : string,
    inicio : Date,
    fim : Date,
    atividade : IAtividade
}