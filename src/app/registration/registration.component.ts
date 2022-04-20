import { Component, OnInit } from '@angular/core';
import { RegistrationService } from '../_services/registration.service';
import { Router } from "@angular/router";

import { TokenStorageService } from '../_services/token-storage.service';


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  form: any = {
    firstName: null,
    lastName: null,
    username: null,
    password: null,
    prolfileImageUrl: null,
    enabled: null,
    height: null,
    weight: null,
    civilStatus: null,
    city: null,

    gender: null,
    phone: null,
    diseases: '',

    lastseen: null,
    diploma: null,

  };
  isRegistred = false;

  constructor(private Registration: RegistrationService, private router: Router) { }

  ngOnInit(): void {
  }

  Cholesterol(event: any) {
    if (event.target.checked) this.form.diseases += (event.target.value)
  }
  BloodPressure(event: any) {
    if (event.target.checked) this.form.diseases += (event.target.value)
  }
  Diabete(event: any) {
    if (event.target.checked) this.form.diseases += (event.target.value)
  }
  Asthma(event: any) {
    if (event.target.checked) this.form.diseases += (event.target.value)
  }
  Osteoporosis(event: any) {
    if (event.target.checked) this.form.diseases += (event.target.value)
  }
  Arthritis(event: any) {
    if (event.target.checked) this.form.diseases += (event.target.value)
  }
  HeartAttack(event: any) {
    if (event.target.checked) this.form.diseases += (event.target.value)
  }
  BloodSugar(event: any) {
    if (event.target.checked) this.form.diseases += (event.target.value)
  }
  Hemoglobin(event: any) {
    if (event.target.checked) this.form.diseases += (event.target.value)
  }
  Cancer(event: any) {
    if (event.target.checked) this.form.diseases += (event.target.value)
  }
  Breast(event: any) {
    if (event.target.checked) this.form.diseases += (event.target.value)
  }
  Other(event: any) {
    if (event.target.checked) this.form.diseases += (event.target.value)
  }


  goHome(): void {
    this.router.navigate(['/login']);
  }

  onSubmit(): void {
    this.Registration.register(this.form).subscribe(
      data => {
        this.isRegistred = true;

        this.goHome()


      },

      err => {

      }
    );
  }



}
