import { Component, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';


@Component({
  selector: 'new-animal',
  template: `
    <h1>New Animal</h1>
    <hr>
    <div>
      <label>Enter Name:</label>
      <input class="form-control" #newName><br>
    </div>
    <div>
      <label>Enter Species:</label>
      <input class="form-control" #newSpecies><br>
    </div>
    <div>
      <label>Enter Age:</label>
      <input class="form-control" type="number" #newAge><br>
    </div>
    <div>
      <label>Enter Diet:</label>
      <input class="form-control" #newDiet><br>
    </div>
    <div>
      <label>Enter Location:</label>
      <input class="form-control" #newLocation><br>
    </div>
    <div>
      <label>Enter Caretakers:</label>
      <input class="form-control" type="number" #newCaretakers><br>
    </div>
    <div>
      <label>Enter Sex:</label>
      <input class="form-control" #newSex /><br>
    </div>
    <div>
      <label>Enter Like:</label>
      <input class="form-control" #newLike><br>
    </div>
    <button class="btn btn-default" (click)="submitForm(newName.value, newSpecies.value, newAge.value, newDiet.value, newLocation.value, newCaretakers.value, newSex.value, newLike.value); newName.value=''; newSpecies.value=''; newAge.value=''; newDiet.value=''; newLocation.value=''; newCaretakers.value=''; newSex.value=''; newLike.value='';">Add</button>
  `
})

export class NewAnimalComponent {
  @Output() newAnimalSender = new EventEmitter();

  submitForm(species: string, name: string, age: number, diet: string, location: string, caretakers: number, sex: string, likes: string, dislikes: string) {
    var newAnimalToAdd: Animal = new Animal(species, name, age, diet, location, caretakers, sex, likes, dislikes);
    this.newAnimalSender.emit(newAnimalToAdd);
  }
}
