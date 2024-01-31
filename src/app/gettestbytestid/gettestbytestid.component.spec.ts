import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GettestbytestidComponent } from './gettestbytestid.component';

describe('GettestbytestidComponent', () => {
  let component: GettestbytestidComponent;
  let fixture: ComponentFixture<GettestbytestidComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GettestbytestidComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GettestbytestidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
