import { Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-hotels-carousel',
  imports: [CommonModule],
  templateUrl: './hotels-carousel.component.html',
  styleUrl: './hotels-carousel.component.css'
})
export class HotelsCarouselComponent {


  hotels = input<any[]>([]);
i: any;

}
