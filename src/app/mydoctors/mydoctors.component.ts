import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import { AdminServiceService } from '../_services/admin-service.service';
import { UserServiceService } from '../_services/user-service.service';

@Component({
  selector: 'app-mydoctors',
  templateUrl: './mydoctors.component.html',
  styleUrls: ['./mydoctors.component.css']
})
export class MydoctorsComponent implements OnInit {
  doctors: any = {
    id: '',
    firstName: '',
    lastName: '',
    username: '',
    password: '',
    prolfileImageUrl: '',
    enabled: '',
    height: '',
    weight: '',
    civilStatus: '',
    city: '',
    IsVerified: null,

    gender: '',
    phone: '',
    roles: '',
    lastseen: '',
    diploma: '',

  }




  constructor(private userservice: UserServiceService, private router: Router, config: NgbModalConfig, private modalService: NgbModal) {
    config.backdrop = 'static';
    config.keyboard = false;



  }

  ngOnInit(): void {
    this.showDoctors();

  }
  showDoctors(): void {
    this.userservice.showMydoctors()
      .subscribe(
        doctors => {
          this.doctors = doctors;
          console.log(doctors)

        },
        error => {
          console.log(error)
        }
      );
  }

  deleteFrommyDoctors(id: number): void {
    this.userservice.deleteFromMydoctors(id).subscribe(
      data => {

        this.ngOnInit()

      }, err => {
        console.log(err)
      }
    )
  }


  open(content: any) {
    this.modalService.open(content);
  }



}
