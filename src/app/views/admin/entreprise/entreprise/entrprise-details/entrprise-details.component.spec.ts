import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntrpriseDetailsComponent } from './entrprise-details.component';

describe('EntrpriseDetailsComponent', () => {
  let component: EntrpriseDetailsComponent;
  let fixture: ComponentFixture<EntrpriseDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EntrpriseDetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EntrpriseDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
