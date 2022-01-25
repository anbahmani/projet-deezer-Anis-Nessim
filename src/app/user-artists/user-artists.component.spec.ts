import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserArtistsComponent } from './user-artists.component';

describe('UserArtistsComponent', () => {
  let component: UserArtistsComponent;
  let fixture: ComponentFixture<UserArtistsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserArtistsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserArtistsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
