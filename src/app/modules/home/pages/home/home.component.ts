import { Component, OnInit } from '@angular/core';

// interface
import { ApiResponse } from 'src/app/core/interfaces';

// services
import { ConverterService } from 'src/app/shared/services/converter.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  currencies: any[] = [];
  amount: number = 0;

  constructor(private convertService: ConverterService) {}

  ngOnInit(): void {
    this.getCurrencies();
  }

  /**
   * @description `getCurrencies() to get currencies list`
   */
  getCurrencies(): void {
    this.convertService.getCurrencies().subscribe((res: ApiResponse) => {
      this.currencies = Object.entries(res.rates);
    });
  }

  /**
   * @description `getAmount()` to get the amount from converted component
   * @param amount {number}
   */
  getAmount(amount: number) {
    this.amount = amount;
  }
}
