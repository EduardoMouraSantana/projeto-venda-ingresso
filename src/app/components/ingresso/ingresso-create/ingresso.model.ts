import { Evento } from '../../evento/evento.model';
import { Cliente } from '../../cliente/cliente.model';

export interface Ingresso{

    id?: number
    evento?: Evento
    cliente?: Cliente
    zona?: string
    nome_evento: string
    nome_cliente: string
}