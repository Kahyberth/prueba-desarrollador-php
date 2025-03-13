import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlightQuotesComponent } from './flight-quotes.component';

describe('FlightQuotesComponent', () => {
  let component: FlightQuotesComponent;
  let fixture: ComponentFixture<FlightQuotesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FlightQuotesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FlightQuotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
