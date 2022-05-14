
import { Component, AfterViewInit, EventEmitter, Output } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';
import { TokenStorageService } from '../_services/token-storage.service';
import { UpdateProfileService } from '../_services/update-profile.service';

declare var $: any;

@Component({
  selector: 'app-profile-dropdown',
  templateUrl: './profile-dropdown.component.html',
  styleUrls: ['./profile-dropdown.component.css']
})
export class ProfileDropdownComponent implements AfterViewInit {
  @Output() toggleSidebar = new EventEmitter<void>();

  public config: PerfectScrollbarConfigInterface = {};

  public showSearch = false;
  role: any;
  username = "";
  logged: any;
  test: any
  ImageProfile: any;


  constructor(private updateProfile: UpdateProfileService, private modalService: NgbModal, private tokenStorage: TokenStorageService) {
  }



  ngAfterViewInit() { }

  showImgProfile() {
    this.updateProfile.showProfileImg().subscribe(
      data => {
        this.ImageProfile = JSON.stringify(data);
        console.log(data);
      },
      err => {

        this.ImageProfile = err.error.text
        console.log(this.ImageProfile);
        console.log(err);
      }

    )
  }

  roleChange() {
    if (this.tokenStorage.getUser()) {
      this.role = this.tokenStorage.getRole()
      console.log("roleChange role:", window.sessionStorage.getItem('auth-token'))
      this.username = this.tokenStorage.getUser()
      let cred = [this.username, this.role]
      console.log(cred)

      return cred;
    }

    else {

      return null
    };
  }

  logout() {
    this.tokenStorage.signOut()
    window.location.reload()

  }
  ngOnInit(): void {

    this.test = this.roleChange()
    console.log(this.roleChange());
    this.showImgProfile();
  }
}

