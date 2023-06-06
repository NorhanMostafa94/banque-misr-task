import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';

// enums
import { Currency } from 'src/app/shared/enums';

@Component({
  selector: 'app-currency-details',
  templateUrl: './currency-details.component.html',
  styleUrls: ['./currency-details.component.scss'],
})
export class CurrencyDetailsComponent implements OnInit {
  from: string = Currency.EUR;
  to: string = Currency.USD;
  amount: number = 1;
  currency: string = 'EURO';

  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.getQueryParams();
  }

  getQueryParams(): void {
    this.activatedRoute.queryParamMap.subscribe((params: ParamMap) => {
      this.from = params.get('from') || 'EUR';
      this.to = params.get('to') || 'USD';
      this.amount = +params.get('amount')! ?? 1;
    });
  }
}
