import { Component, OnInit } from '@angular/core';
import { Evento } from '../evento.model';
import { EventoService } from '../evento.service';

@Component({
  selector: 'app-evento-read',
  templateUrl: './evento-read.component.html',
  styleUrls: ['./evento-read.component.css']
})
export class EventoReadComponent implements OnInit {

  eventos:Evento[]
  displayedColumns = ['id','nome','descricao','data','preco','quantidade_ingresso','casa_show','action']

  constructor(private eventoService:EventoService) {}

  ngOnInit(): void {
    this.eventoService.read().subscribe( eventos=>{
      this.eventos = eventos
    })
  }

}
