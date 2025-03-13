import { Component } from '@angular/core';
import { WeatherService } from '../../services/weather.service';
import { CurrencyService } from '../../services/currency.service';
import { BudgetConverterComponent } from '../../components/budget-converter/budget-converter.component';
import { BudgetService } from '../../services/budget.service';
import { OverviewComponent } from '../../components/overview/overview.component';
import { HotelsCarouselComponent } from '../../components/hotels-carousel/hotels-carousel.component';
import { HotelsService } from '../../services/hotels.service';



@Component({
  selector: 'app-home',
  imports: [OverviewComponent, HotelsCarouselComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {


  constructor(
    public currencyService: CurrencyService,
    public budgetService: BudgetService,
    public hotelService: HotelsService
  ) { }

}
