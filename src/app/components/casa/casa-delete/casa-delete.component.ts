import { Component, OnInit } from '@angular/core';
import { CasaService } from '../casa.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Casa } from '../casa.model';

@Component({
  selector: 'app-casa-delete',
  templateUrl: './casa-delete.component.html',
  styleUrls: ['./casa-delete.component.css']
})
export class CasaDeleteComponent implements OnInit {

  casa:Casa

  constructor(private casaService:CasaService, private router:Router, private route:ActivatedRoute) { }

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.casaService.readById(id).subscribe(cliente =>{
      this.casa = cliente;

    })
  }

  deleteCasa(){
    this.casaService.delete(this.casa.id).subscribe(()=>{
      this.casaService.showMessage("Casa excluída com sucesso")
      this.router.navigate(["/casa"])

    })
  }

  cancel(){
    this.router.navigate(["/casa"])

  }

}
