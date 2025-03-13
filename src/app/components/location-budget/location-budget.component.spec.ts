import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocationBudgetComponent } from './location-budget.component';

describe('LocationBudgetComponent', () => {
  let component: LocationBudgetComponent;
  let fixture: ComponentFixture<LocationBudgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LocationBudgetComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LocationBudgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
