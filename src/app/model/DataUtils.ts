import { DatePipe, formatDate } from "../../../node_modules/@angular/common";
import { Pipe, PipeTransform } from "../../../node_modules/@angular/core";
import { Constants } from "../model/Constants";

@Pipe({
    name: 'dateFormat'
  })
export class DataUtils extends DatePipe implements PipeTransform {

    
    transform(value : any, args?: any) {
        return super.transform(value, Constants.DATE_FMT);
    }
}