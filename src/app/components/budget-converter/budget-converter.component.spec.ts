import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BudgetConverterComponent } from './budget-converter.component';

describe('BudgetConverterComponent', () => {
  let component: BudgetConverterComponent;
  let fixture: ComponentFixture<BudgetConverterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BudgetConverterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BudgetConverterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
