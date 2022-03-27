import { Component, OnInit } from '@angular/core';
import { RegistrationService } from '../_services/registration.service';


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
    roles: null,
    lastseen: null,
    diploma: null,

  };

  constructor(private Registration: RegistrationService) { }

  ngOnInit(): void {
  }
  onSubmit(): void {
    this.Registration.register(this.form).subscribe(
      data => {


      },

      err => {

      }
    );
  }
}
