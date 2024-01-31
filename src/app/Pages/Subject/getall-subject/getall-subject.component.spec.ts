import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetallSubjectComponent } from './getall-subject.component';

describe('GetallSubjectComponent', () => {
  let component: GetallSubjectComponent;
  let fixture: ComponentFixture<GetallSubjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GetallSubjectComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GetallSubjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
