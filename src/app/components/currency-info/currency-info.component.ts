import { Component, input } from '@angular/core';
import { CurrencyInfo } from '../../models/currency_info.model';

@Component({
  selector: 'app-currency-info',
  imports: [],
  templateUrl: './currency-info.component.html',
  styleUrl: './currency-info.component.css'
})
export class CurrencyInfoComponent {
  currencyData = input<CurrencyInfo>();
}
