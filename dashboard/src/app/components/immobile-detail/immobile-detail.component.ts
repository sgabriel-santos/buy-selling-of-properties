import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { ImageService } from 'src/app/services/image/image.service';
import { ImmobileService } from 'src/app/services/immobile/immobile.service';
import { ActivatedRoute } from '@angular/router';
import { Immobile } from 'src/app/interfaces/immobile';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-immobile-detail',
  templateUrl: './immobile-detail.component.html',
  styleUrls: ['./immobile-detail.component.scss']
})
export class ImmobileDetailComponent implements OnInit {

  immobile: Immobile = {};
  immobile_id: number;
  images: any = []
  items: any[]

  constructor(
    private messageService: MessageService,
    private imageService: ImageService,
    private route: ActivatedRoute,
    private immobileService: ImmobileService
  ) { }

  ngOnInit() {
      this.route.queryParams.subscribe({
        next: response => {
          this.immobile_id = response['id']
          this.items = [
            {label:'Home', url: `${environment.URL}`},
            {label:'Immobile detail'},
            {label:`Cod ${this.immobile_id}`},
          ];
          this.imageService.getImagesByImmobileId(this.immobile_id).subscribe({
            next: response => {this.images = response}
          })
          
          this.immobileService.get_immobile_by_id(this.immobile_id).subscribe({
            next: response => {
              console.log(response)
              this.immobile = response   
            }
          })
        }
      })
  }

  getNumberOfRoom(){
    let sufix = (this.immobile.n_rooms > 1? 'quartos': 'quarto')
    return `${this.immobile.n_rooms} ${sufix}`
  }
}
