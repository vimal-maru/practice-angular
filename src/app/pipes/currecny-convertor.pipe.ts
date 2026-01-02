import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'currecnyConvertor',
})
export class CurrecnyConvertorPipe implements PipeTransform {
  transform(value: number, ...args: number[]): number {
    if (args.length > 0) {
      let [data] = args;

      return value * data;
    }
    return value * 90;
  }
}
