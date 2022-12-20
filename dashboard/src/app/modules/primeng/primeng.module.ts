import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ConfirmationService, MessageService } from 'primeng/api';
import { AutoFocusModule } from 'primeng/autofocus';
import { ButtonModule } from 'primeng/button';
import { CalendarModule } from 'primeng/calendar';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { DialogModule } from 'primeng/dialog';
import { DropdownModule } from 'primeng/dropdown';
import { FileUploadModule } from 'primeng/fileupload';
import { ImageModule } from 'primeng/image';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { ListboxModule } from 'primeng/listbox';
import { MenubarModule } from 'primeng/menubar';
import { MultiSelectModule } from 'primeng/multiselect';
import { ProgressBarModule } from 'primeng/progressbar';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { TableModule } from 'primeng/table';
import { TabViewModule } from 'primeng/tabview';
import { ToastModule } from 'primeng/toast';
import { ToolbarModule } from 'primeng/toolbar';
import { TooltipModule } from 'primeng/tooltip';
import { TreeModule } from 'primeng/tree';
import { TreeTableModule } from 'primeng/treetable';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ButtonModule,
    ImageModule,
    InputTextModule,
    MenubarModule,
    DialogModule,
    ToolbarModule,
    TableModule,
    ConfirmDialogModule,
    ToastModule,
    ListboxModule,
    TreeTableModule,
    DropdownModule,
    FileUploadModule,
    TabViewModule,
    AutoFocusModule,
    BrowserAnimationsModule,
    ProgressSpinnerModule,
    InputTextareaModule,
    TooltipModule,
    ProgressBarModule,
    TreeModule,
    CalendarModule,
    MultiSelectModule
  ],
  exports:[
    ButtonModule,
    ImageModule,
    InputTextModule,
    MenubarModule,
    DialogModule,
    ToolbarModule,
    TableModule,
    ConfirmDialogModule,
    ToastModule,
    ListboxModule,
    TreeTableModule,
    DropdownModule,
    FileUploadModule,
    TabViewModule,
    AutoFocusModule,
    BrowserAnimationsModule,
    ProgressSpinnerModule,
    InputTextareaModule,
    TooltipModule,
    ProgressBarModule,
    TreeModule,
    CalendarModule,
    MultiSelectModule
  ],
  providers: [
    ConfirmationService,
    MessageService
  ]
})
export class PrimengModule { }
