import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TokenStorageService } from './token-storage.service';

const AUTH_API = 'http://localhost:9901/api/';

@Injectable({
  providedIn: 'root'
})
export class UpdateProfileService {
  constructor(private http: HttpClient, private tokenStorageService: TokenStorageService) { }






  update(form: any): Observable<any> {
    let httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': `Bearer ${this.tokenStorageService.getToken()}` })
    };
    return this.http.put(AUTH_API + 'setProfile', form, httpOptions);
  }
}
