import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrganizerslistComponent } from './organizerslist.component';

describe('OrganizerslistComponent', () => {
  let component: OrganizerslistComponent;
  let fixture: ComponentFixture<OrganizerslistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrganizerslistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrganizerslistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
