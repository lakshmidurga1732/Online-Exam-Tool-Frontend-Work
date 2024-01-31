import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetuserresponsesComponent } from './getuserresponses.component';

describe('GetuserresponsesComponent', () => {
  let component: GetuserresponsesComponent;
  let fixture: ComponentFixture<GetuserresponsesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GetuserresponsesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GetuserresponsesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
