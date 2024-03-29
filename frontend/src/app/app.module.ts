import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchComponentComponent } from './search-component/search-component.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
import {MatAutocompleteModule} from "@angular/material/autocomplete"
import {NgFor, AsyncPipe} from '@angular/common';
import {MatIconModule} from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field';
import { BreedComponent } from './breed/breed.component';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from "@angular/material/input"
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { NgOptimizedImage } from '@angular/common';
import { LineChartComponent } from './line-chart/line-chart.component';
import { Top10breedsComponent } from './top10breeds/top10breeds.component'

@NgModule({
  declarations: [
    AppComponent,
    SearchComponentComponent,
    BreedComponent,
    HomeComponent,
    LineChartComponent,
    Top10breedsComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    MatAutocompleteModule,
    NgFor,
    AsyncPipe,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    NgOptimizedImage
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
