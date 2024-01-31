import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetbyidOrganizationComponent } from './getbyid-organization.component';

describe('GetbyidOrganizationComponent', () => {
  let component: GetbyidOrganizationComponent;
  let fixture: ComponentFixture<GetbyidOrganizationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GetbyidOrganizationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GetbyidOrganizationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
