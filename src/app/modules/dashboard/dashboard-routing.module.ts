import { NgModule } from '@angular/core';
import {  RouterModule, Routes } from '@angular/router';
import { BodyComponent } from './components/body/body.component';
import { CreatePatientComponent } from './components/create-patient/create-patient.component';
import { EditPatientComponent } from './components/edit-patient/edit-patient.component';
import { TablePatientsComponent } from './components/table-patients/table-patients.component';

const routes: Routes = [{
  path: '',
  children : [
    {
      path: '',
      component: BodyComponent,
      pathMatch: 'full'
    },
    {
      path: 'patients',
      children: [{
        path: '',
        component: TablePatientsComponent,
        pathMatch: 'full'
      },
      {
        path: 'edit/:id',
        component: EditPatientComponent,
      },
      {
        path: 'create',
        component: CreatePatientComponent,
      }
    ]
    },
    {
      path: '**',
      redirectTo: ''
    }
  ]
}];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
