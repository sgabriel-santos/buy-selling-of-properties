//Imports Angular
import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
//Login Component
import { LoginComponent } from './components/login/login.component';

//Import Module
import { PrimengModule } from './modules/primeng/primeng.module';
import { InterceptorModule } from './modules/interceptor/interceptor.module';
import { MenuComponentModule } from './modules/menu-component/menu-component.module';

//Routing
import { AppRoutingModule } from './app-routing.module';

//Dashboard
import { HomeComponent } from './components/home/home.component';
import { MenuComponent } from './components/menu/menu.component';
import { EditProfileComponent } from './components/edit-profile/edit-profile.component';
import { RegisterImmobileComponent } from './components/register-immobile/register-immobile.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ImmobileDetailComponent } from './components/immobile-detail/immobile-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    MenuComponent,
    EditProfileComponent,
    RegisterImmobileComponent,
    DashboardComponent,
    ImmobileDetailComponent
  ],
  imports: [
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,

    //Import Sub-Modules
    PrimengModule,
    InterceptorModule,
    MenuComponentModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
