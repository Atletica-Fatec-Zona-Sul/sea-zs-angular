export interface IAtividade {
    nome : string,
    inicioAtividade : Date,
    fimAtividade : Date,
    descricao: string,
    cargaHoraria: number,
    pontuacaoParticipante: number,
    qtdVagas: number,
    qtdCheckin: number,
    flagContinua: boolean,
    flagCumulativa: boolean;   
}