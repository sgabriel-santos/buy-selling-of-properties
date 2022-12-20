import { AuthService } from 'src/app/services/auth/auth.service';
import { UserService } from 'src/app/services/user/user.service';
import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login/login.service';
import { Router } from '@angular/router';
import { FormControl, Validators } from '@angular/forms';
import { ConfirmationService, MessageService } from 'primeng/api';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  name = new FormControl('', [Validators.required]);
  password = new FormControl('', [Validators.required]);
  submited = false;
  label_required_user = "Login Obrigatório!";
  label_required_password = "Senha Obrigatória!";

  constructor(
    private messageService: MessageService,
    private loginService: LoginService,
    private userService: UserService,
    private auth: AuthService,
    private router: Router,
    
  ) { }

  onChangeInput(){
    this.label_required_user = "Login Obrigatório!";
    this.label_required_password = "Senha Obrigatória!";
  }

  ngOnInit(): void {

  }

  getParams(){
    return this.label_required_password
  }

  onClick(){
    this.submited = true;
    this.doLogin()
  }

  invalid_username_password(){
    this.name = new FormControl('', [Validators.required]);
    this.label_required_user = ""

    this.password = new FormControl('', [Validators.required]);
    this.label_required_password = "O login ou a senha informada está incoreta!"
  }

  not_active_username_password(){
    this.name = new FormControl('', [Validators.required]);
    this.label_required_user = ""

    this.password = new FormControl('', [Validators.required]);
    this.label_required_password = "Usuário inativo!"
  }

  doLogin(): void{
		let username = this.name.value
		let password = this.password.value
    if( username && password){
      this.loginService.login(username, password).subscribe({
        next: res => {
          localStorage.setItem("token", res.access_token);
          this.router.navigate([''])
        },
        error: error => {
          this.messageService.add({
            severity: 'error',
            summary: 'Erro',
            detail: error.error.detail,
            life: 3000 })
        }
      })
    }
    else {
      this.onChangeInput()
    }
	}
}
