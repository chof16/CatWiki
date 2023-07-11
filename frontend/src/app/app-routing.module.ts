import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BreedComponent } from './breed/breed.component';
import { HomeComponent } from './home/home.component';
import { Top10breedsComponent } from './top10breeds/top10breeds.component';

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "detail/:id", component: BreedComponent},
  {path: "topBreeds",component:Top10breedsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
