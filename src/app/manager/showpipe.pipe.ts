import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'showpipe'
})
export class ShowpipePipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    var ar = value.map((a)=>{
      return JSON.stringify(a);
    })
    var res = ar.filter((a)=>{
      if(a.indexOf(args)!=-1){
        return true;
      }
    })
    res = res.map(a=>JSON.parse(a))
    return res
  }

}
