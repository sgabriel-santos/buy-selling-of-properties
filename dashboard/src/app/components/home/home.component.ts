import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PrimeNGConfig } from 'primeng/api';
import { ProductService } from './productService';

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
    private productService: ProductService, 
    private primengConfig: PrimeNGConfig,
    private router: Router,
  ) { }

  ngOnInit() {
      this.productService.getProducts().then(data => this.products = data);

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
