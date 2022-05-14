import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import { DoctorService } from '../_services/doctors.service';
import { UserServiceService } from '../_services/user-service.service';

@Component({
  selector: 'app-mypatients',
  templateUrl: './mypatients.component.html',
  styleUrls: ['./mypatients.component.css']
})
export class MypatientsComponent implements OnInit {
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




  constructor(private doctorservice: DoctorService, private router: Router, config: NgbModalConfig, private modalService: NgbModal) {
    config.backdrop = 'static';
    config.keyboard = false;



  }

  ngOnInit(): void {
    this.showDoctors();

  }
  showDoctors(): void {
    this.doctorservice.showMydoctors()
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




  open(content: any) {
    this.modalService.open(content);
  }




}
