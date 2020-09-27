import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalize'
})
export class CapitalizePipe implements PipeTransform {

  transform(value: string, all: boolean = true): string {
    value = value.toLowerCase();
    let tokens = value.split(' ');
    if (all) {
      tokens = tokens.map(token => token[0].toUpperCase() + token.substr(1));
    } else {
      tokens[0] = tokens[0][0].toUpperCase() + tokens[0].substr(1);
      console.log(tokens);
    }
    return tokens.join(' ');
  }

}
