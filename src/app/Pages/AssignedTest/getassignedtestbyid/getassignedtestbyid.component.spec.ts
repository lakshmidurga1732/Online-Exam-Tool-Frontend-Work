import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetassignedtestbyidComponent } from './getassignedtestbyid.component';

describe('GetassignedtestbyidComponent', () => {
  let component: GetassignedtestbyidComponent;
  let fixture: ComponentFixture<GetassignedtestbyidComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GetassignedtestbyidComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GetassignedtestbyidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
