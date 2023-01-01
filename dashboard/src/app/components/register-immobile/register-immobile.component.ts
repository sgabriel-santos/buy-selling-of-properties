import { Component, OnInit } from '@angular/core';
import { Immobile } from 'src/app/interfaces/immobile';
import { environment } from 'src/environments/environment';
import { MessageService } from 'primeng/api';
import { Router } from '@angular/router';
import { ImmobileService } from 'src/app/services/immobile/immobile.service';
import jwt_decode from "jwt-decode";

@Component({
  selector: 'app-register-immobile',
  templateUrl: './register-immobile.component.html',
  styleUrls: ['./register-immobile.component.scss']
})
export class RegisterImmobileComponent implements OnInit {
  immobile: Immobile = {}
  hasGarage = false
  images: any[] = []
  items: any = [
    {label:'Home', url: `${environment.URL}`},
    {label:'Edit Profile'},
  ];

  constructor(
    private messageService: MessageService,
    private immobileService: ImmobileService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  onUpload(event){
    if(!event.files) return
    this.images = []
    event.files.forEach((image) => this.onAddImage(image))
  }

  onAddImage(file: any) {
    const formatFile = file.name.split(".");
    const tam = formatFile.length;
    const reader = new FileReader();
    reader.readAsDataURL(file);
      reader.onload = e => {
        if(['jpg','jpeg','png'].includes(formatFile[tam-1])){
          this.images.push(reader.result)
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

  onClickSave(fileUpload: any){
    fileUpload.upload()
    let token = localStorage.getItem('token');
    let user: any = jwt_decode(token);
    this.immobile.id_user = user.id
    this.immobile.id_status = 1
    setTimeout(() => {
      this.immobileService.addImmobile(this.immobile, this.images).subscribe({
        next: (response) => {
          this.messageService.add({
            severity: 'success',
            summary: 'Success',
            detail: 'Imóvel registrado com sucesso!',
            life: 3000 });

            setTimeout(() => this.router.navigate(['']), 500)
        },
        error: () => {
          this.messageService.add({
            severity: 'error',
            summary: 'Erro',
            detail: 'Erro ao cadastrar Imóvel!',
            life: 3000 })
        }
      })
    }, 1000)
  }

}
