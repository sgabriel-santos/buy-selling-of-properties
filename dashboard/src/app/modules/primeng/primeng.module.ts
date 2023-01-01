import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ConfirmationService, MessageService } from 'primeng/api';
import { AutoFocusModule } from 'primeng/autofocus';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { DropdownModule } from 'primeng/dropdown';
import { ImageModule } from 'primeng/image';
import { InputTextModule } from 'primeng/inputtext';
import { ToastModule } from 'primeng/toast';
import { ToolbarModule } from 'primeng/toolbar';
import { TooltipModule } from 'primeng/tooltip';
import { DataViewModule } from 'primeng/dataview';
import { MenuModule } from 'primeng/menu';
import { GalleriaModule } from 'primeng/galleria';
import { GMapModule } from 'primeng/gmap';
import { CarouselModule } from 'primeng/carousel';
import { BreadcrumbModule } from 'primeng/breadcrumb';
import  {FileUploadModule } from 'primeng/fileupload';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ButtonModule,
    ImageModule,
    InputTextModule,
    DialogModule,
    ToolbarModule,
    ToastModule,
    DropdownModule,
    AutoFocusModule,
    BrowserAnimationsModule,
    TooltipModule,
    DataViewModule,
    MenuModule,
    GalleriaModule,
    GMapModule,
    CarouselModule,
    BreadcrumbModule,
    FileUploadModule
  ],
  exports:[
    ButtonModule,
    ImageModule,
    InputTextModule,
    DialogModule,
    ToolbarModule,
    ToastModule,
    DropdownModule,
    AutoFocusModule,
    BrowserAnimationsModule,
    TooltipModule,
    DataViewModule,
    MenuModule,
    GalleriaModule,
    GMapModule,
    CarouselModule,
    BreadcrumbModule,
    FileUploadModule
  ],
  providers: [
    ConfirmationService,
    MessageService
  ]
})
export class PrimengModule { }
