//Login Page
import { LoginComponent } from './components/login/login.component';

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardGuard } from './guard/auth-guard.guard';
import { HomeComponent } from './components/home/home.component';
import { RegisterImmobileComponent } from './components/register-immobile/register-immobile.component';
import { EditProfileComponent } from './components/edit-profile/edit-profile.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ImmobileDetailComponent } from './components/immobile-detail/immobile-detail.component';

//Other Components

const routes: Routes = [
  { path: 'login', component: LoginComponent},
  { path: 'edit_profile', component: EditProfileComponent, canActivate: [AuthGuardGuard]},
  { path: 'register_immobile', component: RegisterImmobileComponent, canActivate: [AuthGuardGuard]},
  { path: 'immobile-detail', component: ImmobileDetailComponent, canActivate: [AuthGuardGuard]},
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuardGuard]},
  { path: '', component: HomeComponent, canActivate: [AuthGuardGuard]},
  { path: '**', redirectTo: '', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
