import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';
import { NewAnimalComponent } from './new-animal.component';

@Component({
  selector: 'animal-list',
  template: `


  <select (change)="onChange($event.target.value)">
    <option value="all">All Animals</option>
    <option value="lowAnimal" (click)="showLowAnimal()">Young Animals</option>
  </select>


  <div *ngIf="filterByMaster==='all'">
  <div class="col-lg-4 col-sm-6 text-center" *ngFor="let currentAnimal of childAnimalList | masterPipe:filterByMaster">
  <div class="well">
    <img class="img-circle img-responsive img-center" src= "{{currentAnimal.imgUrl}}" alt="">
    <div class="panel-heading">{{currentAnimal.name}}</div>
    <div class="panel-body">
    <ul>
      <li>Species: {{currentAnimal.species}}</li>
      <li>Age: {{currentAnimal.age}}</li>
      <li>Diet: {{currentAnimal.diet}}</li>
      <li>Location: {{currentAnimal.location}}</li>
      <li>Number of caretakers: {{currentAnimal.caretakers}}</li>
      <li>Sex: {{currentAnimal.sex}}</li>
    </ul>
      <button class="btn btn-default" (click)="editButtonHasBeenClicked(currentAnimal)">Edit</button>

    </div>
  </div>

  </div>
  <div *ngIf="filterByMaster==='lowAnimal'">
  <div class="col-lg-4 col-sm-6 text-center" *ngFor="let currentAnimal of childAnimalList | masterPipe:filterByMaster">
    <img class="img-circle img-responsive img-center" src=" {{currentAnimal.imgUrl}} " alt="">
    <div class="panel-heading">{{currentAnimal.name}}</div>
    <div class="panel-body">
    <ul>
      <li>Name: {{currentAnimal.name}}</li>
      <li>Species: {{currentAnimal.species}}</li>
      <li>Age: {{currentAnimal.age}}</li>
      <li>Diet: {{currentAnimal.diet}}</li>
      <li>Location: {{currentAnimal.location}}</li>
      <li>Number of caretakers: {{currentAnimal.caretakers}}</li>
      <li>Sex: {{currentAnimal.sex}}</li>
    </ul>
      <button class="btn btn-default" (click)="editButtonHasBeenClicked(currentAnimal)">Edit</button>

    </div>

  </div>

  `
})

export class AnimalListComponent {
  @Input() childAnimalList: Animal[];
  @Output() clickSender = new EventEmitter();
  filterByMaster = 'all';

  onChange(optionFromMenu) {
    this.filterByMaster = optionFromMenu;
  }

  editButtonHasBeenClicked(animalToEdit: Animal) {
    this.clickSender.emit(animalToEdit);
  }
}
