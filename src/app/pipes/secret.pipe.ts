import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'secret'
})
export class SecretPipe implements PipeTransform {

  transform(value: string, show: boolean = false): string {
    if (show) {
      return value;
    } else {
      const regex = /./;
      return value.split(regex).join('*');

    }
  }

}
