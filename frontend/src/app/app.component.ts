import { Component, inject } from '@angular/core';
import { CatsService } from './cats.service';
import { Cat } from './cats';
import { BreedsService } from './breeds.service';
import { Breed } from './breeds';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'CatWiki';
  
}
