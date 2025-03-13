import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-country-city-selector',
  imports: [CommonModule, FormsModule],
  template: `
    <div class="card p-3">
      <h4>Seleccionar País y Ciudad</h4>
      <form>
        <div class="mb-3">
          <label class="form-label">País</label>
          <select
            class="form-select"
            [(ngModel)]="selectedCountry"
            name="country"
          >
            <option value="">(Seleccione un país)</option>
            <option *ngFor="let country of countries" [value]="country.name">
              {{ country.name }}
            </option>
          </select>
        </div>
        <div class="mb-3">
          <label class="form-label">Ciudad</label>
          <select class="form-select" [(ngModel)]="selectedCity" name="city">
            <option value="">(Seleccione una ciudad)</option>
            <option *ngFor="let city of selectedCities" [value]="city">
              {{ city }}
            </option>
          </select>
        </div>
      </form>
    </div>
  `,
  styleUrl: './country-city-selector.component.css',
})
export class CountryCitySelectorComponent {
  countries = [
    { name: 'Inglaterra', cities: ['London', 'Manchester'] },
    { name: 'Japón', cities: ['Tokyo', 'Osaka'] },
    { name: 'India', cities: ['Mumbai', 'Delhi'] },
    { name: 'Dinamarca', cities: ['Copenhagen', 'Aarhus'] },
  ];

  @Output() validChange = new EventEmitter<boolean>();

  selectedCountry = '';
  selectedCity = '';

  get selectedCities(): string[] {
    const countryObj = this.countries.find(
      (c) => c.name === this.selectedCountry
    );
    return countryObj ? countryObj.cities : [];
  }

  ngDoCheck(): void {
    const isValid = !!(this.selectedCountry && this.selectedCity);
    this.validChange.emit(isValid);
  }
}
