import { Component, OnInit } from '@angular/core';
import {UpdateProfileService} from '../_services/update-profile.service'
import {Router} from "@angular/router";
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  form: any = {
    firstName: null,
    lastName: null,
    username: null,
    password: null,
    prolfileImageUrl: null,

    height: null,
    weight: null,
    civilStatus: null,
    city: null,
    bio:null,
    gender: null,
    phone: null,
    diseases: '',

    lastseen: null,
    diploma: null,

  };
  constructor(private updateProfile: UpdateProfileService, private router:Router) { }

  ngOnInit(): void {
  }
  goHome(): void {
    this.router.navigate(['/home']);
  }
  onSubmit(): void {
    this.updateProfile.update(this.form).subscribe(
      data => {
        console.log(this.form)
        console.log("updated !!!", data)
        this.goHome()

      },

      err => {
          console.log("There is an error :",err)
      }
    );
  }

}
