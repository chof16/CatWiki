import { Component, OnInit, inject } from '@angular/core';
import { Cat } from '../cats';
import { Breed } from '../breeds';
import { BreedsService } from '../breeds.service';
import { CatsService } from '../cats.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {

  catsListSlice: Cat[] = []
  breedsList: Breed[] = []
  top10:Breed[]=[]

  constructor( private breedService: BreedsService, private catsService: CatsService ) {  }

  ngOnInit(): void {
    this.getCats();
    this.getBreeds();
  }
  
  getCats() {
    this.catsService.getAllCats().then((catsList: Cat[]) => {
      this.catsListSlice = catsList.slice(0, 4)
    })
  }
  getBreeds() {
    this.breedService.getAllBreeds()
    .subscribe(breeds => this.breedsList = breeds);
    }
  
  }


