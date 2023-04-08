import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-hotel-card',
  templateUrl: './hotel-card.component.html',
  styleUrls: ['./hotel-card.component.scss']
})
export class HotelCardComponent {
  @Input() hotelName?: string;
  @Input() location?: string;
  @Input() price?: string| undefined;
  @Input() imageUrl?: string;
}
