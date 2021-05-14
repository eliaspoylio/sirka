
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing'; 

import { LoginComponent } from './login.component';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;


  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginComponent ], 
      imports: [RouterTestingModule, HttpClientTestingModule],
      providers: [ FormBuilder ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it(`should have a login button`, () => {
    const fixture = TestBed.createComponent(LoginComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h3').textContent).toContain('Kirjaudu sisään');
});

});
