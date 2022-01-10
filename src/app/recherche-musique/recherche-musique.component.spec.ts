import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RechercheMusiqueComponent } from './recherche-musique.component';

describe('RechercheMusiqueComponent', () => {
  let component: RechercheMusiqueComponent;
  let fixture: ComponentFixture<RechercheMusiqueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RechercheMusiqueComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RechercheMusiqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
