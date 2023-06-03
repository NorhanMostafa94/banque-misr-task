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
      text: 'EURO-USD Details',
      path: '/euro-usd-details',
    },
    {
      text: 'EURO-GBP Details',
      path: '/euro-gbp-details',
    },
  ];
}
