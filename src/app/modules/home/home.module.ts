import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';

// Components
import { HomeComponent } from './pages/home/home.component';
import { PopularCurrencyCardComponent } from './components';

// Modules
import { SharedModule } from 'src/app/shared/shared.module';

const COMPONENTS = [PopularCurrencyCardComponent];

@NgModule({
  declarations: [HomeComponent, ...COMPONENTS],
  imports: [CommonModule, HomeRoutingModule, SharedModule],
})
export class HomeModule {}
