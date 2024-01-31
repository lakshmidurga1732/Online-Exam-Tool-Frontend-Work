import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetbysubjectidComponent } from './getbysubjectid.component';

describe('GetbysubjectidComponent', () => {
  let component: GetbysubjectidComponent;
  let fixture: ComponentFixture<GetbysubjectidComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GetbysubjectidComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GetbysubjectidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
