import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ConfirmationService, MessageService } from 'primeng/api';
import { AutoFocusModule } from 'primeng/autofocus';
import { ButtonModule } from 'primeng/button';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { DialogModule } from 'primeng/dialog';
import { DropdownModule } from 'primeng/dropdown';
import { ImageModule } from 'primeng/image';
import { InputTextModule } from 'primeng/inputtext';
import { ToastModule } from 'primeng/toast';
import { ToolbarModule } from 'primeng/toolbar';
import { TooltipModule } from 'primeng/tooltip';
import { DataViewModule } from 'primeng/dataview';
import { MenuModule } from 'primeng/menu';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ButtonModule,
    ImageModule,
    InputTextModule,
    DialogModule,
    ToolbarModule,
    ConfirmDialogModule,
    ToastModule,
    DropdownModule,
    AutoFocusModule,
    BrowserAnimationsModule,
    TooltipModule,
    DataViewModule,
    MenuModule
  ],
  exports:[
    ButtonModule,
    ImageModule,
    InputTextModule,
    DialogModule,
    ToolbarModule,
    ConfirmDialogModule,
    ToastModule,
    DropdownModule,
    AutoFocusModule,
    BrowserAnimationsModule,
    TooltipModule,
    DataViewModule,
    MenuModule
  ],
  providers: [
    ConfirmationService,
    MessageService
  ]
})
export class PrimengModule { }
