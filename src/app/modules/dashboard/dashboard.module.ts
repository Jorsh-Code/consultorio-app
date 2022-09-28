import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BodyComponent } from './components/body/body.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { HeaderComponent } from './components/header/header.component';
import { TablePatientsComponent } from './components/table-patients/table-patients.component';
import { EditPatientComponent } from './components/edit-patient/edit-patient.component';
import { CreatePatientComponent } from './components/create-patient/create-patient.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    BodyComponent,
    HeaderComponent,
    TablePatientsComponent,
    EditPatientComponent,
    CreatePatientComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class DashboardModule { }
