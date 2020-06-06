import { Component, OnInit } from '@angular/core';
import { CasaService } from '../casa.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Casa } from '../casa.model';

@Component({
  selector: 'app-casa-update',
  templateUrl: './casa-update.component.html',
  styleUrls: ['./casa-update.component.css']
})
export class CasaUpdateComponent implements OnInit {

  constructor(private casaService:CasaService, private router:Router, private route:ActivatedRoute) { }

  casa:Casa

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id')
    this.casaService.readById(id).subscribe(casa=>{
      this.casa = casa

    })
  }

  updateCasa():void{
    this.casaService.update(this.casa).subscribe(()=>{
      this.casaService.showMessage('Casa atualizada com sucesso')
      this.router.navigate(["/casa"])

    })

    }
  

  cancel():void{
    this.router.navigate(['/casa'])

  }

}
