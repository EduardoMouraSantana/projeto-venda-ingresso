import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './views/home/home.component';
import { ClienteCrudComponent } from './views/cliente-crud/cliente-crud.component';
import { EventoCrudComponent } from './views/evento-crud/evento-crud.component';
import { CasaCrudComponent } from './views/casa-crud/casa-crud.component';
import { ClienteCreateComponent } from './components/cliente/cliente-create/cliente-create.component';
import { ClienteUpdateComponent } from './components/cliente/cliente-update/cliente-update.component';
import { ClienteDeleteComponent } from './components/cliente/cliente-delete/cliente-delete.component';
import { EventoCreateComponent } from './components/evento/evento-create/evento-create.component';
import { EventoUpdateComponent } from './components/evento/evento-update/evento-update.component';
import { EventoDeleteComponent } from './components/evento/evento-delete/evento-delete.component';
import { CasaCreateComponent } from './components/casa/casa-create/casa-create.component';
import { CasaUpdateComponent } from './components/casa/casa-update/casa-update.component';
import { CasaDeleteComponent } from './components/casa/casa-delete/casa-delete.component';
import { IngressoCreateComponent } from './components/ingresso/ingresso-create/ingresso-create.component';
import { IngressoReadComponent } from './components/ingresso/ingresso-read/ingresso-read.component';


const routes: Routes = [
  {
    path: "home",
    component: HomeComponent
  },
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "cliente",
    component: ClienteCrudComponent
  },
  {
    path: "cliente/create",
    component: ClienteCreateComponent
  },
  {
    path:"cliente/update/:id",
    component: ClienteUpdateComponent
  },
  {
    path:"cliente/delete/:id",
    component: ClienteDeleteComponent
  },
  {
    path: "evento",
    component: EventoCrudComponent
  },
  {
    path: "evento/create",
    component: EventoCreateComponent
  },
  {
    path:"evento/update/:id",
    component: EventoUpdateComponent
  },
  {
    path:"evento/delete/:id",
    component: EventoDeleteComponent
  },
  {
    path: "casa",
    component: CasaCrudComponent
  },
  {
    path: "casa/create",
    component: CasaCreateComponent
  },
  {
    path:"casa/update/:id",
    component: CasaUpdateComponent
  },
  {
    path:"casa/delete/:id",
    component: CasaDeleteComponent
  },
  {
    path:"ingresso/create/:id",
    component: IngressoCreateComponent
  },
  {
    path:"ingresso",
    component: IngressoReadComponent
  }




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
