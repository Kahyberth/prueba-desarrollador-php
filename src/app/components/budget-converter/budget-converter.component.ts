import { Component, input } from '@angular/core';
import { CurrencyInfo } from '../../models/currency_info.model';
import { CommonModule } from '@angular/common';
import { BudgetConversion } from '../../models/budget_info.model';

@Component({
  selector: 'app-budget-converter',
  imports: [CommonModule],
  templateUrl: './budget-converter.component.html',
  styleUrl: './budget-converter.component.css'
})
export class BudgetConverterComponent {

  currencyData = input<CurrencyInfo>();
  budgetInfo = input<BudgetConversion>();
  budgetInCOP = input<number>();

  getConvertedBudget(): number {
    if (!this.budgetInfo) {
      return 0;
    }
    return this.budgetInfo()?.total ?? 0;
  }
}
