import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PrimeNGConfig } from 'primeng/api';
import { ImmobileService } from 'src/app/services/immobile/immobile.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  products: any[];

  sortOptions: any[];

  sortOrder: number;

  sortField: string;

  sortKey: any

  constructor(
    private primengConfig: PrimeNGConfig,
    private router: Router,
    private immobileService: ImmobileService
  ) { }

  ngOnInit() {
    this.immobileService.get_immobile_with_image().subscribe({
      next: response => this.products = response
    })

    this.sortOptions = [
        {label: 'Price High to Low', value: '!price'},
        {label: 'Price Low to High', value: 'price'}
    ];

    this.primengConfig.ripple = true;
  }

  onProductClicked(product){
    this.router.navigate([`/immobile-detail`], {queryParams: {id: product.id}})
  }
  
  onSortChange(event) {
      let value = event.value;

      if (value.indexOf('!') === 0) {
          this.sortOrder = -1;
          this.sortField = value.substring(1, value.length);
      }
      else {
          this.sortOrder = 1;
          this.sortField = value;
      }
  }
}
