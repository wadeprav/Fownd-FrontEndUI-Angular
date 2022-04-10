import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiMainUrl } from '../_API/api-main-url';
import { Register } from '../_API/register';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private http: HttpClient) { }

  register(register: any) {
    return this.http.post(ApiMainUrl.Url + Register.registerCheck, register);
  }
}
