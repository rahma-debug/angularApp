import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AffectauthorToToolComponent } from './affectauthor-to-tool.component';

describe('AffectauthorToToolComponent', () => {
  let component: AffectauthorToToolComponent;
  let fixture: ComponentFixture<AffectauthorToToolComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AffectauthorToToolComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AffectauthorToToolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
