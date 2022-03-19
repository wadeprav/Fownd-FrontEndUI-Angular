import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PatientmasterComponent } from './patientmaster.component';

const routes: Routes = [
  {
    path: '', component: PatientmasterComponent, children: [
      { path: 'home', loadChildren: () => import('./../patientPages/home/home.module').then(m => m.HomeModule) },
      { path: 'about', loadChildren: () => import('./../patientPages/about/about.module').then(m => m.AboutModule) },
      { path: 'service', loadChildren: () => import('./../patientPages/services/services.module').then(m => m.ServicesModule) },
      { path: 'department', loadChildren: () => import('./../patientPages/department/department.module').then(m => m.DepartmentModule) },
      { path: 'contact', loadChildren: () => import('./../patientPages/contact/contact.module').then(m => m.ContactModule) },
      { path: 'appointment', loadChildren: () => import('./../patientPages/appointment/appointment.module').then(m => m.AppointmentModule) }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class PatientmasterRoutingModule { }
