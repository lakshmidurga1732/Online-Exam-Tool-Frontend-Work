import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetassignedtestbyuserIdComponent } from './getassignedtestbyuser-id.component';

describe('GetassignedtestbyuserIdComponent', () => {
  let component: GetassignedtestbyuserIdComponent;
  let fixture: ComponentFixture<GetassignedtestbyuserIdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GetassignedtestbyuserIdComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GetassignedtestbyuserIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
