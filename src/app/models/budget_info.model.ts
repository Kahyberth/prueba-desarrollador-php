export interface BudgetConversion {
  total: number;
  rate: number;
  from: {
    rate: number;
    currency: string;
  };
  to: {
    rate: number;
    currency: string;
  };
  timestamp: number;
}
