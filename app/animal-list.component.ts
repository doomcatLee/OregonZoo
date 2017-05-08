import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';
import { NewAnimalComponent } from './new-animal.component';

@Component({
  selector: 'animal-list',
  template: `
  <select (change)="onChange($event.target.value)">
    <option value="all">All Animals</option>
    <option value="lowAnimal" (click)="showLowAnimal()">Low Animals</option>
  </select>
  <div *ngIf="filterByMaster==='all'">
    <div class="panel panel-default" *ngFor="let currentAnimal of childAnimalList | masterPipe:filterByMaster">
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
        <button (click)="editButtonHasBeenClicked(currentAnimal)">Edit!</button>
        <button (click)="sellBeer(currentAnimal)">SellSellSell!</button>
      </div>
    </div>
  </div>
  <div *ngIf="filterByMaster ==='lowAnimal'">
    <div class="panel panel-default" *ngFor="let currentAnimal of childAnimalList | masterPipe:filterByMaster">
      <div class="panel-heading">{{currentAnimal.name}}</div>
      <div class="panel-body">
      <ul>
        <li>Brand: {{currentAnimal.brand}}</li>
        <li>Price: $ {{currentAnimal.price}}</li>
        <li>Alcohol Content: {{currentAnimal.alcohol_content}}</li>
        <li>IBU: {{currentAnimal.ibu}}</li>
        <li>Description: {{currentAnimal.description}}</li>
        <li>Quantity Remaining: {{currentAnimal.quantity}}</li>
        <li>Type: {{currentAnimal.type}}</li>
      </ul>
        <button (click)="editButtonHasBeenClicked(currentAnimal)">Edit!</button>
      </div>
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
