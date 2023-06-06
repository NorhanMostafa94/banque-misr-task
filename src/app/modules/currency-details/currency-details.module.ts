import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CurrencyDetailsRoutingModule } from './currency-details-routing.module';

// components
import { CurrencyDetailsComponent } from './pages';

// modules
import { SharedModule } from 'src/app/shared/shared.module';

const COMPONENTS = [CurrencyDetailsComponent];

@NgModule({
  declarations: [CurrencyDetailsComponent],
  imports: [CommonModule, CurrencyDetailsRoutingModule, SharedModule],
})
export class CurrencyDetailsModule {}
