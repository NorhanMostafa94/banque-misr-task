import { Component } from '@angular/core';
import { ILink } from '../../models';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  links: ILink[] = [
    {
      id: 'euro-usd',
      text: 'EURO-USD Details',
      path: '/euro-usd-details',
    },
    {
      id: 'euro-gbp',
      text: 'EURO-GBP Details',
      path: '/euro-gbp-details',
    },
  ];

  constructor() {}

  trackByFn(id: any, item: ILink): any {
    return item.id;
  }
}
