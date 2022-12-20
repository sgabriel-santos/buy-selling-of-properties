import { dateIsValid } from "./validateDate";

//Validação de Data
export function validDateInDate(date: string) {
  var validateDate = true;
  if(date){
    validateDate = dateIsValid(date);
  }
  var re = /^\d{4}-\d{2}-\d{2}$/;
  var reControl = /^\d{8}$/;
  return (re.test(date) || reControl.test(date)) && validateDate;
}

export function validDateNowInDate(date: string) {
  var validateDate = true;
  if(date){
    validateDate = dateIsValid(date);
  }
  var re = /^\d{4}-\d{2}-\d{2}$/;
  var reControl = /^\d{8}$/;
  const now = new Date().getTime();
  const dateInsert = new Date (date).getTime();
  const diff = (now - dateInsert);
  if(diff<0) validateDate = false;
  return (re.test(date) || reControl.test(date)) && validateDate;
}

export function validDateInString(date: string) {
  var validateDate = true;
  if(date) if(date.length == 8) validateDate = dateIsValid(`${date.substring(4,8)}-${date.substring(2,4)}-${date.substring(0,2)}`);
  var re = /^\d{2}\/\d{2}\/\d{4}$/;
  var reControl = /^\d{8}$/;
  return (re.test(date) || reControl.test(date)) && validateDate;
}

export function validDateNowInString(date: string) {
  var validateDate = true;
  var dateInDate;
  if(date) if(date.length == 8) dateInDate = `${date.substring(4,8)}-${date.substring(2,4)}-${date.substring(0,2)}`;
  if(date) if(date.length == 8) validateDate = dateIsValid(dateInDate);
  const now = new Date().getTime();
  const dateInsert = new Date (dateInDate).getTime();
  const diff = (now - dateInsert);
  if(diff<0) validateDate = false;
  var re = /^\d{2}\/\d{2}\/\d{4}$/;
  var reControl = /^\d{8}$/;
  return (re.test(date) || reControl.test(date)) && validateDate;
}

//Validação e teste de CEP
export function validCEP(cep: string) {
  var re = /^\d{5}-\d{3}$/;
  var reControl = /^\d{8}$/;
  return re.test(cep) || reControl.test(cep);
}

//Validação e teste de CPF
export function validCPF(cpf: string) {
  var re = /^\d{3}.\d{3}.\d{3}-\d{2}$/
  var reControl = /^\d{11}$/
  return re.test(cpf) || reControl.test(cpf);
}

export function checkCPF(cpf: any) {
  const strCPF = cpf.replaceAll(".", "").replaceAll("-", "")
  var Soma
  var Resto
  Soma = 0
  if (
    strCPF == "00000000000" ||
    strCPF == "11111111111" ||
    strCPF == "22222222222" ||
    strCPF == "33333333333" ||
    strCPF == "44444444444" ||
    strCPF == "55555555555" ||
    strCPF == "66666666666" ||
    strCPF == "77777777777" ||
    strCPF == "88888888888" ||
    strCPF == "99999999999"
  )
    return false

  for (var i = 1; i <= 9; i++)
    Soma = Soma + parseInt(strCPF.substring(i - 1, i)) * (11 - i)
  Resto = (Soma * 10) % 11

  if (Resto == 10 || Resto == 11) Resto = 0
  if (Resto != parseInt(strCPF.substring(9, 10))) return false

  Soma = 0
  for (var i = 1; i <= 10; i++)
    Soma = Soma + parseInt(strCPF.substring(i - 1, i)) * (12 - i)
  Resto = (Soma * 10) % 11

  if (Resto == 10 || Resto == 11) Resto = 0
  if (Resto != parseInt(strCPF.substring(10, 11))) return false
  return true
}
