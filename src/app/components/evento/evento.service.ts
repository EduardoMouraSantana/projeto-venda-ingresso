import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { HttpClient } from '@angular/common/http';
import { Evento } from './evento.model';
import { Observable, EMPTY } from 'rxjs';
import { map, catchError } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class EventoService {

  baseUrl = "http://localhost:8080/evento"

  constructor(private snackBar: MatSnackBar, private http: HttpClient) { }

  showMessage(msg:string, isError:boolean = false): void {
    this.snackBar.open(msg, 'X', {
      duration: 2000,
      horizontalPosition:"right",
      verticalPosition:"top",
      panelClass: isError ? ['msg-error'] : ['msg-sucess']
    })

  }

  create(evento: Evento): Observable<Evento>{
    const url = `${this.baseUrl}/salva`
    return this.http.post<Evento>(url,evento).pipe(
      map((obj) =>obj),
      catchError(e => this.errorHandler(e))
    );
  }

  errorHandler(e:any): Observable<any>{
    this.showMessage("Ocorreu um erro", true)
    return EMPTY
  }

  read():Observable<Evento[]>{
    return this.http.get<Evento[]>(this.baseUrl).pipe(
      map((obj) =>obj),
      catchError(e => this.errorHandler(e))
    );
  }

  readById(id:number): Observable<Evento>{
    const url = `${this.baseUrl}/${id}`
    return this.http.get<Evento>(url).pipe(
      map((obj) =>obj),
      catchError(e => this.errorHandler(e))
    );
  }

  update(evento:Evento):Observable<Evento>{
    const url = `${this.baseUrl}/altera`
    return this.http.patch<Evento>(url,evento).pipe(
      map((obj) =>obj),
      catchError(e => this.errorHandler(e))
    );
  }

  delete(id:number):Observable<Evento>{
    const url = `${this.baseUrl}/deleta/${id}`
    return this.http.delete<Evento>(url).pipe(
      map((obj) =>obj),
      catchError(e => this.errorHandler(e))
    );

  }

}
