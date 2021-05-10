import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MapComponent } from '../map/map.component';

import { FrontpageComponent } from './frontpage.component';


describe('FrontpageComponent', () => {
  let component: FrontpageComponent;
  let fixture: ComponentFixture<FrontpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FrontpageComponent, MapComponent]
     
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FrontpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
});
