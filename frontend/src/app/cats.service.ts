import { Injectable } from '@angular/core';
import { Cat } from './cats';

@Injectable({
  providedIn: 'root'
})

export class CatsService {
  url = 'https://cat-wiki-mqov.onrender.com/api/cats';


  async getAllCats(): Promise<Cat[]> {
    const data= await fetch(this.url)
    return await data.json() ?? []
  }
  
}
