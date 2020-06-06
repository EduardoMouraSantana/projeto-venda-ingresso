import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClienteCreateComponent } from './components/cliente/cliente-create/cliente-create.component';
import { CasaCreateComponent } from './components/casa/casa-create/casa-create.component';
import { EventoCreateComponent } from './components/evento/evento-create/evento-create.component';
import { IngressoCreateComponent } from './components/ingresso/ingresso-create/ingresso-create.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/template/header/header.component';
import { MatToolbarModule} from '@angular/material/toolbar';
import { FooterComponent } from './components/template/footer/footer.component';
import { NavComponent } from './components/template/nav/nav.component';
import { MatSidenavModule} from '@angular/material/sidenav';
import { MatListModule} from '@angular/material/list';
import { HomeComponent } from './views/home/home.component';
import { MatCardModule} from '@angular/material/card';
import { ClienteCrudComponent } from './views/cliente-crud/cliente-crud.component';
import { EventoCrudComponent } from './views/evento-crud/evento-crud.component';
import { CasaCrudComponent } from './views/casa-crud/casa-crud.component';
import { MatButtonModule} from '@angular/material/button';
import { MatSnackBarModule} from '@angular/material/snack-bar';
import { HttpClientModule} from '@angular/common/http';

import { FormsModule} from '@angular/forms';
import { MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule} from '@angular/material/input';
import { ClienteReadComponent } from './components/cliente/cliente-read/cliente-read.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { ClienteUpdateComponent } from './components/cliente/cliente-update/cliente-update.component';
import { ClienteDeleteComponent } from './components/cliente/cliente-delete/cliente-delete.component';
import { CasaDeleteComponent } from './components/casa/casa-delete/casa-delete.component';
import { CasaReadComponent } from './components/casa/casa-read/casa-read.component';
import { CasaUpdateComponent } from './components/casa/casa-update/casa-update.component';
import { EventoDeleteComponent } from './components/evento/evento-delete/evento-delete.component';
import { EventoReadComponent } from './components/evento/evento-read/evento-read.component';
import { EventoUpdateComponent } from './components/evento/evento-update/evento-update.component';
import { MatSelectModule} from '@angular/material/select';

import localePt from '@angular/common/locales/pt';
import { registerLocaleData} from '@angular/common';
import { IngressoReadComponent } from './components/ingresso/ingresso-read/ingresso-read.component';


registerLocaleData(localePt);





@NgModule({
  declarations: [
    AppComponent,
    ClienteCreateComponent,
    CasaCreateComponent,
    EventoCreateComponent,
    IngressoCreateComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    HomeComponent,
    ClienteCrudComponent,
    EventoCrudComponent,
    CasaCrudComponent,
    ClienteReadComponent,
    ClienteUpdateComponent,
    ClienteDeleteComponent,
    CasaDeleteComponent,
    CasaReadComponent,
    CasaUpdateComponent,
    EventoDeleteComponent,
    EventoReadComponent,
    EventoUpdateComponent,
    IngressoReadComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatListModule,
    MatSidenavModule,
    MatCardModule,
    MatButtonModule,
    MatSnackBarModule,
    HttpClientModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatSelectModule
  ],
  providers: [{
    provide: LOCALE_ID,
    useValue: 'pt-BR'
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
