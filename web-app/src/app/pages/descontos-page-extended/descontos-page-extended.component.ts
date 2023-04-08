import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-descontos-page-extended',
  templateUrl: './descontos-page-extended.component.html',
  styleUrls: ['./descontos-page-extended.component.scss']
})
export class DescontosPageExtendedComponent {
  @Input() hotelName?: string;
  @Input() location?: string;
  @Input() price: number = 0;
  @Input() imageUrl?: string;
}
