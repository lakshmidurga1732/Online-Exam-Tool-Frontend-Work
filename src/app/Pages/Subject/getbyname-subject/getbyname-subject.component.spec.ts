import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetbynameSubjectComponent } from './getbyname-subject.component';

describe('GetbynameSubjectComponent', () => {
  let component: GetbynameSubjectComponent;
  let fixture: ComponentFixture<GetbynameSubjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GetbynameSubjectComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GetbynameSubjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
