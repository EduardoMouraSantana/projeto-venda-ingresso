import { Component, OnInit } from '@angular/core';
import { Ingresso } from './ingresso.model';
import { EventoService } from '../../evento/evento.service';
import { Evento } from '../../evento/evento.model';
import { ClienteService } from '../../cliente/cliente.service';
import { Cliente } from '../../cliente/cliente.model';
import { Router, ActivatedRoute } from '@angular/router';
import { IngressoService } from '../ingresso.service';

@Component({
  selector: 'app-ingresso-create',
  templateUrl: './ingresso-create.component.html',
  styleUrls: ['./ingresso-create.component.css']
})
export class IngressoCreateComponent implements OnInit {

  ingresso:Ingresso = {
    zona: "",
    nome_cliente: "",
    nome_evento: ""
  }

  eventos: Evento[]
  clientes: Cliente[]
  evento:Evento

  constructor(private eventoService:EventoService, 
    private clienteService:ClienteService,
    private router:Router, 
    private ingressoService:IngressoService,
    private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.eventoService.read().subscribe( eventos=>{
      this.eventos = eventos
    })
    this.clienteService.read().subscribe( clientes=>{
      this.clientes = clientes
    })
    const id = +this.route.snapshot.paramMap.get('id');
    this.eventoService.readById(id).subscribe(evento =>{
      this.evento = evento;
    })
  }

  createIngresso(): void{
    console.log(this.ingresso)
    this.ingressoService.create(this.ingresso).subscribe(()=>{
      this.ingressoService.showMessage('Compra executada com sucesso!')
      this.router.navigate(['/evento'])
      

    })
  }

  cancel():void{
    this.router.navigate(['/evento'])
  }

}
