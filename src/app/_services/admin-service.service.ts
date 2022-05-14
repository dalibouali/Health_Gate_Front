import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const URL = 'http://localhost:9091/admin/';

const httpOptions = {
  headers: new HttpHeaders({
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class AdminServiceService {

  constructor(private httpClient: HttpClient) { }

  readAll(): Observable<any> {
    return this.httpClient.get(URL + 'users', httpOptions);
  }
  delete(id: number): Observable<any> {
    return this.httpClient.delete(URL + 'deleteUser/' + id, httpOptions)

  }
  showdetails(id: number): Observable<any> {
    return this.httpClient.get(URL + 'user/' + id, httpOptions)

  }
  confirm(id: number): Observable<any> {
    return this.httpClient.put(URL + 'confirmDoctor/' + id, httpOptions)

  }



}
