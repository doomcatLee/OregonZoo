import { Component } from '@angular/core';
import { Animal } from './animal.model';



@Component({
  selector: 'app-root',
  templateUrl: './app/app.component.html'
})

export class AppComponent {
  selectedAnimal = null;
  lowAnimalClick = false;


  masterAnimalList: Animal[] = [
    new Animal('Tiger', 'Hombre', 12, 'carnivore', 'Portland OR', 10, 'M', 'Food', 'People'),
    new Animal('Tiger', 'Hombre', 12, 'carnivore', 'Portland, OR', 10, 'M', 'Food', 'People')
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
