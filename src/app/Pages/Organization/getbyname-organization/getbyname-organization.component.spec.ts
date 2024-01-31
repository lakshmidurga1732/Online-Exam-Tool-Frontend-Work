import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetbynameOrganizationComponent } from './getbyname-organization.component';

describe('GetbynameOrganizationComponent', () => {
  let component: GetbynameOrganizationComponent;
  let fixture: ComponentFixture<GetbynameOrganizationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GetbynameOrganizationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GetbynameOrganizationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
