import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Patient } from 'src/app/models/patient.model';
import { PatientService } from 'src/app/services/patient.service';

@Component({
  selector: 'app-table-patients',
  templateUrl: './table-patients.component.html',
  styleUrls: ['./table-patients.component.css']
})
export class TablePatientsComponent implements OnInit {

  public page: number = 1;
  public patients!: Patient[];

  constructor(private patientService: PatientService,private router: Router) { 

  }

  ngOnInit(): void {
    this.getAllPatients();
  }

  nextPage(): void{
    this.page++;
    this.getAllPatients();
  }

  returnPage(): void{
    if(this.page>=2) this.page--;
    this.getAllPatients();
  }

  editPatient(id: string): void{
    this.router.navigate(['dashboard/patients/edit',id]);
  }

  createPatient(): void{
    this.router.navigate(['dashboard/patients/create']);
  }

  getAllPatients(){
    this.patientService.getAllPatients(this.page).subscribe(data => {
      this.patients = data;
    });
  }

}
