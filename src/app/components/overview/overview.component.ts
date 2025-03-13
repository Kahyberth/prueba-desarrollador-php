import { Component, input } from '@angular/core';
import { CurrencyInfo } from '../../models/currency_info.model';
import { LocationBudgetComponent } from '../location-budget/location-budget.component';
import { CurrencyInfoComponent } from '../currency-info/currency-info.component';
import { WeatherComponent } from '../weather/weather.component';
import { WeatherService } from '../../services/weather.service';
import { CurrencyService } from '../../services/currency.service';
import { BudgetService } from '../../services/budget.service';
import { BudgetConverterComponent } from '../budget-converter/budget-converter.component';
import { FlightQuotesComponent } from '../flight-quotes/flight-quotes.component';
import { FlightService } from '../../services/flight.service';

@Component({
  selector: 'app-overview',
  imports: [LocationBudgetComponent, CurrencyInfoComponent, WeatherComponent, BudgetConverterComponent, FlightQuotesComponent],
  templateUrl: './overview.component.html',
  styleUrl: './overview.component.css'
})
export class OverviewComponent {

  constructor(
    public weatherService: WeatherService,
    public currencyService: CurrencyService,
    public budgetService: BudgetService,
    public flightService: FlightService
  ) {}

}
