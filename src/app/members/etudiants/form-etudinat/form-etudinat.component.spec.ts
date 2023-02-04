import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormEtudinatComponent } from './form-etudinat.component';

describe('FormEtudinatComponent', () => {
  let component: FormEtudinatComponent;
  let fixture: ComponentFixture<FormEtudinatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormEtudinatComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormEtudinatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
