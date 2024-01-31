import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetallUserComponent } from './getall-user.component';

describe('GetallUserComponent', () => {
  let component: GetallUserComponent;
  let fixture: ComponentFixture<GetallUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GetallUserComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GetallUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
