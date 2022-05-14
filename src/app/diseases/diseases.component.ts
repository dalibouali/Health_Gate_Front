import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UpdateProfileService } from '../_services/update-profile.service';

@Component({
  selector: 'app-diseases',
  templateUrl: './diseases.component.html',
  styleUrls: ['./diseases.component.css']
})
export class DiseasesComponent implements OnInit {
  form: any = {

    diseases: '',


  };
  constructor(private updateProfile: UpdateProfileService, private router: Router) { }

  ngOnInit(): void {
  }

  // Toggle rest of profile for doctor application


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
    this.router.navigate(['/home']);
  }
  onSubmit(): void {
    this.updateProfile.update(this.form).subscribe(
      data => {
        console.log(this.form)
        console.log("updated !!!", data)
        this.goHome()

      },

      err => {
        console.log("There is an error :", err)
      }
    );
  }
}
