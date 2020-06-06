import { Component, OnInit } from '@angular/core';
import { ClienteService } from '../cliente.service';
import { RouterLink, Router, ActivatedRoute } from '@angular/router';
import { Cliente } from '../cliente.model';

@Component({
  selector: 'app-cliente-update',
  templateUrl: './cliente-update.component.html',
  styleUrls: ['./cliente-update.component.css']
})
export class ClienteUpdateComponent implements OnInit {

  constructor(private clienteService:ClienteService, private router: Router,private route:ActivatedRoute) { }

  cliente:Cliente

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id')
    this.clienteService.readById(id).subscribe(cliente=>{
      this.cliente = cliente

    })
  }

  updateCliente():void{
    this.clienteService.update(this.cliente).subscribe(()=>{
      this.clienteService.showMessage('Cliente atualizado com sucesso')
      this.router.navigate(["/cliente"])

    })

  }
  

  cancel():void{
    this.router.navigate(['/cliente'])

  }
}
