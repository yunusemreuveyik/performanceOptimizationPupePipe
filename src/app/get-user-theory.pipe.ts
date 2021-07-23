import { Pipe, PipeTransform } from '@angular/core';
import { TheoryService } from './services/theory.service';

@Pipe({
  name: 'getUserTheory',
  pure: true  // false yaparsan pipe sız çalışan hali gibi çalışır
})
export class GetUserTheoryPipe implements PipeTransform {

  constructor(private theoryService: TheoryService){}

  transform(value: number, property: 'title' | 'userID'): any {
    console.log('pipe: ', value);
    const theory = this.theoryService.getTheory(value)

    if(theory){
      return theory[property];
    }
    
  }

}
