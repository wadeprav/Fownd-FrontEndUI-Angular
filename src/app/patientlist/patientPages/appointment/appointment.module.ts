import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppointmentRoutingModule } from './appointment-routing.module';
import { AppointmentComponent } from './appointment.component';
import { AppointmentCalenderComponent } from 'src/app/common/appointment-calender/appointment-calender.component';


@NgModule({
  declarations: [
    AppointmentComponent,
    AppointmentCalenderComponent
  ],
  imports: [
    CommonModule,
    AppointmentRoutingModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppointmentModule { }
