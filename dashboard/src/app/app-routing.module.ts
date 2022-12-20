//Login Page
import { LoginComponent } from './components/login/login.component';

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardGuard } from './guard/auth-guard.guard';

//Other Components

const routes: Routes = [
  { path: 'login', component: LoginComponent},
  // { path: '', component: HomeComponent,canActivate: [AuthGuardGuard]},
  { path: '**', redirectTo: '', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
