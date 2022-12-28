//Imports
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrimengModule } from 'src/app/modules/primeng/primeng.module';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxMaskModule, IConfig } from 'ngx-mask';
//Components
import { ToastComponent } from 'src/app/default-components/toast/toast.component';
import { InputValidatorComponent } from 'src/app/default-components/input-validator/input-validator.component';
import { LabelErrorComponent } from 'src/app/default-components/label-error/label-error.component';


const maskConfig: Partial<IConfig> = {
  validation: false,
};

@NgModule({
  declarations: [
    ToastComponent,
    InputValidatorComponent,
    LabelErrorComponent,
  ],
  imports: [
    CommonModule,
    PrimengModule,
    ReactiveFormsModule,
    NgxMaskModule.forRoot(maskConfig),
  ],
  exports:[
    ToastComponent,
    InputValidatorComponent,
    LabelErrorComponent
  ],
  providers: [
  ]
})
export class DefaultComponentsModule { }
