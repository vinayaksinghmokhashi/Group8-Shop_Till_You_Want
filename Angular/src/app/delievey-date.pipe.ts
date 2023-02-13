import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'delieveyDate'
})
export class DelieveyDatePipe implements PipeTransform {
date:any;


  transform(value: any): any {
    this.date=new Date(value);
  return  this.date.setDate( this.date.getDate() + 4 );
    
  }

}
