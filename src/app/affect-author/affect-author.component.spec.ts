import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AffectAuthorComponent } from './affect-author.component';

describe('AffectAuthorComponent', () => {
  let component: AffectAuthorComponent;
  let fixture: ComponentFixture<AffectAuthorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AffectAuthorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AffectAuthorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
