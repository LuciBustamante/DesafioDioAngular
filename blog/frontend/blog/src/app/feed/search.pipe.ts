import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(value: any[], search: string, nome: string) : any[] {
    const resulArray = [];
    if(value.length ===0 || search === '' || nome === '') {
      return value;
    }

    for(const item of value) {
      if(item[nome] === search) {
        resulArray.push(item);
      }
    }
    return resulArray;
  }

}
