import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TokenStorageService } from './token-storage.service';

const URL = 'http://localhost:9901/api/';
const httpOptions = {
  headers: new HttpHeaders({
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class DoctorService {

  constructor(private tokenStorageService: TokenStorageService,private httpClient: HttpClient) { }

  getDoctors(): Observable<any> {
    let httpOptions = {
        headers: new HttpHeaders({ 'Accept': 'application/json','Content-Type': 'application/json', 'Authorization': `Bearer ${this.tokenStorageService.getToken()}` })
      };
    return this.httpClient.get(URL + 'doctors', httpOptions);
  }
  
  showdetails(id: number): Observable<any> {
    return this.httpClient.get('http://localhost:9901/admin/' + 'user/' + id, httpOptions)

  }




}
