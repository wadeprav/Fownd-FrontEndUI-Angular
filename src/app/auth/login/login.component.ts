import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginModel } from 'src/app/_Models/login-model';
import { LoginService } from 'src/app/_Services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  username: string = '';
  pwd: string = '';

  constructor(private router: Router, private loginService: LoginService, private loginModal: LoginModel) { }

  ngOnInit(): void {
  }

  redirectPatient() {
    this.loginModal.email = this.username;
    this.loginModal.password = this.pwd;

    this.loginService.login(this.loginModal).subscribe(res => {
      const token = JSON.parse(JSON.stringify(res));
      sessionStorage.setItem('login_data', JSON.stringify(token.data));
      localStorage.setItem('central_auth_token', token.token);
      this.router.navigate(['/', 'patient', 'appointment']);
    });
  }

  redirectRegister() {
    this.router.navigate(['/', 'reg']);
  }
}
