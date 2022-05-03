import { Component, OnInit } from '@angular/core';
import { AIServices } from '../_services/AI-services.service';
import { Router } from "@angular/router";
@Component({
  selector: 'app-heart-test',
  templateUrl: './heart-test.component.html',
  styleUrls: ['./heart-test.component.css']
})
export class HeartTestComponent implements OnInit {

  show = false;
  result!:string;
  form: any = {

    "age": null,
    "sex": null,
    "cp": null,
    "trestbps": null,
    "chol": null,
    "fbs": null,
    "restecg": null,
    "thalach": null,
    "exang": null,
    "oldpeak": null,
    "slope": null,
    "ca": null,
    "thal": null
  }
  constructor(private aiServices: AIServices, private router: Router) { }

  ngOnInit(): void {
  }
  
  onSubmit(): void {
    
    let payload=
    {
    "age": this.form.age as number,
    "sex":  this.form.age as number,
    "cp":  this.form.age as number,
    "trestbps":  this.form.age as number,
    "chol":  this.form.age as number,
    "fbs":  this.form.age as number,
    "restecg":  this.form.age as number,
    "thalach":  this.form.age as number,
    "exang":  this.form.age as number,
    "oldpeak":  this.form.age as number,
    "slope":  this.form.age as number,
    "ca":  this.form.age as number,
    "thal":  this.form.age as number
    }
    
    this.aiServices.heart(payload).subscribe(
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