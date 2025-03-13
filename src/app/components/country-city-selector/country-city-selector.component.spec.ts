import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountryCitySelectorComponent } from './country-city-selector.component';

describe('CountryCitySelectorComponent', () => {
  let component: CountryCitySelectorComponent;
  let fixture: ComponentFixture<CountryCitySelectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CountryCitySelectorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CountryCitySelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
