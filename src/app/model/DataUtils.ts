import { DatePipe, formatDate } from "@angular/common";
import { Pipe, PipeTransform } from "@angular/core";
import { Constants } from "./Constants";

@Pipe({
    name: 'dateFormat'
  })
export class DataUtils extends DatePipe implements PipeTransform {

    
    transform(value : any, args?: any) {
        return super.transform(value, Constants.DATE_FMT);
    }
}