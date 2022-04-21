import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from '../_services/token-storage.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
role:any;
username="";
logged:any;
test:any
  constructor(private tokenStorage :TokenStorageService ) {}

roleChange(){
  if (this.tokenStorage.getUser()){
    this.role = this.tokenStorage.getRole()
    console.log("roleChange role:",window.sessionStorage.getItem('auth-token'))
    this.username = this.tokenStorage.getUser()
    let cred = [this.username, this.role]
    console.log(cred)

    return cred;
  }

  else {

    return null
  };
}

logout(){
     this.tokenStorage.signOut()
  window.location.reload()

}
  ngOnInit(): void {
    this.test = this.roleChange()
    console.log(this.roleChange());
  }

}
