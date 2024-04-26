import { Component, OnInit } from '@angular/core';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { UserLogin } from './userlogin';
import { UserRegister } from './userregister';
import { UserRole } from './userrole';
import { AuthService } from '../service/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginError!: boolean;
  faEye = faEye;
  faEyeSlash = faEyeSlash;
  showPassword: boolean = false;
  signingup: boolean = false;
  msgAlert: String = "";
  successSave: boolean = false;
  failSave: boolean = false;
  userLogin: UserLogin;
  userRegister: UserRegister;
constructor(private auth: AuthService){
  this.userLogin = new UserLogin();
  this.userRegister = new UserRegister;
}
  ngOnInit(): void {
    localStorage.clear();
  }



  seePassword() {
    const passwordLogin = document.querySelector('#password') as HTMLInputElement;
    if (passwordLogin && passwordLogin.type === 'password') {
      passwordLogin.type = 'text';
      this.showPassword = true;
    }
    else {
      passwordLogin.type = 'password';
      this.showPassword = false;
    }
  }
  onSubmit(){
    this.userLogin.login = this.userRegister.login;
    this.userLogin.password = this.userRegister.password;
    this.auth.userLogin(this.userLogin);
  }

  singn(){
    this.userRegister.role = UserRole.user;
    this.auth.saveUser(this.userRegister).subscribe(response => {
this.msgAlert="Cadastrado com sucesso!";
this.successSave= true;
this.failSave= false;
this.loginError=false;
setTimeout(()=>{
  window.location.reload();
},2500)
    }, errorResponse=>{
      this.failSave= true;
      this.successSave= false;
      this.msgAlert= "Erro ao cadastrar ou/Login já existe!";
      this.loginError=false;
    })
  } 

  cancelSign(){
    this.signingup= false;
  }

  preparedSign(event:any){
    event.preventDefault();
    this.signingup= true;
  }
}
