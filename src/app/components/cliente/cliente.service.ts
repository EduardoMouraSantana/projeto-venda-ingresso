import { Injectable } from '@angular/core';
import { MatSnackBar} from '@angular/material/snack-bar'
import { HttpClient } from '@angular/common/http';
import { Cliente } from './cliente.model';
import { Observable, EMPTY } from 'rxjs';

import { map, catchError } from 'rxjs/operators'


@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  baseUrl = "http://localhost:8080/cliente"


  constructor(private snackBar: MatSnackBar, private http: HttpClient) {}

  showMessage(msg:string, isError:boolean = false): void {
    this.snackBar.open(msg, 'X', {
      duration: 2000,
      horizontalPosition:"right",
      verticalPosition:"top",
      panelClass: isError ? ['msg-error'] : ['msg-sucess']
    })

  }

  create(cliente: Cliente): Observable<Cliente>{
    const url = `${this.baseUrl}/salva`
    return this.http.post<Cliente>(url,cliente).pipe(
      map((obj) =>obj),
      catchError(e => this.errorHandler(e))
    );
  }

  errorHandler(e:any): Observable<any>{
    this.showMessage("Ocorreu um erro", true)
    return EMPTY
  }

  read():Observable<Cliente[]>{
    return this.http.get<Cliente[]>(this.baseUrl).pipe(
      map((obj) =>obj),
      catchError(e => this.errorHandler(e))
    );
  }

  readById(id:number): Observable<Cliente>{
    const url = `${this.baseUrl}/${id}`
    return this.http.get<Cliente>(url).pipe(
      map((obj) =>obj),
      catchError(e => this.errorHandler(e))
    );
  }

  update(cliente:Cliente):Observable<Cliente>{
    const url = `${this.baseUrl}/altera`
    return this.http.patch<Cliente>(url,cliente).pipe(
      map((obj) =>obj),
      catchError(e => this.errorHandler(e))
    );
  }

  delete(id:number):Observable<Cliente>{
    const url = `${this.baseUrl}/deleta/${id}`
    return this.http.delete<Cliente>(url).pipe(
      map((obj) =>obj),
      catchError(e => this.errorHandler(e))
    );

  }
}
