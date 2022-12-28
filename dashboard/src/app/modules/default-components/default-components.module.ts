//Imports
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrimengModule } from 'src/app/modules/primeng/primeng.module';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxMaskModule, IConfig } from 'ngx-mask';
//Components
import { InputValidatorComponent } from 'src/app/default-components/input-validator/input-validator.component';
import { LabelErrorComponent } from 'src/app/default-components/label-error/label-error.component';


const maskConfig: Partial<IConfig> = {
  validation: false,
};

@NgModule({
  declarations: [
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
    InputValidatorComponent,
    LabelErrorComponent
  ],
  providers: [
  ]
})
export class DefaultComponentsModule { }
