import { Injectable } from '@angular/core';
import { Breed } from './breeds';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Image } from './imagen';

@Injectable({
  providedIn: 'root'
})
export class BreedsService {

  url_breeds = 'https://cat-wiki-mqov.onrender.com/api/breeds';
  url_images='https://cat-wiki-mqov.onrender.com/api/images';

  constructor(
    private http: HttpClient) { }


  getAllBreeds(): Observable<Breed[]> {
    return this.http.get<Breed[]>(this.url_breeds)
  }

  get10Breeds(): Observable<Breed[]> {
    return this.http.get<Breed[]>(this.url_breeds+"/top/10")
  }

  getBreed(id: string): Observable<Breed> {
    return this.http.get<Breed>(this.url_breeds + "/" + id)
  }

  getImages(id:string):Observable<Image[]>{
    return this.http.get<Image[]>(this.url_images+"/"+id)
  }
}
