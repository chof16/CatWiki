import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Top10breedsComponent } from './top10breeds.component';

describe('Top10breedsComponent', () => {
  let component: Top10breedsComponent;
  let fixture: ComponentFixture<Top10breedsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Top10breedsComponent]
    });
    fixture = TestBed.createComponent(Top10breedsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
