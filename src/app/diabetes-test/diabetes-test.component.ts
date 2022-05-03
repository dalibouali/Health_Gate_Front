import { Component, OnInit } from '@angular/core';
import { AIServices } from '../_services/AI-services.service';
import { Router } from "@angular/router";

@Component({
  selector: 'app-diabetes-test',
  templateUrl: './diabetes-test.component.html',
  styleUrls: ['./diabetes-test.component.css']
})
export class DiabetesTestComponent implements OnInit {
  show = false;
  result!:string;
  form: any = {

  "pregnancies" :null,
  "glucose": null,
  "bloodPressure": null,
  "skinThickness": null,
  "insulin": null,
  "BMI": null,
  "diabetesPedigreeFunction": null,
  "age": null
  }
  constructor(private aiServices: AIServices, private router: Router) { }

  ngOnInit(): void {
  }
  
  onSubmit(): void {
    
    let payload=
    {
      "Pregnancies": this.form.pregnancies as number,
      "Glucose": this.form.glucose as number,
      "BloodPressure": this.form.bloodPressure as number ,
      "SkinThickness":this.form.skinThickness as number,
      "Insulin": this.form.insulin as number,
      "BMI": this.form.BMI as number,
      "DiabetesPedigreeFunction": this.form.diabetesPedigreeFunction as number,
      "Age": this.form.age as number
    }
    
    this.aiServices.diabetes(payload).subscribe(
      data => {
        console.log("diabetes result:", data)
        this.result = data
        this.show=true
                      
     },

      err => {

      }
    );
  }

}
