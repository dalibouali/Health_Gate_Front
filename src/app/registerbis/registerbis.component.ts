import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RegistrationService } from '../_services/registration.service';

@Component({
  selector: 'app-registerbis',
  templateUrl: './registerbis.component.html',
  styleUrls: ['./registerbis.component.css']
})
export class RegisterbisComponent implements OnInit {
  form: any = {
    id: null,
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
  step: any = 1;
  multistep = new FormGroup({
    userDetails: new FormGroup({
      fname: new FormControl('', Validators.required),
      lname: new FormControl('')
    }),
    contactDetails: new FormGroup({
      email: new FormControl('', Validators.required),
      address: new FormControl(''),
      contactNumber: new FormControl(''),
    }),
    personalDetails: new FormGroup({
      gender: new FormControl('null'),
      education: new FormControl('')
    })
  })

  goHome(): void {
    this.router.navigate(['/login']);
  }
  onSubmit(): void {

    this.Registration.register(this.form).subscribe(
      data => {

        this.router.navigate(['/login'])



        this.isRegistred = true;



        this.goHome()




      },

      err => {

      }
    );
  }
  submitted: any = false;
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


  next() {
    this.step = this.step + 1;

  }
  constructor(private Registration: RegistrationService, private router: Router) { }

  ngOnInit(): void {
  }
  previous() {
    this.step = this.step - 1;
  }

}
