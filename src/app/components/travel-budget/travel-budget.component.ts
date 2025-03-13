import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-travel-budget',
  imports: [CommonModule, FormsModule],
  template: `
  <div class="card p-3">
      <h4>Ingresar Presupuesto de Viaje</h4>
      <form>
        <label class="form-label">Presupuesto en COP</label>
        <input type="number"
               class="form-control"
               [(ngModel)]="budget"
               name="budget"
               min="1"
               placeholder="Ingrese un valor mayor a 0" />
      </form>
    </div>`,
  styleUrl: './travel-budget.component.css'
})
export class TravelBudgetComponent {

  budget: number | null = null;


  @Output() validChange = new EventEmitter<boolean>();

  ngDoCheck(): void {

    const isValid = this.budget !== null && this.budget > 0;
    this.validChange.emit(isValid);
  }
}
