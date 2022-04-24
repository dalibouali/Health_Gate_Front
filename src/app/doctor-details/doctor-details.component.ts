import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {DoctorService} from '../_services/doctors.service'
import { Doctor } from '../doctors/DoctorModel';
@Component({
  selector: 'app-doctor-details',
  templateUrl: './doctor-details.component.html',
  styleUrls: ['./doctor-details.component.css']
})
export class DoctorDetailsComponent implements OnInit {

  id: any;
  doctor: Doctor={id: '',
    firstName:'',
    lastName:'' ,
    username: '',
    password: '',
    prolfileImageUrl:'',
    enabled:'',
    height: '',
    weight: '',
    civilStatus: '',
    city: '',
    IsVerified:'',
    bio:'',
    specialities:'',
    gender: '',
    phone: '',
    roles:'',
    lastseen: '',
    diploma: ''};
  constructor(private route: ActivatedRoute, private doctorService: DoctorService) {}
  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id')
    this.showDoctorDetails()

  }
  showDoctorDetails(){
    this.doctorService.showdetails(this.id).subscribe(doc=>{
      console.log("doc Details")
      console.log("doc from docDetails",doc)  
      this.doctor = doc
    }, error => {
      console.log("Error from user Detail Comp:", error)
    }
    )
  }
}
