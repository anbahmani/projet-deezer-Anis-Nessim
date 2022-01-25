import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserTracksComponent } from './user-tracks.component';

describe('UserTracksComponent', () => {
  let component: UserTracksComponent;
  let fixture: ComponentFixture<UserTracksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserTracksComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserTracksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
