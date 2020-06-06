import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { HttpClient } from '@angular/common/http';
import { Casa } from './casa.model';
import { Observable, EMPTY } from 'rxjs';
import { map, catchError } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class CasaService {

  baseUrl = "http://localhost:8080/casa"

  constructor(private snackBar: MatSnackBar, private http: HttpClient) { }

  showMessage(msg:string, isError:boolean = false): void {
    this.snackBar.open(msg, 'X', {
      duration: 2000,
      horizontalPosition:"right",
      verticalPosition:"top",
      panelClass: isError ? ['msg-error'] : ['msg-sucess']
    })

  }

  create(casa: Casa): Observable<Casa>{
    const url = `${this.baseUrl}/salva`
    return this.http.post<Casa>(url,casa).pipe(
      map((obj) =>obj),
      catchError(e => this.errorHandler(e))
    );
  }

  errorHandler(e:any): Observable<any>{
    this.showMessage("Ocorreu um erro", true)
    return EMPTY
  }

  read():Observable<Casa[]>{
    return this.http.get<Casa[]>(this.baseUrl).pipe(
      map((obj) =>obj),
      catchError(e => this.errorHandler(e))
    );
  }

  readById(id:number): Observable<Casa>{
    const url = `${this.baseUrl}/${id}`
    return this.http.get<Casa>(url).pipe(
      map((obj) =>obj),
      catchError(e => this.errorHandler(e))
    );
  }

  update(casa:Casa):Observable<Casa>{
    const url = `${this.baseUrl}/altera`
    return this.http.patch<Casa>(url,casa).pipe(
      map((obj) =>obj),
      catchError(e => this.errorHandler(e))
    );
  }

  delete(id:number):Observable<Casa>{
    const url = `${this.baseUrl}/deleta/${id}`
    return this.http.delete<Casa>(url).pipe(
      map((obj) =>obj),
      catchError(e => this.errorHandler(e))
    );

  }
}
