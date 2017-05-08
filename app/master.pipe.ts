import {Pipe, PipeTransform} from '@angular/core';
import { Animal } from './animal.model';

@Pipe({
  name: "masterPipe",
  pure: false
})


export class MasterPipe implements PipeTransform {

  transform(input: Animal[], desiredMaster){
    var output: Animal[] = [];
    if (desiredMaster === "all") {
      for (var i = 0; i < input.length; i++) {
        output.push(input[i]);
      }
    } else if (desiredMaster === "lowAnimal") {
      for (var i = 0; i < input.length; i++) {
        if (input[i].age < 10) {
          output.push(input[i]);
        }
      }
    }
    return output;
  }
}
