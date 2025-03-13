import { Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-location-budget',
  imports: [CommonModule],
  templateUrl: './location-budget.component.html',
  styleUrl: './location-budget.component.css'
})
export class LocationBudgetComponent {


  country = input<string>();
  city = input<string>();
  budget = input<number>();

  isDay: boolean;

  constructor() {
    this.isDay = false;
  }


  ngOnInit(): void {
    this.checkDayOrNight();
  }

  checkDayOrNight(): void {
    const currentHour = new Date().getHours();
    this.isDay = currentHour >= 6 && currentHour < 18;
  }

}
