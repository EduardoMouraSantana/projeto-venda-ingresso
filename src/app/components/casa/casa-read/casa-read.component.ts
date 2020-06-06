import { Component, OnInit } from '@angular/core';
import { Casa } from '../casa.model';
import { CasaService } from '../casa.service';

@Component({
  selector: 'app-casa-read',
  templateUrl: './casa-read.component.html',
  styleUrls: ['./casa-read.component.css']
})
export class CasaReadComponent implements OnInit {

  casas:Casa[]
  displayedColumns = ['id','nome','endereco','capacidade','action']

  constructor(private casaService:CasaService) { }

  ngOnInit(): void {
    this.casaService.read().subscribe( clientes=>{
      this.casas = clientes
    })
  }

}
