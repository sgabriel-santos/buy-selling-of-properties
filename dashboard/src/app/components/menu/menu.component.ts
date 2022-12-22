import { Component, OnInit } from '@angular/core';
import { PrimeNGConfig, MenuItem } from 'primeng/api';
import { Router } from '@angular/router';
import jwt_decode from "jwt-decode";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  items: MenuItem[];
  user: any = ''
  
  constructor(
    private primengConfig: PrimeNGConfig,
    private router: Router
  ) {}

  ngOnInit(): void {
    let token = localStorage.getItem('token');
    this.user = jwt_decode(token);

    this.primengConfig.ripple = true;

    this.items = [{
        label: 'Options',
        items: [{
            label: 'Edit Profile',
            icon: 'pi pi-user-edit',
            routerLink: '/edit_profile'
        },
        {
            label: 'Register immobile',
            icon: 'pi pi-plus',
            routerLink: '/register_immobile'
        }
        ]},
        {
            label: 'Navigate',
            items: [{
                label: 'Dashboard',
                icon: 'pi pi-book',
                routerLink: '/dashboard'
            },
            {
                label: 'Exit',
                icon: 'pi pi-sign-out',
                command: () => {
                    this.logout();
                }
            }
        ]}
    ];
  }

  logout(){
    localStorage.clear()
    this.router.navigate(['/login'])
  }

}
