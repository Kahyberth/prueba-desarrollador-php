import { Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlightQuotesResponse } from '../../models/flight_quotes.model';
@Component({
  selector: 'app-flight-quotes',
  imports: [CommonModule],
  templateUrl: './flight-quotes.component.html',
  styleUrl: './flight-quotes.component.css'
})
export class FlightQuotesComponent {


  flightQuotesData = input<FlightQuotesResponse>();

  get quotes(): any[] {
    return this.flightQuotesData()?.data.flightQuotes.results || [];
  }

}
