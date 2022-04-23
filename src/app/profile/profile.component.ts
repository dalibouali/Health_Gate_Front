import { Component, OnInit } from '@angular/core';
import { UpdateProfileService } from '../_services/update-profile.service'
import { Router } from "@angular/router";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  public isCollapsed = true;
  imgURL: any;
  userFile: any;
  public message: any;
  imagePath: any;

  isShown: boolean = false;

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
    bio: null,
    gender: null,
    phone: null,
    diseases: '',
    specialities: null,

    lastseen: null,
    diploma: null,

  };
  constructor(private updateProfile: UpdateProfileService, private router: Router) { }

  ngOnInit(): void {
  }

  // Toggle rest of profile for doctor application



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
        console.log("There is an error :", err)
      }
    );
  }
  onSelectFile(event: any) {
    if (event.target.files.lengt > 0) {
      const file = event.target.files[0];
      this.userFile = file;
      var mimeType = event.target.files[0].type;
      if (mimeType.match(/image\/*/) == null) {
        this.message = "Only image supported"
        return;
      }
      var reader = new FileReader();
      this.imagePath = file;
      reader.readAsDataURL(file);
      reader.onload = (_event) => {
        this.imgURL = reader.result;
      }
    }

  }


}
