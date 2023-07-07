import { Component, Input, inject } from '@angular/core';
import { BreedsService } from '../breeds.service';
import { Breed } from '../breeds';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FormControl } from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-component',
  templateUrl: './search-component.component.html',
  styleUrls: ['./search-component.component.css'],
})


export class SearchComponentComponent {
  breedName = new FormControl('');
  filteredOptions: Observable<Breed[]> | undefined;
  faSearch = faSearch
  @Input() breeds!: Breed[];


  constructor( private router: Router) {
    this.filteredOptions = this.breedName.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value || '')),
    );
  }


  private _filter(value: string): Breed[] {
    const filterValue = value.toLowerCase();
    return this.breeds.filter(breed => breed.name.toLowerCase().includes(filterValue));
  }

  onSubmit(){
    if(this.breedName.value !=""){
      let idBreed = this.breeds.filter(breed => breed.name.toLowerCase().includes(this.breedName.value?.toLocaleLowerCase() as string)).map(breed => breed.id)
      this.router.navigate(["detail/"+idBreed])
    }
    
  }
}
