import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetallOrganizationComponent } from './getall-organization.component';

describe('GetallOrganizationComponent', () => {
  let component: GetallOrganizationComponent;
  let fixture: ComponentFixture<GetallOrganizationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GetallOrganizationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GetallOrganizationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
