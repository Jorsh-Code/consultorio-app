import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PatientService } from 'src/app/services/patient.service';

@Component({
  selector: 'app-create-patient',
  templateUrl: './create-patient.component.html',
  styleUrls: ['./create-patient.component.css']
})
export class CreatePatientComponent implements OnInit {

  public createPatientForm!: FormGroup;

  constructor(private patientService: PatientService, private router: Router) { }

 /* ngOnInit(): void {
    this.createPatientForm = new FormGroup({
      email: new FormControl('', Validators.required),
      name: new FormControl('', Validators.required),
      dni: new FormControl('', Validators.required),
      cp: new FormControl(''),
      gender: new FormControl(''),
      phone: new FormControl(''),
      date: new FormControl('')
    })
  }*/
  public loginForm!: FormGroup;

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      email: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required)
    })
  }
  onSubmit(): void{
    /*const LOGIN : Login = {
      usuario: this.loginForm.get("email")?.value,
      password: this.loginForm.get("password")?.value
    }
    
    this.authService.login(LOGIN).subscribe(data => {
      if(data.status === 'ok'){
        sessionStorage.setItem('token',data.result.token);
        this.router.navigate(['dashboard']);
      }else{
        this.errorStatus = true;
        this.errorMsg = data.result.error_msg;
      }
    });*/
    console.log(this.createPatientForm.get('name')?.value);
  }

}
