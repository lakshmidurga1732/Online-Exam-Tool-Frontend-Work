import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetallSiteComponent } from './getall-site.component';

describe('GetallSiteComponent', () => {
  let component: GetallSiteComponent;
  let fixture: ComponentFixture<GetallSiteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GetallSiteComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GetallSiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
