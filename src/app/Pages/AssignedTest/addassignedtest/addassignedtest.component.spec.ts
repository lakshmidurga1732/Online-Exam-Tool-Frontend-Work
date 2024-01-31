import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddassignedtestComponent } from './addassignedtest.component';

describe('AddassignedtestComponent', () => {
  let component: AddassignedtestComponent;
  let fixture: ComponentFixture<AddassignedtestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddassignedtestComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddassignedtestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
