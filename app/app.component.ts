import { Component } from '@angular/core';
import { Animal } from './animal.model';



@Component({
  selector: 'app-root',
  templateUrl: './app/app.component.html'
})

export class AppComponent {
  selectedAnimal = null;



  masterAnimalList: Animal[] = [
    new Animal('Tiger', 'El Tigre', 12, 'carnivore', 'Portland OR', 10, 'F', 'Food', 'People',"./resources/images/tiger.jpg"),
    new Animal('Whale Shark', 'Speed', 1, 'vegeterian', 'Seaside, OR', 5, 'M', 'Food', 'People', "./resources/images/whale.jpeg"),
    new Animal('Cat', 'Doomcat', 8, 'carnivore', 'San Fransisco, CA', 1, 'M', 'Food', 'People',"./resources/images/cat.jpeg"),
    new Animal('Cheetah', 'Bam', 12, 'carnivore', 'Busan, Korea', 10, 'F', 'Food', 'People', "./resources/images/cheetah.jpg"),
    new Animal('Zebra', 'Curly', 11, 'vegeterian', 'Portland, OR', 12, 'F', 'Food', 'People', "./resources/images/zebra.jpeg"),
    new Animal('Dog', 'Jhon', 2, 'carnivore', 'Portland, OR', 11, 'M', 'Food', 'People', "./resources/images/dog.jpg")
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
