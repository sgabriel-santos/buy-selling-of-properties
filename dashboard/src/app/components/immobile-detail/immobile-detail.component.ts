import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { ImageService } from 'src/app/services/image/image.service';
import { ImmobileService } from 'src/app/services/immobile/immobile.service';
import { UserService } from 'src/app/services/user/user.service';
import { ActivatedRoute } from '@angular/router';
import { Immobile } from 'src/app/interfaces/immobile';
import { environment } from 'src/environments/environment';
import { User } from 'src/app/interfaces/user';

@Component({
  selector: 'app-immobile-detail',
  templateUrl: './immobile-detail.component.html',
  styleUrls: ['./immobile-detail.component.scss']
})
export class ImmobileDetailComponent implements OnInit {

  immobile: Immobile = {};
  immobile_id: number;
  images: any = []
  user: User = {}

  image_profile: any;
  image_profile_default = "../../../assets/images/user_icon.png"

  items = [
    {label:'Home', url: `${environment.URL}`},
    {label:'Immobile detail'}
  ]

  constructor(
    private messageService: MessageService,
    private imageService: ImageService,
    private route: ActivatedRoute,
    private immobileService: ImmobileService,
    private userService: UserService
  ) { }

  ngOnInit() {
      this.route.queryParams.subscribe({
        next: response => {
          this.immobile_id = response['id']
          this.items.push({label:`Cod ${this.immobile_id}`})
          this.imageService.getImagesByImmobileId(this.immobile_id).subscribe({
            next: response => {this.images = response}
          })
          
          this.immobileService.get_immobile_by_id(this.immobile_id).subscribe({
            next: response => this.immobile = response   
          })

          this.userService.getUserByImmobileId(this.immobile_id).subscribe({
            next: response => {
              this.user = response
              this.image_profile = this.user.image
            }
          })
        }
      })
  }

  getClass = (info) => `icon-card ${(info? 'green': '')}`
  getInformation = (info) => info || '-'
  getInfoImmobile = (info) => (info? 'Com mobília': 'Sem mobília')
  getNumberOfRoom = () => `${this.immobile.n_rooms} ${(this.immobile.n_rooms > 1? 'quartos': 'quarto')}`
}
