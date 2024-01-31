import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetassignedtestsComponent } from './getassignedtests.component';

describe('GetassignedtestsComponent', () => {
  let component: GetassignedtestsComponent;
  let fixture: ComponentFixture<GetassignedtestsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GetassignedtestsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GetassignedtestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
