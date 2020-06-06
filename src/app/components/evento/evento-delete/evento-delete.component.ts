import { Component, OnInit } from '@angular/core';
import { EventoService } from '../evento.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Evento } from '../evento.model';

@Component({
  selector: 'app-evento-delete',
  templateUrl: './evento-delete.component.html',
  styleUrls: ['./evento-delete.component.css']
})
export class EventoDeleteComponent implements OnInit {

  evento:Evento

  constructor(private eventoService:EventoService, private router:Router, private route:ActivatedRoute) { }

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.eventoService.readById(id).subscribe(evento =>{
      this.evento = evento;

    })
  }

  deleteEvento(){
    this.eventoService.delete(this.evento.id).subscribe(()=>{
      this.eventoService.showMessage("Evento excluído com sucesso")
      this.router.navigate(["/evento"])

    })
  }

  cancel(){
    this.router.navigate(["/evento"])

  }

}
