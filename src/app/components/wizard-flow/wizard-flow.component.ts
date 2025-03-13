import { Component } from '@angular/core';
import { HomeComponent } from '../../pages/home/home.component';
import { TravelBudgetComponent } from '../travel-budget/travel-budget.component';
import { CountryCitySelectorComponent } from '../country-city-selector/country-city-selector.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-wizard-flow',
  imports: [HomeComponent, TravelBudgetComponent, CountryCitySelectorComponent, CommonModule],
  templateUrl: './wizard-flow.component.html',
  styleUrl: './wizard-flow.component.css'
})
export class WizardFlowComponent {
  currentStep = 0;
  isStepValid = false;


  isLoading = false;

  onChildValidChange(isValid: boolean): void {
    this.isStepValid = isValid;
  }

  //TODO: Implementar la conexion con el backend

  nextStep(): void {
    if (!this.isStepValid) {
      return;
    }

    this.isLoading = true;
    setTimeout(() => {
      this.isLoading = false;
      if (this.currentStep < 2) {
        this.currentStep++;
      }
    }, 1000);
  }


  previousStep(): void {
    if (this.currentStep > 0) {
      this.currentStep--;
    }
  }


  resetWizard(): void {
    this.currentStep = 0;
    this.isStepValid = false;
  }

  isFirstStep(): boolean {
    return this.currentStep === 0;
  }

  isLastStep(): boolean {
    return this.currentStep === 2;
  }

}
