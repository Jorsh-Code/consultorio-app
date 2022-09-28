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
  public errorStatus: boolean = false;
  public errorMsg: string = '';

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
  public PatientForm!: FormGroup;

  ngOnInit(): void {
    this.PatientForm = new FormGroup({
      name: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      dni: new FormControl('', Validators.required)
    })
  }
  onSubmit(): void{
    const PATIENT : any = {
      nombre: this.PatientForm.get('name')?.value,
      dni: this.PatientForm.get('dni')?.value,
      correo: this.PatientForm.get('email')?.value,
      codigoPostal: "05050",
      genero: "M",
      telefono: "50125897",
      fechaNacimiento: "2020-10-01",
      token: sessionStorage.getItem('token')
    }
    
    this.patientService.createPatient(PATIENT).subscribe(data => {
      console.log(data);
      if(data.status === 'ok'){
        sessionStorage.setItem('token',data.result.token);
        this.router.navigate(['dashboard/patients']);
      }else{
        this.errorStatus = true;
        this.errorMsg = data.result.error_msg;
      }
    });
    /*console.log(this.PatientForm.get('name')?.value);
    console.log(this.PatientForm.get('dni')?.value);
    console.log(this.PatientForm.get('email')?.value);*/
  }

}
