import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { UserRegister } from '../login/userregister';
import { Observable, BehaviorSubject } from 'rxjs';
import { API_CONFIG } from '../config/api.config';
import { UserLogin } from '../login/userlogin';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient, private router: Router) { }

  saveUser(userRegister: UserRegister): Observable<UserRegister>{
    localStorage.clear();
    return this.http.post<UserRegister>(`${API_CONFIG.baseUrlAuth}register`,userRegister);

  }

  userLogin(userLogin: UserLogin){
    return this.http.post<String>(`${API_CONFIG.baseUrlAuth}login`, userLogin).subscribe({
      next:(res)=>{
        var respJson = JSON.stringify(res);
        var jwt = JSON.parse(respJson);
        localStorage.setItem("Authorization",jwt.token);
        this.router.navigate(['home']);
      }, error:(error)=>{
        alert("Login ou senha incorreto!");
      }
    });
  }

}
