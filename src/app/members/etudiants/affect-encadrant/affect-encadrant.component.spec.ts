import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AffectEncadrantComponent } from './affect-encadrant.component';

describe('AffectEncadrantComponent', () => {
  let component: AffectEncadrantComponent;
  let fixture: ComponentFixture<AffectEncadrantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AffectEncadrantComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AffectEncadrantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
