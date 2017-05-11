import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';
import { NewAnimalComponent } from './new-animal.component';

@Component({
  selector: 'animal-list',
  template: `

  <div class="container">
    <h1>List of current animals</h1>
    <button class="btn btn-default" type="button" data-toggle="modal" data-target="#myModal">Add Animal</button>


  <select class="selectpicker" (change)="onChange($event.target.value)">
    <option value="all">All Animals</option>
    <option value="youngAnimal">Young Animals</option>
    <option value="lowCareTakers">Low Caretakers</option>
  </select>


  <div *ngIf="filterByMaster==='all'">
  <div class="col-lg-4 col-sm-6 text-center" *ngFor="let currentAnimal of childAnimalList | masterPipe:filterByMaster" style="margin-top: 100px;">
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
    <button class="btn btn-default" data-toggle="modal" data-target="#editModal" (click)="editButtonHasBeenClicked(currentAnimal)">Edit</button>

    </div>
  </div>
  </div>
  </div>

  <div *ngIf="filterByMaster==='youngAnimal'">
  <div class="col-lg-4 col-sm-6 text-center" *ngFor="let currentAnimal of childAnimalList | masterPipe:filterByMaster">
    <div class="well">
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
    <button class="btn btn-default" data-toggle="modal" data-target="#editModal" (click)="editButtonHasBeenClicked(currentAnimal)">Edit</button>

    </div>
  </div>
</div>
</div>

<div *ngIf="filterByMaster==='lowCareTakers'">
<div class="col-lg-4 col-sm-6 text-center" *ngFor="let currentAnimal of childAnimalList | masterPipe:filterByMaster" style="margin-top: 100px;">
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
  <button class="btn btn-default" data-toggle="modal" data-target="#editModal" (click)="editButtonHasBeenClicked(currentAnimal)">Edit</button>

  </div>
</div>
</div>
</div>

</div><!-- End of Container-->

  `
})

export class AnimalListComponent {
  @Input() childAnimalList: Animal[];
  @Output() clickSender = new EventEmitter();
  filterByMaster: string = 'all';

  onChange(optionFromMenu) {
    this.filterByMaster = optionFromMenu;
  }

  editButtonHasBeenClicked(animalToEdit: Animal) {
    this.clickSender.emit(animalToEdit);
  }

}
