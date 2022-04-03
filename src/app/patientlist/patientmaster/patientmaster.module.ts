import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PatientmasterRoutingModule } from './patientmaster-routing.module';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { PatientmasterComponent } from './patientmaster.component';
import { TopbarComponent } from 'src/app/bar/topbar/topbar.component';
import { HeaderComponent } from 'src/app/bar/header/header.component';
import { FooterComponent } from 'src/app/bar/footer/footer.component';

@NgModule({
  declarations: [
    PatientmasterComponent,
    TopbarComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    HttpClientModule,
    PatientmasterRoutingModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [PatientmasterComponent]
})
export class PatientmasterModule { }
