import { Component, Input, OnInit } from '@angular/core';
import { BreedsService } from '../breeds.service';
import { Breed } from '../breeds';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Image } from '../imagen';

@Component({
  selector: 'app-breed',
  templateUrl: './breed.component.html',
  styleUrls: ['./breed.component.css']
})
export class BreedComponent implements OnInit{
  breed!: Breed;
  first_image: Image | undefined;
  images:Image[]=[];

  constructor(private route: ActivatedRoute,private breedService:BreedsService) {

  }

  ngOnInit():void {
    const id = this.route.snapshot.paramMap.get('id');
    this.breedService.getBreed(id as string).subscribe(breed => {
      this.breed=breed
    });
    this.breedService.getImages(id as string).subscribe(images => {
      this.images=images
      this.first_image=this.images[0]
    })

  }

}
