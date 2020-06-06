import { Component, OnInit } from '@angular/core';
import { IngressoService } from '../ingresso.service';
import { Ingresso } from '../ingresso-create/ingresso.model';

@Component({
  selector: 'app-ingresso-read',
  templateUrl: './ingresso-read.component.html',
  styleUrls: ['./ingresso-read.component.css']
})
export class IngressoReadComponent implements OnInit {

  displayedColumns = ['id','nome_evento','nome_cliente','zona']
  ingressos:Ingresso[]
  constructor(private ingressoService:IngressoService) { }

  ngOnInit(): void {
    this.ingressoService.read().subscribe( ingressos=>{
      this.ingressos = ingressos
    })
  
  }

}
