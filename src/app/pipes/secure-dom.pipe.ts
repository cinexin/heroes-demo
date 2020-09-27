import { Pipe, PipeTransform } from '@angular/core';
import {DomSanitizer, SafeResourceUrl} from '@angular/platform-browser';

@Pipe({
  name: 'secureDom'
})
export class SecureDomPipe implements PipeTransform {

  constructor(private domSanitizer: DomSanitizer) {
  }

  transform(value: string, ...args: unknown[]): SafeResourceUrl {
    return this.domSanitizer.bypassSecurityTrustResourceUrl(value);
  }

}
