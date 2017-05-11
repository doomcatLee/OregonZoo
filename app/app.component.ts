import { Component } from '@angular/core';
import { Animal } from './animal.model';



@Component({
  selector: 'app-root',
  templateUrl: './app/app.component.html'
})

export class AppComponent {
  selectedAnimal = null;



  masterAnimalList: Animal[] = [
    new Animal('Tiger', 'El Tigre', "./resources/images/tiger.jpg", 12, 'carnivore', 'Portland OR', 10, 'F', 'Food', 'People'),
    new Animal('Whale Shark', 'Speed', "./resources/images/whale.jpeg", 1, 'vegeterian', 'Seaside, OR', 5, 'M', 'Food', 'People'),
    new Animal('Cat', 'Doomcat', "./resources/images/cat.jpeg", 8, 'carnivore', 'San Fransisco, CA', 1, 'M', 'Food', 'People'),
    new Animal('Cheetah', 'Bam', "./resources/images/cheetah.jpg", 12, 'carnivore', 'Busan, Korea', 10, 'F', 'Food', 'People')
  ];


  editAnimal(clickedAnimal) {
    this.selectedAnimal = clickedAnimal;
  }

  finishedEditing() {
    this.selectedAnimal = null;
  }

  addAnimal(newAnimalFromChild: Animal) {
    this.masterAnimalList.push(newAnimalFromChild);
  }
}
