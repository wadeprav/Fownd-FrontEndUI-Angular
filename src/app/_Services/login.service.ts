import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiMainUrl } from '../_API/api-main-url';
import { Login } from '../_API/login';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  login(login: any) {
    return this.http.post(ApiMainUrl.Url + Login.loginCheck, login);
  }
}
