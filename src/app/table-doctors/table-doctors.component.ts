import { Component, OnInit } from '@angular/core';
import { AdminServiceService } from '../_services/admin-service.service';
import { Router } from '@angular/router';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-table-doctors',
  templateUrl: './table-doctors.component.html',
  styleUrls: ['./table-doctors.component.css']
})
export class TableDoctorsComponent implements OnInit {
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




  constructor(private adminService: AdminServiceService, private router: Router, config: NgbModalConfig, private modalService: NgbModal) {
    config.backdrop = 'static';
    config.keyboard = false;



  }

  ngOnInit(): void {
    this.showDoctors();

  }
  showDoctors(): void {
    this.adminService.readAll()
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
  deletUser(id: number): void {
    this.adminService.delete(id)
      .subscribe(
        (result) => {
          this.doctors = result;

          this.ngOnInit();


        },
        error => {
          console.log(error)
        }
      );

  }
  open(content: any) {
    this.modalService.open(content);
  }
  confirm(id: number): void {
    this.adminService.confirm(id)
      .subscribe(
        (doctors) => {
          this.doctors = doctors;


          this.ngOnInit();


        },
        error => {
          console.log(error)
        }
      );

  }

}
