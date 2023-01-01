import { AuthService } from 'src/app/services/auth/auth.service';
import { UserService } from 'src/app/services/user/user.service';
import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login/login.service';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { User } from 'src/app/interfaces/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  username: string;
  password: string;

  user: User = {}

  constructor(
    private messageService: MessageService,
    private loginService: LoginService,
    private userService: UserService,
    private auth: AuthService,
    private router: Router,
    
  ) { }

  ngOnInit(): void {
    document.querySelectorAll('.info-item .btn').forEach(element => {
      element.addEventListener('click', () => {
        const el_containter = document.querySelector('.container') as HTMLDivElement
        el_containter.classList.toggle('log-in')
      })
    })
    
  }

  doLogin(): void{
		let username = this.username
		let password = this.password
    if( this.username && this.password){
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
    }else{
      this.messageService.add({
        severity: 'error',
        summary: 'Erro',
        detail: 'Preencha todos os campos obrigatórios!',
        life: 3000 })
    }
	}

  doRegister(){
    if(this.user.email && this.user.name && this.user.username && this.user.password){
      this.userService.addUser(this.user).subscribe({
        next: (response) => {
          this.messageService.add({
            severity: 'success',
            summary: 'Success',
            detail: 'Usuário Cadastro com sucesso!',
            life: 3000 });

            this.user.email = this.user.name = this.user.username = this.user.password = ''
            const el_containter = document.querySelector('.container') as HTMLDivElement
            el_containter.classList.toggle('log-in')
        },
        error: () => {
          this.messageService.add({
            severity: 'error',
            summary: 'Erro',
            detail: 'Erro ao registrar usuário!',
            life: 3000 })
        }
      })
    }else{
      this.messageService.add({
        severity: 'error',
        summary: 'Erro',
        detail: 'Preencha todos os campos obrigatórios!',
        life: 3000 })
    }
  }
}
