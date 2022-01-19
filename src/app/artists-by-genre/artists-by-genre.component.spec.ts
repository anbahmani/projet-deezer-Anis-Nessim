import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtistsByGenreComponent } from './artists-by-genre.component';

describe('ArtistsByGenreComponent', () => {
  let component: ArtistsByGenreComponent;
  let fixture: ComponentFixture<ArtistsByGenreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArtistsByGenreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtistsByGenreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
