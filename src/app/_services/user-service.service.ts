import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TokenStorageService } from './token-storage.service';
const AUTH_API = 'http://localhost:9091/api/';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor(private http: HttpClient, private tokenStorageService: TokenStorageService) { }


  uploadFile(file: File): Observable<any> {
    let httpOptions = {
      headers: new HttpHeaders({ 'Authorization': `Bearer ${this.tokenStorageService.getToken()}` })
    };


    // Create form data
    const formData = new FormData();

    // Store form name as "file" with file data
    formData.append("document", file);

    // Make http post request over api
    // with formData as req
    return this.http.post(AUTH_API + "upload", formData, httpOptions)
  }
  getFiles(): Observable<any> {
    let httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': `Bearer ${this.tokenStorageService.getToken()}` })
    };
    return this.http.get(AUTH_API + "files", httpOptions);

  }
  deleteFile(id: number): Observable<any> {
    let httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': `Bearer ${this.tokenStorageService.getToken()}` })
    };
    return this.http.delete(AUTH_API + "deleteFile/" + id, httpOptions);

  }
  addDisc(id: number, form: any): Observable<any> {
    let httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': `Bearer ${this.tokenStorageService.getToken()}` })
    };
    console.log(form);
    return this.http.put(AUTH_API + "addDiscription/" + id, form.discription, httpOptions);

  }

  makeappointment(form: any): Observable<any> {
    let httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': `Bearer ${this.tokenStorageService.getToken()}` })
    };
    return this.http.post(AUTH_API + "sendAppointment", form, httpOptions);
  }
  getUser(id: number): Observable<any> {
    let httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': `Bearer ${this.tokenStorageService.getToken()}` })
    };
    return this.http.get('http://localhost:9091/api/' + 'user/' + id, httpOptions);
  }
  //contain error
  addDoctortoMyList(id: number): Observable<any> {
    let httpOptions = {
      headers: new HttpHeaders({ 'Authorization': `Bearer ${this.tokenStorageService.getToken()}` })
    };

    return this.http.put('http://localhost:9091/api/addDoctorToMyList/' + id, httpOptions)

  }
  showProfileImg(): Observable<any> {
    let httpOptions = {
      headers: new HttpHeaders({ 'Accept': 'Text', 'Content-Type': 'application/json', 'Authorization': `Bearer ${this.tokenStorageService.getToken()}` })
    };
    return this.http.get(AUTH_API + 'showMyProfileImg', httpOptions)

  }
  getOppointments(): Observable<any> {
    let httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': `Bearer ${this.tokenStorageService.getToken()}` })
    };
    return this.http.get('http://localhost:9091/api/findApoointmentsAsUser', httpOptions);
  }
  cancelOppointments(id: Number): Observable<any> {
    let httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': `Bearer ${this.tokenStorageService.getToken()}` })
    };
    return this.http.delete('http://localhost:9091/api/cancelAppointment/' + id, httpOptions);
  }
  //may contain error
  getFilecontent(id: Number): Observable<any> {
    let httpOptions = {
      headers: new HttpHeaders({ 'responseType': 'text', 'Content-Type': 'application/json', 'Authorization': `Bearer ${this.tokenStorageService.getToken()}` })
    };
    return this.http.get<string>('http://localhost:9091/api/getFileContent/' + id, httpOptions);
  }
  setFileContent(id: Number, newContent: string): Observable<any> {
    let httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': `Bearer ${this.tokenStorageService.getToken()}` })
    };
    return this.http.put<string>('http://localhost:9091/api/setFileContent/' + id, newContent, httpOptions);
  }
  getOppointmentsAsDoctors(): Observable<any> {
    let httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': `Bearer ${this.tokenStorageService.getToken()}` })
    };
    return this.http.get('http://localhost:9091/api/findApoointmentsAsDoctor', httpOptions);
  }


  setdateofappointment(id: number, date: Date): Observable<any> {
    let httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': `Bearer ${this.tokenStorageService.getToken()}` })
    };
    return this.http.put('http://localhost:9091/api/Editappointment/' + id, date, httpOptions);

  }
  showMydoctors(): Observable<any> {
    let httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': `Bearer ${this.tokenStorageService.getToken()}` })
    };
    return this.http.get(AUTH_API + 'Mydoctors', httpOptions);
  }

  deleteFromMydoctors(id: number): Observable<any> {
    let httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': `Bearer ${this.tokenStorageService.getToken()}` })
    };
    const username = window.sessionStorage.getItem('auth-user');
    return this.http.put(AUTH_API + 'deleteDoctorFromMyList/' + id, username, httpOptions);
  }







}
