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
import { DefaultComponentsModule } from './modules/default-components/default-components.module';
import { MenuComponentModule } from './modules/menu-component/menu-component.module';

//Routing
import { AppRoutingModule } from './app-routing.module';

//Dashboard
import { NgApexchartsModule } from 'ng-apexcharts';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
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
    DefaultComponentsModule,
    MenuComponentModule,
    NgApexchartsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
