import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneralSearchMusicComponent } from './general-search-music.component';

describe('GeneralSearchMusicComponent', () => {
  let component: GeneralSearchMusicComponent;
  let fixture: ComponentFixture<GeneralSearchMusicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GeneralSearchMusicComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GeneralSearchMusicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
