import { Component, OnInit } from '@angular/core';
import { Evento } from '../evento.model';
import { EventoService } from '../evento.service';
import { Router } from '@angular/router';
import { Casa } from '../../casa/casa.model';
import { CasaService } from '../../casa/casa.service';

@Component({
  selector: 'app-evento-create',
  templateUrl: './evento-create.component.html',
  styleUrls: ['./evento-create.component.css']
})
export class EventoCreateComponent implements OnInit {

  evento:Evento = {
    nome: "",
	  descricao: "",
    data: null,
    preco:null,
    quantidade_ingresso: null
  }

  casas:Casa[]

  nome_casa:string
  status:boolean

  constructor(private eventoService:EventoService,private router:Router,private casaService:CasaService) { }

  ngOnInit(): void {
    this.casaService.read().subscribe( casas=>{
      this.casas = casas
    })
  }

  createEvento(): void{
    this.eventoService.create(this.evento).subscribe(()=>{
      console.log(this.evento)
      this.eventoService.showMessage('Operação executada com sucesso!')
      this.router.navigate(['/evento'])
      

    })
  }

  cancel():void{
    this.router.navigate(['/evento'])
  }


}
