import { Casa } from '../casa/casa.model';

export interface Evento{

    id?: number
    nome: string
    descricao: string
    data: Date
    preco: number  
    quantidade_ingresso: number
    nome_casa?: string
    casa_show?: Casa
}