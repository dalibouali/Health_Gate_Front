import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { DoctorService } from '../_services/doctors.service'
import { Doctor } from '../doctors/DoctorModel';
import { UserServiceService } from '../_services/user-service.service';
import { UpdateProfileService } from '../_services/update-profile.service';
@Component({
  selector: 'app-doctor-details',
  templateUrl: './doctor-details.component.html',
  styleUrls: ['./doctor-details.component.css']
})
export class DoctorDetailsComponent implements OnInit {

  id: any;
  doctor: Doctor = {
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
    IsVerified: '',
    bio: '',
    specialities: '',
    gender: '',
    phone: '',
    roles: '',
    lastseen: '',
    diploma: ''
  };
  constructor(private route: ActivatedRoute, private doctorService: DoctorService, private userservice: UserServiceService, private updateprofile: UpdateProfileService) { }
  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id')
    this.showDoctorDetails()

  }
  showDoctorDetails() {
    this.doctorService.showdetails(this.id).subscribe(doc => {
      console.log("doc Details")
      console.log("doc from docDetails", doc)
      this.doctor = doc
    }, error => {
      console.log("Error from user Detail Comp:", error)
    }
    )
  }
  addtomydoctors() {
    this.updateprofile.addDoctortoMyList(this.id).subscribe(doc => {
      console.log("doc Details")


    }, error => {
      console.log(this.id)
      console.log("Error adding user to my list:", error)
    }
    )
  }
}
