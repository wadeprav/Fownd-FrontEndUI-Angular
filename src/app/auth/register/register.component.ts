import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegisterModel } from 'src/app/_Models/register-model';
import { RegisterService } from 'src/app/_Services/register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  fname: string = '';
  lname: string = '';
  pwd: string = '';
  username: string = '';
  addr: string = '';
  zip: string = '';
  active: boolean = true;
  logintype: string = 'email';

  constructor(private router: Router, private registerService: RegisterService, private registerModal: RegisterModel) { }

  ngOnInit(): void {
  }

  register() {
    this.registerModal.address = this.addr;
    this.registerModal.email = this.username;
    this.registerModal.firstName = this.fname;
    this.registerModal.lastName = this.lname;
    this.registerModal.password = this.pwd;
    this.registerModal.zipCode = this.zip;
    this.registerModal.active = this.active;
    this.registerModal.loginType = this.logintype;

    this.registerService.register(this.registerModal).subscribe(res => {
      alert('user successfully created');
      this.router.navigate(['/', 'login']);
    });
  }
  back() {
    this.router.navigate(['/', 'login']);
  }
}
