
import { Component, OnInit, Input } from '@angular/core';
import { DoctorService } from '../_services/doctors.service'
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';
import { AdminServiceService } from '../_services/admin-service.service';
import { Doctor } from './DoctorModel';

@Component({
  selector: 'app-doctors',
  templateUrl: './doctors.component.html',
  styleUrls: ['./doctors.component.css']
})
export class DoctorsComponent implements OnInit {

  searchText: string = "";


  roleCheck: string = "{id: 2, name: 'ROLE_DOCTOR'}"
  allUsers: any[] = [];
  //doctorsList!:[any];
  constructor(private doctorService: DoctorService, private router: Router, config: NgbModalConfig, private modalService: NgbModal) {
    config.backdrop = 'static';
    config.keyboard = false;

  }

  ngOnInit(): void {
    this.showDoctors()
  }
  showDoctors(): void {
    this.doctorService.getDoctors()
      .subscribe(
        doctors => {

          //doctors.forEach((d:any) => {this.allUsers.push(d)})
          this.allUsers = doctors
          console.log("d", doctors)

        },
        error => {
          console.log(error)
        }
      );
  }
}
