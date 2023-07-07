import { Injectable } from '@angular/core';
import { Breed } from './breeds';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BreedsService {

  url = 'http://localhost:3000/api/breeds';

  constructor(
    private http: HttpClient) { }


  getAllBreeds(): Observable<Breed[]> {
    return this.http.get<Breed[]>(this.url)
  }

  getBreed(id: string): Observable<Breed> {
    return this.http.get<Breed>(this.url + "/" + id)
  }
}
