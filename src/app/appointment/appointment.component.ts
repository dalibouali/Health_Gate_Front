import { Component, OnInit } from '@angular/core';


import { NgbDateStruct, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AdminServiceService } from '../_services/admin-service.service';
import { DoctorService } from '../_services/doctors.service';
import { UserServiceService } from '../_services/user-service.service';
// a plugin!




@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.css']
})
export class AppointmentComponent implements OnInit {

  Appointment: any;

  model: NgbDateStruct | undefined;
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

  constructor(private userservice: UserServiceService, private adminService: AdminServiceService, private doctorservice: DoctorService, private modalService: NgbModal) { }

  ngOnInit(): void {
    this.showDoctors();
    this.getAppointments();
  }
  selected = "----------------------"

  update(e: any) {
    this.selected = e.target.value
  }
  showDoctors(): void {
    this.doctorservice.getDoctors()
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

  myDate: any;
  form: any = {
    date: null,

    doctor: null,

    message: "",
  }


  onsubmit(): void {
    this.form.date = new Date(
      this.form.date.year,
      this.form.date.month,
      this.form.date.day);



    console.log(this.form);
    this.userservice.makeappointment(this.form).subscribe(
      data => {
        this.ngOnInit();


      },

      err => {

      }

    )

  }

  open(content: any) {
    this.modalService.open(content);
  }
  getAppointments() {
    this.userservice.getOppointments().subscribe(
      data => {
        this.Appointment = data;
        console.log(data)
      },
      err => {
        console.log(err)
      }

    )
  }
  canceloppointment(id: number) {
    this.userservice.cancelOppointments(id).subscribe(
      data => {
        this.ngOnInit();

      },
      err => {
        console.log(err)
      }

    )

  }








}


