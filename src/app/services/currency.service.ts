import { Injectable } from '@angular/core';
import { Currency_symbols, CurrencyInfo } from '../models/currency_info.model';

@Injectable({
  providedIn: 'root'
})
export class CurrencyService {

  currencyData: CurrencyInfo;
  currencyCountry: string;


  constructor() {

    this.currencyCountry = 'Japan';

    this.currencyData = {
      cityName: 'Okinawa',
      currency_code: 'JPY',
      currency_symbol: Currency_symbols['JPY'],
    }
   }


}
