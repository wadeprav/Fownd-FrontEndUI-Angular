import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { PatientmasterComponent } from './patientlist/patientmaster/patientmaster.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent },
  { path: 'reg', component: RegisterComponent },
  { path: 'demo', component: PatientmasterComponent },
  {
    path: 'patient',
    loadChildren: () => import('./patientlist/patientmaster/patientmaster.module').then( m => m.PatientmasterModule)
  },
  { path: '**', component: NotfoundComponent },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
