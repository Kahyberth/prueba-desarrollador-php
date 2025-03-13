import { Injectable } from '@angular/core';
import { BudgetConversion } from '../models/budget_info.model';

@Injectable({
  providedIn: 'root'
})
export class BudgetService {

budgetData: BudgetConversion;
budgetInCOP: number;

  constructor() {

    this.budgetInCOP = 2500000;

    this.budgetData = {
      "total": 88390.57663541479,
      "rate": 0.03535623065416592,
      "from": {
          "rate": 4206.472162,
          "currency": "COP"
      },
      "to": {
          "rate": 148.725,
          "currency": "JPY"
      },
      "timestamp": 1728083558
  }
  }
}
