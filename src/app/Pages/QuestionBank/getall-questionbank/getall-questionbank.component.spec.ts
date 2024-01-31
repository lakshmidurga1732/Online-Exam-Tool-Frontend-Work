import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetallQuestionbankComponent } from './getall-questionbank.component';

describe('GetallQuestionbankComponent', () => {
  let component: GetallQuestionbankComponent;
  let fixture: ComponentFixture<GetallQuestionbankComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GetallQuestionbankComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GetallQuestionbankComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
