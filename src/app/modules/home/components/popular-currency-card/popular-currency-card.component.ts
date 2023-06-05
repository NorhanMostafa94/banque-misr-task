import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-popular-currency-card',
  templateUrl: './popular-currency-card.component.html',
  styleUrls: ['./popular-currency-card.component.scss'],
})
export class PopularCurrencyCardComponent {
  @Input() amount: number = 0;
  @Input() currency?: string;
  @Input() value: number = 0;
}
