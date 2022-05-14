import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TokenStorageService } from './token-storage.service';


const AUTH_API = 'http://localhost:9091/api/';


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
  showProfileImg(): Observable<any> {
    let httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json', 'responseType': 'text', 'Authorization': `Bearer ${this.tokenStorageService.getToken()}` })
    };
    return this.http.get(AUTH_API + 'showMyProfileImg', httpOptions)

  }
  saveImage(image: string): Observable<any> {
    let httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': `Bearer ${this.tokenStorageService.getToken()}` })
    };

    return this.http.post(AUTH_API + 'uploadImage', image, httpOptions)


  }
  //contain error
  addDoctortoMyList(id: number): Observable<any> {
    let httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': `Bearer ${this.tokenStorageService.getToken()}` })
    };
    const username = window.sessionStorage.getItem('auth-user');
    console.log(username)


    return this.http.put('http://localhost:9091/api/addDoctorToMyList/' + id, username, httpOptions)

  }
}
