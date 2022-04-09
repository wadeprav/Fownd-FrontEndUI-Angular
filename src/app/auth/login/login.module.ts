import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { LoginModel } from 'src/app/_Models/login-model';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    LoginRoutingModule
  ],
  providers: [
    LoginModel
  ]
})
export class LoginModule { }
