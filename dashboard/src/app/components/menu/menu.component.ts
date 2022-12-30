import { Component, OnInit } from '@angular/core';
import { PrimeNGConfig, MenuItem } from 'primeng/api';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user/user.service';
import jwt_decode from "jwt-decode";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  items: MenuItem[];
  user: any = ''
  image_profile: any;
  image_profile_default = "../../../assets/images/user_icon.png"
  
  constructor(
    private primengConfig: PrimeNGConfig,
    private router: Router,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    let token = localStorage.getItem('token');
    this.user = jwt_decode(token);

    this.userService.getUserAuthenticated().subscribe({
      next: (response) => {
        this.user = response
        this.image_profile = this.user.image
      }
    })

    this.primengConfig.ripple = true;

    this.items = [
      {
        items:[
          {
            label: 'Home',
            icon: 'pi pi-home',
            routerLink: '/'
          }
        ]
      },
      {
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
