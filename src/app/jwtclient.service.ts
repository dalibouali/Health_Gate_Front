import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from "rxjs/operators";

export class User {
  constructor(public status: string) { }
}
@Injectable({
  providedIn: 'root'
})
export class JWTClientService {

  constructor(private http: HttpClient) { }


  public generateToken(request: Request) {
    return this.http.post("http://localhost:9901/api/login", request, { responseType: 'text' as 'json' })
  }


  public welcome(token: String) {
    let tokenStr = 'Bearer ' + token;
    const headers = new HttpHeaders().set("Authorization", tokenStr);
    return this.http.get("http://localhost:9901/api/login", { headers, responseType: 'text' as 'json' })
  }
  isUserLoggedIn() {
    let user = sessionStorage.getItem("username");
    console.log(!(user === null));
    return !(user === null);
  }

  logOut() {
    sessionStorage.removeItem("username");
  }
}
