import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

import { EventsComponent } from './events.component';

describe('EventsComponent', () => {
  let component: EventsComponent;
  let fixture: ComponentFixture<EventsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EventsComponent ], 
      imports: [ HttpClientTestingModule, 
      Ng2SearchPipeModule ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the activities data', () => {
    const fixture = TestBed.createComponent(EventsComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
}); 
})
