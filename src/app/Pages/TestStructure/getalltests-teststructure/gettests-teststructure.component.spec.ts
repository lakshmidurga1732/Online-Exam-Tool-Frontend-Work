import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GettestsTeststructureComponent } from './gettests-teststructure.component';

describe('GettestsTeststructureComponent', () => {
  let component: GettestsTeststructureComponent;
  let fixture: ComponentFixture<GettestsTeststructureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GettestsTeststructureComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GettestsTeststructureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
