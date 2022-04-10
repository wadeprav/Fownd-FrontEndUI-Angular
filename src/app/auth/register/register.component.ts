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
  logintype: string = '';

  constructor(private router: Router, private registerService: RegisterService, private registerModal: RegisterModel) { }

  ngOnInit(): void {
  }

  register() {
    this.registerService.register(this.registerModal).subscribe(res => {
      this.router.navigate(['/', 'login']);
    });
  }
}
