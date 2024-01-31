import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GettestbyidTeststructureComponent } from './gettestbyid-teststructure.component';

describe('GettestbyidTeststructureComponent', () => {
  let component: GettestbyidTeststructureComponent;
  let fixture: ComponentFixture<GettestbyidTeststructureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GettestbyidTeststructureComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GettestbyidTeststructureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
