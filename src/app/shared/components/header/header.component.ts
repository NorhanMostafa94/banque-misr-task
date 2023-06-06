import { Component } from '@angular/core';
import { Router } from '@angular/router';

// Models
import { ILink } from '../../models';

// enums
import { Currency, CurrencyPage } from '../../enums';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  links: ILink[] = [
    {
      id: CurrencyPage.EURO_USD,
      text: 'EURO-USD Details',
      path: 'details',
    },
    {
      id: CurrencyPage.EURO_GBP,
      text: 'EURO-GBP Details',
      path: 'details',
    },
  ];

  constructor(private router: Router) {}

  trackByFn(id: any, item: ILink): any {
    return item.id;
  }

  /**
   * @description `navigateToDetails()` to navigate to currency details
   */
  navigateToDetails(link: ILink): void {
    switch (link.id) {
      case CurrencyPage.EURO_USD:
        this.router.navigate(['details'], {
          queryParams: { amount: 1, from: Currency.EUR, to: Currency.USD, currency: 'EURO' },
        });
        break;

      case CurrencyPage.EURO_GBP:
        this.router.navigate(['details'], {
          queryParams: { amount: 1, from: Currency.EUR, to: Currency.GBP, currency: 'EURO' },
        });
        break;

      default:
        break;
    }
  }
}
