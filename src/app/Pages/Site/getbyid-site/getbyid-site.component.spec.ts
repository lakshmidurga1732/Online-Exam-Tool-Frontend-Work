import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetbyidSiteComponent } from './getbyid-site.component';

describe('GetbyidSiteComponent', () => {
  let component: GetbyidSiteComponent;
  let fixture: ComponentFixture<GetbyidSiteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GetbyidSiteComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GetbyidSiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
