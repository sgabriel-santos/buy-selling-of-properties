export function formatDateToString(date: any){
  let aux = date.split('-');
  return `${aux[2]}/${aux[1]}/${aux[0]}`
}

export function formatStringToDate(string: string){
  if(string){
    if(string.length == 10){
      let aux = string.split('/');
      return `${aux[2]}-${aux[1]}-${aux[0]}`;
    }
    else{
      return `${string.substring(4,8)}-${string.substring(2,4)}-${string.substring(0,2)}`
    }
  }
  else return undefined;
}

export function formatStringToNumber(string: string){
  if(string){
    let aux = string.split('/');
    return `${aux[0]}${aux[1]}${aux[2]}`;
  }
  else return undefined
}

export function dateIsValid(date) {
  var dateTest = new Date(date);
  return dateTest instanceof Date && !isNaN(Number(dateTest));
}

export function dateDiff(startDate:string, endDate:string){
  const startDateDay = new Date(formatStringToDate(startDate));
  const endDateDay = new Date(formatStringToDate(endDate));
  const diff = (endDateDay.getTime() - startDateDay.getTime());
  const days = Math.ceil(diff / (1000 * 60 * 60 * 24));

  return days;
}


export function NumberToDateInForInteration(index: Number){
  let aux = new Date();
  aux.setFullYear(Number(String(index).substring(0,4)));
  aux.setMonth(Number(String(index).substring(4,6)) - 1);
  aux.setDate(Number(String(index).substring(6,8)));

  return aux;
}

export function DateToStringDateForMap(date: Date){
  let aux = `${date.getFullYear()}-${(date.getMonth() + 1 >= 10 ? date.getMonth() + 1: `0${date.getMonth() + 1}`)}`
    + `-${(date.getDate() >= 10 ? date.getDate(): `0${date.getDate()}`)}`;

  return aux;
}

export function DateToNumberForInteration(date: Date){
  let aux = Number(`${date.getFullYear()}${(date.getMonth() + 1 >= 10 ? date.getMonth() + 1: `0${date.getMonth() + 1}`)}`
    + `${(date.getDate() >= 10 ? date.getDate(): `0${date.getDate()}`)}`);

  return aux;
}
