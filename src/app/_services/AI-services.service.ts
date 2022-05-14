import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
const URL = 'http://127.0.0.1:8000/';
const httpOptions = {
  headers: new HttpHeaders({
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class AIServices {

  constructor(private httpClient: HttpClient) { }

  diabetes(form:any): Observable<any> {
    return this.httpClient.post(URL + 'diabetes', form, httpOptions);
  }
  heart(form:any): Observable<any> {
    return this.httpClient.post(URL + 'cardio', form, httpOptions);
  }


}
