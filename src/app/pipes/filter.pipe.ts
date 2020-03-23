import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, param, searchKey): any {
    console.log('saerch key', searchKey)
    if(searchKey.length === 0) {
      return value;
    } else {
      let searchedTasks= [];
      for(let task of value) {
        if(task[param].toLowerCase().includes(searchKey.toLowerCase())) {
          searchedTasks.push(task);
        }
      }
      return searchedTasks;
    }
  }

}
