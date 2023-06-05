import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// COMPONENTS
import { HeaderComponent, ConverterFormComponent } from './components';

// PIPES
import { FilterListPipe } from './pipes/filter-list.pipe';

const COMPONENTS = [HeaderComponent, ConverterFormComponent];
const PIPES = [FilterListPipe];
@NgModule({
  declarations: [...COMPONENTS, ...PIPES],
  imports: [CommonModule, RouterModule, FormsModule, ReactiveFormsModule],
  exports: [...COMPONENTS, ...PIPES],
})
export class SharedModule {}
