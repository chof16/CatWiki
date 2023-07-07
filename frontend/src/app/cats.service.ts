import { Injectable } from '@angular/core';
import { Cat } from './cats';

@Injectable({
  providedIn: 'root'
})

export class CatsService {
  url = 'http://localhost:3000/api/cats';


  async getAllCats(): Promise<Cat[]> {
    const data= await fetch(this.url)
    return await data.json() ?? []
  }
  
}
