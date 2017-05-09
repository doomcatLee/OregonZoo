import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'edit-animal',
  template: `
    <div *ngIf="childSelectedAnimal">
      <h1>{{childSelectedAnimal.name}}</h1>
      <hr>
      <label>Edit Age:</label>
      <input class="form-control" [(ngModel)]="childSelectedAnimal.age" /><br>
      <label>Edit Name:</label>
      <input class="form-control" [(ngModel)]="childSelectedAnimal.name" /><br>
      <label>Edit Species:</label>
      <input class="form-control" [(ngModel)]="childSelectedAnimal.species" /><br>
    </div>
  `
})

export class EditAnimalComponent {
  @Input() childSelectedAnimal: Animal;
  @Output() doneButtonClickedSender = new EventEmitter();

  doneButtonClicked() {
    this.doneButtonClickedSender.emit();
  }

}
