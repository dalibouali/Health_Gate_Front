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
<<<<<<< HEAD
    return this.http.post("http://localhost:9091/api/signin", request, { responseType: 'text' as 'json' })
=======
    return this.http.post("http://localhost:9901/api/login", request, { responseType: 'text' as 'json' })
>>>>>>> e95e353c05454a1926f35691475afbf5b58d6872
  }


  public welcome(token: String) {
    let tokenStr = 'Bearer ' + token;
    const headers = new HttpHeaders().set("Authorization", tokenStr);
<<<<<<< HEAD
    return this.http.get("http://localhost:9091/api/signin", { headers, responseType: 'text' as 'json' })
=======
    return this.http.get("http://localhost:9901/api/login", { headers, responseType: 'text' as 'json' })
>>>>>>> e95e353c05454a1926f35691475afbf5b58d6872
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
