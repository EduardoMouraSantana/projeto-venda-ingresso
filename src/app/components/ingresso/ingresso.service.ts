import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { HttpClient } from '@angular/common/http';
import { Ingresso } from './ingresso-create/ingresso.model';
import { Observable, EMPTY } from 'rxjs';
import { Evento } from '../evento/evento.model';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class IngressoService {

  baseUrl = "http://localhost:8080/ingresso"

  constructor(private snackBar: MatSnackBar, private http: HttpClient) { }

  showMessage(msg:string, isError:boolean = false): void {
    this.snackBar.open(msg, 'X', {
      duration: 2000,
      horizontalPosition:"right",
      verticalPosition:"top",
      panelClass: isError ? ['msg-error'] : ['msg-sucess']
    })

  }

  create(ingresso: Ingresso): Observable<Evento>{
    const url = `${this.baseUrl}/salva`
    return this.http.post<Evento>(url,ingresso).pipe(
      map((obj) =>obj),
      catchError(e => this.errorHandler(e))
    );
  }

  errorHandler(e:any): Observable<any>{
    this.showMessage("Ocorreu um erro", true)
    return EMPTY
  }

  read():Observable<Ingresso[]>{
    return this.http.get<Ingresso[]>(this.baseUrl).pipe(
      map((obj) =>obj),
      catchError(e => this.errorHandler(e))
    );
  }

}
