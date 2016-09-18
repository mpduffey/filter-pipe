import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name: 'filter',
    pure: false
})

export class Filter implements PipeTransform {
    transform(items: any[], month): any {
        // filter items array, items which match and return true will be kept, false will be filtered out
        return items.filter(item => item.date.getMonth() === month);
    }
}