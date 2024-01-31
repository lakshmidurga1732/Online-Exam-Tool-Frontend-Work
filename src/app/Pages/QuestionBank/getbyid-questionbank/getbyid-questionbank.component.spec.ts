import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetbyidQuestionbankComponent } from './getbyid-questionbank.component';

describe('GetbyidQuestionbankComponent', () => {
  let component: GetbyidQuestionbankComponent;
  let fixture: ComponentFixture<GetbyidQuestionbankComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GetbyidQuestionbankComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GetbyidQuestionbankComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
