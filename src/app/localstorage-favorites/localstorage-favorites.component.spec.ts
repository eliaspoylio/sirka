import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocalstorageFavoritesComponent } from './localstorage-favorites.component';

describe('LocalstorageFavoritesComponent', () => {
  let component: LocalstorageFavoritesComponent;
  let fixture: ComponentFixture<LocalstorageFavoritesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LocalstorageFavoritesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LocalstorageFavoritesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
