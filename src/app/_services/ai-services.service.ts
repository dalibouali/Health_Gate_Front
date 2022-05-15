import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
const URL = 'https://chronic-disease-predection.herokuapp.com/';
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

  diabetes(form: any): Observable<any> {
    return this.httpClient.post(URL + 'diabetes', form, httpOptions);
  }
  heart(form: any): Observable<any> {
    return this.httpClient.post(URL + 'cardio', form, httpOptions);
  }
}