import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';

// services
import { ConverterService } from 'src/app/shared/services/converter.service';

@Component({
  selector: 'app-currency-details',
  templateUrl: './currency-details.component.html',
  styleUrls: ['./currency-details.component.scss'],
})
export class CurrencyDetailsComponent implements OnInit {
  from: string = 'EUR';
  to: string = 'USD';
  amount: number = 1;
  currency: string = 'EUR';

  constructor(
    private activatedRoute: ActivatedRoute,
    private convertService: ConverterService
  ) {}

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
