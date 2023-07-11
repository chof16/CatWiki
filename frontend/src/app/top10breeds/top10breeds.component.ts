import { Component, Input, OnInit } from '@angular/core';
import { Breed } from '../breeds';
import { BreedsService } from '../breeds.service';

@Component({
  selector: 'app-top10breeds',
  templateUrl: './top10breeds.component.html',
  styleUrls: ['./top10breeds.component.css']
})
export class Top10breedsComponent implements OnInit {
  constructor(private breedService: BreedsService) { }
  breedsList: Breed[] = []

  ngOnInit(): void {
    this.get10Breeds();
  }

  get10Breeds() {
    this.breedService.get10Breeds()
    .subscribe(breeds => this.breedsList = breeds);
    }
}
