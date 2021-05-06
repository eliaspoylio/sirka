import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivitiesComponent } from './activities.component';

describe('ActivitiesComponent', () => {
  let component: ActivitiesComponent;
  let fixture: ComponentFixture<ActivitiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActivitiesComponent ],
      imports: [ HttpClientTestingModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActivitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should render these categories in a h1 tag', () => {
    const fixture = TestBed.createComponent(ActivitiesComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('p').textContent).toContain('Nähtävyydet', 'Hyvinvointi');
  });

  it('should create the activities data', () => {
    const fixture = TestBed.createComponent(ActivitiesComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
}); 
})
