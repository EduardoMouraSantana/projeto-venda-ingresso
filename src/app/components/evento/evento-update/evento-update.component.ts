import { Component, OnInit } from '@angular/core';
import { EventoService } from '../evento.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Evento } from '../evento.model';

@Component({
  selector: 'app-evento-update',
  templateUrl: './evento-update.component.html',
  styleUrls: ['./evento-update.component.css']
})
export class EventoUpdateComponent implements OnInit {

  evento:Evento

  constructor(private eventoService:EventoService, private router:Router, private route:ActivatedRoute) { }

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id')
    this.eventoService.readById(id).subscribe(evento=>{
      this.evento = evento

    })
  }

  updateEvento():void{
    this.eventoService.update(this.evento).subscribe(()=>{
      this.eventoService.showMessage('Casa atualizada com sucesso')
      this.router.navigate(["/casa"])

      })
  }
  

  cancel():void{
    this.router.navigate(['/casa'])

  }

}

