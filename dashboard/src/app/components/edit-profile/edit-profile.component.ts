import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { UserService } from 'src/app/services/user/user.service';
import { User } from 'src/app/interfaces/user';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.scss']
})
export class EditProfileComponent implements OnInit {

  constructor(
    private userService: UserService,
    private messageService: MessageService
  ) { }

  user: User = {}
  image_profile: any;
  image_profile_default = "../../../assets/images/user_icon.png"

  items: any = [
    {label:'Home', url: `${environment.URL}`},
    {label:'Edit Profile'},
  ];

  ngOnInit(): void {
    this.userService.getUserAuthenticated().subscribe({
      next: response => {
        this.user = response
        this.image_profile = this.user.image
      }
    })
  }

  onClickSave(){
    if(this.user.name && this.user.email && this.user.password && this.user.username && this.user.phone){
      this.userService.updateUser(this.user).subscribe({
        next: () => {
          this.messageService.add({
            severity: 'success',
            summary: 'Success',
            detail: 'Usuário editado com sucesso!',
            life: 3000 });
          window.location.reload()
        },
        error: () => {
          this.messageService.add({
            severity: 'error',
            summary: 'Erro',
            detail: 'Erro ao editar dados do usuário!',
            life: 3000 })
        }
      })
    }else{
      this.messageService.add({
        severity: 'error',
        summary: 'Erro',
        detail: 'Necessário Preencher todos os campos!',
        life: 3000 })
    }
  }

  onClickEditProfileImage(){
    let element = document.querySelector('input[type=file]') as HTMLInputElement
    element.click()
  }

  readURL(event: any){
    if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0];
      this.onAddImage(file);
    }
  }

  onAddImage(file: any) {
    const formatFile = file.name.split(".");
    const tam = formatFile.length;
    const reader = new FileReader();
    reader.readAsDataURL(file);
      reader.onload = e => {
        if(['jpg','jpeg','png'].includes(formatFile[tam-1])){
          this.image_profile = reader.result
          this.user.image = this.image_profile
        }
        else {
          this.messageService.add({
            severity: 'error',
            summary: 'Erro',
            detail: 'Formato de Arquivo não suportado!',
            life: 3000 })
        }
      };
  }

}
