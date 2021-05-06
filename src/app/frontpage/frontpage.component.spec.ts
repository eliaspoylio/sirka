import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MapComponent } from '../map/map.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { FrontpageComponent } from './frontpage.component';


describe('FrontpageComponent', () => {
  let component: FrontpageComponent;
  let fixture: ComponentFixture<FrontpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({ 
      imports: [ HttpClientTestingModule  ]
     
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FrontpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(FrontpageComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Henkilökohtainen kaupunkioppaasi Helsingissä');
  });
});
