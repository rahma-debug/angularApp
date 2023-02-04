import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormtolsComponent } from './formtols.component';

describe('FormtolsComponent', () => {
  let component: FormtolsComponent;
  let fixture: ComponentFixture<FormtolsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormtolsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormtolsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
