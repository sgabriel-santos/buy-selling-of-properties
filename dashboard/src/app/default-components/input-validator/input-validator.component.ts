import { ErrorStateClass } from '../../middleware/validators/errorState';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-input-validator',
  templateUrl: './input-validator.component.html',
  styleUrls: ['./input-validator.component.scss']
})
export class InputValidatorComponent implements OnInit {

  constructor(
    public errorStateMatcher: ErrorStateClass
  ) {}

  ngOnInit(): void {
  }

  @Input() variableFormControl: any;
  @Input() labelTitle: any;
  @Input() placeHolderInput: any = "";
  @Input() maskInput: any;
  @Input() labelRequiredInput: any;
  @Input() labelValidateInput: any;
  @Input() labelCheckValidInput: any;
  @Input() validatorTextRequired: any
  @Input() validatorTextValidated: any;
  @Input() validatorTextChecked: any;
  @Input() maxLenght: any;
  @Input() inputType: any;
  @Input() submited: any;
  @Input() colSizeClass: any;
  @Input() autoFocus: any;
  @Input() readOnly:any;
  @Input() name:any;
  @Input() inputId:any
  @Input() disabled: any;

  testNumber(event: KeyboardEvent){
    if(this.inputType=='number' && isNaN(Number(event.key)) && event.code != 'Enter'){
      event.preventDefault()
    }
  }
}
