import { Component, OnInit, Input } from '@angular/core';
import {DoctorService} from '../_services/doctors.service'
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';

@Component({
  selector: 'app-doctor',
  templateUrl: './doctor.component.html',
  styleUrls: ['./doctor.component.css']
})
export class DoctorComponent implements OnInit {
@Input() doctorFirstName!: String;
@Input() doctorLastName!: String;
@Input() speciality!: String;
@Input() biography!:String;
@Input() username!:String;
@Input() doctorID!:String;

  allUsers!: [];
  doctorsList!:[any];
  constructor(private doctorService:DoctorService) {
  

   }

  ngOnInit(): void {
  
  }
  
}
