import { Component, OnInit } from '@angular/core';
import { BreedsService } from '../breeds.service';
import { Breed } from '../breeds';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-breed',
  templateUrl: './breed.component.html',
  styleUrls: ['./breed.component.css']
})
export class BreedComponent implements OnInit{
  breed!: Breed;

  constructor(private route: ActivatedRoute,private breedService:BreedsService) {
  }

  ngOnInit():void {
    const id = this.route.snapshot.paramMap.get('id');
    this.breedService.getBreed(id as string).subscribe(breed => {
      this.breed=breed
    });
  }

}
