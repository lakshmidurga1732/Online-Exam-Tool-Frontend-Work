import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetbynameSiteComponent } from './getbyname-site.component';

describe('GetbynameSiteComponent', () => {
  let component: GetbynameSiteComponent;
  let fixture: ComponentFixture<GetbynameSiteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GetbynameSiteComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GetbynameSiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
