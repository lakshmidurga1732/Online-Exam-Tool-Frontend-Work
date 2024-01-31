import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddsiteComponent } from './addsite.component';

describe('AddsiteComponent', () => {
  let component: AddsiteComponent;
  let fixture: ComponentFixture<AddsiteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddsiteComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddsiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
