import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllacountsComponent } from './allacounts.component';

describe('AllacountsComponent', () => {
  let component: AllacountsComponent;
  let fixture: ComponentFixture<AllacountsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AllacountsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AllacountsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
