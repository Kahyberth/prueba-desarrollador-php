import { Routes } from '@angular/router';
import {HomeComponent} from './pages/home/home.component';
import {MainLayoutComponent} from './layouts/main-layout/main-layout.component';
import { TravelBudgetComponent } from './components/travel-budget/travel-budget.component';
import { CountryCitySelectorComponent } from './components/country-city-selector/country-city-selector.component';
import { WizardFlowComponent } from './components/wizard-flow/wizard-flow.component';

export const routes: Routes = [{
  path: 'home',
  component: MainLayoutComponent,
  children: [
    {
      path: 'overview',
      component: HomeComponent
    },
    {
      path: 'travel-budget',
      component: TravelBudgetComponent
    },
    {
      path: 'select-country',
      component: CountryCitySelectorComponent
    },
    {
      path: 'wizard',
      component: WizardFlowComponent
    }
  ]
}];
