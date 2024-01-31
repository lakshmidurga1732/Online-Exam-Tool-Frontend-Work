import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetquestionsbysubjectidComponent } from './getquestionsbysubjectid.component';

describe('GetquestionsbysubjectidComponent', () => {
  let component: GetquestionsbysubjectidComponent;
  let fixture: ComponentFixture<GetquestionsbysubjectidComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GetquestionsbysubjectidComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GetquestionsbysubjectidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
