import { ValidatorFn, AbstractControl } from '@angular/forms';
import { dateDiff } from '../functions/validateDate';
import { checkCPF, validDateInString, validCEP, validCPF, validDateNowInString } from '../functions/validateFunctions';

export function formControlValidatorCep(): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null =>
    validCEP(control.value)
      ? null : { validCep: true };
}

export function formControlValidatorCpf(): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null =>
    validCPF(control.value)
      ? null : { validCpf: true };
}

export function formControlCheckerCompleteCpf(): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null =>
    checkCPF(control.value)
      ? null : { checkCpf: true };
}

export function formControlValidatorDate(): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null =>
    validDateInString(control.value)
      ? null : { validDateInString: true }
}

export function formControlValidatorDateNow(): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null =>
    validDateNowInString(control.value)
      ? null : { validDateNowInString: true }
}

export function formControlValidatorDateDif(startDate: AbstractControl): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null =>
  dateDiff(startDate.value, control.value)>0
    ? null : { dateDif: true }
}
