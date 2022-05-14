import { Component, OnInit } from '@angular/core';
import { UpdateProfileService } from '../_services/update-profile.service'
import { Router } from "@angular/router";

import { TokenStorageService } from '../_services/token-storage.service';
import { UserServiceService } from '../_services/user-service.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';


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
  ImageProfile: any;
  image: any;
  imagename = "";



  role: any;
  Name = "";
  logged: any;
  test: any;

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
    adress: null,

    lastseen: null,
    diploma: null,

  };

  constructor(private updateProfile: UpdateProfileService, private router: Router, private tokenStorage: TokenStorageService, private userservice: UserServiceService, private modalService: NgbModal) { }

  roleChange() {
    if (this.tokenStorage.getUser()) {
      this.role = this.tokenStorage.getRole()
      console.log("roleChange role:", window.sessionStorage.getItem('auth-token'))
      this.Name = this.tokenStorage.getUser()
      let cred = [this.Name, this.role]
      console.log(cred)

      return cred;
    }

    else {

      return null
    };
  }
  showImgProfile(): void {
    this.updateProfile.showProfileImg().subscribe(
      data => {
        this.ImageProfile = data;
        console.log(data);
      },
      err => {
        this.ImageProfile = err.error.text
      }

    )
  }
  open(content: any) {
    this.modalService.open(content);
  }

  ngOnInit(): void {
    this.showImgProfile();
    this.test = this.roleChange()
    console.log(this.roleChange());


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
  onSelectFile(imageInput: any) {
    if (imageInput.target.files.length > 0) {
      const file = imageInput.target.files[0];
      this.imagename = file.name;
      console.log("heloo" + this.imagename)

      this.userFile = file;
      var mimeType = imageInput.target.files[0].type;
      if (mimeType.match(/image\/*/) == null) {
        this.message = "Only image supported"
        return;
      }
      var reader = new FileReader();
      this.imagePath = file;
      console.log(this.imagePath)
      reader.readAsDataURL(file);
      reader.onload = (_event) => {
        this.imgURL = reader.result;
        console.log("pst" + this.imgURL)
      }
    }



  }

  saveImage() {
    console.log(this.imagename);
    this.updateProfile.saveImage(this.imagename).subscribe(
      data => {

      },
      err => {
        console.log(err)
      }
    )



  }

}
